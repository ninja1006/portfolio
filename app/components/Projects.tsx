'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer } from './shared/MotionContainer';
import { ProjectCard } from './shared/ProjectCard';
import { Project } from '../data/types';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';

export function Projects() {
  const [windowWidth, setWindowWidth] = useState(0);

  // Define projects directly
  const projects: Project[] = [
    {
      title: "Ajans Web Sitesi",
      description: "Next.js ile geliştirilmiş modern bir ajans web sitesi. Responsive tasarım, akıcı animasyonlar ve hizmetleri sergilemek için temiz bir kullanıcı arayüzü içerir.",
      githubUrl: "https://github.com/AdylshaY/NextJS-Agency-App",
      technologies: ["Next.js", "React"]
    },
    {
      title: "Dall-E Klonu",
      description: "OpenAI&apos;ın DALL-E&apos;sinden esinlenen bir yapay zeka görsel oluşturma uygulaması. Kullanıcılar MERN stack kullanarak metin komutlarına dayalı yapay zeka tarafından oluşturulan görselleri oluşturabilir ve paylaşabilir.",
      githubUrl: "https://github.com/AdylshaY/dalle-clone",
      image: "/dalle-clone.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "OpenAI API"
      ]
    },
    {
      title: "Airbnb Klonu",
      description: "Airbnb web sitesinin bir klonu. Kullanıcılar mülkleri arayabilir, detayları görüntüleyebilir ve konaklama rezervasyonu yapabilir.",
      githubUrl: "https://github.com/AdylshaY/nextjs-airbnb-clone",
      image: "/airbnb-clone.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "Prisma",
        "MongoDB"
      ]
    },
    {
      title: "Twitter Klonu",
      description: "Twitter&apos;ın modern bir klonu. Kullanıcılar tweet atabilir, diğer kullanıcıları takip edebilir ve etkileşimde bulunabilir. Next.js ve TypeScript kullanılarak geliştirilmiş tam özellikli bir sosyal medya uygulaması.",
      githubUrl: "https://github.com/AdylshaY/nextjs-twitter-clone",
      image: "/twitter-image.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "NextAuth",
        "TypeScript"
      ]
    },
    {
      title: "AI Prompt Uygulaması",
      description: "Kullanıcıların yapay zeka promptlarını oluşturup paylaşabilecekleri bir platform. Kullanıcılar kendi promptlarını kaydedebilir, başkalarının promptlarını keşfedebilir ve etkileşimde bulunabilir. Next.js ve modern kimlik doğrulama yöntemleri kullanılarak geliştirilmiştir.",
      githubUrl: "https://github.com/AdylshaY/ai-prompt-app",
      image: "/prompt-app.png",
      technologies: ["Next.js", "Tailwind CSS", "Bcrypt", "NextAuth"]
    }
  ];

  // Update window width on client side
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine how many cards to show based on screen width
  const getItemsToShow = () => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const itemsToShow = getItemsToShow();

  return (
    <SectionContainer id='projects'>
      <MotionContainer className='max-w-6xl mx-auto'>
        <SectionHeader
          title='Projelerim'
          subtitle='Öne çıkan projelerimden bazıları'
        />

        {/* Projects Carousel */}
        <div className='relative pb-12'>
          <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay
            interval={5000}
            infiniteLoop
            showArrows
            showIndicators={false}
            centerMode
            swipeable
            centerSlidePercentage={100 / itemsToShow}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  className='absolute left-0  top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-primary hover:bg-background/90 transition-all -ml-4'
                  aria-label='Previous slide'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 19.5L8.25 12l7.5-7.5'
                    />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  className='absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-primary hover:bg-background/90 transition-all -mr-4'
                  aria-label='Next slide'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.25 4.5l7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </button>
              )
            }
          >
            {projects.map((project, index) => (
              <div key={index} className='px-4 h-full'>
                <ProjectCard project={project} />
              </div>
            ))}
          </Carousel>
        </div>
      </MotionContainer>
    </SectionContainer>
  );
}
