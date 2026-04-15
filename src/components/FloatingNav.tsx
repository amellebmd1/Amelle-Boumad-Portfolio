

const sections = [
  { id: 'about', label: '♡', title: 'About' },
  { id: 'skills', label: '✦', title: 'Skills' },
  { id: 'projects', label: '◈', title: 'Projects' },
  { id: 'contact', label: '✉', title: 'Contact' },
];

const FloatingNav = () => {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 px-3 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg"
    >
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group relative px-3 py-1.5 rounded-full text-sm hover:bg-sage/50 transition-colors"
          title={s.title}
        >
          <span>{s.label}</span>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-display text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {s.title}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default FloatingNav;
