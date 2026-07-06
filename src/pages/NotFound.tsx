import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen bg-primary text-secondary flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative z-10 w-full max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-8xl sm:text-9xl font-bold tracking-tighter text-secondary/10">404</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-4 mb-4">Page Not Found</h1>
          <p className="text-secondary/50 mb-10">The page you're looking for doesn't exist or has been moved.</p>
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
  );
};
