import { useState, useCallback, useRef } from 'react';
import miffy from '@/assets/miffy.png';
import helloKitty from '@/assets/hello-kitty.png';
import sonnyAngel from '@/assets/sonny-angel.png';
import pinkApple from '@/assets/pink-apple.png';
import pinkHeart from '@/assets/pink-heart.png';
import pinkBow from '@/assets/pink-bow.png';
import clover from '@/assets/clover.png';
import star from '@/assets/star.png';
import cdDisc from '@/assets/cd-disc.png';

interface TrinketData {
  id: number;
  src: string;
  alt: string;
  size: number;
  x: number;
  y: number;
  rotation: number;
}

const initialTrinkets: TrinketData[] = [
  { id: 0, src: miffy, alt: 'miffy', size: 100, x: 5, y: 10, rotation: -5 },
  { id: 1, src: helloKitty, alt: 'hello kitty', size: 90, x: 85, y: 15, rotation: 8 },
  { id: 2, src: sonnyAngel, alt: 'angel', size: 95, x: 8, y: 45, rotation: -3 },
  { id: 3, src: pinkApple, alt: 'apple', size: 80, x: 90, y: 35, rotation: 12 },
  { id: 4, src: pinkHeart, alt: 'heart', size: 70, x: 15, y: 70, rotation: -8 },
  { id: 5, src: pinkBow, alt: 'bow', size: 85, x: 82, y: 60, rotation: 5 },
  { id: 6, src: clover, alt: 'clover', size: 65, x: 50, y: 8, rotation: 15 },
  { id: 7, src: star, alt: 'star', size: 55, x: 70, y: 80, rotation: -12 },
  { id: 8, src: cdDisc, alt: 'cd', size: 75, x: 3, y: 88, rotation: 0 },
  { id: 9, src: star, alt: 'star', size: 45, x: 40, y: 55, rotation: 20 },
  { id: 10, src: pinkHeart, alt: 'heart', size: 50, x: 60, y: 25, rotation: -15 },
  { id: 11, src: miffy, alt: 'miffy', size: 70, x: 92, y: 85, rotation: 10 },
];

const DraggableTrinket = ({ trinket }: { trinket: TrinketData }) => {
  const [pos, setPos] = useState({ x: trinket.x, y: trinket.y });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
    };
    setDragging(true);
  }, [pos]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const dx = ((e.clientX - dragRef.current.startX) / window.innerWidth) * 100;
    const dy = ((e.clientY - dragRef.current.startY) / window.innerHeight) * 100;
    setPos({
      x: Math.max(-2, Math.min(96, dragRef.current.origX + dx)),
      y: Math.max(-2, Math.min(96, dragRef.current.origY + dy)),
    });
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
    setDragging(false);
  }, []);

  return (
    <img
      src={trinket.src}
      alt={trinket.alt}
      loading="lazy"
      width={trinket.size}
      height={trinket.size}
      draggable={false}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="absolute select-none touch-none pointer-events-auto"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: trinket.size,
        height: trinket.size,
        transform: `rotate(${trinket.rotation}deg) scale(${dragging ? 1.2 : 1})`,
        opacity: dragging ? 0.9 : 0.6,
        cursor: dragging ? 'grabbing' : 'grab',
        zIndex: dragging ? 50 : 1,
        filter: dragging ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.18))' : 'drop-shadow(0 3px 6px rgba(0,0,0,0.1))',
        transition: dragging ? 'none' : 'transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease',
      }}
    />
  );
};

const FloatingTrinkets = () => (
  <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
    {initialTrinkets.map((t) => (
      <DraggableTrinket key={t.id} trinket={t} />
    ))}
  </div>
);

export default FloatingTrinkets;
