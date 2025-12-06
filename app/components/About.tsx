'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { m } from 'framer-motion';
import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer, motionItem } from './shared/MotionContainer';
import { BentoGrid } from './shared/BentoGrid';
import { WorkExperienceTimeline } from './shared/WorkExperienceTimeline';
import { Certificates } from './Certificates';
import { KeyPoint } from '../data/types';

interface AboutProps {
  dict: any;
}

export const About = ({ dict }: AboutProps) => {
  const keyPoints = Object.values(dict.about.keyPoints) as KeyPoint[];

  // Fix tech stack mapping
  const getTechs = (jobKey: string) => {
    if (jobKey === 'gelecek2025') return ['ASP.NET MVC', 'SQL Server', 'WEB API', 'Flutter', 'Dart'];
    if (jobKey === 'gelecek2022') return ['React', 'ASP.NET Core', 'SQL Server', 'T-SQL', 'WEB API', 'MongoDB'];
    if (jobKey === 'patika') return ['ASP.NET Core', 'SQL Server', 'React', 'Node.js', 'MongoDB'];
    return [];
  }

  const jobs = Object.entries(dict.about.jobs).map(([key, job]: [string, any]) => ({
    company: job.title,
    position: job.role,
    period: job.period,
    description: job.desc,
    technologies: getTechs(key)
  }));


  return (
    <SectionContainer id='about'>
      <MotionContainer className='max-w-4xl mx-auto'>
        <SectionHeader
          title={dict.about.title}
          subtitle={dict.about.subtitle}
        />

        {/* Description */}
        <m.div
          variants={motionItem}
          className='space-y-6 text-muted-foreground text-justify'
        >
          <p>{dict.about.p1}</p>
          <p>{dict.about.p2}</p>
          <p>{dict.about.p3}</p>
        </m.div>

        {/* Key Points using BentoGrid component */}
        <BentoGrid
          title={dict.about.keyPointsTitle}
          items={keyPoints}
        />

        {/* Work Experience Timeline */}
        <WorkExperienceTimeline
          title={dict.about.experienceTitle}
          subtitle={dict.about.experienceSubtitle}
          experiences={jobs}
        />

        {/* Certificates Section */}
        <div className='mt-16'>
          <Certificates dict={dict} />
        </div>
      </MotionContainer>
    </SectionContainer>
  );
};
