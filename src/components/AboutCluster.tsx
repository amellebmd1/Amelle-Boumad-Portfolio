import MiniWindow from './MiniWindow';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutCluster = () => (
  <div className="relative w-full max-w-4xl mx-auto py-16 px-4">
    {/* Profile card */}
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <MiniWindow title="about_me.txt" className="md:w-72 animate-fade-in-up" style-delay="0s">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-border">
            <img src={profilePhoto} alt="Amelle Boumad" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-sm">Amelle Boumad</h2>
            <p className="text-xs text-muted-foreground mt-1">
              UX/UI Designer based in Paris.
              <br />Detail-oriented. Visually sensitive.
              <br />Ready for my first opportunity ✦
            </p>
          </div>
        </div>
      </MiniWindow>

      <div className="flex flex-col gap-4 md:mt-8">
        <MiniWindow title="education.md" className="md:w-64 animate-fade-in-up" style-delay="0.2s">
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-display text-foreground">Design School</p>
              <p className="text-muted-foreground">Bachelor UX/UI Design — 2024</p>
            </div>
            <div>
              <p className="font-display text-foreground">Online Courses</p>
              <p className="text-muted-foreground">Figma, Interaction Design, Typography</p>
            </div>
          </div>
        </MiniWindow>

        <MiniWindow title="experience.log" className="md:w-64 md:ml-6 animate-fade-in-up" dotColors={['bg-soft-pink', 'bg-lavender', 'bg-sage']}>
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-display text-foreground">Freelance Projects</p>
              <p className="text-muted-foreground">Brand identity, UI redesigns — 2023–now</p>
            </div>
            <div>
              <p className="font-display text-foreground">Design Internship</p>
              <p className="text-muted-foreground">UI mockups & user research — Summer 2023</p>
            </div>
          </div>
        </MiniWindow>
      </div>
    </div>
  </div>
);

export default AboutCluster;
