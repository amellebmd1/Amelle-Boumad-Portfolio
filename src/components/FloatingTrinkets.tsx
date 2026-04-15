import clover from '@/assets/clover.png';
import star from '@/assets/star.png';
import cdDisc from '@/assets/cd-disc.png';
import ladybug from '@/assets/ladybug.png';

const trinkets = [
  { src: clover, alt: 'clover', className: 'w-12 top-[8%] left-[5%] animate-float opacity-20', delay: '0s' },
  { src: star, alt: 'star', className: 'w-10 top-[15%] right-[8%] animate-float-slow opacity-15', delay: '1s' },
  { src: cdDisc, alt: 'cd', className: 'w-16 top-[45%] left-[3%] animate-spin-slow opacity-10', delay: '0s' },
  { src: ladybug, alt: 'ladybug', className: 'w-8 top-[30%] right-[4%] animate-float opacity-15', delay: '2s' },
  { src: star, alt: 'star', className: 'w-6 top-[60%] left-[8%] animate-sparkle opacity-20', delay: '0.5s' },
  { src: clover, alt: 'clover', className: 'w-10 top-[75%] right-[6%] animate-float-slow opacity-15', delay: '3s' },
  { src: cdDisc, alt: 'cd', className: 'w-12 top-[85%] left-[12%] animate-spin-slow opacity-10', delay: '0s' },
  { src: star, alt: 'star', className: 'w-8 top-[92%] right-[15%] animate-float opacity-15', delay: '1.5s' },
];

const FloatingTrinkets = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {trinkets.map((t, i) => (
      <img
        key={i}
        src={t.src}
        alt={t.alt}
        loading="lazy"
        className={`absolute ${t.className}`}
        style={{ animationDelay: t.delay }}
      />
    ))}
  </div>
);

export default FloatingTrinkets;
