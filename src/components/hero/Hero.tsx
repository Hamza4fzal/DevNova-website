import React from 'react';
import { Hero3D } from './Hero3D';
import { Typewriter } from './Typewriter';
import { ServicesSelector } from './ServicesSelector';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-8 overflow-hidden selection:bg-secondary/20">
      <Hero3D />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-secondary/80 mb-6 sm:mb-8">
            DevNova Architecture
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1] mb-4 sm:mb-6">
            We build premium <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/50">
              <Typewriter words={['Software', 'Experiences', 'Solutions']} />
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary/60 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">
            Enterprise-grade engineering combined with award-winning design. We transform complex business problems into elegant, scalable digital products.
          </p>

          <ServicesSelector />
        </motion.div>
      </div>
    </section>
  );
};
