import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Category = "all" | "frontend" | "n8n" | "discord";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: Category[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Dashboard administrativo para e-commerce com gráficos interativos, gestão de produtos e análise de vendas em tempo real.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: ["frontend"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Landing Page SaaS",
    description: "Página de conversão otimizada para startup de tecnologia, com animações suaves e design responsivo.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    category: ["frontend"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Automação de CRM",
    description: "Fluxo automatizado que sincroniza leads entre plataformas, envia notificações e atualiza planilhas automaticamente.",
    technologies: ["n8n", "Google Sheets", "Slack", "HubSpot"],
    category: ["n8n"],
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Integração E-mail Marketing",
    description: "Automação que segmenta contatos, dispara campanhas personalizadas e gera relatórios de performance.",
    technologies: ["n8n", "Mailchimp", "Airtable", "Webhooks"],
    category: ["n8n"],
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Bot de Moderação",
    description: "Bot completo para moderação de servidores Discord com sistema de avisos, logs e comandos administrativos.",
    technologies: ["Discord.js", "Node.js", "MongoDB"],
    category: ["discord"],
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Bot de Música",
    description: "Bot de música para Discord com suporte a múltiplas plataformas, filas e controles interativos.",
    technologies: ["Discord.js", "Lavalink", "TypeScript"],
    category: ["discord"],
    githubUrl: "#",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Tudo" },
  { id: "frontend", label: "Front-end" },
  { id: "n8n", label: "Automação n8n" },
  { id: "discord", label: "Bots Discord" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Uma seleção dos meus trabalhos mais recentes em diferentes áreas de desenvolvimento.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-primary text-glow-strong bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
