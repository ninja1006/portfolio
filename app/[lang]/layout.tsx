import type { Metadata } from 'next';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inter } from 'next/font/google';
import '../globals.css';
import { FramerMotionProvider } from '../components/shared/FramerMotionProvider';
import { Footer } from '../components/Footer';
import { i18n } from '../../i18n-config';
import { getDictionary } from '../utils/get-dictionary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adylsha Yumayev | Full Stack Developer',
  description:
    'Adylsha Yumayev - Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and modern web technologies.',
  metadataBase: new URL('https://yumayev.dev/'),
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <html lang={lang}>
      <head>
        <meta name='color-scheme' content='dark' />
        <meta name='color-profile' content='sRGB' />
      </head>
      <body className={inter.className}>
        <FramerMotionProvider>{children}</FramerMotionProvider>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
