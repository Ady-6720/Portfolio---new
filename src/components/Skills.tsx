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
    span: 'col',
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-400',
  },
  {
    title: 'Frameworks & Tools',
    skills: ['Spring Boot', 'Node.js', 'React', 'Express.js', 'Docker', 'Git', 'Postman', 'Apache'],
    icon: FaTools,
    span: 'both',
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
    span: 'row',
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
  const getSkillSpan = (skill: string) => {
    const length = skill.length;
    if (length > 20) return 'col-span-6'; // Full width for very long text
    if (length > 15) return 'col-span-4'; // 2/3 width for long text
    if (length > 10) return 'col-span-3'; // Half width for medium text
    if (length > 5) return 'col-span-2'; // 1/3 width for short text
    return 'col-span-1'; // Smallest width for very short text
  };

  return (
    <section id="skills" className="py-6 px-2">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-4 text-center gradient-text"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
          {skillCategories.map((category, i) => {
            const spanClasses = {
              col: 'lg:col-span-2',
              row: 'lg:row-span-2',
              both: 'lg:col-span-2 lg:row-span-2',
            };
            const Icon = category.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-[1px]
                  ${category.span ? spanClasses[category.span] : ''}`}
              >
                <div className="relative h-full bg-dark/95 backdrop-blur-sm rounded-2xl p-3
                  transition-colors duration-300 hover:bg-dark/90">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${category.color}`}>
                      {/* @ts-ignore */}
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <h3 className="text-sm md:text-lg font-display font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Bento Grid */}
                  <div className="grid grid-cols-6 auto-rows-auto gap-1">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: idx * 0.03,
                          type: 'spring',
                          stiffness: 300,
                        }}
                        viewport={{ once: true }}
                        className={`relative group/skill ${getSkillSpan(skill)}`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-lg
                          opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`} />
                        <div className="relative h-full flex items-center justify-center px-2 py-1.5 bg-dark/50 backdrop-blur-sm rounded-lg
                          border border-white/5 hover:border-white/10 transition-colors">
                          <p className="text-[10px] md:text-sm text-center text-white/90 whitespace-nowrap">
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
