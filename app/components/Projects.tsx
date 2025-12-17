'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CardGrid } from './shared/CardGrid';
import { ProjectCard } from './shared/ProjectCard';
import { projects } from '../data/projects';
import { Project } from '../data/types';
import { FaGithub } from 'react-icons/fa';
import { useDictionary } from '../context/DictionaryContext';

export function Projects() {
  const dict = useDictionary();
  const translatedProjects = projects.map((project) => ({
    ...project,
    title: dict.projects.items[project.key]?.title || project.title,
    description: dict.projects.items[project.key]?.desc || project.description,
  }));

  return (
    <CardGrid<Project>
      id='projects'
      title={dict.projects.title}
      subtitle={dict.projects.subtitle}
      items={translatedProjects}
      maxWidth='max-w-6xl'
      enableMobileScroll={true}
      actionButton={{
        text: dict.projects.viewAllProjects,
        href: 'https://github.com/AdylshaY?tab=repositories',
        icon: <FaGithub className='w-5 h-5' />,
      }}
      renderCard={(project) => <ProjectCard project={project} />}
    />
  );
}
