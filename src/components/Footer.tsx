import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Aditya Malode. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 