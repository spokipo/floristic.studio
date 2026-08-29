import { z } from 'zod';

export type DeliveryType = 'courier_odesa' | 'pickup';
export type DeliveryDistrict =
  | 'primorsky'
  | 'fontan'
  | 'arkadia'
  | 'center'
  | 'tairova'
  | 'cheremushky'
  | 'kotovskoho'
  | 'suburbs';

export type DeliveryTimeSlot =
  | '09:00 - 12:00'
  | '12:00 - 15:00'
  | '15:00 - 18:00'
  | '18:00 - 21:00'
  | 'exact_time';

export type PaymentMethod =
  | 'card_online'
  | 'apple_google_pay'
  | 'cash_courier'
  | 'iban_invoice';

export const OrderItemSchema = z.object({
  id: z.string(),
  bouquetId: z.string(),
  title: z.string(),
  size: z.enum(['S', 'M', 'L']),
  sizeLabel: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  image: z.string().url().or(z.string()),
});

export const OrderSchema = z.object({
  // Customer info
  customerName: z.string().min(2, "Вкажіть ваше ім'я"),
  customerPhone: z.string().min(10, 'Вкажіть коректний номер телефону'),
  customerEmail: z.string().email('Некоректний email').optional().or(z.literal('')),

  // Recipient info
  isRecipientSelf: z.boolean().default(true),
  recipientName: z.string().optional().or(z.literal('')),
  recipientPhone: z.string().optional().or(z.literal('')),

  // Delivery details
  deliveryType: z.enum(['courier_odesa', 'pickup']),
  district: z.string().optional().or(z.literal('')),
  deliveryAddress: z.string().optional().or(z.literal('')),
  deliveryApartment: z.string().optional().or(z.literal('')),
  deliveryFloor: z.string().optional().or(z.literal('')),
  deliveryComment: z.string().optional().or(z.literal('')),

  // Schedule
  deliveryDate: z.string().min(1, 'Оберіть дату доставки'),
  timeSlot: z.string().min(1, 'Оберіть часовий проміжок'),
  exactTime: z.string().optional().or(z.literal('')),

  // Postcard
  includePostcard: z.boolean().default(true),
  postcardText: z.string().max(500, 'Максимум 500 символів').optional().or(z.literal('')),

  // Options
  isAnonymous: z.boolean().default(false),
  sendPhotoBeforeDelivery: z.boolean().default(true),
  addVase: z.boolean().default(false),
  addChrysal: z.boolean().default(true),

  // Payment
  paymentMethod: z.enum(['card_online', 'apple_google_pay', 'cash_courier', 'iban_invoice']),

  // Items and totals
  items: z.array(OrderItemSchema).min(1, 'Кошик не може бути порожнім'),
  totalAmount: z.number().positive(),
  deliveryCost: z.number().default(0),
});

export type OrderPayload = z.infer<typeof OrderSchema>;

export interface OrderResponse {
  success: boolean;
  orderId?: string;
  message?: string;
  errors?: Record<string, string[]>;
}

