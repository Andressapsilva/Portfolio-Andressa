import { lazy, Suspense, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Code2, ExternalLink, Github, Image, MessageSquare } from "lucide-react";
import { projectCategories, projects, type PortfolioProject, type ProjectCategory, type ProjectType } from "@/data/projects";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { projectCardVariants } from "@/components/animations/variants";

const ProjectDetailsDialog = lazy(() => import("./ProjectDetailsDialog"));

const categoryLabels: Record<ProjectCategory, string> = {
  messaging: "Mensageria",
  documents: "Documentos",
  corporate: "Corporativo",
};

const projectTypeLabels: Record<ProjectType, string> = {
  personal: "Pessoal",
  academic: "Acadêmico",
  professional: "Profissional",
  unconfirmed: "Classificação a confirmar",
};

const categoryIcons = {
  messaging: MessageSquare,
  documents: Image,
  corporate: BriefcaseBusiness,
};

const ProjectLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  >
    {children}
  </a>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="projetos" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[var(--palette-cyan)]/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <ScrollReveal effect="fadeIn" className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-lavender">Trabalhos selecionados</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Projetos</h2>
          <p className="max-w-2xl text-muted-foreground">
            Projetos de desenvolvimento e ferramentas. Os detalhes são apresentados somente quando
            há informações públicas confirmadas.
          </p>
        </ScrollReveal>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`min-h-10 rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "border-primary/40 bg-primary/10 text-lavender"
                    : "border-border/60 bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category];

              return (
                <motion.article
                  key={project.id}
                  layout
                  custom={prefersReducedMotion ? 0 : index}
                  initial={prefersReducedMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={projectCardVariants}
                  exit={prefersReducedMotion ? undefined : "exit"}
                  transition={prefersReducedMotion ? { duration: 0 } : undefined}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-[0_0_24px_hsl(var(--primary)/0.08)] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border/50 bg-secondary">
                    {project.screenshot ? (
                      <img
                        src={project.screenshot}
                        alt={project.screenshotAlt ?? `Captura de tela de ${project.name}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-muted-foreground" aria-label="Captura de tela não adicionada">
                        <CategoryIcon className="h-8 w-8 text-lavender/70" aria-hidden="true" />
                        <span className="text-xs">Captura de tela não adicionada</span>
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-md border border-border/60 bg-background/90 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {categoryLabels[project.category]}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                          project.type === "professional"
                            ? "border-[var(--palette-cyan)]/25 bg-[var(--palette-cyan)]/10 text-[var(--palette-cyan)]"
                            : "border-primary/20 bg-primary/5 text-lavender"
                        }`}
                      >
                        {projectTypeLabels[project.type]}
                      </span>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                    {project.technologies && project.technologies.length > 0 ? (
                      <ul className="mb-5 flex flex-wrap gap-2" aria-label="Tecnologias">
                        {project.technologies.map((technology) => (
                          <li
                            key={technology}
                            className="rounded-md border border-border/60 bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mb-5 text-xs text-muted-foreground">
                        Tecnologias não informadas publicamente.
                      </p>
                    )}

                    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/50 pt-4">
                      <motion.button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Code2 className="h-4 w-4" aria-hidden="true" />
                        Ver detalhes
                      </motion.button>
                      {project.githubUrl && (
                        <ProjectLink href={project.githubUrl}>
                          <Github className="h-4 w-4" aria-hidden="true" />
                          GitHub
                        </ProjectLink>
                      )}
                      {project.demoUrl && (
                        <ProjectLink href={project.demoUrl}>
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          Demonstração
                        </ProjectLink>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectDetailsDialog
            project={selectedProject}
            onOpenChange={(open) => {
              if (!open) setSelectedProject(null);
            }}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Projects;
