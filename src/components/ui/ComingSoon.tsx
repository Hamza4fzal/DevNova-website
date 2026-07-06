import React from 'react';
import { motion } from 'motion/react';
import { Container } from './Container';
import { ArrowLeft, Sparkles } from 'lucide-react';
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
  description = "We are crafting something extraordinary. This page will be available soon.",
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
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-widest text-secondary/80 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>IN DEVELOPMENT</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              {title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/50">
                Coming Soon
              </span>
            </h1>
            
            <p className="text-lg text-secondary/60 leading-relaxed mb-10 max-w-lg mx-auto">
              {description}
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-secondary/80 transition-colors border-b border-transparent hover:border-secondary/30 pb-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
          </motion.div>
        </Container>
      </div>
    </>
  );
};
