import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Replace these IDs with real TikTok video IDs (the long number from the URL: tiktok.com/@user/video/<ID>)
const tiktoks = [
  { id: '7290000000000000001', author: 'amelle' },
  { id: '7290000000000000002', author: 'amelle' },
  { id: '7290000000000000003', author: 'amelle' },
  { id: '7290000000000000004', author: 'amelle' },
];

const SocialMediaProjects = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex(i => (i + 1) % tiktoks.length);
  const prev = () => setIndex(i => (i - 1 + tiktoks.length) % tiktoks.length);

  // auto-scroll
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6">
      <p className="font-display text-sm text-muted-foreground tracking-[0.2em] uppercase mb-2 text-center">
        ✦ projets perso ✦
      </p>
      <h2 className="font-display text-2xl text-center mb-10">Social Media</h2>

      <div
        className="relative flex items-center justify-center gap-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Vidéo précédente"
          className="z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg flex items-center justify-center hover:bg-sage/50 transition-colors shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* iPhone mockup */}
        <div className="relative shrink-0">
          <div
            className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl"
            style={{ width: '300px', height: '620px' }}
          >
            {/* Side buttons */}
            <span className="absolute left-[-3px] top-24 w-1 h-8 bg-foreground rounded-l" />
            <span className="absolute left-[-3px] top-40 w-1 h-12 bg-foreground rounded-l" />
            <span className="absolute left-[-3px] top-56 w-1 h-12 bg-foreground rounded-l" />
            <span className="absolute right-[-3px] top-32 w-1 h-16 bg-foreground rounded-r" />

            {/* Screen */}
            <div className="relative w-full h-full bg-black rounded-[2.3rem] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-20" />

              {/* TikTok carousel */}
              <div
                ref={trackRef}
                className="flex h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {tiktoks.map((t, i) => (
                  <div key={t.id + i} className="w-full h-full shrink-0 relative">
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${t.id}`}
                      title={`TikTok ${i + 1}`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {tiktoks.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Aller à la vidéo ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-sage-dark' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Vidéo suivante"
          className="z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg flex items-center justify-center hover:bg-sage/50 transition-colors shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Création de contenu vidéo court format · Montage · Sound design
      </p>
    </div>
  );
};

export default SocialMediaProjects;
