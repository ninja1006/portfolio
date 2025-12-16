'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CardGrid } from './shared/CardGrid';
import { ProjectCard } from './shared/ProjectCard';
import { projects } from '../data/projects';
import { Project } from '../data/types';

interface ProjectsProps {
  dict: any;
}

export function Projects({ dict }: ProjectsProps) {
  // Merge static data with dictionary translations
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
      renderCard={(project) => (
        <ProjectCard
          project={project}
          inDevelopmentText={dict.projects.inDevelopment}
          noImageText={dict.projects.noImage}
          viewOnGithubText={dict.projects.viewOnGithub}
        />
      )}
    />
  );
}
