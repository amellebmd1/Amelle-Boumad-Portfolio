const skills = [
  { name: 'Figma', bg: 'bg-sage' },
  { name: 'Photoshop', bg: 'bg-lavender' },
  { name: 'Illustrator', bg: 'bg-peach' },
      { name: 'Premiere Pro', bg: 'bg-cream' },
  { name: 'After Effect', bg: 'bg-soft-pink' },
  { name: 'WordPress', bg: 'bg-sage' },
  { name: 'PHP', bg: 'bg-lavender' },
  { name: 'Javascript', bg: 'bg-peach' },
  { name: 'HTML/CSS', bg: 'bg-cream' },
  { name: 'Anglais', bg: 'bg-soft-pink' },
  { name: 'Japonais', bg: 'bg-sage' },
];

const SkillsCollection = () => (
  <div className="w-full max-w-4xl mx-auto py-16 px-6">
    <p className="font-display text-sm text-muted-foreground tracking-[0.2em] uppercase mb-8 text-center">
      ✦ collectibles ✦
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <div
          key={skill.name}
          className={`sticker pill-tag ${skill.bg} border-transparent cursor-default text-sm px-5 py-2`}
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <span className="text-foreground">{skill.name}</span>
          <span className="text-foreground">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsCollection;
