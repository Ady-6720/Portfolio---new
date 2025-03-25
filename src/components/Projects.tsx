import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  funFact: string;
}

const projects: Project[] = [
  {
    title: 'MindBridge – Neurodiversity Support App',
    description: `An Android app designed to empower users with autism and ADHD by providing accessible cognitive support tools. Features personalized UI elements and activity tracking tailored to individual sensory and cognitive needs.`,
    tech: ['Android', 'Kotlin', 'GraphQL', 'Firebase OAuth 2.0'],
    github: 'https://github.com/Ady-6720/MindBridge',
    demo: 'https://www.adityamalode.com/mindbridge',
    funFact: `While building this app, I learned how overlooked accessibility can be. Designing for neurodiverse users made me rethink what 'intuitive UI' actually means. Empathy became a key part of my design process.`,
  },
  {
    title: 'AI StudyBuddy – Adaptive Learning Assistant',
    description: `A cross-platform mobile app that delivers AI-generated study plans based on real-time learning data. Uses OpenAI to personalize content and Firebase to store and sync user data across sessions.`,
    tech: ['React Native', 'TypeScript', 'OpenAI API', 'Firebase'],
    github: 'https://github.com/Ady-6720/AI-StudyBuddy',
    demo: 'https://www.adityamalode.com/studybuddy',
    funFact: `Integrating AI felt like coding magic — but it also taught me the importance of grounding tech in real learning psychology. Also learned to debug OpenAI prompts like a mad scientist.`,
  },
  {
    title: 'Asynchronous Multicast Distributed System',
    description: `Designed and built a distributed communication system in Java using REST APIs and multithreading. Ensures reliable message delivery across multiple concurrent nodes, with built-in fault tolerance.`,
    tech: ['Java', 'Multithreading', 'REST APIs', 'Distributed Systems'],
    github: 'https://github.com/Ady-6720/Async-Multicast-System',
    demo: '',
    funFact: `This project gave me a deep respect for race conditions and deadlocks. Also: multithreading errors are like cockroaches — you fix one and ten more crawl out.`,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-bold mb-8 md:mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex-none w-[85vw] md:w-[600px] snap-center group relative bg-dark/50 rounded-lg md:rounded-xl p-4 md:p-6 hover:bg-dark/70 transition-colors duration-300"
            >
              <h3 className="text-base md:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-xs md:text-base text-gray-300 mb-3 md:mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 md:px-3 py-0.5 md:py-1 bg-primary/10 text-primary rounded-full text-[10px] md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-3 md:mb-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <CodeBracketIcon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm">GitHub</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm">Live Demo</span>
                  </a>
                )}
              </div>

              <p className="italic text-[10px] md:text-sm text-gray-400">💡 {project.funFact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
