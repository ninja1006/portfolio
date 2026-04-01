import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaMedium, FaXTwitter } from 'react-icons/fa6';

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/ninja1006',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/iori-nowak',
    label: 'LinkedIn',
  },
  // {
  //   icon: FaXTwitter,
  //   href: 'https://x.com/adylshay',
  //   label: 'Twitter',
  // },
  {
    icon: FaEnvelope,
    href: 'iorinowak1006@gmail.com',
    label: 'Email',
  },
  // {
  //   icon: FaYoutube,
  //   href: 'https://www.youtube.com/@AdylshasDevLab',
  //   label: 'YouTube',
  // },
  // {
  //   icon: FaMedium,
  //   href: 'https://medium.com/@adylshay',
  //   label: 'Medium',
  // },
]; 