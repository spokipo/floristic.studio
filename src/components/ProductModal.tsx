import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { $quickViewBouquet, closeQuickView, addToCart } from '../stores/cartStore';
import type { BouquetSize, Bouquet } from '../types/bouquet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

export const ProductModal: React.FC = () => {
  const storeBouquet = useStore($quickViewBouquet);
  const [activeBouquet, setActiveBouquet] = useState<Bouquet | null>(null);
  const [selectedSize, setSelectedSize] = useState<BouquetSize>('M');

  // Keep a local copy of bouquet for smooth exit animation
  useEffect(() => {
    if (storeBouquet) {
      setActiveBouquet(storeBouquet);
      setSelectedSize('M');
    }
  }, [storeBouquet]);

  // Lock body scroll
  useEffect(() => {
    if (storeBouquet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [storeBouquet]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && storeBouquet) {
        closeQuickView();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [storeBouquet]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeBouquet) return;
    addToCart(activeBouquet, selectedSize, 1);
    closeQuickView();
  };

  const currentSizeOption = activeBouquet?.sizes[selectedSize];
  const currentPrice = currentSizeOption ? currentSizeOption.price : (activeBouquet?.price || 0);

  return (
    <AnimatePresence>
      {storeBouquet && activeBouquet && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start sm:items-center justify-center p-0 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickView}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container: Matches BookingModal architecture exactly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-[#FAF7F2] w-full max-w-4xl shadow-2xl border border-[#1A1A1A]/10 z-10 min-h-screen sm:min-h-0 flex flex-col sm:flex-row overflow-hidden my-auto sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Fixed on mobile, absolute on desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeQuickView();
              }}
              className="fixed sm:absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 sm:p-2 bg-[#FAF7F2]/90 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none rounded-full sm:rounded-none shadow-md sm:shadow-none text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-all"
              aria-label="Закрити"
            >
              <X strokeWidth={1.5} className="w-6 h-6 sm:w-6 sm:h-6" />
            </button>

            {/* Left Column: Image */}
            <div className="w-full sm:w-1/2 bg-[#F2EFE9] relative shrink-0">
              <div className="w-full relative aspect-[4/5] sm:aspect-auto sm:h-full min-h-[280px] sm:min-h-[440px]">
                <img
                  src={activeBouquet.image}
                  alt={activeBouquet.title}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Right Column: Info & Options */}
            <div className="w-full sm:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#FAF7F2] flex-1 pb-28 sm:pb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 block mb-2 font-sans">
                  {activeBouquet.colorTone || 'Floral Studio • Авторський букет'}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] font-normal mb-4 leading-tight">
                  {activeBouquet.title}
                </h2>

                <p className="text-sm font-light text-[#1A1A1A]/70 mb-6 leading-relaxed font-sans">
                  {activeBouquet.description || 'Ніжний та витончений букет, створений нашими флористами з турботою про кожну деталь.'}
                </p>

                {/* Size Selector: Styled like Booking shootType cards */}
                <div className="mb-6">
                  <label className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-3 block font-sans">
                    Оберіть розмір букета
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    {(['S', 'M', 'L'] as BouquetSize[]).map((size) => {
                      const isSelected = selectedSize === size;
                      const option = activeBouquet.sizes[size];
                      const optionPrice = option ? option.price : activeBouquet.price;

                      return (
                        <button
                          type="button"
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`p-3 text-left transition-all border flex flex-col justify-between ${
                            isSelected
                              ? 'border-[#1A1A1A] bg-white text-[#1A1A1A] shadow-sm'
                              : 'border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A]/60 hover:border-[#1A1A1A]/30'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className="text-xs font-semibold uppercase tracking-wider font-sans">{size}</span>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />}
                          </div>
                          {option?.diameter && (
                            <div className="text-[10px] text-[#1A1A1A]/50 font-sans truncate">{option.diameter}</div>
                          )}
                          <div className="text-xs font-medium text-[#1A1A1A] mt-2 font-sans">
                            {optionPrice.toLocaleString('uk-UA')} ₴
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Composition & Care Details */}
                {(activeBouquet.durability || (activeBouquet.composition && activeBouquet.composition.length > 0)) && (
                  <div className="pt-4 border-t border-[#1A1A1A]/10 space-y-2 text-xs text-[#1A1A1A]/70 font-sans mb-4">
                    {activeBouquet.durability && (
                      <div>
                        <span className="font-medium text-[#1A1A1A]">Стійкість:</span> {activeBouquet.durability}
                      </div>
                    )}
                    {activeBouquet.composition && activeBouquet.composition.length > 0 && (
                      <div>
                        <span className="font-medium text-[#1A1A1A]">Склад:</span> {activeBouquet.composition.join(', ')}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Desktop Price & Inline Add to Cart */}
              <div className="hidden sm:flex items-center justify-between gap-6 pt-6 border-t border-[#1A1A1A]/10 mt-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 block font-sans">Вартість</span>
                  <span className="text-2xl font-light text-[#1A1A1A] font-sans">
                    {currentPrice.toLocaleString('uk-UA')} ₴
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black flex items-center justify-center gap-2"
                >
                  <ShoppingBag strokeWidth={1.5} className="w-4 h-4" />
                  <span>Додати в кошик</span>
                </button>
              </div>
            </div>

            {/* Floating Mobile Button (levitating above content with no solid container background) */}
            <div className="fixed bottom-0 left-0 right-0 p-4 sm:hidden z-40 pointer-events-none pb-[max(1rem,env(safe-area-inset-bottom))]">
              <button
                type="button"
                onClick={handleAddToCart}
                className="pointer-events-auto w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-all hover:bg-black active:scale-95 flex items-center justify-center gap-2 shadow-2xl rounded-[6px]"
              >
                <ShoppingBag strokeWidth={1.5} className="w-4 h-4" />
                <span>Додати • {currentPrice.toLocaleString('uk-UA')} ₴</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
