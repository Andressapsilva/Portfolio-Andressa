import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PortfolioProject } from "@/data/projects";

interface ProjectDetailsDialogProps {
  project: PortfolioProject;
  onOpenChange: (open: boolean) => void;
}

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

const ProjectDetailsDialog = ({ project, onOpenChange }: ProjectDetailsDialogProps) => (
  <Dialog open onOpenChange={onOpenChange}>
    <DialogContent className="max-h-[85vh] overflow-y-auto border-border bg-card sm:max-w-2xl">
      <DialogHeader className="pr-8">
        <DialogTitle className="text-2xl text-foreground">{project.name}</DialogTitle>
        <DialogDescription>{project.summary}</DialogDescription>
      </DialogHeader>

      {project.screenshot && (
        <img
          src={project.screenshot}
          alt={project.screenshotAlt ?? `Captura de tela de ${project.name}`}
          className="max-h-72 w-full rounded-xl border border-border/60 object-cover"
        />
      )}

      <dl className="grid gap-4">
        <div>
          <dt className="mb-1 text-sm font-semibold text-lavender">Problema abordado</dt>
          <dd className="text-sm leading-relaxed text-muted-foreground">
            {project.problem ?? "Detalhes do problema ainda não foram informados."}
          </dd>
        </div>
        <div>
          <dt className="mb-1 text-sm font-semibold text-lavender">Contribuição</dt>
          <dd className="text-sm leading-relaxed text-muted-foreground">
            {project.contribution ?? "Detalhes da contribuição ainda não foram informados."}
          </dd>
        </div>
        <div>
          <dt className="mb-1 text-sm font-semibold text-lavender">Tecnologias</dt>
          <dd className="text-sm leading-relaxed text-muted-foreground">
            {project.technologies?.length
              ? project.technologies.join(", ")
              : project.publicNote ?? "Tecnologias ainda não informadas publicamente."}
          </dd>
        </div>
        {project.publicNote && (
          <p className="rounded-lg border border-[var(--palette-cyan)]/20 bg-[var(--palette-cyan)]/5 p-3 text-sm text-muted-foreground">
            {project.publicNote}
          </p>
        )}
      </dl>

      <div className="flex flex-wrap gap-2">
        {project.githubUrl && (
          <ProjectLink href={project.githubUrl}>
            <Github className="h-4 w-4" aria-hidden="true" />
            Ver no GitHub
          </ProjectLink>
        )}
        {project.demoUrl && (
          <ProjectLink href={project.demoUrl}>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Abrir demonstração
          </ProjectLink>
        )}
      </div>
    </DialogContent>
  </Dialog>
);

export default ProjectDetailsDialog;
