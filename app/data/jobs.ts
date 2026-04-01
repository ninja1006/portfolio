export interface Job {
  key: string;
  period: string;
  technologies: string[];
}

export const jobs: Job[] = [
  {
    key: 'Smile',
    period: '2023 - Present',
    technologies: ['React', 'Node.js(Nest.js)', 'Typescript', 'WebSockets', 'GraphQL'],
  },
  {
    key: 'Open',
    period: '2020 - 2023',
    technologies: [
      'RESTful APIs',
      'GraphQL',
      'JWT',
      'OAuth 2.0',
      'CI/CD',
      'PostgreSQL',
    ],
  },
  {
    key: '91APP',
    period: '2017 - 2020',
    technologies: ['React', 'Vue', 'Jest', 'Material UI'],
  },
];
