import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';

export const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-center space-x-2', className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-secondary rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
};
