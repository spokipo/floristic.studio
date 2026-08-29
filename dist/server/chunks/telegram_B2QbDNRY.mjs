async function sendTelegramNotification(orderId, order) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || undefined                                  ;
  const chatId = process.env.TELEGRAM_CHAT_ID || undefined                                ;
  let deliveryDetails = "";
  if (order.deliveryType === "pickup") {
    deliveryDetails = "🏪 <b>Самовивіз з майстерні</b>: м. Одеса, вул. Грецька, 25 (Floral Studio)";
  } else {
    deliveryDetails = `🚗 <b>Доставка кур'єром по Одесі</b>:
   • <b>Район</b>: ${order.district || "Центр / Приморський"}
   • <b>Адреса</b>: ${order.deliveryAddress || "Не вказана"}` + (order.deliveryApartment ? `, кв./офіс ${order.deliveryApartment}` : "") + (order.deliveryFloor ? `, поверх ${order.deliveryFloor}` : "") + (order.deliveryComment ? `
   • <b>Коментар для кур'єра</b>: <i>${escapeHtml(order.deliveryComment)}</i>` : "");
  }
  let recipientDetails = "";
  if (order.isRecipientSelf) {
    recipientDetails = `👤 <b>Замовник є отримувачем</b>`;
  } else {
    recipientDetails = `🎁 <b>Отримувач (подарунок)</b>: ${escapeHtml(order.recipientName || "Не вказано")} (${order.recipientPhone || "Без тел."})`;
  }
  const itemsList = order.items.map((item, idx) => {
    const lineTotal = item.price * item.quantity;
    return `${idx + 1}. 🌸 <b>${escapeHtml(item.title)}</b>
   • Розмір: <code>${item.size}</code> (${item.sizeLabel})
   • Кількість: ${item.quantity} шт. × ${item.price.toLocaleString("uk-UA")} ₴ = <b>${lineTotal.toLocaleString("uk-UA")} ₴</b>`;
  }).join("\n\n");
  let postcardSection = "💌 <b>Фірмова листівка</b>: <i>Не потрібна</i>";
  if (order.includePostcard && order.postcardText && order.postcardText.trim().length > 0) {
    postcardSection = `💌 <b>Фірмова листівка (текст від замовника)</b>:
<blockquote>«${escapeHtml(order.postcardText.trim())}»</blockquote>`;
  } else if (order.includePostcard) {
    postcardSection = `💌 <b>Фірмова листівка</b>: <i>Додати чисту фірмову листівку зі штампом Floral Studio</i>`;
  }
  const paymentLabels = {
    card_online: "💳 Онлайн банківською карткою (Mono / LiqPay)",
    apple_google_pay: "🍎 Apple Pay / Google Pay",
    cash_courier: "💵 Готівкою або терміналом кур'єру при отриманні",
    iban_invoice: "🏦 Оплата за реквізитами IBAN (рахунок-фактура)"
  };
  const paymentLabel = paymentLabels[order.paymentMethod] || order.paymentMethod;
  const optionsList = [
    order.isAnonymous ? "🕵️ <b>Анонімне вручення</b>: Так (не називати імʼя замовника)" : "👤 Звичайне вручення",
    order.sendPhotoBeforeDelivery ? "📸 <b>Фотозвіт перед виїздом</b>: Так (надіслати фото в месенджер)" : "📸 Фотозвіт: Не потрібен",
    order.addVase ? "🏺 <b>Додати скляну вазу</b>: Так (+450 ₴)" : null,
    order.addChrysal ? "💧 <b>Пакетик підживлення Chrysal</b>: Так (безкоштовно)" : null
  ].filter(Boolean).join("\n• ");
  const htmlMessage = `
🌸 <b>НОВЕ ЗАМОВЛЕННЯ [ #${orderId} ]</b>
<i>Floral Studio — Одеська майстерня квітів</i>
━━━━━━━━━━━━━━━━━━━━

💐 <b>СКЛАД ЗАМОВЛЕННЯ:</b>
${itemsList}

━━━━━━━━━━━━━━━━━━━━
💰 <b>РАЗОМ ДО СПЛАТИ:</b> <code>${order.totalAmount.toLocaleString("uk-UA")} ₴</code>
${order.deliveryCost > 0 ? `(Доставка: ${order.deliveryCost} ₴)` : "<i>(Безкоштовна доставка)</i>"}

👤 <b>ЗАМОВНИК:</b>
• Ім'я: <b>${escapeHtml(order.customerName)}</b>
• Телефон: <code>${order.customerPhone}</code>
${order.customerEmail ? `• Email: ${escapeHtml(order.customerEmail)}` : ""}
• ${recipientDetails}

📍 <b>ДОСТАВКА ТА ЧАС:</b>
• Дата доставки: <b>${order.deliveryDate}</b>
• Часовий інтервал: <b>${order.timeSlot}${order.exactTime ? ` (Точний час: ${order.exactTime})` : ""}</b>
${deliveryDetails}

${postcardSection}

⚙️ <b>ДЕТАЛІ ТА ОПЛАTA:</b>
• Спосіб оплати: ${paymentLabel}
• ${optionsList}

📅 <i>Створено: ${(/* @__PURE__ */ new Date()).toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}</i>
`.trim();
  if (!botToken || !chatId || botToken === "YOUR_TELEGRAM_BOT_TOKEN") {
    console.log("\n========================================");
    console.log("📬 [TELEGRAM BOT NOTIFICATION (MOCK/DEV MODE)]");
    console.log("Order ID:", orderId);
    console.log(htmlMessage.replace(/<[^>]*>/g, ""));
    console.log("========================================\n");
    return { sent: true, fallback: true };
  }
  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: "HTML",
        disable_web_page_preview: true
      })
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      console.error("Telegram API error:", data);
      return { sent: false, error: data.description || "Unknown Telegram API error" };
    }
    return { sent: true, messageId: data.result?.message_id };
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
    return { sent: false, error: error.message || "Network error" };
  }
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
async function sendBookingNotification(bookingId, booking) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || undefined                                  ;
  const chatId = process.env.TELEGRAM_CHAT_ID || undefined                                ;
  const shootLabels = {
    flowers: "🌸 З квітами (від 2 500 ₴/год)",
    no_flowers: "📷 Без квітів (від 1 200 ₴/год)",
    content: "💐 Контент-зйомка (від 800 ₴/30 хв)"
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
${booking.comment ? `• Коментар: <i>${escapeHtml(booking.comment)}</i>` : ""}

📅 <i>Створено: ${(/* @__PURE__ */ new Date()).toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}</i>
`.trim();
  if (!botToken || !chatId || botToken === "YOUR_TELEGRAM_BOT_TOKEN") {
    console.log("\n========================================");
    console.log("📬 [TELEGRAM BOOKING NOTIFICATION (MOCK)]");
    console.log("Booking ID:", bookingId);
    console.log(htmlMessage.replace(/<[^>]*>/g, ""));
    console.log("========================================\n");
    return { sent: true };
  }
  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: "HTML",
        disable_web_page_preview: true
      })
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      return { sent: false, error: data.description || "Unknown Telegram API error" };
    }
    return { sent: true };
  } catch (error) {
    return { sent: false, error: error.message || "Network error" };
  }
}

export { sendTelegramNotification as a, sendBookingNotification as s };
