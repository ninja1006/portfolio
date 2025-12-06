import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import dynamic from 'next/dynamic';
import { getDictionary } from '../utils/get-dictionary';
import { Locale } from '../../i18n-config';

const About = dynamic(() => import('../components/About').then((mod) => mod.About));
const Projects = dynamic(() => import('../components/Projects').then((mod) => mod.Projects));
const Skills = dynamic(() => import('../components/Skills').then((mod) => mod.Skills));

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <Navbar dict={dict} />
      <Hero dict={dict} />
      <About dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
    </main>
  );
}
