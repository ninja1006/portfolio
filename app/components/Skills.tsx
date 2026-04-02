'use client';

import { m } from 'framer-motion';
import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer, motionItem } from './shared/MotionContainer';
import { skillsByCategory } from '../data/skills';
import { useDictionary } from '../context/DictionaryContext';

const categoryShadows = [
  '0 8px 32px rgba(59,130,246,0.45)',
  '0 8px 32px rgba(139,92,246,0.45)',
  '0 8px 32px rgba(34,197,94,0.45)',
];

export const Skills = () => {
  const dict = useDictionary();
  return (
    <SectionContainer id='skills'>
      <MotionContainer className='max-w-6xl mx-auto'>
        <SectionHeader
          title={dict.skills.title}
          subtitle={dict.skills.subtitle}
        />

        <div className='grid md:grid-cols-2 gap-8'>
          {Object.entries(skillsByCategory).map(([category, skills], catIndex) => (
            <m.div
              key={category}
              variants={motionItem}
              className='space-y-4 bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 transition-all duration-300 cursor-pointer'
              whileHover={{ y: -6, boxShadow: categoryShadows[catIndex % categoryShadows.length], transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.98, boxShadow: categoryShadows[catIndex % categoryShadows.length] }}
            >
              <h3 className='text-xl font-semibold capitalize text-primary'>
                {
                  dict.skills.categories[
                    category as keyof typeof dict.skills.categories
                  ]
                }
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors group'
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
