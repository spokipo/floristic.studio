import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Flower2, Package, ArrowRight } from 'lucide-react';
import { CustomSelect } from './ui/CustomSelect';

type ShootType = 'flowers' | 'no_flowers' | 'content';

const shootOptions: { value: ShootType; label: string; price: string; icon: React.ReactNode }[] = [
  { value: 'flowers', label: 'З квітами', price: 'від 2 500 ₴ / год', icon: <Flower2 strokeWidth={1} className="w-5 h-5" /> },
  { value: 'no_flowers', label: 'Без квітів', price: 'від 1 200 ₴ / год', icon: <Camera strokeWidth={1} className="w-5 h-5" /> },
  { value: 'content', label: 'Контент-зйомка', price: 'від 800 ₴ / 30 хв', icon: <Package strokeWidth={1} className="w-5 h-5" /> },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

export const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+380');
  const [shootType, setShootType] = useState<ShootType>('flowers');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          shootType,
          date,
          time,
          comment,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setBookingId(data.bookingId);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto py-16 text-center"
      >
        <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal mb-4">
          Запис підтверджено
        </h3>
        <p className="text-sm font-light text-[#1A1A1A]/70 mb-2">
          Номер бронювання: #{bookingId}
        </p>
        <p className="text-sm font-light text-[#1A1A1A]/70 mb-10">
          Ми зв'яжемося з вами протягом 30 хвилин для підтвердження деталей.
        </p>
        <a
          href="/"
          className="inline-block px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black"
        >
          На головну
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-8">Контакти</h3>
            <div className="space-y-6">
              <input
                type="text"
                required
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
              />
              <input
                type="tel"
                required
                placeholder="Телефон (+380)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
              />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-8">Тип зйомки</h3>
            <div className="space-y-4">
              {shootOptions.map((opt) => {
                const isSelected = shootType === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-4 py-4 px-5 cursor-pointer transition-all border ${
                      isSelected
                        ? 'border-[#1A1A1A] bg-white'
                        : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="shootType"
                      value={opt.value}
                      checked={isSelected}
                      onChange={() => setShootType(opt.value)}
                      className="accent-[#1A1A1A] sr-only"
                    />
                    <span className="text-[#1A1A1A]/60">{opt.icon}</span>
                    <div className="flex-1">
                      <span className={`text-sm ${isSelected ? 'text-[#1A1A1A] font-medium' : 'text-[#1A1A1A]/70'}`}>
                        {opt.label}
                      </span>
                      <span className="block text-xs text-[#1A1A1A]/40 mt-0.5">{opt.price}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-[#1A1A1A]' : 'border-[#1A1A1A]/20'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-8">Дата та час</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-2 block">Дата</label>
                <input
                  type="date"
                  required
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-2 block">Час початку</label>
                <CustomSelect
                  value={time}
                  onChange={(val) => setTime(val)}
                  options={timeSlots.map(slot => ({ value: slot, label: slot }))}
                  buttonClassName="text-sm py-3"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-8">Коментар</h3>
            <textarea
              placeholder="Побажання, кількість людей, тематика…"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Обробка...' : (
              <>
                <span>Записатися</span>
                <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

