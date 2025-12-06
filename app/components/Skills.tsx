'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { m } from 'framer-motion';
import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer, motionItem } from './shared/MotionContainer';
import { skillsByCategory } from '../data/skills';

interface SkillsProps {
  dict: any;
}

export const Skills = ({ dict }: SkillsProps) => {
  return (
    <SectionContainer id='skills'>
      <MotionContainer className='max-w-6xl mx-auto'>
        <SectionHeader
          title={dict.skills.title}
          subtitle={dict.skills.subtitle}
        />

        <div className='grid md:grid-cols-2 gap-8'>
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <m.div
              key={category}
              variants={motionItem}
              className='space-y-4 bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors'
            >
              <h3 className='text-xl font-semibold capitalize text-primary'>
                {dict.skills.categories[category as keyof typeof dict.skills.categories]}
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group'
                  >
                    <skill.icon className='w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors' />
                    <span className='font-medium text-foreground/80 group-hover:text-foreground transition-colors'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </MotionContainer>
    </SectionContainer>
  );
};
