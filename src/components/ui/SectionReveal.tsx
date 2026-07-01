import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealViewport, sectionRevealTransition } from "@/constants/animations";

type SectionRevealProps = {
  children: ReactNode;
};

export function SectionReveal({ children }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={revealViewport}
      transition={sectionRevealTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
