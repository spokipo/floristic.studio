import type { APIRoute } from 'astro';
import { OrderSchema } from '../../types/order';
import { sendTelegramNotification } from '../../utils/telegram';
import { formatOrderForGoogleSheets, formatOrderForSupabase } from '../../types/database';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Content-Type must be application/json',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();

    // Validate payload against schema
    const validationResult = OrderSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMap = validationResult.error.flatten().fieldErrors;
      console.warn('Order validation failed:', errorMap);

      return new Response(
        JSON.stringify({
          success: false,
          message: 'Будь ласка, перевірте правильність заповнення форми',
          errors: errorMap,
        }),
        { status: 422, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const orderData = validationResult.data;
    const orderId = `FS-${Math.floor(1000 + Math.random() * 9000)}`;

    // Optional: Prepare data for Google Sheets / Supabase
    const sheetsRow = formatOrderForGoogleSheets(orderId, orderData);
    const supabaseRecord = formatOrderForSupabase(orderId, orderData);

    // Send Telegram Notification
    const tgResult = await sendTelegramNotification(orderId, orderData);

    if (!tgResult.sent) {
      console.warn('Telegram notification could not be dispatched:', tgResult.error);
    }

    return new Response(
      JSON.stringify({
        success: true,
        orderId,
        message: 'Замовлення успішно прийнято в обробку',
        telegramSent: tgResult.sent,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('API /api/order error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || 'Внутрішня помилка сервера при обробці замовлення',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

