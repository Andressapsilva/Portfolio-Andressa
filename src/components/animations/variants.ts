import type { Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeInVariants: Variants = {
  visible: {
    opacity: [0, 1],
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const slideUpVariants: Variants = {
  visible: {
    opacity: [0, 1],
    y: [14, 0],
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

export const staggerChildVariants: Variants = {
  visible: {
    opacity: [0, 1],
    y: [12, 0],
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const timelineContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

export const timelineStepVariants: Variants = {
  visible: {
    opacity: [0, 1],
    x: [-10, 0],
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const timelinePointVariants: Variants = {
  visible: {
    opacity: [0, 1],
    scale: [0.75, 1],
    transition: { duration: 0.35, ease: easeOut },
  },
};

export const timelineLineVariants: Variants = {
  visible: {
    scaleY: [0, 1],
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.07, ease: easeOut },
  }),
  exit: {
    opacity: 0,
    y: 6,
    transition: { duration: 0.18, ease: easeOut },
  },
};
