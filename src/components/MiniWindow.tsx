import { ReactNode } from 'react';

interface MiniWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  dotColors?: [string, string, string];
}

const MiniWindow = ({
  title,
  children,
  className = '',
  dotColors = ['bg-sage', 'bg-peach', 'bg-lavender'],
}: MiniWindowProps) => (
  <div className={`mini-window ${className}`}>
    <div className="mini-window-header">
      <span className={`window-dot ${dotColors[0]}`} />
      <span className={`window-dot ${dotColors[1]}`} />
      <span className={`window-dot ${dotColors[2]}`} />
      <span className="ml-2 text-muted-foreground">{title}</span>
    </div>
    <div className="p-4">{children}</div>
  </div>
);

export default MiniWindow;
