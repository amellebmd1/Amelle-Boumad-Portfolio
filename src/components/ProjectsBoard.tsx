import ProjectCard from './ProjectCard';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import adecawebFull from '@/assets/adecaweb-full.jpeg';
import adecawebMockup from '@/assets/adecaweb-mockup.jpg';
import anastasiaAffiche from '@/assets/anastasia-affiche.png';
import leaImacMockup from '@/assets/lea-imac-mockup.jpg';

const projects = [
  {
    title: 'ADECAWEB — Refonte Site Web',
    description: 'Refonte du site web pour association étudiante ADECAWEB sur Wordpress. ',
    role: 'Web Developpeur',
    tools: ['Figma', 'WordPress', 'HTML/CSS'],
    fullMockupImage: adecawebMockup,
    expandedImage: adecawebFull,
    longDescription: `L'ADECAWEB est l'association du Master CAWEB de l'Université de Strasbourg. Elle a pour mission d'animer la vie du master à travers différents événements et projets destinés à rassembler les étudiants.

Au sein de l'association, j'ai eu l'occasion d'être impliquée à plusieurs niveaux : en tant que vice-présidente, mais aussi en tant que stagiaire web développeuse lors de la refonte du site internet.

Ce projet avait pour objectif de moderniser l'image de l'association et de proposer une expérience plus actuelle et accessible. J'ai participé à l'ensemble du processus de création : réflexion autour de l'identité visuelle, maquettage sur Figma, intégration et développement sur WordPress, ainsi qu'à la communication de l'association sur les réseaux sociaux.

Ce projet m'a permis de travailler à la fois sur des aspects créatifs, techniques et collaboratifs au sein d'une structure étudiante.

Retrouvez les réseaux de l'association ici :`,
    instagramUrl: 'https://www.instagram.com/adecaweb?igsh=MXZxMDdxNDR5dTlxOA==',
  },
  {
    title: 'Interview étudiants LEA - Série de vidéos',
    description: 'Série de videos interviews dans le cadre de la promotion de la licence LEA.',
    role: 'Monteur',
    tools: ['Premiere Pro', 'Traduction', 'Sous-titrage'],
    image: project2,
    fullMockupImage: leaImacMockup,
    youtubeId: 'Mj0ZjhuMwYI',
  },
  {
    title: 'Interview étudiants LEA — Affiches',
    description: 'Affiches pour promouvoir la série de vidéos',
    role: 'Designeur',
    tools: ['Illustrator', 'Photoshop', 'Typography'],
    image: project3,
    phonePreviewImage: anastasiaAffiche,
    expandedImage: anastasiaAffiche,
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
