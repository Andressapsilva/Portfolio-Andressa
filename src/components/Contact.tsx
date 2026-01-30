import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:seu@email.com",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/seuusuario",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/seuusuario",
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
            Estou sempre aberto a novos projetos e oportunidades interessantes. 
            Entre em contato e vamos conversar.
          </p>
          
          <a
            href="mailto:seu@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity mb-12"
          >
            <Mail size={20} />
            Enviar E-mail
          </a>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-primary border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
