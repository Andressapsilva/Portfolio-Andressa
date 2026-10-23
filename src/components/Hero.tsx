import { Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import heroPhoto from "@/assets/andressa-real-photo.png";
import {
  fadeInVariants,
  slideUpVariants,
  staggerChildVariants,
  staggerContainerVariants,
} from "@/components/animations/variants";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const immediateVariants = {
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0 } },
  };
  const fadeVariants = prefersReducedMotion ? immediateVariants : fadeInVariants;
  const titleVariants = prefersReducedMotion ? immediateVariants : slideUpVariants;
  const buttonVariants = prefersReducedMotion ? immediateVariants : staggerChildVariants;

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-36 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] lg:left-[72%]"
          animate={prefersReducedMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
          transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.svg
          className="absolute right-[5%] top-[18%] hidden h-44 w-44 text-lavender/20 sm:block"
          viewBox="0 0 160 160"
          fill="none"
          animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M24 32h46l24 30h42M24 32v72h54l20 24h38" stroke="currentColor" strokeWidth="1" strokeDasharray="4 7" />
          <circle cx="24" cy="32" r="4" fill="currentColor" />
          <circle cx="94" cy="62" r="4" fill="currentColor" />
          <circle cx="136" cy="62" r="4" fill="currentColor" />
          <circle cx="24" cy="104" r="4" fill="currentColor" />
          <circle cx="98" cy="128" r="4" fill="currentColor" />
          <circle cx="136" cy="128" r="4" fill="currentColor" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 md:gap-14 lg:gap-16">
          <motion.div
            className="w-full text-center lg:w-[60%] lg:text-left"
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={prefersReducedMotion ? immediateVariants : staggerContainerVariants}
          >
            <motion.p
              variants={fadeVariants}
              className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-lavender"
            >
              Desenvolvedora Full-Stack <span className="text-muted-foreground/70">·</span> Engenharia de Software
            </motion.p>
            <motion.h1
              variants={titleVariants}
              className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Olá, sou{" "}
              <motion.span
                className="name-shimmer inline-block cursor-default motion-reduce:animate-none motion-reduce:filter-none"
                animate={prefersReducedMotion ? undefined : { backgroundPosition: ["100% 0%", "0% 0%"] }}
                transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                Andressa Silva.
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeVariants}
              className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0"
            >
              Desenvolvedora Full-Stack e estudante de Engenharia de Software, com experiência no desenvolvimento de aplicações web, sistemas corporativos e automação de processos.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-3 lg:justify-start"
              variants={prefersReducedMotion ? immediateVariants : staggerContainerVariants}
            >
              <motion.a
                href="#projetos"
                variants={buttonVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-11 items-center rounded-lg border border-border px-5 py-3 font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:text-lavender hover:shadow-[0_0_18px_hsl(var(--primary)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Ver projetos
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1ufOwxCzg7WDyk322aix3GCmy5LPnlUTI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Baixar currículo
              </motion.a>
              <motion.a
                href="#contato"
                variants={buttonVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-11 items-center rounded-lg border border-border px-5 py-3 font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:text-lavender hover:shadow-[0_0_18px_hsl(var(--primary)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Contato
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex w-full justify-center lg:w-[40%]"
            initial={false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              visible: prefersReducedMotion
                ? { opacity: 1, x: 0, transition: { duration: 0 } }
                : {
                    opacity: [0, 1],
                    x: [18, 0],
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
                  },
            }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-[var(--palette-violet)] blur-2xl"
                aria-hidden="true"
                animate={prefersReducedMotion ? undefined : { opacity: [0.07, 0.13, 0.07] }}
                transition={prefersReducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="group relative rounded-2xl bg-gradient-to-br from-[var(--palette-lavender)] via-[var(--palette-primary)] to-[var(--palette-blue)] p-px transition-shadow duration-500 hover:shadow-[0_0_24px_hsl(var(--primary)/0.2)]">
                <img
                  src={heroPhoto}
                  alt="Andressa Silva"
                  className="relative aspect-[3/4] w-full rounded-[15px] bg-card object-cover object-[50%_38%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
