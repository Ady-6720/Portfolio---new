import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with React and Node.js, featuring real-time updates and user authentication.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com',
  },
  {
    title: 'Project 2',
    description: 'An AI-powered analytics dashboard that processes and visualizes complex data sets in real-time.',
    tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com',
  },
  {
    title: 'Project 3',
    description: 'A mobile-first e-commerce platform with advanced filtering and search capabilities.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Stripe'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-dark/50 rounded-xl p-6 hover:bg-dark/70 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 