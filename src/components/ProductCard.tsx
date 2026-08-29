import React, { useState } from 'react';
import type { Bouquet, BouquetSize } from '../types/bouquet';
import { addToCart, openQuickView } from '../stores/cartStore';
import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  bouquet: Bouquet;
}

export const ProductCard: React.FC<ProductCardProps> = ({ bouquet }) => {
  const [selectedSize, setSelectedSize] = useState<BouquetSize>('M');
  const [isAddedAnim, setIsAddedAnim] = useState(false);

  const currentSizeOption = bouquet.sizes[selectedSize];
  const currentPrice = currentSizeOption ? currentSizeOption.price : bouquet.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(bouquet, selectedSize, 1);
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group flex flex-col h-full"
    >
      {/* Image Container */}
      <div
        onClick={() => openQuickView(bouquet)}
        className="relative aspect-[3/4] overflow-hidden bg-[#FAF7F2] cursor-pointer mb-4 sm:mb-5 shrink-0"
      >
        <img
          src={bouquet.image}
          alt={bouquet.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover overlay with add to cart */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 bg-white text-[#1A1A1A] text-xs uppercase tracking-widest font-medium transition-transform transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center gap-2"
          >
            {isAddedAnim ? (
              <>
                <Check strokeWidth={1.5} className="w-4 h-4" /> Додано
              </>
            ) : (
              <>
                <ShoppingBag strokeWidth={1.5} className="w-4 h-4" /> Додати
              </>
            )}
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col items-center text-center px-1 sm:px-2 flex-1">
        <h3
          onClick={() => openQuickView(bouquet)}
          className="font-normal text-[13px] sm:text-lg text-[#1A1A1A] cursor-pointer mb-2 sm:mb-1.5 hover:opacity-70 transition-opacity line-clamp-3 leading-snug"
        >
          {bouquet.title}
        </h3>

        <div className="mt-auto text-xs sm:text-sm font-light text-[#1A1A1A] mb-3 sm:mb-4">
          {currentPrice.toLocaleString('uk-UA')} ₴
        </div>

        {/* Minimalist Size Selector */}
        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-widest text-[#1A1A1A]/50">
          {(['S', 'M', 'L'] as BouquetSize[]).map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`transition-colors hover:text-[#1A1A1A] ${
                selectedSize === size ? 'text-[#1A1A1A] border-b border-[#1A1A1A]' : 'border-b border-transparent'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
