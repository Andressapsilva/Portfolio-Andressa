import { MessageSquare, FolderCode, Brain, RefreshCw, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { staggerChildVariants, staggerContainerVariants } from "@/components/animations/variants";

const competencies = [
  { icon: <MessageSquare className="w-5 h-5" />, label: "Comunicação clara em projetos técnicos" },
  { icon: <FolderCode className="w-5 h-5" />, label: "Organização e padronização de código" },
  { icon: <Brain className="w-5 h-5" />, label: "Pensamento analítico" },
  { icon: <RefreshCw className="w-5 h-5" />, label: "Adaptabilidade e aprendizado contínuo" },
  { icon: <Users className="w-5 h-5" />, label: "Trabalho colaborativo em equipe" },
];

const Competencies = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="competencias" className="relative py-16">
      <div className="container mx-auto px-6 relative">
        <ScrollReveal effect="fadeIn" className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Competências Profissionais</h2>
          <p className="max-w-xl text-muted-foreground">
            Habilidades interpessoais que complementam minha atuação técnica.
          </p>
        </ScrollReveal>

        <motion.ul
          initial={false}
          whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
          className="flex flex-wrap gap-3"
        >
          {competencies.map((item) => (
            <motion.li
              key={item.label}
              variants={prefersReducedMotion ? undefined : staggerChildVariants}
              className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_18px_hsl(var(--primary)/0.08)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="shrink-0 rounded-lg bg-primary/10 p-2 text-lavender [&>svg]:transition-transform [&>svg]:duration-200 group-hover:[&>svg]:scale-110 motion-reduce:[&>svg]:transition-none">
                {item.icon}
              </span>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Competencies;
