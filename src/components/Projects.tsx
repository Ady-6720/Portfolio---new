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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="project-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
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
                    className="project-link"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm">Live Demo</span>
                  </a>
                )}
              </div>

              <p className="project-fun-fact">💡 {project.funFact}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
