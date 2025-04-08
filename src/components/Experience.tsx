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
  isCurrent?: boolean;
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
    isCurrent: true,
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
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-[1px]">
                <div className="relative bg-dark/95 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-blue-400">
                        {exp.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500">{exp.location}</span>
                        {exp.isCurrent && (
                          <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-0.5 rounded-full">
                            <div className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                            </div>
                            <span className="text-green-400 text-xs font-medium">Currently Working</span>
                          </div>
                        )}
                      </div>
                      <span className="text-gray-600">{exp.dateRange}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-400">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
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
