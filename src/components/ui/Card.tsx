import React from 'react';
import { cn } from '../../utils/cn';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  return (
    <div className={cn('rounded-3xl border border-secondary/10 bg-primary/50 backdrop-blur-sm p-6 text-secondary', className)} {...props}>
      {children}
    </div>
  );
};
