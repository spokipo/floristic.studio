import React from 'react';
import { openBookingModal } from '../stores/cartStore';
import { ArrowRight } from 'lucide-react';

interface Props {
  shootType?: 'flowers' | 'no_flowers' | 'content';
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export const BookingTriggerButton: React.FC<Props> = ({
  shootType = 'flowers',
  className = '',
  id,
  children,
}) => {
  return (
    <button
      id={id}
      type="button"
      onClick={() => openBookingModal(shootType)}
      className={className}
    >
      {children || (
        <span className="flex items-center gap-2">
          <span>Записатися</span>
          <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5" />
        </span>
      )}
    </button>
  );
};

