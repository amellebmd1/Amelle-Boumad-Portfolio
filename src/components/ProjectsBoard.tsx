import ProjectCard from './ProjectCard';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    title: 'Slerting — Mobile App',
    description: 'A wellness app designed to help users build mindful daily routines. Focused on gentle onboarding and intuitive navigation.',
    role: 'UX/UI Designer',
    tools: ['Figma', 'Prototyping', 'User Research'],
    image: project1,
  },
  {
    title: 'Rcotile — Website Redesign',
    description: 'Responsive e-commerce redesign with a playful, accessible interface. Desktop and mobile-first approach.',
    role: 'UI Designer',
    tools: ['Figma', 'HTML/CSS', 'Design System'],
    image: project2,
  },
  {
    title: 'Bronnatce — Brand Identity',
    description: 'Complete brand identity system including logo, typography, color palette, and stationery design for a luxury wellness brand.',
    role: 'Brand Designer',
    tools: ['Illustrator', 'Photoshop', 'Typography'],
    image: project3,
  },
];

const ProjectsBoard = () => (
  <div className="w-full max-w-5xl mx-auto py-12 px-4">
    <p className="font-display text-xs text-muted-foreground tracking-[0.2em] uppercase mb-8 text-center">
      ✦ projects ✦
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
