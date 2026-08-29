import React from 'react';
import { useStore } from '@nanostores/react';
import {
  $cartItems,
  $isCartOpen,
  $cartTotal,
  $cartCount,
  toggleCart,
  updateQuantity,
  removeFromCart,
} from '../stores/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const isOpen = useStore($isCartOpen);
  const items = useStore($cartItems);
  const total = useStore($cartTotal);
  const count = useStore($cartCount);

  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('lock-scroll');
    } else {
      document.documentElement.classList.remove('lock-scroll');
    }
    return () => {
      document.documentElement.classList.remove('lock-scroll');
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-[#FAF7F2] flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 sm:p-8 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-normal text-[#1A1A1A]">
                  Кошик ({count})
                </h3>
                <button
                  onClick={() => toggleCart(false)}
                  className="p-2 -mr-2 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
                  aria-label="Закрити"
                >
                  <X strokeWidth={1.5} className="w-6 h-6" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col justify-center text-center">
                    <h4 className="font-serif text-xl text-[#1A1A1A] font-normal mb-6">
                      Кошик порожній
                    </h4>
                    <button
                      onClick={() => {
                        toggleCart(false);
                        window.location.href = '/catalog';
                      }}
                      className="inline-block px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black"
                    >
                      Каталог
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b border-[#1A1A1A]/10 pb-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-28 sm:w-24 sm:h-32 object-cover"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-sm font-medium text-[#1A1A1A] leading-snug pr-4 line-clamp-2">
                                {item.title}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 -mr-1 text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                                aria-label="Видалити"
                              >
                                <Trash2 strokeWidth={1.5} className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-xs text-[#1A1A1A]/60 mt-1">
                              Розмір: {item.size}
                            </div>
                            <div className="text-sm font-light text-[#1A1A1A] mt-1">
                              {item.price.toLocaleString('uk-UA')} ₴
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mt-4">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-[#1A1A1A] p-1 -ml-1"
                            >
                              <Minus strokeWidth={1.5} className="w-4 h-4" />
                            </button>
                            <span className="text-sm w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-[#1A1A1A] p-1 -mr-1"
                            >
                              <Plus strokeWidth={1.5} className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-6 sm:p-8 bg-[#FAF7F2] border-t border-[#1A1A1A]/10">
                  <div className="flex justify-between text-lg font-serif text-[#1A1A1A] mb-6">
                    <span>Разом:</span>
                    <span>{total.toLocaleString('uk-UA')} ₴</span>
                  </div>

                  <a
                    href="/order"
                    onClick={() => toggleCart(false)}
                    className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black text-center block"
                  >
                    Оформити замовлення
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
