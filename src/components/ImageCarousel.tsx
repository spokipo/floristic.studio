import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || !scrollRef.current.children[0]) return;
      const scrollPosition = scrollRef.current.scrollLeft;
      const child = scrollRef.current.children[0] as HTMLElement;
      // the distance between items is the child's width plus the gap (approx 16px)
      const itemWidth = child.clientWidth + 16;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setActiveIndex(newIndex);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (index: number) => {
    if (!scrollRef.current || !scrollRef.current.children[0]) return;
    const child = scrollRef.current.children[0] as HTMLElement;
    const itemWidth = child.clientWidth + 16;
    scrollRef.current.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full group">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="relative flex-none w-[90%] sm:w-[85%] lg:w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] snap-center overflow-hidden"
          >
            <img
              src={src}
              alt={`Інтер'єр фотостудії ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center items-center gap-3 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className="p-1"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div 
              className={`h-px transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-8 bg-[#1A1A1A]' 
                  : 'w-4 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
              }`} 
            />
          </button>
        ))}
      </div>
    </div>
  );
};
