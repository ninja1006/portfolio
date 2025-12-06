import { usePathname, useRouter } from 'next/navigation';

export const useScrollTo = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (elementId: string) => {
    // If not on home page, push to home with hash
    if (pathname !== '/') {
      router.push(`/#${elementId}`);
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