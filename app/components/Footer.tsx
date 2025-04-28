'use client';

import { useScrollTo } from '../hooks/useScrollTo';
import { socialLinks } from '../data/social';
import { navItems } from '../data/navigation';

export const Footer = () => {
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

  return (
    <footer className='bg-gray-900 text-white py-12' id='contact'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* About section */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Hakkımda</h3>
            <p className='text-gray-300 mb-4'>
              Modern teknolojilerle yenilikçi ve sürdürülebilir çözümler
              geliştiren, detaylara önem veren bir Full Stack Developer’ım.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Hızlı Bağlantılar</h3>
            <ul className='space-y-2'>
              {navItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className='text-gray-300 hover:text-white transition-colors duration-300'
                    tabIndex={0}
                    aria-label={link.name}
                    onClick={(e) => handleNavClick(e, link.href)}
                    onKeyDown={(e) => handleKeyDown(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect section */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Benimle İletişime Geç</h3>
            <div className='flex space-x-4 mb-4'>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white transition-colors duration-300'
                    tabIndex={0}
                    aria-label={link.label}
                    onKeyDown={(e) => handleKeyDown(e, link.href)}
                  >
                    <Icon className='w-5 h-5' />
                  </a>
                );
              })}
            </div>
            <p className='text-gray-300'>E-posta: adylshay@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 my-8'></div>

        {/* Copyright */}
        <div className='text-center text-gray-400'>
          <p>© {currentYear} Adylshay Yumayev. Tüm Hakları Saklıdır</p>
        </div>
      </div>
    </footer>
  );
};
