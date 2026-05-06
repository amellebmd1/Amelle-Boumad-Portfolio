import { useState, useRef } from 'react';
import macbookMockup from '@/assets/macbook-mockup.png';

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  role: string;
  tools: string[];
  instagramUrl?: string;
  youtubeChannelUrl?: string;
  youtubeChannelHandle?: string;
  image?: string;
  videoSrc?: string;
  youtubeId?: string;
  macPreviewImage?: string;
  imacPreviewImage?: string;
  phonePreviewImage?: string;
  fullMockupImage?: string;
  expandedImage?: string;
  className?: string;
}

const ProjectCard = ({ title, description, longDescription, role, tools, instagramUrl, youtubeChannelUrl, youtubeChannelHandle, image, videoSrc, youtubeId, macPreviewImage, imacPreviewImage, phonePreviewImage, fullMockupImage, expandedImage, className = '' }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHover = (isHovering: boolean) => {
    setHovered(isHovering);
    if (videoRef.current) {
      isHovering ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  return (
    <>
      <div
        className={`mini-window overflow-hidden cursor-pointer ${className}`}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onClick={() => setExpanded(true)}
        style={{ transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
      >
        <div className="mini-window-header">
          <span className="window-dot bg-sage" />
          <span className="window-dot bg-soft-pink" />
          <span className="window-dot bg-lavender" />
          <span className="ml-2 text-muted-foreground truncate text-xs">{title}</span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {fullMockupImage ? (
            // Full pre-rendered mockup image (already includes device frame)
            <div className="w-full h-full overflow-hidden">
              <img
                src={fullMockupImage}
                alt={title}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
              />
            </div>
          ) : macPreviewImage ? (
            // MacBook Air mockup preview
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-background p-4">
              <div className="relative w-full">
                {/* MacBook screen */}
                <div className="bg-foreground rounded-lg p-1.5 shadow-xl">
                  <div className="bg-background rounded-sm overflow-hidden aspect-[16/10] relative">
                    <img
                      src={macPreviewImage}
                      alt={title}
                      loading="lazy"
                      className={`w-full h-full object-cover object-top transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
                    />
                  </div>
                </div>
                {/* MacBook base / hinge */}
                <div className="mx-auto h-1 bg-foreground/70 rounded-b-md" style={{ width: '110%', marginLeft: '-5%' }} />
                <div className="mx-auto h-1 bg-foreground/40 rounded-b-lg" style={{ width: '25%' }} />
              </div>
            </div>
          ) : imacPreviewImage ? (
            // MacBook mockup preview (real PNG mockup overlay)
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-background p-2">
              <div className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
                {/* Thumbnail positioned exactly under the screen cutout */}
                <div
                  className="absolute overflow-hidden bg-background"
                  style={{
                    left: '11.93%',
                    top: '19.58%',
                    width: '75.62%',
                    height: '39.80%',
                  }}
                >
                  <img
                    src={imacPreviewImage}
                    alt={title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
                  />
                </div>
                {/* MacBook PNG overlay */}
                <img
                  src={macbookMockup}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              </div>
            </div>
          ) : phonePreviewImage ? (
            // iPhone mockup preview
            <div className="w-full h-full flex items-center justify-center p-4" style={{ backgroundColor: 'hsl(345 100% 95%)' }}>
              <div className="relative bg-foreground rounded-[1.75rem] p-1.5 shadow-xl" style={{ width: '32%', aspectRatio: '9/19' }}>
                {/* Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1/3 h-2.5 bg-foreground rounded-b-xl z-10" />
                <div className="bg-background rounded-[1.4rem] overflow-hidden w-full h-full relative">
                  <img
                    src={phonePreviewImage}
                    alt={title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
                  />
                </div>
              </div>
            </div>
          ) : videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={image}
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground font-display text-lg">
              ✦
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-display text-base">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tools.map(t => (
              <span key={t} className="pill-tag text-xs py-1 px-3">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded modal */}
      {expanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/30 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <div
            className={`mini-window w-full mx-4 max-h-[90vh] overflow-y-auto animate-zoom-reveal ${macPreviewImage || phonePreviewImage || fullMockupImage || youtubeId ? 'max-w-5xl' : 'max-w-3xl'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="mini-window-header">
              <span className="window-dot bg-sage" />
              <span className="window-dot bg-soft-pink" />
              <span className="window-dot bg-lavender" />
              <span className="ml-2 text-muted-foreground">{title}</span>
              <button
                onClick={() => setExpanded(false)}
                className="ml-auto text-muted-foreground hover:text-foreground text-sm"
              >
                ✕
              </button>
            </div>
            <div className={`overflow-hidden bg-muted ${(macPreviewImage || imacPreviewImage || phonePreviewImage || fullMockupImage) && !youtubeId && !videoSrc ? 'max-h-[75vh] overflow-y-auto flex items-center justify-center' : 'aspect-video'}`}>
              {youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : videoSrc ? (
                <video src={videoSrc} controls autoPlay muted loop playsInline className="w-full h-full object-cover" />
              ) : macPreviewImage || imacPreviewImage || phonePreviewImage || fullMockupImage ? (
                <img src={expandedImage ?? macPreviewImage ?? imacPreviewImage ?? phonePreviewImage ?? fullMockupImage} alt={title} className="w-full h-auto object-contain" />
              ) : image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : null}
            </div>
            <div className="p-8 space-y-4">
              <h2 className="font-display text-xl">{title}</h2>
              <p className="text-base text-muted-foreground">{description}</p>
              {longDescription && (
                <div className="text-sm text-muted-foreground space-y-3 whitespace-pre-line leading-relaxed">
                  {longDescription}
                </div>
              )}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-3 mt-2 px-4 py-3 rounded-xl border border-border bg-background hover:bg-muted hover:scale-110 active:scale-105 transition-all duration-300 ease-out group origin-left"
                >
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-white"
                    style={{
                      background:
                        'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Instagram</span>
                    <span className="font-display text-sm group-hover:underline">@adecaweb</span>
                  </span>
                </a>
              )}
              {youtubeChannelUrl && (
                <a
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-3 mt-2 px-4 py-3 rounded-xl border border-border bg-background hover:bg-muted hover:scale-110 active:scale-105 transition-all duration-300 ease-out group origin-left"
                >
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-white"
                    style={{ background: '#FF0000' }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-muted-foreground">YouTube</span>
                    <span className="font-display text-sm group-hover:underline">{youtubeChannelHandle ?? 'Voir la chaîne'}</span>
                  </span>
                </a>
              )}
              <div className="text-sm space-y-2">
                <p><span className="font-display">Role:</span> <span className="text-muted-foreground">{role}</span></p>
                <div className="flex flex-wrap gap-2">
                  {tools.map(t => (
                    <span key={t} className="pill-tag text-sm">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
