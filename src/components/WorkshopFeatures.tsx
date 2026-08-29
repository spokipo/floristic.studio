import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Palette, Truck, Mail } from 'lucide-react';

export const WorkshopFeatures: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      
      if (window.innerWidth < 640) {
        const itemWidth = el.clientWidth;
        const maxScroll = el.scrollWidth - el.clientWidth;
        
        if (el.scrollLeft + itemWidth >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: Flower2,
      title: 'Сезонні квіти',
      description:
        'Свіжі ранкові поставки з голландських аукціонів. Природні вигини стебел, жива текстура та жодного мертвого пластику.',
    },
    {
      icon: Palette,
      title: 'Авторське збирання',
      description:
        'Кожен букет — неповторна історія, створена флористами з художнім баченням та любовʼю до французької пейзажної естетики.',
    },
    {
      icon: Truck,
      title: 'Доставка по Одесі',
      description:
        "Дбайливі кур'єри в термобоксах та аквапаках. Доставляємо в усі райони міста точно в зазначений час.",
    },
    {
      icon: Mail,
      title: 'Каліграфічна листівка',
      description:
        'Безкоштовна авторська листівка до кожного замовлення. Ми вручну запишемо ваші найтепліші слова для одержувача.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-[#1A1A1A]/10">
      <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/50 mb-4">Наш підхід</p>
          <h2 className="font-normal text-4xl sm:text-5xl text-[#1A1A1A] mb-4">
            Філософія майстерні
          </h2>
        </div>

        <div 
          ref={scrollRef}
          className="hide-scroll flex overflow-x-auto snap-x snap-mandatory gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 lg:gap-16 pb-4 sm:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="w-full shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              >
                <div className="mb-6 text-[#1A1A1A]">
                  <Icon strokeWidth={1} className="w-8 h-8" />
                </div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-4">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-[#1A1A1A]/20 mb-6"></div>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};
