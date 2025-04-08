import React from 'react';
import { motion } from 'framer-motion';

interface Course {
  name: string;
}

interface Education {
  university: string;
  degree: string;
  dateRange: string;
  location: string;
  gpa: string;
  courses: Course[];
  isOngoing?: boolean;
}

// Array of color combinations for the course pills
const colorVariants = [
  { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
  { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
  { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' },
  { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
  { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20' },
  { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
];

// Function to get a color variant based on course name (consistent color for same course name)
const getColorVariant = (courseName: string) => {
  const index = Math.abs(courseName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colorVariants.length;
  return colorVariants[index];
};

const educationData: Education[] = [
  {
    university: 'University of Georgia',
    degree: 'Masters in Computer Science',
    dateRange: 'Aug 2023 - Present',
    location: 'Athens, GA, USA',
    gpa: '3.7 / 4.0',
    courses: [
      { name: 'Software Engineering' },
      { name: 'Database Systems' },
      { name: 'Human Computer Interaction' },
      { name: 'Distributed Systems' },
      { name: 'LLM' },
    ],
    isOngoing: true,
  },
  {
    university: 'University of Pune',
    degree: 'Bachelor of Engineering in Electrical Engineering',
    dateRange: 'Jun 2018 - Aug 2022',
    location: 'Nashik, MH, India',
    gpa: '3.95 / 4.0',
    courses: [
      { name: 'Linear Algebra' },
      { name: 'Object Oriented Programming' },
      { name: 'Operating Systems' },
      { name: 'Embedded Systems' },
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-bold mb-8 md:mb-16 text-center"
        >
          Education
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative bg-dark/30 backdrop-blur-lg rounded-lg md:rounded-xl p-3 md:p-6 border border-primary/10 hover:border-primary/20 transition-colors hover:bg-dark/50">
                {/* Live indicator for current education */}
                {edu.isOngoing && (
                  <div className="absolute top-3 right-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex flex-col gap-0.5 md:gap-2 mb-3 md:mb-6">
                  <div className="flex items-start justify-between flex-col md:flex-row gap-0.5 md:gap-2">
                    <h3 className="text-sm md:text-xl font-bold text-primary">{edu.university}</h3>
                    <span className="text-[10px] md:text-sm text-gray-400 whitespace-nowrap">
                      {edu.dateRange}
                    </span>
                  </div>
                  <div className="flex items-start justify-between flex-col md:flex-row gap-0.5 md:gap-1">
                    <p className="text-xs md:text-base text-gray-300">{edu.degree}</p>
                    <span className="text-[10px] md:text-sm text-gray-400">{edu.location}</span>
                  </div>
                </div>

                {/* GPA */}
                <div className="mb-3 md:mb-6">
                  <p className="text-[11px] md:text-base text-gray-300">
                    <span className="font-medium">GPA:</span> {edu.gpa}
                  </p>
                </div>

                {/* Relevant Courses */}
                <div className="space-y-1.5 md:space-y-3">
                  <h4 className="text-[11px] md:text-sm font-medium text-gray-300 mb-2">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {edu.courses.map((course, idx) => {
                      const colorVariant = getColorVariant(course.name);
                      return (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-medium ${colorVariant.bg} ${colorVariant.text} border ${colorVariant.border}`}
                        >
                          {course.name}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reflective Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-[11px] md:text-sm text-gray-400 italic flex items-center justify-center gap-2">
            <span role="img" aria-label="lightbulb" className="text-yellow-500">💡</span>
            Beyond textbooks and deadlines, these years taught me just as much about life as they did about tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 