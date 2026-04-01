'use client';

import { m } from 'framer-motion';
import { BentoGridProps } from '@/app/data/types';
import { motionItem } from './MotionContainer';
import { FiLayers, FiCode, FiZap, FiRadio, FiShield, FiUsers } from 'react-icons/fi';

const icons = [
  { icon: FiLayers, color: 'text-blue-500',  shadow: '0 8px 30px rgba(59,130,246,0.45)' },
  { icon: FiCode,   color: 'text-violet-500', shadow: '0 8px 30px rgba(139,92,246,0.45)' },
  { icon: FiZap,    color: 'text-yellow-500', shadow: '0 8px 30px rgba(234,179,8,0.45)' },
  { icon: FiRadio,  color: 'text-green-500',  shadow: '0 8px 30px rgba(34,197,94,0.45)' },
  { icon: FiShield, color: 'text-red-500',    shadow: '0 8px 30px rgba(239,68,68,0.45)' },
  { icon: FiUsers,  color: 'text-orange-500', shadow: '0 8px 30px rgba(249,115,22,0.45)' },
];

export const BentoGrid = ({ title, items, className = '' }: BentoGridProps) => {
  return (
    <m.div variants={motionItem} className={`mt-16 ${className}`}>
      <h3
        className='text-xl font-semibold mb-8 text-center text-foreground'
        id='bento-grid-heading'
      >
        {title}
      </h3>

      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-4'
        role='list'
        aria-labelledby='bento-grid-heading'
      >
        {items.map((item, index) => {
          const { icon: Icon, color, shadow } = icons[index % icons.length];

          return (
            <m.div
              key={index}
              variants={motionItem}
              className='p-6 rounded-xl backdrop-blur-sm border border-border/50 transition-all duration-300 bg-secondary/40 flex flex-col cursor-pointer'
              role='listitem'
              whileHover={{
                y: -6,
                boxShadow: shadow,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 0.98, boxShadow: shadow }}
            >
              <h4 className='text-lg font-medium mb-3 text-foreground flex items-center gap-2'>
                {item.title}
                <Icon className={`w-5 h-5 ${color} flex-shrink-0`} />
              </h4>
              <p className='text-muted-foreground'>{item.description}</p>
            </m.div>
          );
        })}
      </div>
    </m.div>
  );
};
