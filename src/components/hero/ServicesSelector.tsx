import React, { useState } from 'react';
import { Pill } from '../ui/Pill';
import { AnimatePresence, motion } from 'motion/react';

const services = ['ERP Systems', 'Mobile Apps', 'Web Platforms', 'AI Agents'];

export const ServicesSelector: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (service: string) => {
    setSelected(service === selected ? null : service);
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-8 mt-6 sm:mt-12 w-full">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2">
        {services.map((service) => (
          <Pill
            key={service}
            active={selected === service}
            onClick={() => handleSelect(service)}
          >
            {service}
          </Pill>
        ))}
      </div>
      
      <div className="h-12 w-full flex justify-center px-4">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              className="text-xs sm:text-sm font-medium text-secondary/60 bg-secondary/5 px-4 sm:px-6 py-2 rounded-full border border-secondary/10 text-center"
            >
              Selected: <span className="text-secondary">{selected}</span> — Let's build it together.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
