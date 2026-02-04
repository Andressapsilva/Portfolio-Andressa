import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Text Content - Centered */}
          <div className="text-center lg:text-left max-w-2xl">
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
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transformo ideias em código. Especializada em front-end moderno, 
              automações inteligentes e bots que facilitam a vida.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <a
                href="#projetos"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:scale-105 hover:shadow-[0_0_20px_hsl(177_85%_46%/0.4)] active:scale-95 transition-all duration-300 ease-out"
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

          {/* Avatar Photo */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group cursor-pointer">
              {/* Glow ring behind avatar */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 group-hover:scale-125 transition-all duration-700 ease-out scale-110" />
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-primary/10 group-hover:border-primary/30 group-hover:scale-105 transition-all duration-500 ease-out" />
              <Avatar className="w-48 h-48 md:w-64 md:h-64 border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500 ease-out relative shadow-lg group-hover:shadow-[0_0_40px_hsl(177_85%_46%/0.3)] overflow-hidden">
                <AvatarImage 
                  src={profilePhoto} 
                  alt="Andressa Silva" 
                  className="object-cover scale-150 object-[center_15%] group-hover:scale-[1.55] transition-transform duration-700 ease-out contrast-[1.05] brightness-[1.02]" 
                />
                <AvatarFallback className="bg-card text-primary text-4xl md:text-5xl font-bold">
                  AS
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
