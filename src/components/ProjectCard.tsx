import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <article className="group p-6 border border-border rounded-lg bg-card/50 hover:border-primary/50 hover:border-glow transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Ver código no GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Ver projeto online"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-primary px-2 py-1 border border-primary/30 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
