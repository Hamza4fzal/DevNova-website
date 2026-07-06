import React from 'react';
import { HeroVideo } from './HeroVideo';
import { Typewriter } from './Typewriter';
import { ServicesSelector } from './ServicesSelector';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden selection:bg-secondary/20">
      <HeroVideo />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary/80 mb-8">
            DevNova Architecture
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
            We build premium <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/50">
              <Typewriter words={['Software', 'Experiences', 'Solutions']} />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Enterprise-grade engineering combined with award-winning design. We transform complex business problems into elegant, scalable digital products.
          </p>

          <ServicesSelector />
        </motion.div>
      </div>
    </section>
  );
};
