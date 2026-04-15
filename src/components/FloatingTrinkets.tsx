import { useState, useCallback, useRef, useEffect } from 'react';
import miffy from '@/assets/miffy.png';
import helloKitty from '@/assets/hello-kitty.png';
import sonnyAngel from '@/assets/sonny-angel.png';
import pinkApple from '@/assets/pink-apple.png';
import pinkHeart from '@/assets/pink-heart.png';
import pinkBow from '@/assets/pink-bow.png';
import clover from '@/assets/clover.png';
import star from '@/assets/star.png';
import cdDisc from '@/assets/cd-disc.png';

interface Trinket {
  id: number;
  src: string;
  alt: string;
  size: number;
  x: number;
  y: number;
  rotation: number;
  animClass: string;
}

const initialTrinkets: Trinket[] = [
  { id: 0, src: miffy, alt: 'miffy', size: 72, x: 5, y: 10, rotation: -5, animClass: 'animate-float' },
  { id: 1, src: helloKitty, alt: 'hello kitty', size: 64, x: 85, y: 15, rotation: 8, animClass: 'animate-float-slow' },
  { id: 2, src: sonnyAngel, alt: 'angel', size: 68, x: 8, y: 45, rotation: -3, animClass: 'animate-float' },
  { id: 3, src: pinkApple, alt: 'apple', size: 56, x: 90, y: 35, rotation: 12, animClass: 'animate-float-slow' },
  { id: 4, src: pinkHeart, alt: 'heart', size: 48, x: 15, y: 70, rotation: -8, animClass: 'animate-float' },
  { id: 5, src: pinkBow, alt: 'bow', size: 60, x: 82, y: 60, rotation: 5, animClass: 'animate-float-slow' },
  { id: 6, src: clover, alt: 'clover', size: 44, x: 50, y: 8, rotation: 15, animClass: 'animate-float' },
  { id: 7, src: star, alt: 'star', size: 36, x: 70, y: 80, rotation: -12, animClass: 'animate-sparkle' },
  { id: 8, src: cdDisc, alt: 'cd', size: 52, x: 3, y: 88, rotation: 0, animClass: 'animate-spin-slow' },
  { id: 9, src: star, alt: 'star', size: 28, x: 40, y: 55, rotation: 20, animClass: 'animate-sparkle' },
  { id: 10, src: pinkHeart, alt: 'heart', size: 32, x: 60, y: 25, rotation: -15, animClass: 'animate-float' },
  { id: 11, src: miffy, alt: 'miffy', size: 48, x: 92, y: 85, rotation: 10, animClass: 'animate-float-slow' },
];

const DraggableTrinket = ({ trinket }: { trinket: Trinket }) => {
  const [pos, setPos] = useState({ x: trinket.x, y: trinket.y });
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const elRef = useRef<HTMLImageElement>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const rect = document.documentElement;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
    };
    setDragging(true);
    setPaused(true);
  }, [pos]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const dx = ((e.clientX - dragRef.current.startX) / window.innerWidth) * 100;
    const dy = ((e.clientY - dragRef.current.startY) / window.innerHeight) * 100;
    setPos({
      x: Math.max(0, Math.min(95, dragRef.current.origX + dx)),
      y: Math.max(0, Math.min(95, dragRef.current.origY + dy)),
    });
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
    setDragging(false);
  }, []);

  return (
    <img
      ref={elRef}
      src={trinket.src}
      alt={trinket.alt}
      loading="lazy"
      width={trinket.size}
      height={trinket.size}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`absolute select-none touch-none transition-transform duration-150 ${
        dragging ? 'scale-125 z-50 cursor-grabbing drop-shadow-xl' : 'cursor-grab hover:scale-110 drop-shadow-md'
      } ${paused && !dragging ? '' : trinket.animClass}`}
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: trinket.size,
        height: trinket.size,
        transform: `rotate(${trinket.rotation}deg)`,
        opacity: 0.6,
        animationPlayState: paused ? 'paused' : 'running',
      }}
    />
  );
};

const FloatingTrinkets = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="pointer-events-auto w-full h-full relative">
      {initialTrinkets.map((t) => (
        <DraggableTrinket key={t.id} trinket={t} />
      ))}
    </div>
  </div>
);

export default FloatingTrinkets;
