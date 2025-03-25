import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ContactItem {
  icon: IconType | React.FC<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}

const IconWrapper = ({ 
  icon: Icon, 
  className 
}: { 
  icon: IconType | React.FC<{ className?: string }>; 
  className?: string 
}) => {
  const Component = Icon as React.FC<{ className?: string }>;
  return <Component className={className} />;
};

const Contact: React.FC = () => {
  const contactInfo: ContactItem[] = [
    {
      icon: EnvelopeIcon as React.FC<{ className?: string }>,
      label: 'Email',
      value: 'aditya.malode01@gmail.com',
      href: 'mailto:aditya.malode01@gmail.com',
    },
    {
      icon: PhoneIcon as React.FC<{ className?: string }>,
      label: 'Phone (US)',
      value: '+1 (762) 310-9430',
      href: 'tel:+17623109430',
    },
    {
      icon: GlobeAltIcon as React.FC<{ className?: string }>,
      label: 'Portfolio',
      value: 'www.AdityaMalode.com',
      href: 'https://www.AdityaMalode.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/am6720',
      href: 'https://linkedin.com/in/am6720',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Ady-6720',
      href: 'https://github.com/Ady-6720',
    },
  ];

  return (
    <section id="contact" className="section-padding text-white">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-4xl font-extrabold mb-6 md:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Let's Connect
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
              >
                <IconWrapper 
                  icon={item.icon} 
                  className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:text-cyan-300" 
                />
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-gray-400">{item.label}</span>
                  <span className="text-sm md:text-base font-medium text-white group-hover:text-cyan-300">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-xs md:text-sm text-gray-400 mt-6 md:mt-12"
          >
            Feel free to reach out! I'm always excited to connect and discuss new opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 