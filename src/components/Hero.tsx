import { FileText, Download } from "lucide-react";
import heroPhoto from "@/assets/andressa-hero.jpeg";

const Hero = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-[60%]">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in">
              Desenvolvedora Full-Stack
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              Olá, eu sou
              <br />
              <span className="name-shimmer text-primary text-glow inline-block cursor-default">
                Andressa Silva
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Desenvolvedora Full-Stack especializada em front-end moderno e automações 
              inteligentes que <span className="text-primary/90 font-medium">transformam processos manuais em soluções eficientes</span>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:scale-105 hover:shadow-[0_0_20px_hsl(177_85%_46%/0.4)] active:scale-95 transition-all duration-300 ease-out"
              >
                <FileText className="w-4 h-4" />
                Baixar Currículo
              </a>
              <a
                href="https://drive.google.com/file/d/1ufOwxCzg7WDyk322aix3GCmy5LPnlUTI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-medium rounded-lg hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_15px_hsl(177_85%_46%/0.3)] active:scale-95 transition-all duration-300 ease-out"
              >
                <Download className="w-4 h-4" />
                Baixar CV
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary hover:scale-105 hover:shadow-[0_0_15px_hsl(177_85%_46%/0.2)] active:scale-95 transition-all duration-300 ease-out"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary hover:scale-105 hover:shadow-[0_0_15px_hsl(177_85%_46%/0.2)] active:scale-95 transition-all duration-300 ease-out"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Photo - Rectangular */}
          <div className="lg:w-[40%] flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group cursor-pointer max-w-[320px] w-full">
              <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl opacity-50 group-hover:opacity-80 group-hover:bg-primary/30 transition-all duration-700 ease-out" />
              <img
                src={heroPhoto}
                alt="Andressa Silva"
                className="relative w-full rounded-2xl shadow-lg object-cover border border-border/30 group-hover:border-primary/40 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_hsl(177_85%_46%/0.25)] transition-all duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
