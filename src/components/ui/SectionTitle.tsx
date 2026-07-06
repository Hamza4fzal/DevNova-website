import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';

interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ className, children, subtitle }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-supporting-1 text-sm font-semibold tracking-wider uppercase"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter"
      >
        {children}
      </motion.h2>
    </div>
  );
};
