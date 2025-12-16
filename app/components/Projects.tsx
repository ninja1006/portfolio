'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer } from './shared/MotionContainer';
import { ProjectCard } from './shared/ProjectCard';
import { projects } from '../data/projects';

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
    <SectionContainer id='projects'>
      <MotionContainer className='max-w-6xl mx-auto'>
        <SectionHeader
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
        />

        {/* Projects Grid/Scroll */}
        <div className='flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide'>
          {translatedProjects.map((project, index) => (
            <div
              key={index}
              className='min-w-[85vw] sm:min-w-[calc(50%-12px)] md:min-w-0 snap-center h-full'
            >
              <ProjectCard
                project={project}
                inDevelopmentText={dict.projects.inDevelopment}
                noImageText={dict.projects.noImage}
                viewOnGithubText={dict.projects.viewOnGithub}
              />
            </div>
          ))}
        </div>
      </MotionContainer>
    </SectionContainer>
  );
}
