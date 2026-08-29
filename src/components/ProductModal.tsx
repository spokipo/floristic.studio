import React, { useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { $quickViewBouquet, closeQuickView, addToCart } from '../stores/cartStore';
import type { BouquetSize } from '../types/bouquet';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

export const ProductModal: React.FC = () => {
  const bouquet = useStore($quickViewBouquet);
  const [selectedSize, setSelectedSize] = useState<BouquetSize>('M');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inlineButtonRef = useRef<HTMLButtonElement>(null);
  const [isInlineButtonInView, setIsInlineButtonInView] = useState(false);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (bouquet) {
      document.body.style.overflow = 'hidden';
      
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    // Hide floating button when within 120px of the bottom of the scrolling content
    const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 120;
    setIsInlineButtonInView(isBottom);
  };

  return (
    <AnimatePresence>
      {bouquet && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto flex items-start sm:items-center justify-center p-0 sm:p-6 lg:p-8"
          onScroll={handleScroll}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickView}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative bg-white w-full max-w-5xl sm:rounded-none shadow-2xl overflow-hidden z-10 min-h-screen sm:min-h-0 flex flex-col"
          >
            {/* Close button (Fixed on mobile, absolute on desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeQuickView();
              }}
              className="fixed sm:absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 sm:p-2 bg-white/90 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none rounded-full sm:rounded-none shadow-md sm:shadow-none text-[#1A1A1A] hover:opacity-70 transition-all"
              aria-label="Закрити"
            >
              <X strokeWidth={1.5} className="w-6 h-6 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col md:flex-row flex-1">
              
              {/* Left: Image */}
              <div className="w-full md:w-1/2 bg-[#FAF7F2]">
                <div className="w-full sm:h-full relative">
                  <img
                    src={bouquet.image}
                    alt={bouquet.title}
                    className="w-full h-auto sm:h-full sm:object-cover block"
                  />
                </div>
              </div>

              {/* Right: Info */}
              <div className="w-full md:w-1/2 p-8 pb-28 sm:p-10 lg:p-16 flex flex-col justify-center bg-white flex-1">
                
                <div className="mb-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#1A1A1A]/50">
                  {bouquet.colorTone}
                </div>

                <h2 className="font-normal text-3xl sm:text-4xl text-[#1A1A1A] mb-4 sm:mb-6">
                  {bouquet.title}
                </h2>

                <p className="text-sm font-light text-[#1A1A1A]/70 mb-8 sm:mb-10 leading-relaxed">
                  {bouquet.description}
                </p>

                {/* Sizes */}
                <div className="mb-8 sm:mb-10">
                  <div className="text-xs uppercase tracking-widest text-[#1A1A1A] mb-4">
                    Розмір:
                  </div>
                  <div className="flex gap-4 sm:gap-6">
                    {(['S', 'M', 'L'] as BouquetSize[]).map((size) => {
                      const isSelected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`text-sm sm:text-base uppercase tracking-widest transition-colors ${
                            isSelected 
                              ? 'text-[#1A1A1A] border-b border-[#1A1A1A] pb-1' 
                              : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A] pb-1 border-b border-transparent'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price */}
                <div className="text-2xl font-light text-[#1A1A1A] mb-8 sm:mb-10">
                  {currentPrice.toLocaleString('uk-UA')} ₴
                </div>

                <button
                  ref={inlineButtonRef}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black flex items-center justify-center gap-2 mt-auto sm:mt-0"
                >
                  <ShoppingBag strokeWidth={1.5} className="w-4 h-4" />
                  Додати в кошик
                </button>
                
              </div>
            </div>

            {/* Floating Mobile Button */}
            <AnimatePresence>
              {!isInlineButtonInView && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="fixed bottom-0 left-0 right-0 p-4 sm:hidden z-20"
                >
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors active:scale-95 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag strokeWidth={1.5} className="w-4 h-4" />
                    Додати • {currentPrice.toLocaleString('uk-UA')} ₴
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
