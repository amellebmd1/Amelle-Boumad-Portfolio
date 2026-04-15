import clover from '@/assets/clover.png';
import star from '@/assets/star.png';

const Footer = () => (
  <footer id="contact" className="w-full py-24 px-6 text-center relative">
    {/* Fade gradient */}
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />

    <div className="relative z-10 max-w-lg mx-auto space-y-8">
      <p className="font-display text-2xl text-foreground">
        Let's create something thoughtful together
      </p>
      <p className="text-base text-muted-foreground">
        I'm looking for my first design opportunity — let's talk ✦
      </p>
      <div className="flex justify-center gap-5">
        <a href="mailto:hello@amelleboumad.com" className="pill-tag text-sm px-5 py-2 hover:bg-sage transition-colors">
          ✉ Email
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="pill-tag text-sm px-5 py-2 hover:bg-lavender transition-colors">
          in LinkedIn
        </a>
        <a href="https://behance.net" target="_blank" rel="noreferrer" className="pill-tag text-sm px-5 py-2 hover:bg-peach transition-colors">
          ◈ Behance
        </a>
      </div>

      {/* Decorative cluster */}
      <div className="flex justify-center items-center gap-4 mt-10 opacity-35">
        <img src={clover} alt="" className="w-8 animate-float" />
        <span className="text-sm font-display text-muted-foreground">✦</span>
        <img src={star} alt="" className="w-7 animate-float-slow" />
        <span className="text-sm font-display text-muted-foreground">✦</span>
        <img src={clover} alt="" className="w-6 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <p className="text-xs text-muted-foreground mt-6 font-display">
        © 2026 Amelle Boumad — Made with ♡
      </p>
    </div>
  </footer>
);

export default Footer;
