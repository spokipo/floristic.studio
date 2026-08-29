import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Flower2, Package, ArrowRight, Check } from 'lucide-react';
import { $isBookingModalOpen, $bookingShootType, closeBookingModal } from '../stores/cartStore';
import { CustomSelect } from './ui/CustomSelect';

type ShootType = 'flowers' | 'no_flowers' | 'content';

const shootOptions: { value: ShootType; label: string; price: string; icon: React.ReactNode }[] = [
  { value: 'flowers', label: 'З квітами', price: 'від 2 500 ₴ / год', icon: <Flower2 strokeWidth={1.25} className="w-4 h-4" /> },
  { value: 'no_flowers', label: 'Без квітів', price: 'від 1 200 ₴ / год', icon: <Camera strokeWidth={1.25} className="w-4 h-4" /> },
  { value: 'content', label: 'Контент', price: 'від 800 ₴ / 30 хв', icon: <Package strokeWidth={1.25} className="w-4 h-4" /> },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

export const BookingModal: React.FC = () => {
  const isOpen = useStore($isBookingModalOpen);
  const initialShootType = useStore($bookingShootType);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+380');
  const [shootType, setShootType] = useState<ShootType>(initialShootType || 'flowers');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Sync shootType with store when opened
  useEffect(() => {
    if (isOpen && initialShootType) {
      setShootType(initialShootType);
      setIsSuccess(false);
    }
  }, [isOpen, initialShootType]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || phone.length < 10 || !date || !time) return;

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
      console.error('Booking error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    closeBookingModal();
    setTimeout(() => {
      setIsSuccess(false);
      setName('');
      setPhone('+380');
      setComment('');
      setDate('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start sm:items-center justify-center p-0 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-[#FAF7F2] w-full max-w-xl p-6 sm:p-10 shadow-2xl border border-[#1A1A1A]/10 z-10 min-h-screen sm:min-h-0 flex flex-col justify-center sm:block"
          >
            {/* Close Button (Fixed on mobile, absolute on desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetAndClose();
              }}
              className="fixed sm:absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 sm:p-2 bg-[#FAF7F2]/90 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none rounded-full sm:rounded-none shadow-md sm:shadow-none text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-all"
              aria-label="Закрити"
            >
              <X strokeWidth={1.5} className="w-6 h-6 sm:w-6 sm:h-6" />
            </button>

            {isSuccess ? (
              <div className="py-8 sm:py-12 text-center space-y-6">
                <div className="w-12 h-12 rounded-full border border-[#1A1A1A] flex items-center justify-center mx-auto text-[#1A1A1A]">
                  <Check strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal">
                  Запис прийнято
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#1A1A1A]/60">
                  Номер бронювання: #{bookingId}
                </p>
                <p className="text-sm font-light text-[#1A1A1A]/70 max-w-sm mx-auto leading-relaxed">
                  Ми зв'яжемося з вами в Telegram або за телефоном протягом 30 хвилин для уточнення деталей зйомки.
                </p>
                <button
                  onClick={resetAndClose}
                  className="mt-6 px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black"
                >
                  Зрозуміло
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 block mb-2">
                    Floral Studio • Photo Space
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal">
                    Запис у простір
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Shoot Type Selector */}
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-3 block">
                      Формат фотосесії
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {shootOptions.map((opt) => {
                        const isSelected = shootType === opt.value;
                        return (
                          <button
                            type="button"
                            key={opt.value}
                            onClick={() => setShootType(opt.value)}
                            className={`p-3 text-left transition-all border flex flex-col justify-between ${
                              isSelected
                                ? 'border-[#1A1A1A] bg-white text-[#1A1A1A]'
                                : 'border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A]/60 hover:border-[#1A1A1A]/30'
                            }`}
                          >
                            <span className="mb-2 block text-[#1A1A1A]">{opt.icon}</span>
                            <div>
                              <div className="text-xs font-medium leading-tight">{opt.label}</div>
                              <div className="text-[10px] text-[#1A1A1A]/50 mt-1">{opt.price}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contacts Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block">
                        Ім'я
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ваше ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+380"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block">
                        Дата
                      </label>
                      <input
                        type="date"
                        required
                        min={minDate}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block">
                        Час початку
                      </label>
                      <CustomSelect
                        value={time}
                        onChange={(val) => setTime(val)}
                        options={timeSlots.map(slot => ({ value: slot, label: slot }))}
                        buttonClassName="text-sm"
                      />
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block">
                      Коментар чи побажання
                    </label>
                    <textarea
                      placeholder="Кількість людей, тематика або особливі побажання..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={2}
                      className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A] resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      'Обробка...'
                    ) : (
                      <>
                        <span>Підтвердити запис</span>
                        <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

