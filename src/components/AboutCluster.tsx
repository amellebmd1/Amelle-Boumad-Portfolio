import MiniWindow from "./MiniWindow";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutCluster = () => (
  <div className="relative w-full max-w-5xl mx-auto py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <MiniWindow title="about_me.txt" className="animate-fade-in-up">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-36 h-36 rounded-full overflow-hidden border-3 border-border"></div>
          <div>
            <h2 className="font-display text-base">Amelle Boumad</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Etudiante en Master CAWEB (communication web et multilingue)
              <br />
              je suis à la recherche d'une première opportunité.
              <br />
              dans le domaine du web.
            </p>
          </div>
        </div>
      </MiniWindow>

      <MiniWindow title="education.md" className="animate-fade-in-up">
        <div className="space-y-3 text-sm">
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

      <MiniWindow
        title="experience.log"
        className="animate-fade-in-up"
        dotColors={["bg-soft-pink", "bg-lavender", "bg-sage"]}
      >
        <div className="space-y-3 text-sm">
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
);

export default AboutCluster;
