import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Ajans Web Sitesi',
    description:
      'Next.js ile geliştirilmiş modern bir ajans web sitesi. Responsive tasarım, akıcı animasyonlar ve hizmetleri sergilemek için temiz bir kullanıcı arayüzü içerir.',
    githubUrl: 'https://github.com/AdylshaY/NextJS-Agency-App',
    technologies: ['Next.js', 'React'],
  },
  {
    title: 'Dall-E Klonu',
    description:
      'OpenAI&apos;ın DALL-E&apos;sinden esinlenen bir yapay zeka görsel oluşturma uygulaması. Kullanıcılar MERN stack kullanarak metin komutlarına dayalı yapay zeka tarafından oluşturulan görselleri oluşturabilir ve paylaşabilir.',
    githubUrl: 'https://github.com/AdylshaY/dalle-clone',
    image: '/dalle-clone.png',
    technologies: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'OpenAI API',
    ],
  },
  {
    title: 'Airbnb Klonu',
    description:
      'Airbnb web sitesinin bir klonu. Kullanıcılar mülkleri arayabilir, detayları görüntüleyebilir ve konaklama rezervasyonu yapabilir.',
    githubUrl: 'https://github.com/AdylshaY/nextjs-airbnb-clone',
    image: '/airbnb-clone.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Zustand', 'Prisma', 'MongoDB'],
  },
  {
    title: 'Twitter Klonu',
    description:
      'Twitter&apos;ın modern bir klonu. Kullanıcılar tweet atabilir, diğer kullanıcıları takip edebilir ve etkileşimde bulunabilir. Next.js ve TypeScript kullanılarak geliştirilmiş tam özellikli bir sosyal medya uygulaması.',
    githubUrl: 'https://github.com/AdylshaY/nextjs-twitter-clone',
    image: '/twitter-image.png',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Zustand',
      'NextAuth',
      'TypeScript',
    ],
  },
  {
    title: 'AI Prompt Uygulaması',
    description:
      'Kullanıcıların yapay zeka promptlarını oluşturup paylaşabilecekleri bir platform. Kullanıcılar kendi promptlarını kaydedebilir, başkalarının promptlarını keşfedebilir ve etkileşimde bulunabilir. Next.js ve modern kimlik doğrulama yöntemleri kullanılarak geliştirilmiştir.',
    githubUrl: 'https://github.com/AdylshaY/ai-prompt-app',
    image: '/prompt-app.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Bcrypt', 'NextAuth'],
  },
  {
    title: 'Mobile Pokemon App',
    description:
      "PokeAPI kullanarak clean architecture ilkelerine göre geliştirilen bir Flutter projesi. Özellikler arasında Pokémon'u getirme ve görüntüleme, ayrıntılı bilgileri görüntüleme, ada göre arama ve mobil ve web için duyarlı tasarım yer alır. Modülerlik ve sürdürülebilirlik için feature-first bir mimari ile düzenlenmiştir.",
    githubUrl: 'https://github.com/AdylshaY/flutter-clean-architecture',
    technologies: ['Flutter', 'Dart', 'Dio', 'Shared Preferences', 'Provider'],
  },
  {
    title: 'Habit Tracker App',
    description:
      'Temiz, modern bir kullanıcı arayüzü ve güçlü özelliklerle kullanıcıların alışkanlıklarını takip etmelerine ve sürdürmelerine yardımcı olan bir Flutter uygulaması.',
    githubUrl: 'https://github.com/AdylshaY/habit_tracker_app',
    technologies: [
      'Flutter',
      'Dart',
      'Dio',
      'Intl',
      'Riverpod',
      'Go Router',
      'Hive',
    ],
  },
];
