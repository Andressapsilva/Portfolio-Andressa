import { useState } from "react";
import { Code2, Server, Zap } from "lucide-react";

type Category = "all" | "frontend" | "backend" | "automation";

interface SubProject {
  name: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: Category;
  icon: React.ReactNode;
  subProjects?: SubProject[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Front-end",
    description: "Interfaces modernas e responsivas com foco em experiência do usuário, performance e design elegante.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
    category: "frontend",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Back-end",
    description: "APIs robustas, integração com bancos de dados e lógica de servidor escalável e segura.",
    technologies: ["Node.js", "Python", "PostgreSQL", "Supabase", "REST APIs"],
    category: "backend",
    icon: <Server className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Automação",
    description: "Fluxos automatizados para otimizar processos, integrar sistemas e aumentar produtividade.",
    technologies: ["n8n", "Power Automate", "Python", "Discord.js"],
    category: "automation",
    icon: <Zap className="w-6 h-6" />,
    subProjects: [
      { name: "n8n Workflows", description: "Automações visuais e integrações entre plataformas" },
      { name: "Power Automate", description: "Fluxos empresariais com Microsoft 365" },
      { name: "Python Scripts", description: "Automações customizadas e web scraping" },
      { name: "Discord Bots", description: "Bots de moderação, música e utilidades" },
    ],
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Tudo" },
  { id: "frontend", label: "Front-end" },
  { id: "backend", label: "Back-end" },
  { id: "automation", label: "Automação" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projetos" className="py-24 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Uma seleção dos meus trabalhos organizados por área de especialização.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 backdrop-blur-sm ${
                activeCategory === category.id
                  ? "text-primary bg-primary/10 border border-primary/30 shadow-[0_0_15px_hsl(177_85%_46%/0.2)]"
                  : "text-muted-foreground bg-card/30 border border-border/30 hover:text-foreground hover:border-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-border/30 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(177_85%_46%/0.15)] transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Sub-projects for Automation */}
                {project.subProjects && (
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {project.subProjects.map((sub) => (
                      <div
                        key={sub.name}
                        className="p-3 rounded-lg bg-background/50 border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                      >
                        <span className="text-xs font-medium text-primary block mb-1">
                          {sub.name}
                        </span>
                        <span className="text-xs text-muted-foreground leading-tight block">
                          {sub.description}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-primary/80 px-2.5 py-1 bg-primary/5 border border-primary/20 rounded-lg group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
