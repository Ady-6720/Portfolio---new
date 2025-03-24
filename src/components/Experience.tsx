import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface Experience {
  title: string;
  organization: string;
  dateRange: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: 'Software Development Engineer',
    organization: 'Company 1',
    dateRange: 'Jan 2023 - Present',
    points: [
      'Led development of a microservices-based backend system',
      'Implemented real-time data processing pipeline',
      'Reduced API response time by 40% through optimization',
    ],
  },
  {
    title: 'Full Stack Developer',
    organization: 'Company 2',
    dateRange: 'Jun 2022 - Dec 2022',
    points: [
      'Built and maintained multiple client-facing web applications',
      'Developed RESTful APIs using Node.js and Express',
      'Implemented automated testing suite reducing bugs by 60%',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              } md:w-1/2`}
            >
              <div className="bg-dark/50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BriefcaseIcon className="w-5 h-5 text-primary" />
                  <span className="text-primary">{exp.dateRange}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-300 mb-4">{exp.organization}</p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute top-6 -right-3 w-6 h-6 bg-primary rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 