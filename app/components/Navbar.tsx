'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  dict: any;
}

export const Navbar = ({ dict }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();
  const navbarRef = useRef<HTMLDivElement>(null);


  // Let's stick to dict keys. Original: Home, About, Projects, Skills, Blog, Contact.
  // My dict has: home, about, projects, education, blog, contact. I missed "skills".
  // I will add skills to dict in a follow up or just use hardcoded key mapping for now.
  // Let's assume skills maps to `dict.skills.title` or I add `skills` to `dict.nav`.

  // Re-creating the nav items based on what `dict.nav` has + mapping to hrefs.
  // Dict nav keys: home, about, projects, (education - wait, do I have education section?), blog, contact.
  // Existing sections: home (#home), about (#about), projects (#projects), skills (#skills), blog (/blog), contact (#contact).
  // I should update dict.nav to include skills and remove education if not used. 
  // Or just map what I have.

  const items = [
    { name: dict.nav.home, href: 'home', isRoute: false },
    { name: dict.nav.about, href: 'about', isRoute: false },
    { name: dict.nav.projects, href: 'projects', isRoute: false },
    { name: dict.skills.title, href: 'skills', isRoute: false },
    { name: dict.nav.blog, href: '/blog', isRoute: true },
    { name: dict.nav.contact, href: 'contact', isRoute: false },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);



  // Helper for navigation
  const handleLinkClick = (e: any, item: any) => {
    if (item.isRoute) {
      // standard navigation, don't prevent default unless we want to close menu first?
      setIsOpen(false);
      return;
    }
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      scrollTo(item.href);
    }, 100);
  }


  return (
    <div className='fixed top-0 w-full z-50' ref={navbarRef}>
      {/* Blur Background */}
      <div className='absolute inset-0 bg-background/30 backdrop-blur-xl' />

      {/* Shadow and Border Overlay */}
      <div className='absolute inset-0'>
        <div className='absolute inset-x-0 top-0 h-full bg-gradient-to-b from-primary/5 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent' />
      </div>

      <nav className='relative' aria-label='Main Navigation'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <Link
              href='/'
              className='flex items-center'
              aria-label='Homepage'
              tabIndex={0}
            >
              <m.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className='text-2xl font-bold bg-primary text-primary-foreground px-3 py-1 rounded-lg shadow-lg shadow-primary/25'
              >
                AY
              </m.div>
            </Link>

            {/* Desktop Navigation */}
            <div
              className='hidden md:flex items-center space-x-8'
              role='navigation'
            >
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.isRoute ? item.href : `#${item.href}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  className='text-foreground hover:text-primary transition-colors duration-200 relative group'
                >
                  {item.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full' />
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button - Left LanguageSwitcher outside mobile menu or inside? Inside looks cleaner for mobile */}
            <div className="flex md:hidden items-center gap-4">
              <LanguageSwitcher />
              <button
                className='p-2 text-foreground hover:text-primary transition-colors'
                onClick={() => setIsOpen(!isOpen)}
                aria-label='Toggle menu'
                aria-expanded={isOpen}
              >
                <div className='w-6 h-5 relative flex flex-col justify-between'>
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                      }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                      }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <m.nav
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0 }}
            className='md:hidden overflow-hidden bg-background/50 backdrop-blur-lg rounded-b-lg'
            role={isOpen ? 'menu' : undefined}
          >
            <div className='pb-4 space-y-2'>
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.isRoute ? item.href : `#${item.href}`}
                  onClick={(e) => handleLinkClick(e, item)}
                  className='block py-2 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </m.nav>
        </div>
      </nav>
    </div>
  );
};
