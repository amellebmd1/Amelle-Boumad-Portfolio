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
  const handleEnter = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="grain min-h-screen relative">
      <FloatingTrinkets />
      <FloatingNav />

      <HeroSection onEnter={handleEnter} />

      <div>
        <main className="relative z-10 pt-8">
          <section id="about">
            <AboutCluster />
          </section>

          <AsciiArt />

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
