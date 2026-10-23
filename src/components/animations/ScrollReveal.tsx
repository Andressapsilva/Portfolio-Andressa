import type { HTMLAttributes, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeInVariants,
  slideUpVariants,
  staggerChildVariants,
  staggerContainerVariants,
} from "./variants";

type RevealEffect = "fadeIn" | "slideUp";

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  effect?: RevealEffect;
  delay?: number;
}

interface StaggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  effect = "slideUp",
  ...props
}: ScrollRevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = effect === "fadeIn" ? fadeInVariants : slideUpVariants;

  return (
    <motion.div
      initial={false}
      whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={prefersReducedMotion ? { duration: 0 } : { delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const StaggerGroup = ({ children, className, ...props }: StaggerProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className, ...props }: StaggerProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      variants={prefersReducedMotion ? undefined : staggerChildVariants}
      whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export { ScrollReveal, StaggerGroup, StaggerItem };
