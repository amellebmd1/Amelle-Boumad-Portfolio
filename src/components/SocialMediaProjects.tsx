import { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import video1 from '@/assets/tiktok-1.mp4';
import video2 from '@/assets/tiktok-2.mp4';
import video3 from '@/assets/tiktok-3.mp4';
import video4 from '@/assets/tiktok-4.mp4';

const videos = [video1, video2, video3, video4];

const SocialMediaProjects = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setIndex(i => (i + 1) % videos.length);
  const prev = () => setIndex(i => (i - 1 + videos.length) % videos.length);

  // Auto-advance every 8s when not paused
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [paused]);

  // Play only the active video, pause the others
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [index]);

  // Wheel / swipe vertical navigation on the phone
  const wheelLock = useRef(false);
  const handleWheel = (e: React.WheelEvent) => {
    if (wheelLock.current) return;
    if (Math.abs(e.deltaY) < 20) return;
    wheelLock.current = true;
    if (e.deltaY > 0) next();
    else prev();
    setTimeout(() => (wheelLock.current = false), 600);
  };

  const touchStartY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dy) < 40) return;
    if (dy > 0) next();
    else prev();
  };

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
            <div
              className="relative w-full h-full bg-black rounded-[2.3rem] overflow-hidden"
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-20" />

              {/* Vertical TikTok-style feed */}
              <div
                className="flex flex-col h-full transition-transform duration-700 ease-out"
                style={{ transform: `translateY(-${index * 100}%)` }}
              >
                {videos.map((src, i) => (
                  <div key={i} className="w-full h-full shrink-0 relative bg-black">
                    {/* Square video centered in the screen */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full aspect-square overflow-hidden">
                        <video
                          ref={el => (videoRefs.current[i] = el)}
                          src={src}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* TikTok-style overlay */}
                    <div className="absolute bottom-6 left-4 right-16 text-white drop-shadow-lg pointer-events-none">
                      <p className="font-semibold text-sm">@amelle</p>
                      <p className="text-xs opacity-90 mt-1">Création vidéo · montage</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vertical nav arrows inside phone */}
              <button
                onClick={prev}
                aria-label="Vidéo précédente"
                className="absolute top-12 right-3 z-30 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Vidéo suivante"
                className="absolute bottom-12 right-3 z-30 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Vertical progress dots */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Vidéo ${i + 1}`}
                    className={`w-1.5 rounded-full transition-all ${
                      i === index ? 'h-6 bg-white' : 'h-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-10 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-4 text-sm text-foreground/80 leading-relaxed">
        <p>
          Réalisation de montages vidéo personnels au format court pour des plateformes comme TikTok et Instagram Reels (type «&nbsp;édits&nbsp;»).
        </p>
        <p>
          À travers ces créations, j'ai pu développer mes compétences en montage et en création de contenus adaptés aux réseaux sociaux. L'ensemble des vidéos publiées a généré plus de 400 000 vues et 116 000 mentions «&nbsp;J'aime&nbsp;».
        </p>
      </div>
    </div>
  );
};

export default SocialMediaProjects;
