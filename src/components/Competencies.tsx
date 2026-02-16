import { MessageSquare, FolderCode, Brain, RefreshCw, Users } from "lucide-react";

const competencies = [
  { icon: <MessageSquare className="w-5 h-5" />, label: "Comunicação clara em projetos técnicos" },
  { icon: <FolderCode className="w-5 h-5" />, label: "Organização e padronização de código" },
  { icon: <Brain className="w-5 h-5" />, label: "Pensamento analítico" },
  { icon: <RefreshCw className="w-5 h-5" />, label: "Adaptabilidade e aprendizado contínuo" },
  { icon: <Users className="w-5 h-5" />, label: "Trabalho colaborativo em equipe" },
];

const Competencies = () => {
  return (
    <section id="competencias" className="py-24 relative">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Competências Profissionais</h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          Habilidades interpessoais que complementam minha atuação técnica.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencies.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card/30 backdrop-blur-md border border-border/30 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(177_85%_46%/0.1)] transition-all duration-400"
            >
              <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                {item.icon}
              </div>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
