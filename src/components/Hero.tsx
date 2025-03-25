import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import GradientText from './GradientText';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative">
      <div className="text-center px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-3 md:mb-4"
        >
          <GradientText 
            text="Aditya Malode" 
            className="font-extrabold tracking-tight"
          />
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 mb-4 md:mb-6"
        >
          Software Developer | MSCS @ University of Georgia
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto"
        >
          I craft scalable software, from backend logic to clean frontends.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-3 md:gap-4 justify-center"
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDownIcon className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 