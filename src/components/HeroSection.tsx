import { useState, useEffect } from 'react';
import star from '@/assets/star.png';
import clover from '@/assets/clover.png';
import cdDisc from '@/assets/cd-disc.png';

interface HeroSectionProps {
  onEnter: () => void;
}

const HeroSection = ({ onEnter }: HeroSectionProps) => {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(onEnter, 800);
  };

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (!entered && e.deltaY > 30) handleEnter();
    };
    window.addEventListener('wheel', handler, { passive: true });
    return () => window.removeEventListener('wheel', handler);
  }, [entered]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-out ${
        entered ? 'scale-110 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
      }`}
    >
      {/* Blurred floating trinkets */}
      <img src={star} alt="" className="absolute w-16 top-[20%] left-[20%] opacity-10 blur-sm animate-float" />
      <img src={clover} alt="" className="absolute w-14 top-[30%] right-[25%] opacity-10 blur-sm animate-float-slow" />
      <img src={cdDisc} alt="" className="absolute w-20 bottom-[25%] left-[30%] opacity-8 blur-sm animate-spin-slow" />
      <img src={star} alt="" className="absolute w-10 bottom-[30%] right-[20%] opacity-10 blur-sm animate-float" style={{ animationDelay: '1s' }} />

      {/* Center content */}
      <div className="text-center z-10 space-y-4">
        <p className="font-display text-xs tracking-[0.3em] text-muted-foreground uppercase">
          UX/UI Designer
        </p>
        <h1 className="font-display text-3xl md:text-5xl tracking-tight text-foreground">
          Amelle Boumad
        </h1>
        <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">
          — Portfolio —
        </p>
      </div>

      {/* Enter prompt */}
      <button
        onClick={handleEnter}
        className="mt-12 z-10 pill-tag text-muted-foreground hover:text-foreground transition-colors animate-pulse"
      >
        ✦ scroll or click to enter ✦
      </button>
    </div>
  );
};

export default HeroSection;
