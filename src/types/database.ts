import type { OrderPayload } from './order';

/**
 * Database schema definitions for easy connection to Supabase / PostgreSQL or Google Sheets
 */

export interface DbOrderRecord {
  id: string; // Order UUID or FS-XXXX
  created_at: string;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  is_recipient_self: boolean;
  recipient_name?: string;
  recipient_phone?: string;
  delivery_type: 'courier_odesa' | 'pickup';
  delivery_district?: string;
  delivery_address?: string;
  delivery_apartment?: string;
  delivery_floor?: string;
  delivery_comment?: string;
  delivery_date: string;
  time_slot: string;
  exact_time?: string;
  postcard_text?: string;
  is_anonymous: boolean;
  send_photo_before_delivery: boolean;
  add_vase: boolean;
  add_chrysal: boolean;
  payment_method: string;
  payment_status: 'pending' | 'paid' | 'failed' | 'cancelled';
  total_amount: number;
  delivery_cost: number;
  status: 'new' | 'confirmed' | 'assembling' | 'in_delivery' | 'delivered' | 'cancelled';
  items_json: string; // Serialized JSON of order items
}

export interface DbBouquetRecord {
  id: string;
  slug: string;
  title: string;
  category: string;
  price_s: number;
  price_m: number;
  price_l: number;
  short_description: string;
  description: string;
  composition: string[];
  in_stock: boolean;
  pre_order_days: number;
  image_url: string;
  gallery_urls: string[];
  color_tone: string;
  is_bestseller: boolean;
  is_featured: boolean;
  created_at: string;
}

/**
 * Convert OrderPayload to a flat row array suitable for Google Sheets appending via Google Apps Script or Sheets API
 */
export function formatOrderForGoogleSheets(orderId: string, order: OrderPayload): (string | number | boolean)[] {
  const itemsSummary = order.items
    .map((item) => `${item.title} (${item.size}) x${item.quantity} [${item.price * item.quantity} ₴]`)
    .join('; ');

  return [
    orderId,
    new Date().toISOString(),
    order.customerName,
    order.customerPhone,
    order.customerEmail || '',
    order.isRecipientSelf ? 'Так' : 'Ні',
    order.recipientName || order.customerName,
    order.recipientPhone || order.customerPhone,
    order.deliveryType === 'pickup' ? 'Самовивіз (вул. Грецька, 25)' : `Одеса, ${order.district || ''}, ${order.deliveryAddress || ''} кв.${order.deliveryApartment || ''}`,
    order.deliveryDate,
    order.timeSlot + (order.exactTime ? ` (${order.exactTime})` : ''),
    order.postcardText || '(без листівки)',
    order.isAnonymous ? 'Так' : 'Ні',
    order.sendPhotoBeforeDelivery ? 'Так' : 'Ні',
    order.paymentMethod,
    order.totalAmount,
    itemsSummary,
    'Нове',
  ];
}

/**
 * Convert OrderPayload to a Supabase DB record
 */
export function formatOrderForSupabase(orderId: string, order: OrderPayload): DbOrderRecord {
  return {
    id: orderId,
    created_at: new Date().toISOString(),
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
    payment_status: 'pending',
    total_amount: order.totalAmount,
    delivery_cost: order.deliveryCost,
    status: 'new',
    items_json: JSON.stringify(order.items),
  };
}

