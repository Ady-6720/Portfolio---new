import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava,
  FaAws,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaGitAlt,
  FaTools,
  FaBrain,
} from 'react-icons/fa';
import {
  SiPostgresql,
  SiSpringboot,
  SiNextdotjs,
  SiApachekafka,
  SiThreedotjs,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: '💪 Tools I Use Like Muscle Memory',
    skills: [
      { name: 'Java', icon: FaJava, level: 5 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 4 },
      { name: 'AWS', icon: FaAws, level: 4 },
      { name: 'React', icon: FaReact, level: 5 },
      { name: 'Docker', icon: FaDocker, level: 4 },
      { name: 'Node.js', icon: FaNodeJs, level: 3 },
      { name: 'Git & GitHub', icon: FaGitAlt, level: 5 },
    ],
  },
  {
    title: '🧪 Currently Exploring',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, level: 3 },
      { name: 'Kafka + Debezium', icon: SiApachekafka, level: 2 },
      { name: 'Framer Motion', icon: FaBrain, level: 3 },
      { name: 'Three.js', icon: SiThreedotjs, level: 2 },
      { name: 'Neurodiverse UI Design', icon: FaTools, level: 3 },
    ],
  },
];

const scaleMap = {
  1: 'w-14 h-14 md:w-24 md:h-24 text-[8px] md:text-xs',
  2: 'w-16 h-16 md:w-28 md:h-28 text-[9px] md:text-sm',
  3: 'w-18 h-18 md:w-32 md:h-32 text-[10px] md:text-base',
  4: 'w-20 h-20 md:w-36 md:h-36 text-[11px] md:text-lg',
  5: 'w-22 h-22 md:w-40 md:h-40 text-xs md:text-xl',
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding text-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-4xl font-extrabold mb-6 md:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm md:text-xl font-semibold mb-3 md:mb-6 text-cyan-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon as React.ElementType;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`flex flex-col justify-center items-center rounded-md md:rounded-xl bg-white/5 hover:bg-white/10 transition-all shadow-md p-2 md:p-4 ${scaleMap[skill.level as keyof typeof scaleMap]}`}
                    >
                      <Icon className="text-cyan-400 text-lg md:text-3xl mb-1 md:mb-2" />
                      <span className="text-center px-1 md:px-2 leading-tight">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 md:mt-12 text-[8px] md:text-sm text-gray-500 text-center italic">
          P.S. My strongest skills speak through tile size and glow.
        </p>
      </div>
    </section>
  );
};

export default Skills;
