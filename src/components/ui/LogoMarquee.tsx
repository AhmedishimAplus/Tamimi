import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Logo {
  id: string;
  name: string;
  logo: string;
  featured?: boolean;
}

interface LogoMarqueeProps {
  logos: Logo[];
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  speed = 'medium',
  direction = 'left',
  pauseOnHover = true,
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const speedConfig = {
    slow: 60,
    medium: 40,
    fast: 25
  };

  const duration = speedConfig[speed];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <motion.div
        ref={marqueeRef}
        className="flex items-center space-x-12 py-8"
        animate={{
          x: direction === 'left' ? [0, '-50%'] : [0, '50%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear',
          },
        }}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-32 h-20 bg-white rounded-xl border border-line flex items-center justify-center p-4 group-hover:border-gold/30 group-hover:bg-surface-elevated transition-all duration-300">
              <img
                src={logo.logo}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const img = e.currentTarget;
                  const fallbackDiv = img.nextElementSibling as HTMLElement;
                  img.style.display = 'none';
                  if (fallbackDiv) {
                    fallbackDiv.style.display = 'block';
                  }
                }}
              />
              <div className="text-ivory/60 group-hover:text-gold transition-colors duration-300 text-center hidden">
                <div className="font-semibold text-sm leading-tight">
                  {logo.name.split(' ').map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;