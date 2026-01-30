const Hero = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in">
            Desenvolvedor Full-Stack
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Olá, eu sou
            <br />
            <span className="text-foreground">Andressa </span>
            <span className="text-primary text-glow">Silva</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transformo ideias em código. Especializado em front-end moderno, 
            automações inteligentes e bots que facilitam a vida.
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projetos"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
