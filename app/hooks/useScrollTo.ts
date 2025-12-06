import { usePathname, useRouter } from 'next/navigation';

export const useScrollTo = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (elementId: string) => {
    const isHome = pathname === '/' || pathname === '/tr' || pathname === '/en';

    if (!isHome) {
      // If on a subpage, we need to go to home first
      // Check if we are in EN locale
      if (pathname.startsWith('/en')) {
        router.push(`/en#${elementId}`);
      } else {
        router.push(`/#${elementId}`);
      }
      return;
    }

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return scrollTo;
}; 