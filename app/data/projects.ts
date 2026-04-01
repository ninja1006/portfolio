import { Project } from './types';

export const projects: (Project & { key: string })[] = [
  {
    key: 'Smile',
    title: 'Smile',
    description:
      'Designed and implemented enterprise-grade full stack platforms using React, Node.js, and TypeScript, significantly improving system scalability and maintainability across multiple business domains.',
    // githubUrl: 'https://github.com/AdylshaY/YumaIdentity',
    githubUrl:"https://www.smile.eu/en",
    technologies: [
      'React',
      'React',
      'React',
      'React',
      'React',
      'React',
      'React',
    ],
    complete: false,
  },
  {
    key: 'Open',
    title: 'Open',
    description:
      'Developed and maintained high-performance backend services using Node.js and Django, supporting large-scale production systems.',
    // githubUrl: 'https://github.com/AdylshaY/dalle-clone',
    githubUrl: 'https://www.open.global/en',
    image: '/dalle-clone.png',
    technologies: [
      'Node.js',
      'Node.js',
      'Node.js',
      'Node.js',
      'Node.js',
      'Node.js',
    ],
    complete: true,
  },
  {
    key: '91APP',
    title: '91APP',
    description:
      'Developed dynamic single-page applications (SPAs) using React and Vue, delivering seamless user experiences.',
    // githubUrl: 'https://github.com/AdylshaY/nextjs-airbnb-clone',
    githubUrl: 'https://www.91app.com/en',

    image: '/airbnb-clone.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Zustand', 'Prisma', 'MongoDB'],
    complete: true,
  },
  {
    key: 'Smile',
    title: 'Smile',
    description:
      'Architected and deployed microservices-based backend systems with NestJS, enabling modular development and reducing deployment risk in distributed environments.',
    // githubUrl: 'https://github.com/AdylshaY/nextjs-twitter-clone',
    githubUrl: 'https://www.smile.eu/en',

    image: '/twitter-image.png',
    technologies: [
      'Tailwind CSS',
      'Tailwind CSS',
      'Tailwind CSS',
      'Tailwind CSS',
      'Tailwind CSS',
    ],
    complete: true,
  },
  {
    key: 'Open',
    title: 'Open',
    description:
      'Designed RESTful APIs and GraphQL endpoints to enable seamless communication between frontend and backend systems.',
    // githubUrl: 'https://github.com/AdylshaY/ai-prompt-app',
    githubUrl: 'https://www.open.global/en',
    image: '/prompt-app.png',
    technologies: ['Next.js', 'Next.js', 'Next.js', 'Next.js'],
    complete: true,
  },
  {
    key: '91APP',
    title: '91APP',
    description:
      'Implemented responsive UI designs ensuring cross-browser compatibility and mobile-first performance.',
    // githubUrl: 'https://github.com/AdylshaY/habit_tracker_app',
    githubUrl: 'https://www.91app.com/en',
    technologies: [
      'Vue.js',
      'Vue.js',
      'Vue.js',
      'Vue.js',
      'Vue.js',
      'Vue.js',
      'Vue.js',
    ],
    complete: true,
  },
];
