import { Code2, Server, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Front-end",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Back-end",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Automação",
    icon: <Zap className="w-5 h-5" />,
    skills: ["n8n", "Power Automate", "Web Scraping", "Bots com Discord.js"],
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Tecnologias e ferramentas que domino para entregar soluções completas.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-border/30 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(177_85%_46%/0.12)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
