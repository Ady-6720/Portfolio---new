import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const container = containerRef.current;
    const gradient = gradientRef.current;
    const trail = trailRef.current;
    const text = textRef.current;
    if (!container || !gradient || !trail || !text) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center (for magnetic effect)
      mouseX = (e.clientX - centerX) * 0.1;
      mouseY = (e.clientY - centerY) * 0.1;
      
      // Update text position with magnetic effect
      controls.start({
        x: mouseX * 0.2,
        y: mouseY * 0.2,
        rotateX: mouseY * 0.05,
        rotateY: -mouseX * 0.05,
        transition: { type: "spring", stiffness: 150, damping: 15 }
      });

      // Update gradient position
      const gradientX = e.clientX - rect.left;
      const gradientY = e.clientY - rect.top;
      currentX = gradientX;
      currentY = gradientY;
    };

    const animate = () => {
      // Smooth trail interpolation
      trailX += (currentX - trailX) * 0.08;
      trailY += (currentY - trailY) * 0.08;

      // Multi-layered gradient effect
      gradient.style.background = `
        radial-gradient(
          1200px circle at ${currentX}px ${currentY}px,
          rgba(0, 224, 255, 0.05) 0%,
          rgba(15, 255, 0, 0.05) 20%,
          rgba(255, 255, 0, 0.05) 40%,
          transparent 60%
        ),
        radial-gradient(
          800px circle at ${currentX}px ${currentY}px,
          rgba(0, 224, 255, 0.08) 0%,
          rgba(15, 255, 0, 0.08) 30%,
          transparent 60%
        )
      `;

      // Soft trailing effect
      trail.style.background = `
        radial-gradient(
          1000px circle at ${trailX}px ${trailY}px,
          rgba(0, 224, 255, 0.03) 0%,
          rgba(15, 255, 0, 0.03) 25%,
          rgba(255, 255, 0, 0.03) 50%,
          transparent 70%
        )
      `;

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      gradient.style.opacity = '1';
      trail.style.opacity = '1';
      animate();
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      gradient.style.opacity = '0';
      trail.style.opacity = '0';
      controls.start({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [controls]);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block perspective-[1000px] ${className}`}
    >
      <div 
        ref={gradientRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out"
        style={{ filter: 'blur(80px)' }}
      />
      <div 
        ref={trailRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out"
        style={{ filter: 'blur(100px)' }}
      />
      <motion.span 
        ref={textRef}
        animate={controls}
        className="relative z-10 inline-block bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(270deg, #00e0ff, #0f0, #ff0, #00e0ff)',
          backgroundSize: '600% 600%',
          animation: 'moveGradient 10s ease infinite',
          transformStyle: 'preserve-3d'
        }}
      >
        {text}
      </motion.span>
      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default GradientText; 