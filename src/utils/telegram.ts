import type { OrderPayload } from '../types/order';

/**
 * Format and send order notification to Telegram Bot
 */
export async function sendTelegramNotification(
  orderId: string,
  order: OrderPayload
): Promise<{ sent: boolean; messageId?: number; fallback?: boolean; error?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || import.meta.env.TELEGRAM_CHAT_ID;

  // Format delivery string
  let deliveryDetails = '';
  if (order.deliveryType === 'pickup') {
    deliveryDetails = '🏪 <b>Самовивіз з майстерні</b>: м. Одеса, вул. Грецька, 25 (Floral Studio)';
  } else {
    deliveryDetails = `🚗 <b>Доставка кур'єром по Одесі</b>:\n` +
      `   • <b>Район</b>: ${order.district || 'Центр / Приморський'}\n` +
      `   • <b>Адреса</b>: ${order.deliveryAddress || 'Не вказана'}` +
      (order.deliveryApartment ? `, кв./офіс ${order.deliveryApartment}` : '') +
      (order.deliveryFloor ? `, поверх ${order.deliveryFloor}` : '') +
      (order.deliveryComment ? `\n   • <b>Коментар для кур'єра</b>: <i>${escapeHtml(order.deliveryComment)}</i>` : '');
  }

  // Format recipient string
  let recipientDetails = '';
  if (order.isRecipientSelf) {
    recipientDetails = `👤 <b>Замовник є отримувачем</b>`;
  } else {
    recipientDetails = `🎁 <b>Отримувач (подарунок)</b>: ${escapeHtml(order.recipientName || 'Не вказано')} (${order.recipientPhone || 'Без тел.'})`;
  }

  // Format items list
  const itemsList = order.items
    .map((item, idx) => {
      const lineTotal = item.price * item.quantity;
      return `${idx + 1}. 🌸 <b>${escapeHtml(item.title)}</b>\n   • Розмір: <code>${item.size}</code> (${item.sizeLabel})\n   • Кількість: ${item.quantity} шт. × ${item.price.toLocaleString('uk-UA')} ₴ = <b>${lineTotal.toLocaleString('uk-UA')} ₴</b>`;
    })
    .join('\n\n');

  // Format postcard section
  let postcardSection = '💌 <b>Фірмова листівка</b>: <i>Не потрібна</i>';
  if (order.includePostcard && order.postcardText && order.postcardText.trim().length > 0) {
    postcardSection = `💌 <b>Фірмова листівка (текст від замовника)</b>:\n<blockquote>«${escapeHtml(order.postcardText.trim())}»</blockquote>`;
  } else if (order.includePostcard) {
    postcardSection = `💌 <b>Фірмова листівка</b>: <i>Додати чисту фірмову листівку зі штампом Floral Studio</i>`;
  }

  // Payment label
  const paymentLabels: Record<string, string> = {
    card_online: '💳 Онлайн банківською карткою (Mono / LiqPay)',
    apple_google_pay: '🍎 Apple Pay / Google Pay',
    cash_courier: "💵 Готівкою або терміналом кур'єру при отриманні",
    iban_invoice: '🏦 Оплата за реквізитами IBAN (рахунок-фактура)',
  };
  const paymentLabel = paymentLabels[order.paymentMethod] || order.paymentMethod;

  // Options checklist
  const optionsList = [
    order.isAnonymous ? '🕵️ <b>Анонімне вручення</b>: Так (не називати імʼя замовника)' : '👤 Звичайне вручення',
    order.sendPhotoBeforeDelivery ? '📸 <b>Фотозвіт перед виїздом</b>: Так (надіслати фото в месенджер)' : '📸 Фотозвіт: Не потрібен',
    order.addVase ? '🏺 <b>Додати скляну вазу</b>: Так (+450 ₴)' : null,
    order.addChrysal ? '💧 <b>Пакетик підживлення Chrysal</b>: Так (безкоштовно)' : null,
  ].filter(Boolean).join('\n• ');

  // Complete HTML Message for Telegram
  const htmlMessage = `
🌸 <b>НОВЕ ЗАМОВЛЕННЯ [ #${orderId} ]</b>
<i>Floral Studio — Одеська майстерня квітів</i>
━━━━━━━━━━━━━━━━━━━━

💐 <b>СКЛАД ЗАМОВЛЕННЯ:</b>
${itemsList}

━━━━━━━━━━━━━━━━━━━━
💰 <b>РАЗОМ ДО СПЛАТИ:</b> <code>${order.totalAmount.toLocaleString('uk-UA')} ₴</code>
${order.deliveryCost > 0 ? `(Доставка: ${order.deliveryCost} ₴)` : '<i>(Безкоштовна доставка)</i>'}

👤 <b>ЗАМОВНИК:</b>
• Ім'я: <b>${escapeHtml(order.customerName)}</b>
• Телефон: <code>${order.customerPhone}</code>
${order.customerEmail ? `• Email: ${escapeHtml(order.customerEmail)}` : ''}
• ${recipientDetails}

📍 <b>ДОСТАВКА ТА ЧАС:</b>
• Дата доставки: <b>${order.deliveryDate}</b>
• Часовий інтервал: <b>${order.timeSlot}${order.exactTime ? ` (Точний час: ${order.exactTime})` : ''}</b>
${deliveryDetails}

${postcardSection}

⚙️ <b>ДЕТАЛІ ТА ОПЛАTA:</b>
• Спосіб оплати: ${paymentLabel}
• ${optionsList}

📅 <i>Створено: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}</i>
`.trim();

  // If token or chatId are missing, log nicely in console and return demo success
  if (!botToken || !chatId || botToken === 'YOUR_TELEGRAM_BOT_TOKEN') {
    console.log('\n========================================');
    console.log('📬 [TELEGRAM BOT NOTIFICATION (MOCK/DEV MODE)]');
    console.log('Order ID:', orderId);
    console.log(htmlMessage.replace(/<[^>]*>/g, ''));
    console.log('========================================\n');
    return { sent: true, fallback: true };
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error('Telegram API error:', data);
      return { sent: false, error: data.description || 'Unknown Telegram API error' };
    }

    return { sent: true, messageId: data.result?.message_id };
  } catch (error: any) {
    console.error('Failed to send Telegram message:', error);
    return { sent: false, error: error.message || 'Network error' };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Send booking notification for photo studio to Telegram
 */
export async function sendBookingNotification(
  bookingId: string,
  booking: { name: string; phone: string; shootType: string; date: string; time: string; comment?: string }
): Promise<{ sent: boolean; error?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || import.meta.env.TELEGRAM_CHAT_ID;

  const shootLabels: Record<string, string> = {
    flowers: '🌸 З квітами (від 2 500 ₴/год)',
    no_flowers: '📷 Без квітів (від 1 200 ₴/год)',
    content: '💐 Контент-зйомка (від 800 ₴/30 хв)',
  };

  const htmlMessage = `
📸 <b>НОВЕ БРОНЮВАННЯ ПРОСТОРУ [ #${bookingId} ]</b>
<i>Floral Studio — Фотостудія</i>
━━━━━━━━━━━━━━━━━━━━

👤 <b>Клієнт:</b>
• Ім'я: <b>${escapeHtml(booking.name)}</b>
• Телефон: <code>${booking.phone}</code>

🎯 <b>Деталі зйомки:</b>
• Тип: ${shootLabels[booking.shootType] || booking.shootType}
• Дата: <b>${booking.date}</b>
• Час початку: <b>${booking.time}</b>
${booking.comment ? `• Коментар: <i>${escapeHtml(booking.comment)}</i>` : ''}

📅 <i>Створено: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}</i>
`.trim();

  if (!botToken || !chatId || botToken === 'YOUR_TELEGRAM_BOT_TOKEN') {
    console.log('\n========================================');
    console.log('📬 [TELEGRAM BOOKING NOTIFICATION (MOCK)]');
    console.log('Booking ID:', bookingId);
    console.log(htmlMessage.replace(/<[^>]*>/g, ''));
    console.log('========================================\n');
    return { sent: true };
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.ok) {
      return { sent: false, error: data.description || 'Unknown Telegram API error' };
    }
    return { sent: true };
  } catch (error: any) {
    return { sent: false, error: error.message || 'Network error' };
  }
}
