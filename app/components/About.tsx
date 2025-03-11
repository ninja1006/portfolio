'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer, motionItem } from './shared/MotionContainer';
import { BentoGrid } from './shared/BentoGrid';
import { WorkExperienceTimeline } from './shared/WorkExperienceTimeline';
import { keyPoints, workExperiences } from '../data/about';

export const About = () => {
  return (
    <SectionContainer id='about'>
      <MotionContainer className='max-w-4xl mx-auto'>
        <SectionHeader
          title='Hakkımda'
          subtitle='Tutkulu bir Full Stack Developer'
        />

        {/* Description */}
        <motion.div
          variants={motionItem}
          className='space-y-6 text-muted-foreground text-justify'
        >
          <p>Yazılım geliştirme sürecinin her aşamasında aktif rol almaktan keyif alıyorum. Frontend&apos;den backend&apos;e, veritabanı yönetiminden sistem mimarisine kadar geniş bir yelpazede çalışmalar yapıyorum.</p>
          <p>Karmaşık problemleri basit ve etkili çözümlere dönüştürmeyi seviyorum. Analitik düşünme ve mantık yürütme becerilerimi kullanarak her projede en optimum çözümü bulmaya çalışıyorum.</p>
          <p>Teknoloji dünyasındaki hızlı değişime ayak uydurmak için sürekli kendimi geliştiriyor, yeni araçlar ve metodolojiler öğreniyorum.</p>
        </motion.div>

        {/* Key Points using BentoGrid component */}
        <BentoGrid
          title='Öne Çıkan Özelliklerim'
          items={keyPoints}
        />

        {/* Work Experience Timeline */}
        <WorkExperienceTimeline
          title='İş Tecrübem'
          subtitle='Profesyonel kariyerimde edindiğim deneyimler'
          experiences={workExperiences}
        />
      </MotionContainer>
    </SectionContainer>
  );
};
