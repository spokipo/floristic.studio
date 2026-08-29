import { z } from 'zod';
import { a as sendTelegramNotification } from '../../chunks/telegram_B2QbDNRY.mjs';
export { renderers } from '../../renderers.mjs';

const OrderItemSchema = z.object({
  id: z.string(),
  bouquetId: z.string(),
  title: z.string(),
  size: z.enum(["S", "M", "L"]),
  sizeLabel: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  image: z.string().url().or(z.string())
});
const OrderSchema = z.object({
  // Customer info
  customerName: z.string().min(2, "Вкажіть ваше ім'я"),
  customerPhone: z.string().min(10, "Вкажіть коректний номер телефону"),
  customerEmail: z.string().email("Некоректний email").optional().or(z.literal("")),
  // Recipient info
  isRecipientSelf: z.boolean().default(true),
  recipientName: z.string().optional().or(z.literal("")),
  recipientPhone: z.string().optional().or(z.literal("")),
  // Delivery details
  deliveryType: z.enum(["courier_odesa", "pickup"]),
  district: z.string().optional().or(z.literal("")),
  deliveryAddress: z.string().optional().or(z.literal("")),
  deliveryApartment: z.string().optional().or(z.literal("")),
  deliveryFloor: z.string().optional().or(z.literal("")),
  deliveryComment: z.string().optional().or(z.literal("")),
  // Schedule
  deliveryDate: z.string().min(1, "Оберіть дату доставки"),
  timeSlot: z.string().min(1, "Оберіть часовий проміжок"),
  exactTime: z.string().optional().or(z.literal("")),
  // Postcard
  includePostcard: z.boolean().default(true),
  postcardText: z.string().max(500, "Максимум 500 символів").optional().or(z.literal("")),
  // Options
  isAnonymous: z.boolean().default(false),
  sendPhotoBeforeDelivery: z.boolean().default(true),
  addVase: z.boolean().default(false),
  addChrysal: z.boolean().default(true),
  // Payment
  paymentMethod: z.enum(["card_online", "apple_google_pay", "cash_courier", "iban_invoice"]),
  // Items and totals
  items: z.array(OrderItemSchema).min(1, "Кошик не може бути порожнім"),
  totalAmount: z.number().positive(),
  deliveryCost: z.number().default(0)
});

function formatOrderForGoogleSheets(orderId, order) {
  const itemsSummary = order.items.map((item) => `${item.title} (${item.size}) x${item.quantity} [${item.price * item.quantity} ₴]`).join("; ");
  return [
    orderId,
    (/* @__PURE__ */ new Date()).toISOString(),
    order.customerName,
    order.customerPhone,
    order.customerEmail || "",
    order.isRecipientSelf ? "Так" : "Ні",
    order.recipientName || order.customerName,
    order.recipientPhone || order.customerPhone,
    order.deliveryType === "pickup" ? "Самовивіз (вул. Грецька, 25)" : `Одеса, ${order.district || ""}, ${order.deliveryAddress || ""} кв.${order.deliveryApartment || ""}`,
    order.deliveryDate,
    order.timeSlot + (order.exactTime ? ` (${order.exactTime})` : ""),
    order.postcardText || "(без листівки)",
    order.isAnonymous ? "Так" : "Ні",
    order.sendPhotoBeforeDelivery ? "Так" : "Ні",
    order.paymentMethod,
    order.totalAmount,
    itemsSummary,
    "Нове"
  ];
}
function formatOrderForSupabase(orderId, order) {
  return {
    id: orderId,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    customer_name: order.customerName,
    customer_phone: order.customerPhone,
    customer_email: order.customerEmail,
    is_recipient_self: order.isRecipientSelf,
    recipient_name: order.recipientName,
    recipient_phone: order.recipientPhone,
    delivery_type: order.deliveryType,
    delivery_district: order.district,
    delivery_address: order.deliveryAddress,
    delivery_apartment: order.deliveryApartment,
    delivery_floor: order.deliveryFloor,
    delivery_comment: order.deliveryComment,
    delivery_date: order.deliveryDate,
    time_slot: order.timeSlot,
    exact_time: order.exactTime,
    postcard_text: order.postcardText,
    is_anonymous: order.isAnonymous,
    send_photo_before_delivery: order.sendPhotoBeforeDelivery,
    add_vase: order.addVase,
    add_chrysal: order.addChrysal,
    payment_method: order.paymentMethod,
    payment_status: "pending",
    total_amount: order.totalAmount,
    delivery_cost: order.deliveryCost,
    status: "new",
    items_json: JSON.stringify(order.items)
  };
}

const prerender = false;
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Content-Type must be application/json"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await request.json();
    const validationResult = OrderSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMap = validationResult.error.flatten().fieldErrors;
      console.warn("Order validation failed:", errorMap);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Будь ласка, перевірте правильність заповнення форми",
          errors: errorMap
        }),
        { status: 422, headers: { "Content-Type": "application/json" } }
      );
    }
    const orderData = validationResult.data;
    const orderId = `FS-${Math.floor(1e3 + Math.random() * 9e3)}`;
    const sheetsRow = formatOrderForGoogleSheets(orderId, orderData);
    const supabaseRecord = formatOrderForSupabase(orderId, orderData);
    const tgResult = await sendTelegramNotification(orderId, orderData);
    if (!tgResult.sent) {
      console.warn("Telegram notification could not be dispatched:", tgResult.error);
    }
    return new Response(
      JSON.stringify({
        success: true,
        orderId,
        message: "Замовлення успішно прийнято в обробку",
        telegramSent: tgResult.sent
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("API /api/order error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Внутрішня помилка сервера при обробці замовлення"
      }),
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
