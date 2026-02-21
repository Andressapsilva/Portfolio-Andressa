const techGroups = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    ],
  },
  {
    label: "Backend & Banco de Dados",
    items: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
      { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
    ],
  },
  {
    label: "Ferramentas",
    items: [
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Discord", icon: "https://skillicons.dev/icons?i=discord" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    ],
  },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Linguagens & Tecnologias
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Ferramentas e tecnologias que utilizo para criar soluções eficientes e modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techGroups.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                {group.label}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                {group.items.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(177_85%_46%/0.2)] group-hover:scale-110">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
