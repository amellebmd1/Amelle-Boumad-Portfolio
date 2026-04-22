import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FloatingTrinkets from '@/components/FloatingTrinkets';
import AboutCluster from '@/components/AboutCluster';
import AsciiArt from '@/components/AsciiArt';
import SkillsCollection from '@/components/SkillsCollection';
import ProjectsBoard from '@/components/ProjectsBoard';
import SocialMediaProjects from '@/components/SocialMediaProjects';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="grain min-h-screen relative">
      <FloatingTrinkets />
      <FloatingNav />

      <HeroSection onEnter={() => setEntered(true)} />

      <div
        className={`transition-all duration-1000 ease-out ${
          entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >

        <main className="relative z-10 pt-8">
          <AsciiArt />

          <section id="about">
            <AboutCluster />
          </section>

          <section id="skills">
            <SkillsCollection />
          </section>

          <section id="projects">
            <ProjectsBoard />
          </section>

          <section id="social">
            <SocialMediaProjects />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
