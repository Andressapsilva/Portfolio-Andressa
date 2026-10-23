export type ProjectCategory = "messaging" | "documents" | "corporate";
export type ProjectType = "personal" | "academic" | "professional" | "unconfirmed";

export interface PortfolioProject {
  id: string;
  name: string;
  category: ProjectCategory;
  type: ProjectType;
  summary: string;
  problem?: string;
  contribution?: string;
  technologies?: string[];
  screenshot?: string;
  screenshotAlt?: string;
  githubUrl?: string;
  demoUrl?: string;
  publicNote?: string;
}

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "messaging", label: "Mensageria" },
  { id: "documents", label: "Documentos" },
  { id: "corporate", label: "Corporativos" },
];

export const projects: PortfolioProject[] = [
  {
    id: "streampulse",
    name: "StreamPulse",
    category: "messaging",
    type: "unconfirmed",
    summary: "Sistema de notificações baseado em Pub/Sub.",
    technologies: ["Pub/Sub"],
  },
  {
    id: "dochub",
    name: "DocHub",
    category: "documents",
    type: "unconfirmed",
    summary: "Ferramentas de processamento e conversão de documentos.",
  },
  {
    id: "fluxo-fiscal",
    name: "Fluxo Fiscal",
    category: "corporate",
    type: "professional",
    summary: "Sistema corporativo de gestão documental.",
    publicNote: "Detalhes técnicos e operacionais não são exibidos por confidencialidade.",
  },
];
