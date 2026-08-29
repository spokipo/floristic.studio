import React from 'react';
import { motion } from 'framer-motion';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'Анастасія Воропаєва',
      text: 'Замовляла букет мамі на ювілей. Це неймовірна естетика! Кожна квіточка свіжа. Окремо дякую за каліграфічно підписану листівку. Доставили точно о 10:00.',
    },
    {
      id: 2,
      author: 'Олександр Мельник',
      text: 'Оформив замовлення в 1 клік прямо з роботи для дівчини. Мені надіслали фото букета у Telegram перед виїздом курʼєра. Дівчина у захваті від композиції!',
    },
    {
      id: 3,
      author: 'Валерія Коваленко',
      text: 'Найкраща майстерня в Одесі для поціновувачів природної флористики. Жодного целофану — тільки шовкові стрічки, жива текстура та тонкий садовий аромат.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/50 mb-4">
            Відгуки
          </p>
          <h2 className="font-normal text-4xl sm:text-5xl text-[#1A1A1A] mb-4">
            Що кажуть клієнти
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
              className="text-center"
            >
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light italic mb-6">
                "{review.text}"
              </p>
              <div className="w-8 h-px bg-[#1A1A1A]/20 mx-auto mb-4"></div>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]">
                {review.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
