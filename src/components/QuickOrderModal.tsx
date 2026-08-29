import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { $quickOrderBouquet, closeQuickOrder, showToast } from '../stores/cartStore';
import { motion, AnimatePresence } from 'framer-motion';

export const QuickOrderModal: React.FC = () => {
  const data = useStore($quickOrderBouquet);
  const [phone, setPhone] = useState('+380');
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (data) {
      document.documentElement.classList.add('lock-scroll');
    } else {
      document.documentElement.classList.remove('lock-scroll');
    }
    return () => {
      document.documentElement.classList.remove('lock-scroll');
    };
  }, [data]);

  if (!data) return null;
  const { bouquet, size } = data;
  const price = bouquet.sizes[size].price;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: 'Quick Order',
          customerPhone: phone,
          isRecipientSelf: true,
          recipientName: 'Quick Order',
          recipientPhone: phone,
          deliveryType: 'courier_odesa',
          district: 'Не вказано',
          deliveryAddress: 'Уточнити по телефону',
          items: [{
            id: bouquet.id,
            title: bouquet.title,
            size,
            price,
            quantity: 1,
            image: bouquet.image,
          }],
          totalAmount: price,
          deliveryCost: 0,
        }),
      });
      if (response.ok) {
        showToast('Замовлення прийнято', 'Ми зателефонуємо вам найближчим часом.', 'success');
        closeQuickOrder();
      }
    } catch (error) {
      showToast('Помилка', 'Не вдалося відправити замовлення', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickOrder}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white w-full max-w-md p-8 lg:p-12 z-10"
        >
          <button
            onClick={closeQuickOrder}
            className="absolute top-6 right-6 text-xs uppercase tracking-widest text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
          >
            Закрити
          </button>

          <h2 className="font-serif text-3xl text-[#1A1A1A] mb-8 mt-4">Швидке замовлення</h2>

          <div className="flex gap-4 mb-8 pb-8 border-b border-[#1A1A1A]/10">
            <img src={bouquet.image} alt={bouquet.title} className="w-20 h-24 object-cover" />
            <div>
              <h4 className="text-sm font-medium text-[#1A1A1A] mb-1">{bouquet.title}</h4>
              <p className="text-xs text-[#1A1A1A]/50 mb-2">Розмір: {size}</p>
              <p className="text-sm text-[#1A1A1A]">{price.toLocaleString('uk-UA')} ₴</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="tel"
                required
                placeholder="Ваш телефон (+380)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black disabled:opacity-50"
            >
              {isSubmitting ? 'Обробка...' : 'Замовити'}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
