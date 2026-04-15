const skills = [
  { name: 'Figma', emoji: '🎨', bg: 'bg-sage' },
  { name: 'Photoshop', emoji: '🖼️', bg: 'bg-lavender' },
  { name: 'Illustrator', emoji: '✏️', bg: 'bg-peach' },
  { name: 'User Research', emoji: '🔍', bg: 'bg-cream' },
  { name: 'Wireframing', emoji: '📐', bg: 'bg-soft-pink' },
  { name: 'Prototyping', emoji: '⚡', bg: 'bg-sage' },
  { name: 'Typography', emoji: '🔤', bg: 'bg-lavender' },
  { name: 'Design Systems', emoji: '🧩', bg: 'bg-peach' },
  { name: 'HTML/CSS', emoji: '💻', bg: 'bg-cream' },
  { name: 'Motion Design', emoji: '🎬', bg: 'bg-soft-pink' },
  { name: 'Branding', emoji: '✨', bg: 'bg-sage' },
  { name: 'Accessibility', emoji: '♿', bg: 'bg-lavender' },
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
          <span className="text-lg">{skill.emoji}</span>
          <span className="text-foreground">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsCollection;
