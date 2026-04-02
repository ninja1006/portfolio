import type { Metadata } from 'next';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus_Jakarta_Sans, Syne } from 'next/font/google';
import '../globals.css';
import { FramerMotionProvider } from '../components/shared/FramerMotionProvider';
import { ThemeProvider } from '../context/ThemeContext';
import { Footer } from '../components/Footer';
import { i18n } from '../../i18n-config';
import { getDictionary } from '../utils/get-dictionary';
import { DictionaryProvider } from '../context/DictionaryContext';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Iori Ito | Full Stack Engineer',
  description: 'Iori Ito - Senior Full Stack Engineer specializing in React, Vue, Node.js, Python, and TypeScript.',
  metadataBase: new URL('https://ioriito.dev/'),
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
      <body className={`${jakarta.variable} ${syne.variable}`}>
        <ThemeProvider>
          <DictionaryProvider dict={dict}>
            <FramerMotionProvider>{children}</FramerMotionProvider>
            <Footer />
          </DictionaryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
