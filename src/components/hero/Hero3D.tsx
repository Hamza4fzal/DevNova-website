import React from 'react';
import { motion } from 'motion/react';

/**
 * 3D Hero Background — Pure CSS 3D transforms + motion/react
 * GPU-accelerated with will-change: transform
 * No external 3D library needed — renders at 60fps on mobile
 */
export const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {/* Perspective container */}
      <div className="absolute inset-0" style={{ perspective: '1200px', perspectiveOrigin: '60% 40%' }}>
        
        {/* Large rotating wireframe cube — center-right on desktop, centered on mobile */}
        <motion.div
          className="absolute top-1/2 right-[10%] sm:right-[15%] -translate-y-1/2 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px]"
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {/* Cube faces */}
          {[
            { transform: 'translateZ(100px) sm:translateZ(140px)' },
            { transform: 'translateZ(-100px) rotateY(180deg)' },
            { transform: 'rotateY(90deg) translateZ(100px)' },
            { transform: 'rotateY(-90deg) translateZ(100px)' },
            { transform: 'rotateX(90deg) translateZ(100px)' },
            { transform: 'rotateX(-90deg) translateZ(100px)' },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-secondary/[0.06] rounded-lg"
              style={{
                transform: face.transform.replace(/sm:\S+/g, ''),
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'visible',
              }}
            />
          ))}
        </motion.div>

        {/* Smaller secondary cube — top left */}
        <motion.div
          className="absolute top-[15%] left-[8%] sm:left-[12%] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] hidden sm:block"
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          animate={{ rotateX: [0, -360], rotateY: [0, 360], rotateZ: [0, 180] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 6 }).map((_, i) => {
            const transforms = [
              'translateZ(60px)',
              'translateZ(-60px) rotateY(180deg)',
              'rotateY(90deg) translateZ(60px)',
              'rotateY(-90deg) translateZ(60px)',
              'rotateX(90deg) translateZ(60px)',
              'rotateX(-90deg) translateZ(60px)',
            ];
            return (
              <div
                key={i}
                className="absolute inset-0 border border-secondary/[0.04] rounded-md"
                style={{ transform: transforms[i], backfaceVisibility: 'visible' }}
              />
            );
          })}
        </motion.div>

        {/* Floating diamond shape — bottom left */}
        <motion.div
          className="absolute bottom-[20%] left-[5%] sm:left-[20%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          animate={{ 
            rotateZ: [45, 405], 
            rotateX: [0, 360],
            y: [0, -20, 0] 
          }}
          transition={{ 
            rotateZ: { duration: 25, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="absolute inset-0 border border-secondary/[0.08] rounded-sm bg-secondary/[0.02]" />
        </motion.div>
      </div>

      {/* Gradient orb 1 — large, top right */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(115,130,115,0.12) 0%, rgba(115,130,115,0.04) 40%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient orb 2 — medium, bottom left */}
      <motion.div
        className="absolute bottom-[5%] left-[-5%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient orb 3 — small accent, center */}
      <motion.div
        className="absolute top-[45%] left-[30%] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(28,46,30,0.15) 0%, transparent 70%)',
          willChange: 'transform',
        }}
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary" />
      
      {/* Top gradient fade for navbar blending */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/60 to-transparent" />
    </div>
  );
};
