import React from 'react';
import { motion } from 'framer-motion';

interface TechTag {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'security' | 'process';
}

interface Experience {
  title: string;
  organization: string;
  dateRange: string;
  location: string;
  overview: string;
  points: string[];
  techTags: TechTag[];
  funFact: string;
}

const experiences: Experience[] = [
  {
    title: 'Software Developer Graduate Assistant',
    organization: 'University of Georgia',
    dateRange: 'Aug 2024 - Present',
    location: 'Athens, GA, USA',
    overview:
      'Led full-stack development of a research management platform adopted by 15+ labs, streamlining workflows and boosting cross-departmental collaboration.',
    points: [
      'Crafted dark-mode React + TypeScript UI with mobile support, adopted by over 80 faculty and staff.',
      'Engineered PostgreSQL schema with row-level security and automated backups.',
      'Built AWS Lambda REST APIs and integrated CloudWatch for full observability.',
      'Secured access via Duo MFA and Auth0 OAuth; achieved 99% drop in intrusion attempts.',
      'Managed agile boards in Notion and GitHub; delivered milestones ahead of deadlines.',
      'Replaced Excel processes with live dashboards, cutting 10+ hours/week of admin work.',
    ],
    techTags: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'AWS Lambda', category: 'devops' },
      { name: 'OAuth (Auth0)', category: 'security' },
      { name: 'MFA', category: 'security' },
      { name: 'Agile', category: 'process' },
      { name: 'FERPA Compliance', category: 'security' },
      { name: 'CI/CD', category: 'devops' },
    ],
    funFact:
      'Discovered that documentation and coffee are both critical to shipping stable software at scale.',
  },
  {
    title: 'Software Developer',
    organization: 'GrunTech Solutions',
    dateRange: 'May 2021 - Aug 2023',
    location: 'Nashik, India',
    overview:
      'Designed backend infrastructure for a high-traffic chemical inventory system used by 200+ B2B partners.',
    points: [
      'Built secure Spring Boot + RBAC-based login system with JWT and role-based workflows.',
      'Optimized PostgreSQL structure for 100K+ chemical records; improved queries by 40%.',
      'Used Kafka + change data capture to sync inventory across partner APIs in real-time.',
      'Implemented Spring Batch jobs for scheduled ETL — reducing manual work by 70%.',
      'Debugged flaky SOAP APIs from legacy partners — learned the true art of logging.',
    ],
    techTags: [
      { name: 'Java', category: 'backend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'Spring Security', category: 'security' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'Kafka', category: 'backend' },
      { name: 'RBAC', category: 'security' },
      { name: 'Spring Batch', category: 'backend' },
      { name: 'REST API', category: 'backend' },
      { name: 'Docker', category: 'devops' },
    ],
    funFact:
      "Fixing someone else's Java code at 2 a.m. made me a better software engineer than any textbook.",
  },
];

const getCategoryColor = (category: TechTag['category']) => {
  switch (category) {
    case 'frontend':
      return 'bg-blue-500/10 text-blue-500';
    case 'backend':
      return 'bg-green-500/10 text-green-500';
    case 'devops':
      return 'bg-purple-500/10 text-purple-500';
    case 'security':
      return 'bg-red-500/10 text-red-500';
    case 'process':
      return 'bg-yellow-500/10 text-yellow-500';
  }
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-bold mb-8 md:mb-16 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 md:mb-0 md:-mb-48 last:mb-0"
            >
              {/* Timeline dot with pulse effect */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-12 md:top-16 flex items-center justify-center">
                <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-primary" />
                <div className="absolute w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-primary animate-ping opacity-20" />
              </div>

              {/* Content card */}
              <div 
                className={`ml-5 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-[50%] md:pr-16' : 'md:ml-[50%] md:pl-16'
                }`}
              >
                <div className={`relative bg-dark/30 backdrop-blur-lg rounded-lg md:rounded-xl p-3 md:p-6 border border-primary/10 hover:border-primary/20 transition-colors hover:bg-dark/50 ${
                  exp.dateRange.includes('Present') ? 'active-card' : ''
                }`}>
                  {/* Live indicator for current role */}
                  {exp.dateRange.includes('Present') && (
                    <div className="absolute top-3 right-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex flex-col gap-0.5 md:gap-2 mb-3 md:mb-6">
                    <div className="flex items-start justify-between flex-col md:flex-row gap-0.5 md:gap-2">
                      <h3 className="text-sm md:text-xl font-bold text-primary">{exp.title}</h3>
                      <span className="text-[10px] md:text-sm text-gray-400 whitespace-nowrap">
                        {exp.dateRange}
                      </span>
                    </div>
                    <div className="flex items-start justify-between flex-col md:flex-row gap-0.5 md:gap-1">
                      <p className="text-xs md:text-base text-gray-300">{exp.organization}</p>
                      <span className="text-[10px] md:text-sm text-gray-400">{exp.location}</span>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-[11px] md:text-base text-gray-300 mb-3 md:mb-6 leading-relaxed">
                    {exp.overview}
                  </p>

                  {/* Key achievements */}
                  <div className="space-y-1.5 md:space-y-3 mb-3 md:mb-6">
                    {exp.points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-1.5 md:gap-2"
                      >
                        <span className="text-primary mt-0.5 md:mt-1 text-[10px] md:text-sm">▹</span>
                        <p className="text-[11px] md:text-sm text-gray-300">{point}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {exp.techTags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className={`px-1.5 md:px-3 py-0.5 md:py-1 rounded-full text-[9px] md:text-xs font-medium ${getCategoryColor(
                          tag.category
                        )}`}
                      >
                        {tag.name}
                      </motion.span>
                    ))}
                  </div>

                  {/* Fun fact */}
                  <div className="text-[10px] md:text-sm text-gray-400 italic border-t border-gray-800/50 pt-2 md:pt-4 mt-2 md:mt-4">
                    💡 {exp.funFact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
