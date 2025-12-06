'use client';

import { m } from 'framer-motion';
import { SectionHeaderProps } from '@/app/data/types';

export const SectionHeader = ({
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
        {title}
      </h2>
      {subtitle && (
        <p className='text-xl text-primary font-medium'>{subtitle}</p>
      )}
    </m.div>
  );
};
