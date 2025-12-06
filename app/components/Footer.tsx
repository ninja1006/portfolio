'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useScrollTo } from '../hooks/useScrollTo';
import { socialLinks } from '../data/social';
import Link from 'next/link';

interface FooterProps {
  dict: any;
}

export const Footer = ({ dict }: FooterProps) => {
  const scrollTo = useScrollTo();

  const currentYear = new Date().getFullYear();

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollTo(href);
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  // Reconstruct nav items from dict
  const navItems = [
    { name: dict.nav.home, href: 'home', isRoute: false },
    { name: dict.nav.about, href: 'about', isRoute: false },
    { name: dict.nav.projects, href: 'projects', isRoute: false },
    { name: dict.nav.blog, href: '/blog', isRoute: true },
    { name: dict.nav.contact, href: 'contact', isRoute: false },
  ];

  return (
    <footer className='bg-zinc-900/50 border-t border-zinc-800 py-12' id='contact'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* About section */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-foreground'>{dict.footer.aboutTitle}</h3>
            <p className='text-muted-foreground mb-4'>
              {dict.footer.aboutDesc}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-foreground'>{dict.footer.linksTitle}</h3>
            <ul className='space-y-2'>
              {navItems.map((link) => (
                <li key={link.href}>
                  {link.isRoute ? (
                    <Link
                      href={link.href}
                      className='text-muted-foreground hover:text-primary transition-colors duration-300'
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={`#${link.href}`}
                      className='text-muted-foreground hover:text-primary transition-colors duration-300'
                      tabIndex={0}
                      aria-label={link.name}
                      onClick={(e) => handleNavClick(e, link.href)}
                      onKeyDown={(e) => handleKeyDown(e, link.href)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect section */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-foreground'>{dict.footer.contactTitle}</h3>
            <div className='flex space-x-4 mb-4'>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary transition-colors duration-300'
                    tabIndex={0}
                    aria-label={link.label}
                    onKeyDown={(e) => handleKeyDown(e, link.href)}
                  >
                    <Icon className='w-5 h-5' />
                  </a>
                );
              })}
            </div>
            <p className='text-muted-foreground'>{dict.footer.email}: adylshay@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-border my-8'></div>

        {/* Copyright */}
        <div className='text-center text-muted-foreground'>
          <p>© {currentYear} Adylsha Yumayev. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
