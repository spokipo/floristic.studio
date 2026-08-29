import React, { useState, useMemo } from 'react';
import { BOUQUETS, CATEGORIES } from '../data/bouquets';
import type { BouquetCategory } from '../types/bouquet';
import { ProductCard } from './ProductCard';
import { CustomSelect } from './ui/CustomSelect';

interface CatalogSectionProps {
  initialCategory?: BouquetCategory;
  showTitle?: boolean;
  limit?: number;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  initialCategory = 'all',
  showTitle = true,
  limit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BouquetCategory>(initialCategory);
  const [sortBy, setSortBy] = useState<'popular' | 'price_asc' | 'price_desc'>('popular');

  const filteredBouquets = useMemo(() => {
    return BOUQUETS.filter((b) => {
      if (selectedCategory !== 'all' && b.category !== selectedCategory) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
    });
  }, [selectedCategory, sortBy]);

  const displayedBouquets = limit ? filteredBouquets.slice(0, limit) : filteredBouquets;

  return (
    <section className="py-16 sm:py-24 border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Title if enabled */}
        {showTitle && (
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/50 mb-4">
              Каталог
            </p>
            <h2 className="font-normal text-4xl sm:text-5xl text-[#1A1A1A] leading-tight">
              Колекція майстерні
            </h2>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          
          {/* Text-based Category Links */}
          <div className="flex items-center gap-6 overflow-x-auto pb-2 w-full md:w-auto justify-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'text-[#1A1A1A] font-semibold border-b border-[#1A1A1A] pb-1'
                      : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A] pb-1 border-b border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Simple Sort */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#1A1A1A]/60 w-full md:w-auto justify-start md:justify-end">
            <span className="shrink-0 text-[11px]">Сортувати:</span>
            <CustomSelect
              value={sortBy}
              onChange={(val) => setSortBy(val as any)}
              options={[
                { value: 'popular', label: 'Популярні' },
                { value: 'price_asc', label: 'Ціна: від меншої' },
                { value: 'price_desc', label: 'Ціна: від більшої' },
              ]}
              className="w-[180px]"
              buttonClassName="text-xs uppercase tracking-widest"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        {displayedBouquets.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-16 sm:gap-y-20">
            {displayedBouquets.map((bouquet) => (
              <ProductCard key={bouquet.id} bouquet={bouquet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-sm uppercase tracking-widest text-[#1A1A1A]/50">
              Нічого не знайдено
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
