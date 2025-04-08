import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaCloud, FaDatabase, FaCogs } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: IconType;
  span?: 'col' | 'row' | 'both';
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C++'],
    icon: FaCode,
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-400',
  },
  {
    title: 'Frameworks & Tools',
    skills: ['Spring Boot', 'Node.js', 'React', 'Express.js', 'Docker', 'Git', 'Postman', 'Apache'],
    icon: FaTools,
    color: 'from-green-500/20 to-emerald-500/20 text-green-400',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda)', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'Nginx'],
    icon: FaCloud,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'HBase', 'NoSQL'],
    icon: FaDatabase,
    color: 'from-orange-500/20 to-red-500/20 text-orange-400',
  },
  {
    title: 'Other',
    skills: ['Agile', 'REST APIs', 'RBAC', 'Jira', 'Outlook'],
    icon: FaCogs,
    color: 'from-yellow-500/20 to-amber-500/20 text-yellow-400',
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title mb-4"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {skillCategories.map((category, i) => {
            const colSpans = {
              0: 'md:col-span-6', // Languages
              1: 'md:col-span-6', // Frameworks
              2: 'md:col-span-3', // Cloud
              3: 'md:col-span-3', // Databases
              4: 'md:col-span-3', // Other
            }[i] || '';
            
            const Icon = category.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${category.color} p-0.5
                  ${colSpans} transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-${category.color.split(' ')[2]}/20 hover:translate-y-[-2px] hover:scale-[1.01]`}
              >
                <div className="relative h-full bg-dark/95 backdrop-blur-sm rounded-[10px] p-2.5
                  transition-colors duration-300 hover:bg-dark/90">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${category.color}`}>
                      {/* @ts-ignore */}
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm md:text-lg font-display font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap items-start justify-start -m-0.5">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: idx * 0.05,
                          type: 'spring',
                          stiffness: 300,
                        }}
                        viewport={{ once: true }}
                        className="m-0.5 shrink-0"
                      >
                        <div className={`relative px-2 py-0.5 bg-dark/50 backdrop-blur-sm rounded-md
                          border border-white/5 transition-all duration-150 ease-in-out
                          hover:border-white/10 hover:scale-105 hover:ring-2 hover:ring-offset-1 hover:ring-offset-dark
                          hover:ring-${category.color.split(' ')[2]}/50`}>
                          <p className="text-[10px] md:text-sm text-white/90">
                            {skill}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
