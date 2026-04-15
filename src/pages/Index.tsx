import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FloatingTrinkets from '@/components/FloatingTrinkets';
import AboutCluster from '@/components/AboutCluster';
import SkillsCollection from '@/components/SkillsCollection';
import ProjectsBoard from '@/components/ProjectsBoard';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="grain min-h-screen relative">
      <HeroSection onEnter={() => setEntered(true)} />

      <div
        className={`transition-all duration-1000 ease-out ${
          entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <FloatingTrinkets />
        <FloatingNav />

        <main className="relative z-10 pt-8">
          <section id="about">
            <AboutCluster />
          </section>

          <section id="skills">
            <SkillsCollection />
          </section>

          <section id="projects">
            <ProjectsBoard />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
