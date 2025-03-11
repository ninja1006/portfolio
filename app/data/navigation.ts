export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Ana Sayfa', href: 'home' },
  { name: 'Hakkımda', href: 'about' },
  { name: 'Projeler', href: 'projects' },
  { name: 'Yetenekler', href: 'skills' },
  { name: 'İletişim', href: 'contact' },
  { name: 'Blog', href: 'blog' },
];
