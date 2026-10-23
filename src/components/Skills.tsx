import { Database, Workflow, Code2 } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";

const focusAreas = [
  {
    title: "Aplicações web",
    description: "Desenvolvimento de experiências web modernas e responsivas.",
    icon: <Code2 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Sistemas e dados",
    description: "Sistemas corporativos, bancos de dados e integrações.",
    icon: <Database className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Automação",
    description: "Automação de processos e conexão entre ferramentas.",
    icon: <Workflow className="h-4 w-4" aria-hidden="true" />,
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <ScrollReveal effect="fadeIn" className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Habilidades Técnicas</h2>
          <p className="max-w-2xl text-muted-foreground">
            Minha atuação combina desenvolvimento de aplicações, soluções para sistemas corporativos
            e automação de processos.
          </p>
        </ScrollReveal>

        <StaggerGroup className="grid gap-3 sm:grid-cols-3">
          {focusAreas.map((area) => (
            <StaggerItem
              key={area.title}
              className="group flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_18px_hsl(var(--primary)/0.08)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="mt-0.5 rounded-lg bg-primary/10 p-2 text-lavender [&>svg]:transition-transform [&>svg]:duration-200 group-hover:[&>svg]:scale-110 motion-reduce:[&>svg]:transition-none">
                {area.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{area.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

export default Skills;
