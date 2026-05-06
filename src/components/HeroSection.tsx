import { useState, useEffect } from "react";
import heart from "@/assets/trinket-heart.png";
import frog from "@/assets/trinket-frog.png";

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
    window.addEventListener("wheel", handler, { passive: true });
    return () => window.removeEventListener("wheel", handler);
  }, [entered]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-out ${
        entered ? "scale-110 opacity-0 pointer-events-none" : "scale-100 opacity-100"
      }`}
    >
      {/* Center content */}
      <div className="text-center z-10 flex flex-col items-center gap-6">
        <p className="font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">Alternante Vidéo & Communication</p>

        {/* Name with trinkets aligned on each side */}
        <div className="flex items-center gap-5">
          <img src={frog} alt="" className="w-14 md:w-16 opacity-80 animate-float" />
          <h1 className="font-display text-5xl md:text-7xl tracking-tight text-foreground">Amelle Boumad</h1>
          <img
            src={heart}
            alt=""
            className="w-14 md:w-16 opacity-80 animate-float"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <p className="font-display text-sm tracking-[0.2em] text-muted-foreground">— Portfolio —</p>
      </div>

      {/* Enter prompt */}
      <button
        onClick={handleEnter}
        className="mt-16 z-10 pill-tag text-base px-6 py-2 text-muted-foreground hover:text-foreground transition-colors animate-pulse"
      >
        ✦ Bienvenu dans mon univers ✦
      </button>
    </div>
  );
};

export default HeroSection;
