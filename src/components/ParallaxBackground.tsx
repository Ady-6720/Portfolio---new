import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      const xPercent = (clientX / width - 0.5) * 20;
      const yPercent = (clientY / height - 0.5) * 20;
      
      containerRef.current.style.transform = `perspective(1000px) rotateX(${yPercent}deg) rotateY(${xPercent}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ y }}
    >
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-1">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="bg-primary/5 rounded-sm hover:bg-primary/10 transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ParallaxBackground; 