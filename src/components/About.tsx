import { BriefcaseBusiness, Code2, GraduationCap, Lightbulb } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/animations/ScrollReveal";
import {
  timelineContainerVariants,
  timelineLineVariants,
  timelinePointVariants,
  timelineStepVariants,
} from "@/components/animations/variants";

const careerSteps = [
  "Jovem Aprendiz na área de TI",
  "Estagiária de Desenvolvimento",
  "Auxiliar de TI Júnior, com atuação em desenvolvimento de sistemas",
];

const interests = [
  "Desenvolvimento de aplicações web",
  "Sistemas corporativos",
  "Banco de dados e integrações",
  "Automação de processos",
];

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  const cardHover = prefersReducedMotion ? undefined : { y: -3 };
  const cardTransition = prefersReducedMotion
    ? { duration: 0.2 }
    : { duration: 0.3, ease: "easeOut" as const };

  return (
    <section id="sobre-mim" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-10rem] top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-[-8rem] h-72 w-72 rounded-full bg-[var(--palette-cyan)]/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-lavender">
            Apresentação
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Sobre mim</h2>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Sou estudante do 6º período de Engenharia de Software e profissional de TI com
            experiência em desenvolvimento de aplicações web, sistemas corporativos, bancos de
            dados, integrações e automações. Ao longo da minha trajetória, venho ampliando minha
            atuação entre desenvolvimento e tecnologia aplicada a processos.
          </p>
        </ScrollReveal>

        <StaggerGroup className="grid gap-6 lg:grid-cols-2">
          <StaggerItem className="h-full">
            <motion.div
              whileHover={cardHover}
              transition={cardTransition}
              className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-[var(--palette-violet)]/60 motion-reduce:transform-none md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <motion.span
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-xl bg-primary/10 p-2.5 text-lavender"
                >
                  <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
                </motion.span>
                <h3 className="text-xl font-semibold text-foreground">Minha trajetória profissional</h3>
              </div>

              <motion.ol
                initial={false}
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={timelineContainerVariants}
                className="relative ml-2 space-y-6 pl-6"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-px origin-top bg-gradient-to-b from-primary/70 via-[var(--palette-violet)]/50 to-[var(--palette-cyan)]/60"
                  variants={prefersReducedMotion ? { visible: { scaleY: 1 } } : timelineLineVariants}
                />
                {careerSteps.map((step, index) => (
                  <motion.li
                    key={step}
                    variants={prefersReducedMotion ? undefined : timelineStepVariants}
                    className="relative"
                  >
                    <motion.span
                      aria-hidden="true"
                      variants={prefersReducedMotion ? undefined : timelinePointVariants}
                      className={`absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-card ${
                        index === careerSteps.length - 1
                          ? "bg-[var(--palette-cyan)]"
                          : "bg-primary"
                      }`}
                    />
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{step}</p>
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>
          </StaggerItem>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2">
            <StaggerItem className="h-full">
              <motion.div
                whileHover={cardHover}
                transition={cardTransition}
                className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-[var(--palette-violet)]/60 motion-reduce:transform-none md:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <motion.span
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-xl bg-[var(--palette-cyan)]/10 p-2.5 text-[var(--palette-cyan)]"
                  >
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                  <h3 className="text-lg font-semibold text-foreground">Formação acadêmica</h3>
                </div>
                <p className="text-sm font-medium text-foreground">Engenharia de Software</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Estudante do 6º período.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={cardHover}
                transition={cardTransition}
                className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-[var(--palette-violet)]/60 motion-reduce:transform-none md:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <motion.span
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-xl bg-primary/10 p-2.5 text-lavender"
                  >
                    <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                  <h3 className="text-lg font-semibold text-foreground">Áreas de interesse</h3>
                </div>
                <ul className="space-y-3">
                  {interests.map((interest, index) => (
                    <li key={interest} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      {index % 2 === 0 ? (
                        <Code2
                          className="mt-0.5 h-4 w-4 shrink-0 text-lavender"
                          aria-hidden="true"
                        />
                      ) : (
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--palette-cyan)]"
                          aria-hidden="true"
                        />
                      )}
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          </StaggerGroup>
        </StaggerGroup>
      </div>
    </section>
  );
};

export default About;
