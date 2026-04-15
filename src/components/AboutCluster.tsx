import MiniWindow from "./MiniWindow";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutCluster = () => (
  <div className="relative w-full max-w-5xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center gap-8">
      <MiniWindow title="about_me.txt" className="animate-fade-in-up w-full max-w-sm">
        <div className="text-center">
          <h2 className="font-display text-base font-bold">Amelle Boumad</h2>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Etudiante en Master CAWEB (communication web et multilingue), je suis à la recherche d'une première opportunité dans le domaine du web.
          </p>
        </div>
      </MiniWindow>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <MiniWindow title="education.md" className="animate-fade-in-up">
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-display text-foreground font-bold">Master CAWEB (communication web multilingue)</p>
              <p className="text-muted-foreground">Université de Strasbourg - 2025 - 2027</p>
            </div>
            <div>
              <p className="font-display text-foreground font-bold">Licence LEA - Anglais - Japonais</p>
              <p className="text-muted-foreground">Université de Strasbourg - 2021 - 2025</p>
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
              <p className="font-display text-foreground font-bold">Developpeur Web - Stage</p>
              <p className="text-muted-foreground">Association ADECAWEB - Janvier 2026 - Aujourd'hui</p>
            </div>
            <div>
              <p className="font-display text-foreground font-bold">Assistant Communication - Stage</p>
              <p className="text-muted-foreground">Université de Strasbourg - Avril 2025 - Juin 2025</p>
            </div>
          </div>
        </MiniWindow>
      </div>
    </div>
  </div>
);

export default AboutCluster;
