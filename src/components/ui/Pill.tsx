import React from 'react';
import { cn } from '../../utils/cn';

interface PillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Pill: React.FC<PillProps> = ({ className, active, children, ...props }) => {
  return (
    <button
      className={cn('px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border',
        active ? 'bg-secondary text-primary border-secondary' : 'bg-transparent text-secondary border-secondary/20 hover:border-secondary/50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
