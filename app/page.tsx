import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./components/About').then((mod) => mod.About));
const Projects = dynamic(() => import('./components/Projects').then((mod) => mod.Projects));
const Skills = dynamic(() => import('./components/Skills').then((mod) => mod.Skills));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
