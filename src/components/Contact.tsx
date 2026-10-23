import { FileText } from "lucide-react";

type SocialBrand = "whatsapp" | "instagram" | "linkedin" | "github" | "gmail";

const SocialIcon = ({ brand }: { brand: SocialBrand }) => {
  if (brand === "whatsapp") {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#25D366"
          d="M24 3.5a20 20 0 0 0-17.1 30.4L4.5 44l10.4-2.7A20 20 0 1 0 24 3.5Z"
        />
        <path
          fill="#fff"
          d="M33.8 28.7c-.5-.3-3-1.5-3.5-1.7-.5-.2-.8-.3-1.2.3-.4.5-1.3 1.7-1.6 2.1-.3.4-.6.4-1.1.1-.5-.3-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .3-.2.5-.6.8-.9.3-.3.4-.5.5-.8.2-.3.1-.6 0-.9-.1-.3-1.2-2.9-1.7-4-.4-1-.9-.9-1.2-.9h-1c-.4 0-.9.1-1.4.6-.5.5-1.8 1.8-1.8 4.3s1.9 5 2.1 5.3c.3.3 3.7 5.6 8.9 7.9 1.2.5 2.2.8 2.9 1.1 1.2.4 2.3.3 3.2.2 1-.2 3-1.2 3.4-2.4.4-1.2.4-2.2.3-2.4-.1-.2-.5-.3-1-.6Z"
        />
      </svg>
    );
  }

  if (brand === "instagram") {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <defs>
          <linearGradient id="instagram-brand-gradient" x1="5" y1="43" x2="43" y2="5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD600" />
            <stop offset=".48" stopColor="#FF7A00" />
            <stop offset=".73" stopColor="#FF0069" />
            <stop offset="1" stopColor="#D300C5" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#instagram-brand-gradient)" />
        <rect x="12" y="12" width="24" height="24" rx="7" fill="none" stroke="#fff" strokeWidth="3" />
        <circle cx="24" cy="24" r="5.5" fill="none" stroke="#fff" strokeWidth="3" />
        <circle cx="32" cy="16.5" r="1.8" fill="#fff" />
      </svg>
    );
  }

  if (brand === "linkedin") {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <rect x="3" y="3" width="42" height="42" rx="8" fill="#0A66C2" />
        <path
          fill="#fff"
          d="M15.2 19.2h-5v16h5v-16Zm-2.5-2.2a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8Zm21.1 9c0-4.8-2.6-7.1-6.1-7.1-2.8 0-4 1.5-4.7 2.5v-2.2h-5v16h5v-8.9c0-2.3.4-4.5 3.2-4.5s2.8 2.6 2.8 4.7v8.7h5v-9.2Z"
        />
      </svg>
    );
  }

  if (brand === "github") {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path
          fill="#F5F3FF"
          d="M24 4a20 20 0 0 0-6.3 39c1 .2 1.4-.4 1.4-1v-3.8c-5.7 1.2-6.9-2.4-6.9-2.4-.9-2.3-2.3-2.9-2.3-2.9-1.9-1.3.1-1.3.1-1.3 2.1.1 3.2 2.1 3.2 2.1 1.9 3.2 4.9 2.3 6.1 1.8.2-1.4.7-2.3 1.3-2.8-4.6-.5-9.4-2.3-9.4-10.1 0-2.2.8-4 2.1-5.4-.2-.5-.9-2.6.2-5.4 0 0 1.7-.5 5.5 2.1a19.1 19.1 0 0 1 10 0c3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8.4 4.9.2 5.4 1.3 1.4 2.1 3.2 2.1 5.4 0 7.8-4.8 9.6-9.4 10.1.7.6 1.4 1.7 1.4 3.5V42c0 .6.4 1.2 1.4 1A20 20 0 0 0 24 4Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
      <path d="M5 13.5v21l7 5V18.4L5 13.5Z" fill="#4285F4" />
      <path d="m12 18.4 12 9 12-9v-8.2L24 19.1 12 10.2v8.2Z" fill="#EA4335" />
      <path d="M36 18.4v21l7-5v-21l-7 5Z" fill="#34A853" />
      <path d="M5 13.5 12 19v-8.8L9.7 8.5A3 3 0 0 0 5 10.9v2.6Z" fill="#C5221F" />
      <path d="M36 10.2V19l7-5.5v-2.6a3 3 0 0 0-4.7-2.4L36 10.2Z" fill="#FBBC04" />
      <path d="M12 39.5v-21l-7-5v21l7 5Z" fill="#4285F4" />
    </svg>
  );
};

const Contact = () => {
  const socialLinks = [
    {
      label: "WhatsApp",
      href: "https://wa.me/5500000000000",
      brand: "whatsapp",
      hoverGlow: "hover:shadow-[0_0_18px_rgba(37,211,102,0.18)]",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/seuusuario",
      brand: "instagram",
      hoverGlow: "hover:shadow-[0_0_18px_rgba(255,0,105,0.18)]",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andressa-pedrosa-da-silva-168535289/",
      brand: "linkedin",
      hoverGlow: "hover:shadow-[0_0_18px_rgba(10,102,194,0.2)]",
    },
    {
      label: "GitHub",
      href: "https://github.com/seuusuario",
      brand: "github",
      hoverGlow: "hover:shadow-[0_0_18px_rgba(245,243,255,0.14)]",
    },
    {
      label: "Gmail",
      href: "mailto:seu@gmail.com",
      brand: "gmail",
      hoverGlow: "hover:shadow-[0_0_18px_rgba(234,67,53,0.18)]",
    },
  ] satisfies { label: string; href: string; brand: SocialBrand; hoverGlow: string }[];

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
            href="https://drive.google.com/file/d/1ufOwxCzg7WDyk322aix3GCmy5LPnlUTI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl border border-primary hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary)/0.16)] hover:scale-105 active:scale-95 transition-all duration-300 ease-out mb-10"
          >
            <FileText className="w-5 h-5" />
            Baixar Currículo
          </a>

          <div className="flex justify-center items-start gap-4 flex-wrap sm:gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex min-w-[76px] flex-col items-center rounded-xl border border-border/40 bg-card px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${link.hoverGlow}`}
                aria-label={link.label}
                title={link.label}
              >
                <span className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <SocialIcon brand={link.brand} />
                </span>
                <span className="mt-2 text-center text-[10px] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
