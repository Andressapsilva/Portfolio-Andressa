import { FileText } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      label: "WhatsApp",
      href: "https://wa.me/5500000000000",
      customIcon: "whatsapp",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/seuusuario",
      icon: "https://skillicons.dev/icons?i=instagram&theme=dark",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/seuusuario",
      icon: "https://skillicons.dev/icons?i=linkedin&theme=dark",
    },
    {
      label: "GitHub",
      href: "https://github.com/seuusuario",
      icon: "https://skillicons.dev/icons?i=github&theme=dark",
    },
    {
      label: "Gmail",
      href: "mailto:seu@gmail.com",
      icon: "https://skillicons.dev/icons?i=gmail&theme=dark",
    },
  ];

  return (
    <section id="contato" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-muted-foreground mb-8">
            Estou sempre aberta a novos projetos e oportunidades interessantes. 
            Entre em contato e vamos conversar.
          </p>

          {/* CV Button */}
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:scale-105 hover:shadow-[0_0_20px_hsl(177_85%_46%/0.4)] active:scale-95 transition-all duration-300 ease-out mb-10"
          >
            <FileText className="w-4 h-4" />
            Baixar Currículo
          </a>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/50 shadow-[0_0_15px_hsl(177_85%_46%/0.4)]" />
                {link.customIcon === "whatsapp" ? (
                  <svg viewBox="0 0 256 256" className="w-12 h-12 relative z-10" fill="none">
                    <rect width="256" height="256" rx="60" fill="#1a1a1a" />
                    <path d="M128 32C74.98 32 32 74.98 32 128c0 17.26 4.56 33.45 12.53 47.44L32 224l50.04-12.05A95.64 95.64 0 00128 224c53.02 0 96-42.98 96-96s-42.98-96-96-96zm0 176c-14.68 0-28.47-3.89-40.36-10.68l-2.89-1.72-29.97 7.86 8.01-29.26-1.89-3.01C53.25 157.56 48 143.24 48 128c0-44.11 35.89-80 80-80s80 35.89 80 80-35.89 80-80 80z" fill="#25D366" />
                    <path d="M175.22 152.37c-2.62-1.31-15.49-7.64-17.89-8.51-2.4-.88-4.15-1.31-5.9 1.31-1.75 2.62-6.78 8.51-8.31 10.26-1.53 1.75-3.06 1.97-5.68.66-2.62-1.31-11.06-4.08-21.07-13.01-7.79-6.95-13.05-15.53-14.58-18.15-1.53-2.62-.16-4.04 1.15-5.34 1.18-1.17 2.62-3.06 3.93-4.59 1.31-1.53 1.75-2.62 2.62-4.37.88-1.75.44-3.28-.22-4.59-.66-1.31-5.9-14.22-8.09-19.47-2.13-5.11-4.29-4.42-5.9-4.5-1.53-.08-3.28-.1-5.03-.1s-4.59.66-6.99 3.28c-2.4 2.62-9.17 8.97-9.17 21.87s9.39 25.37 10.7 27.12c1.31 1.75 18.49 28.23 44.81 39.58 6.26 2.7 11.15 4.32 14.96 5.53 6.29 2 12.01 1.72 16.53 1.04 5.04-.76 15.49-6.33 17.67-12.45 2.18-6.11 2.18-11.35 1.53-12.45-.66-1.09-2.4-1.75-5.02-3.06z" fill="#25D366" />
                  </svg>
                ) : (
                  <img src={link.icon} alt={link.label} className="w-12 h-12 relative z-10" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
