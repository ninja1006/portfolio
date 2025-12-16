'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { motionItem } from './MotionContainer';
import { Project } from '../../data/types';
import { FaGithub } from 'react-icons/fa';
interface ProjectCardProps {
  project: Project;
  inDevelopmentText?: string;
  noImageText?: string;
  viewOnGithubText?: string;
}

export const ProjectCard = ({
  project,
  inDevelopmentText = 'In Development',
  noImageText = 'No image added yet',
  viewOnGithubText = 'View on GitHub',
}: ProjectCardProps) => {
  const handleKeyboardNavigation = (
    e: React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(project.githubUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <m.div
      variants={motionItem}
      className='group relative bg-secondary/50 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col h-full'
    >
      {/* Project Image or Placeholder */}
      <div className='relative h-48 overflow-hidden'>
        {/* Development Status Badge */}
        {project.complete === false && (
          <div className='absolute top-2 right-2 z-10'>
            <span className='px-2 py-1 text-xs font-semibold bg-yellow-500/90 text-white rounded-full shadow-sm backdrop-blur-sm flex items-center gap-1'>
              <span className='w-2 h-2 rounded-full bg-white animate-pulse' />
              {inDevelopmentText}
            </span>
          </div>
        )}
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
          </>
        ) : (
          <div className='absolute inset-0 bg-primary/5 flex items-center justify-center'>
            {/* Animated background blobs */}
            <div className='absolute inset-0 overflow-hidden'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full filter blur-3xl animate-blob' />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-600/20 rounded-full filter blur-3xl animate-blob2' />
            </div>
            {/* Placeholder text */}
            <span className='text-muted-foreground/50 text-sm font-medium relative'>
              {noImageText}
            </span>
            <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className='p-6 flex flex-col flex-1'>
        <div className='flex-1'>
          <h3 className='text-xl font-semibold mb-2 text-justify'>
            {project.title}
          </h3>
          <p className='text-muted-foreground mb-4 text-justify line-clamp-3'>
            {project.description}
          </p>

          {/* Technologies */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className='px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Button */}
        <Link
          href={project.githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 duration-300'
          aria-label={`${viewOnGithubText}: ${project.title}`}
          tabIndex={0}
          onKeyDown={handleKeyboardNavigation}
        >
          <FaGithub className='w-5 h-5' />
          <span>{viewOnGithubText}</span>
        </Link>
      </div>
    </m.div>
  );
};
