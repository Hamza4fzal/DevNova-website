import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Rocket, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../seo/SEO';

interface ComingSoonProps {
  title: string;
  description?: string;
  seoDescription?: string;
  seoCanonical?: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title, 
  description = "We're crafting something extraordinary. This page will be available soon.",
  seoDescription,
  seoCanonical
}) => {
  return (
    <>
      <SEO 
        title={`${title} | DevNova`} 
        description={seoDescription || description} 
        canonical={seoCanonical} 
      />
      <section className="min-h-screen bg-primary text-secondary flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(115,130,115,0.15) 0%, transparent 70%)' }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Center content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8 sm:mb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-secondary/5 backdrop-blur-sm px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Under Construction
            </div>
          </motion.div>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-4 sm:mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/70 to-secondary/40">
              Coming Soon
            </span>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-secondary/50 leading-relaxed mb-10 sm:mb-14 max-w-md mx-auto"
          >
            {description}
          </motion.p>
          
          {/* Feature icons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-8 mb-10 sm:mb-14"
          >
            {[
              { icon: Code2, label: 'Engineering' },
              { icon: Sparkles, label: 'Design' },
              { icon: Zap, label: 'Performance' },
              { icon: Rocket, label: 'Innovation' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-secondary/10 bg-secondary/5 flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary/60" />
                </div>
                <span className="text-[10px] sm:text-xs text-secondary/40 font-medium tracking-wider uppercase">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2.5 text-sm font-medium text-secondary/70 hover:text-secondary transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="border-b border-secondary/0 group-hover:border-secondary/30 pb-0.5 transition-colors duration-300">
                Return to Home
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};
