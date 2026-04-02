'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer, motionItem } from './shared/MotionContainer';
import { useDictionary } from '../context/DictionaryContext';
import { useTheme } from '../context/ThemeContext';

export const Education = () => {
  const dict = useDictionary();
  const { theme, isReady } = useTheme();

  return (
    <SectionContainer id='education'>
      <MotionContainer className='max-w-6xl mx-auto'>
        <SectionHeader
          title={dict.education.title}
          subtitle={dict.education.subtitle}
        />

        <m.div
          variants={motionItem}
          className='mx-auto max-w-4xl'
        >
          <div className='overflow-hidden rounded-[2rem] border border-primary/10 bg-secondary/30 shadow-xl backdrop-blur-sm'>
            <div className='relative h-64 overflow-hidden bg-secondary/40 sm:h-72 lg:h-80'>
              <Image
                src='/ntust.jpg'
                alt={dict.education.imageAlt}
                fill
                sizes='(max-width: 1024px) 100vw, 896px'
                className='h-full w-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent' />
              {/* Logo at bottom-right of image */}
              <div className='absolute bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-black/50 px-3 py-2 backdrop-blur-sm'>
                <h3 className='text-sm font-bold text-white sm:text-base'>
                  {dict.education.degree}
                </h3>
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-black text-black dark:text-white shadow-sm'>
                  <FaGraduationCap className='h-5 w-5' />
                </div>
              </div>
            </div>

            <div className='p-6 sm:p-8'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-primary'>
                {dict.education.label}
              </p>
              <div className='mt-3 flex items-start gap-4'>
                <h3 className='text-2xl font-bold text-foreground sm:text-3xl'>
                  {dict.education.degree}
                </h3>
              </div>
              <p className='mt-3 text-lg font-medium text-foreground/90'>
                {dict.education.department}
              </p>
              <p className='mt-1 text-base text-primary'>
                {dict.education.school}
              </p>

              <div className='mt-7 rounded-[1.75rem] bg-secondary/50 p-5 dark:bg-slate-800/95 sm:p-6'>
                <div className='space-y-4 text-justify leading-7'>
                  <p className='education-desc'>
                    {dict.education.p1}
                  </p>
                  <p className='education-desc'>
                    {dict.education.p2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </MotionContainer>
    </SectionContainer>
  );
};
