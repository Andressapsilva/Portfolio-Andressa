import { Lightbulb, Zap, GraduationCap } from "lucide-react";
import heroPhoto from "@/assets/andressa-hero.jpeg";

const highlights = [
  "Organização de código e documentação",
  "Facilidade de aprendizado rápido",
  "Experiência com automações e bots",
  "Visão de produto e experiência do usuário",
];

const About = () => {
  return (
    <section id="sobre-mim" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Sobre mim</h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Small photo */}
          <div className="shrink-0 mx-auto lg:mx-0">
            <img
              src={heroPhoto}
              alt="Andressa Silva"
              className="w-40 h-48 rounded-2xl object-cover border border-border/30 shadow-md"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            {/* Who I am */}
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-border/30">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Quem eu sou profissionalmente</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvedora Full-Stack com foco em front-end moderno e automações inteligentes. 
                Experiência prática com React, Node.js e Python.
              </p>
            </div>

            {/* What sets me apart */}
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-border/30">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">O que me diferencia</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Current moment */}
            <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-border/30">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Momento atual</h3>
              </div>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Jovem Aprendiz na área de TI
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Cursando graduação em tecnologia
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Buscando oportunidades para crescer como desenvolvedora
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
