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
    longDescription: `L'ADECAWEB est l'association du Master CAWEB de l'Université de Strasbourg. Elle organise différents événements afin de créer du lien entre les étudiants et de dynamiser la vie du master.

En parallèle de mon rôle de vice-présidente, j'ai également contribué à la refonte du site internet dans le cadre d'un stage en développement web.

L'objectif était de moderniser l'image de l'association à travers une interface plus actuelle et plus claire. J'ai participé aux différentes étapes du projet, du maquettage sur Figma jusqu'au développement sur WordPress, tout en prenant part à la communication sur les réseaux sociaux.

Cette expérience m'a permis de combiner création, développement et travail d'équipe autour d'un projet concret.

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
    longDescription: `Lors de cette expérience au sein de la Faculté des langues de l'Université de Strasbourg, j'ai participé à différents projets liés à la communication et à la création de contenus.

L'objectif principal était de réaliser des vidéos sous forme d'interviews d'anciens étudiants afin de promouvoir la licence ainsi que ses débouchés. À travers ce projet, j'ai pu aborder plusieurs aspects de la production audiovisuelle, de la préparation des interviews jusqu'au montage final.

J'ai notamment participé au tournage en studio, travaillé en collaboration avec les équipes techniques son et lumière, puis réalisé le montage des vidéos sur Premiere Pro.

Cette expérience m'a permis de développer mes compétences en création vidéo, en organisation et en travail d'équipe dans un cadre professionnel.

Retrouvez la chaîne YouTube de la licence ici :`,
    youtubeChannelUrl: 'https://www.youtube.com/@LEA-UniversitédeStrasbourg',
    youtubeChannelHandle: '@LEA-UniversitédeStrasbourg',
  },
  {
    title: 'Interview étudiants LEA — Affiches',
    description: 'Affiches pour promouvoir la série de vidéos',
    role: 'Designeur',
    tools: ['Illustrator', 'Photoshop', 'Typography'],
    image: project3,
    phonePreviewImage: anastasiaAffiche,
    expandedImage: anastasiaAffiche,
    youtubeChannelUrl: 'https://www.youtube.com/@LEA-UniversitédeStrasbourg',
    youtubeChannelHandle: '@LEA-UniversitédeStrasbourg',
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
