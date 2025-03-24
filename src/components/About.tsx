import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const highlights = [
    {
      icon: MapPinIcon,
      text: 'Based in Athens, GA',
    },
    {
      icon: BriefcaseIcon,
      text: '1.5+ years SDE experience',
    },
    {
      icon: CodeBracketIcon,
      text: 'Focus: Full-Stack Web Development',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-8">
              I'm a passionate software developer and MSCS student at the University of Georgia,
              specializing in full-stack web development. With over 1.5 years of experience,
              I've worked on various projects ranging from enterprise applications to innovative
              web solutions. My expertise includes building scalable backend systems and creating
              intuitive, responsive frontends.
            </p>
          </div>
          
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-dark/50 rounded-lg"
              >
                <highlight.icon className="w-6 h-6 text-primary" />
                <span className="text-gray-300">{highlight.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 