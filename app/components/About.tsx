'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer, motionItem } from './shared/MotionContainer';
import { BentoGrid } from './shared/BentoGrid';
import { KeyPoint, WorkExperience } from '../data/types';
import { WorkExperienceTimeline } from './shared/WorkExperienceTimeline';

export const About = () => {
  const keyPoints: KeyPoint[] = [
    {
      title: "Problem Çözücü",
      description: "Karmaşık problemlere çözüm bulmaktan keyif alıyorum. Her zorluk, yeni bir öğrenme fırsatı sunuyor."
    },
    {
      title: "Sürekli Öğrenen",
      description: "Teknoloji sürekli gelişiyor ve ben de onunla birlikte gelişmeyi seviyorum. Yeni şeyler öğrenmek benim için bir tutku."
    },
    {
      title: "Full-Stack Geliştirici",
      description: "Hem frontend hem de backend alanlarında tecrübeye sahibim. Bu, projelerime bütünsel bir yaklaşım getirmemi sağlıyor."
    },
    {
      title: "Çeşitli Teknoloji Yelpazesi",
      description: "React.js, Next.js, C#, ASP.NET Core, .NET Framework, Web API, NodeJS, T-SQL, Docker, ASP.NET MVC ve Flutter gibi çeşitli teknolojilerde deneyime sahibim."
    },
    {
      title: "Çok Yönlü Bakış Açısı",
      description: "Sorunlara farklı açılardan yaklaşarak, alışılmışın dışında ve yaratıcı çözümler geliştirmeyi önemsiyorum."
    },
    {
      title: "Uyum Sağlayan",
      description: "Dinamik ortamlarda başarılı bir şekilde çalışıyor ve değişen gereksinimlere hızla uyum sağlıyorum. Bu esneklik, beklenmedik zorluklarla etkili bir şekilde başa çıkmamı sağlıyor."
    }
  ];

  const workExperiences: WorkExperience[] = [
    {
      company: "Gelecek Varlık Yönetimi ",
      position: "Junior Full Stack Developer",
      period: "2022 - Günümüz",
      description: "Şirket içerisinde kullanılan uygulamaların geliştirilmesi ve bakımından sorumluyum. Farklı teknolojiler kullanarak projeler geliştiriyorum. Geliştirmeler sırasında gerekli durumlarda veritabanı sorgularını yazıyorum.",
      technologies: [
        "React",
        "ASP.NET Core",
        "SQL Server",
        "T-SQL",
        "WEB API",
        "MongoDB"
      ]
    },
    {
      company: "Gelecek Varlık Yönetimi - Patika",
      position: "Bootcamp Öğrencisi",
      period: "2022 - 2022",
      description: "Patika.dev platformunda verilen eğitimleri tamamladım ve bu süreçte yazılım geliştirme alanında temelleri öğrendim. Sonrasında mülakatları geçerek Gelecek Varlık Yönetimi&apos;nde Junior Full Stack Developer olarak işe başladım.",
      technologies: [
        "ASP.NET Core",
        "SQL Server",
        "React",
        "Node.js",
        "MongoDB"
      ]
    }
  ];

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
