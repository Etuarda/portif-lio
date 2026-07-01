export const revealViewport = { once: true, margin: "-100px" } as const;

export const sectionRevealTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

export const springPillTransition = {
  type: "spring",
  stiffness: 350,
  damping: 28,
} as const;
