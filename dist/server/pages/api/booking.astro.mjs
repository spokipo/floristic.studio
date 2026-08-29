import { z } from 'zod';
import { s as sendBookingNotification } from '../../chunks/telegram_B2QbDNRY.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const BookingSchema = z.object({
  name: z.string().min(2, "Вкажіть ім'я"),
  phone: z.string().min(10, "Вкажіть коректний телефон"),
  shootType: z.enum(["flowers", "no_flowers", "content"]),
  date: z.string().min(1, "Оберіть дату"),
  time: z.string().min(1, "Оберіть час"),
  comment: z.string().optional().default("")
});
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ success: false, message: "Content-Type must be application/json" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await request.json();
    const result = BookingSchema.safeParse(body);
    if (!result.success) {
      return new Response(
        JSON.stringify({ success: false, message: "Перевірте правильність заповнення форми", errors: result.error.flatten().fieldErrors }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }
    const booking = result.data;
    const bookingId = `PH-${Math.floor(1e3 + Math.random() * 9e3)}`;
    const tgResult = await sendBookingNotification(bookingId, booking);
    if (!tgResult.sent) {
      console.warn("Telegram booking notification failed:", tgResult.error);
    }
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || undefined                                         ;
    if (sheetsWebhookUrl && sheetsWebhookUrl !== "YOUR_GOOGLE_SHEETS_WEBHOOK_URL") {
      try {
        await fetch(sheetsWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId,
            ...booking,
            createdAt: (/* @__PURE__ */ new Date()).toISOString()
          })
        });
      } catch (sheetErr) {
        console.warn("Google Sheets webhook failed:", sheetErr);
      }
    }
    return new Response(
      JSON.stringify({ success: true, bookingId, message: "Бронювання успішно створено" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API /api/booking error:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message || "Внутрішня помилка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
