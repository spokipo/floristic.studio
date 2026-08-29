import React from 'react';
import { useStore } from '@nanostores/react';
import { $toast } from '../stores/cartStore';
import { motion, AnimatePresence } from 'framer-motion';

export const Toast: React.FC = () => {
  const toast = useStore($toast);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col gap-2 max-w-sm w-full px-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="pointer-events-auto bg-[#1A1A1A] text-white rounded-none p-6 flex justify-between items-start"
          >
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-1">{toast.title}</h4>
              {toast.message && (
                <p className="text-sm font-light text-white/70">{toast.message}</p>
              )}
            </div>
            <button
              onClick={() => $toast.set(null)}
              className="text-white/50 hover:text-white transition-colors text-xs"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
