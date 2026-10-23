import { Code2, Database, Wrench, Workflow } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";

const techGroups = [
  {
    label: "Front-end",
    icon: Code2,
    iconClass: "text-lavender",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js", "Framer Motion"],
    technologyIcon: Code2,
  },
  {
    label: "Back-end e banco de dados",
    icon: Database,
    iconClass: "text-[var(--palette-cyan)]",
    technologies: ["Node.js", "Python", "PostgreSQL", "MySQL", "SQLite", "Supabase", "REST APIs"],
    technologyIcon: Database,
  },
  {
    label: "Ferramentas e infraestrutura",
    icon: Wrench,
    iconClass: "text-lavender",
    technologies: ["GitHub", "Docker", "Discord"],
    technologyIcon: Wrench,
  },
  {
    label: "Automações",
    icon: Workflow,
    iconClass: "text-[var(--palette-cyan)]",
    technologies: ["n8n", "Power Automate", "Web Scraping", "Discord.js", "Integrações entre sistemas"],
    technologyIcon: Workflow,
  },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <ScrollReveal effect="fadeIn" className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Tecnologias e ferramentas
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Tecnologias e ferramentas presentes na minha experiência e nos projetos apresentados.
          </p>
        </ScrollReveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {techGroups.map((group, index) => {
            const GroupIcon = group.icon;
            const TechnologyIcon = group.technologyIcon;

            return (
              <StaggerItem key={group.label} className="h-full">
              <section
                aria-labelledby={`tech-group-${index}`}
                className="group h-full rounded-2xl border border-border/50 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.08)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <ScrollReveal effect="fadeIn" className="mb-4">
                  <h3
                    id={`tech-group-${index}`}
                    className={`flex items-center gap-2.5 text-sm font-semibold ${group.iconClass}`}
                  >
                    <GroupIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none" aria-hidden="true" />
                    {group.label}
                  </h3>
                </ScrollReveal>

                <ul className="flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-secondary px-2.5 py-2 text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-lavender motion-reduce:transition-none"
                    >
                      <TechnologyIcon className="h-3.5 w-3.5 shrink-0 text-primary/80" aria-hidden="true" />
                      {technology}
                    </li>
                  ))}
                </ul>
              </section>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Technologies;
