export interface Job {
  key: string;
  period: string;
  technologies: string[];
}

export const jobs: Job[] = [
  {
    key: 'gelecek2025',
    period: '2025 - Present',
    technologies: ['ASP.NET MVC', 'SQL Server', 'WEB API', 'Flutter', 'Dart'],
  },
  {
    key: 'gelecek2022',
    period: '2022 - 2025',
    technologies: [
      'React',
      'ASP.NET Core',
      'SQL Server',
      'T-SQL',
      'WEB API',
      'MongoDB',
    ],
  },
  {
    key: 'patika',
    period: '2022 - 2022',
    technologies: ['ASP.NET Core', 'SQL Server', 'React', 'Node.js', 'MongoDB'],
  },
];
