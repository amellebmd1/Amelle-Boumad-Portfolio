import clover from '@/assets/clover.png';
import star from '@/assets/star.png';

const Footer = () => (
  <footer id="contact" className="w-full py-20 px-4 text-center relative">
    {/* Fade gradient */}
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />

    <div className="relative z-10 max-w-md mx-auto space-y-6">
      <p className="font-display text-lg text-foreground">
        Let's create something thoughtful together
      </p>
      <p className="text-sm text-muted-foreground">
        I'm looking for my first design opportunity — let's talk ✦
      </p>
      <div className="flex justify-center gap-4">
        <a href="mailto:hello@amelleboumad.com" className="pill-tag hover:bg-sage transition-colors">
          ✉ Email
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="pill-tag hover:bg-lavender transition-colors">
          in LinkedIn
        </a>
        <a href="https://behance.net" target="_blank" rel="noreferrer" className="pill-tag hover:bg-peach transition-colors">
          ◈ Behance
        </a>
      </div>

      {/* Decorative cluster */}
      <div className="flex justify-center items-center gap-3 mt-8 opacity-30">
        <img src={clover} alt="" className="w-6 animate-float" />
        <span className="text-xs font-display text-muted-foreground">✦</span>
        <img src={star} alt="" className="w-5 animate-float-slow" />
        <span className="text-xs font-display text-muted-foreground">✦</span>
        <img src={clover} alt="" className="w-4 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <p className="text-[10px] text-muted-foreground mt-4 font-display">
        © 2026 Amelle Boumad — Made with ♡
      </p>
    </div>
  </footer>
);

export default Footer;
