import { useState, useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tools: string[];
  image?: string;
  videoSrc?: string;
  youtubeId?: string;
  className?: string;
}

const ProjectCard = ({ title, description, role, tools, image, videoSrc, youtubeId, className = '' }: ProjectCardProps) => {
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
          {videoSrc ? (
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
            className="mini-window max-w-3xl w-full mx-4 max-h-[85vh] overflow-y-auto animate-zoom-reveal"
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
            <div className="aspect-video overflow-hidden bg-muted">
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
              ) : image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : null}
            </div>
            <div className="p-8 space-y-4">
              <h2 className="font-display text-xl">{title}</h2>
              <p className="text-base text-muted-foreground">{description}</p>
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
