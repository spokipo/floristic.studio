import React from 'react';

export const FloristConsultation: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-[#1A1A1A]/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        <p className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/50 mb-4">
          Індивідуальне замовлення
        </p>
        <h2 className="font-normal text-4xl sm:text-5xl text-[#1A1A1A] mb-4">
          Особливий запит
        </h2>

        <p className="text-sm font-light text-[#1A1A1A]/70 leading-relaxed mb-12 max-w-xl mx-auto">
          Наш шеф-флорист збере композицію за вашим референсом, допоможе підібрати улюблені квіти отримувача та надішле фото процесу.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://t.me/floral_studio_odesa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black w-full sm:w-auto"
          >
            Написати в Telegram
          </a>

          <a
            href="tel:+380671234567"
            className="px-10 py-4 bg-transparent text-[#1A1A1A] text-xs uppercase tracking-widest font-medium transition-colors border border-[#1A1A1A] hover:bg-black/5 w-full sm:w-auto"
          >
            Зателефонувати
          </a>
        </div>
      </div>
    </section>
  );
};
