# Aditya Malode Portfolio

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features a custom parallax background, smooth animations, and a clean, dark-mode design.

## Features

- 🎨 Modern dark-mode design
- 🌟 Interactive parallax background
- 📱 Fully responsive layout
- ⚡ Smooth scroll and animations
- 🎯 Section-based navigation
- 🎭 Framer Motion animations

## Tech Stack

- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Hero Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adityamalode/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`.

## Deployment

This site is deployed using GitHub Pages. To deploy:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at `https://adityamalode.github.io/portfolio`.

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#00BCD4',
      dark: '#121212',
    },
  },
}
```

### Content
Update the content in the respective component files:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Projects.tsx` - Project cards
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Contact.tsx` - Contact information

## License

This project is licensed under the MIT License - see the LICENSE file for details.
