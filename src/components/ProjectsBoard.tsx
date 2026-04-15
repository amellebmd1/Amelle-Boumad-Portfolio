import ProjectCard from './ProjectCard';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    title: 'ADECAWEB — Refonte Site Web',
    description: 'Refonte du site web pour association étudiante ADECAWEB sur Wordpress. ',
    role: 'Web Developpeur',
    tools: ['Figma', 'WordPress', 'HTML/CSS'],
    image: project1,
  },
  {
    title: 'Interview étudiants LEA - Série de vidéos',
    description: 'Série de videos interviews dans le cadre de la promotion de la licence LEA.'
    role: 'Monteur',
    tools: ['Premiere Pro', 'Traduction', 'Sous-titrage'],
    image: project2,
  },
  {
    title: 'Interview étudiants LEA — Affiches',
    description: 'Affiches pour promouvoir la série de vidéos',
    role: 'Designeur'
    tools: ['Illustrator', 'Photoshop', 'Typography'],
    image: project3,
  },
];

const ProjectsBoard = () => (
  <div className="w-full max-w-6xl mx-auto py-16 px-6">
    <p className="font-display text-sm text-muted-foreground tracking-[0.2em] uppercase mb-10 text-center">
      ✦ projects ✦
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div
          key={p.title}
          className="animate-fade-in-up"
          style={{
            animationDelay: `${i * 0.15}s`,
            animationFillMode: 'backwards',
            transform: i === 1 ? 'translateY(20px)' : undefined,
          }}
        >
          <ProjectCard {...p} />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsBoard;
