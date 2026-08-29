import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import { openBookingModal } from '../stores/cartStore';

export const FloatingBookingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroBtn = document.getElementById('hero-booking-btn');

    if (heroBtn && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Visible when hero button is NOT intersecting (scrolled past it)
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(heroBtn);
      return () => observer.disconnect();
    } else {
      // Fallback to scroll position
      const handleScroll = () => {
        setIsVisible(window.scrollY > 400);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={() => openBookingModal('flowers')}
            className="group flex items-center gap-3 px-6 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95"
            aria-label="Записатися в простір"
          >
            <Camera strokeWidth={1.5} className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
            <span>Записатися</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

