import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { $cartItems, $cartTotal, clearCart, showToast } from '../stores/cartStore';
import type { OrderPayload } from '../types/order';

export const CheckoutForm: React.FC = () => {
  const items = useStore($cartItems);
  const total = useStore($cartTotal);

  const [deliveryType, setDeliveryType] = useState<'courier_odesa' | 'pickup'>('courier_odesa');
  const [address, setAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('+380');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderResult, setOrderResult] = useState<{ orderId: string; total: number } | null>(null);

  const deliveryFee = deliveryType === 'pickup' ? 0 : total >= 2500 ? 0 : 150;
  const grandTotal = total + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    setIsSubmitting(true);

    const payload: OrderPayload = {
      customerName,
      customerPhone,
      customerEmail: '',
      isRecipientSelf: true,
      recipientName: customerName,
      recipientPhone: customerPhone,
      deliveryType,
      district: 'Одеса',
      deliveryAddress: address,
      deliveryApartment: '',
      deliveryFloor: '',
      deliveryComment: '',
      deliveryDate: new Date().toISOString().split('T')[0],
      timeSlot: 'Протягом дня',
      exactTime: '',
      includePostcard: false,
      postcardText: '',
      isAnonymous: false,
      sendPhotoBeforeDelivery: false,
      addVase: false,
      addChrysal: true,
      paymentMethod: 'card_online',
      items: items.map((item) => ({
        id: item.id,
        bouquetId: item.bouquetId,
        title: item.title,
        size: item.size,
        sizeLabel: item.sizeLabel,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totalAmount: grandTotal,
      deliveryCost: deliveryFee,
    };

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setOrderResult({ orderId: data.orderId, total: grandTotal });
        clearCart();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess && orderResult) {
    return (
      <div className="max-w-2xl mx-auto py-24 px-6 text-center">
        <h2 className="font-normal text-3xl sm:text-4xl text-[#1A1A1A] font-normal mb-4">
          Замовлення прийнято
        </h2>
        <p className="text-sm font-light text-[#1A1A1A]/70 mb-12">
          Номер замовлення: #{orderResult.orderId}
        </p>
        <a
          href="/catalog"
          className="inline-block px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black"
        >
          Повернутися до каталогу
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Form Fields */}
        <div className="lg:col-span-7 space-y-12">
          
          <div>
            <h3 className="font-normal text-2xl text-[#1A1A1A] mb-8">Контакти</h3>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Ім'я та прізвище"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Телефон (+380)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-normal text-2xl text-[#1A1A1A] mb-8">Доставка</h3>
            
            <div className="flex gap-8 mb-8 text-xs uppercase tracking-widest font-medium">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryType === 'courier_odesa'}
                  onChange={() => setDeliveryType('courier_odesa')}
                  className="accent-[#1A1A1A]"
                />
                <span className={deliveryType === 'courier_odesa' ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40'}>Кур'єром</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryType === 'pickup'}
                  onChange={() => setDeliveryType('pickup')}
                  className="accent-[#1A1A1A]"
                />
                <span className={deliveryType === 'pickup' ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40'}>Самовивіз</span>
              </label>
            </div>

            {deliveryType === 'courier_odesa' && (
              <input
                type="text"
                required
                placeholder="Адреса (вулиця, будинок, квартира)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
              />
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-5">
          <div className="bg-[#FAF7F2] p-8 sm:p-10 sticky top-32">
            <h3 className="font-normal text-2xl text-[#1A1A1A] mb-8">Ваше замовлення</h3>
            
            <div className="space-y-6 mb-8 border-b border-[#1A1A1A]/10 pb-8">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-[#1A1A1A]/70 font-light">
                    {item.title} (x{item.quantity})
                  </span>
                  <span className="text-[#1A1A1A]">
                    {(item.price * item.quantity).toLocaleString('uk-UA')} ₴
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8 text-sm">
              <div className="flex justify-between text-[#1A1A1A]/70 font-light">
                <span>Доставка:</span>
                <span>{deliveryFee === 0 ? 'Безкоштовно' : `${deliveryFee} ₴`}</span>
              </div>
              <div className="flex justify-between font-normal text-xl text-[#1A1A1A] pt-4 border-t border-[#1A1A1A]/10">
                <span>Разом:</span>
                <span>{grandTotal.toLocaleString('uk-UA')} ₴</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black disabled:opacity-50"
            >
              {isSubmitting ? 'Обробка...' : 'Підтвердити'}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};
