"use client";

import { useScroll, useSpring } from "framer-motion";

/**
 * Custom hook for smooth scroll progress tracking
 * Returns a spring-animated value from 0 to 1 as user scrolls
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Apply spring physics for smooth interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return smoothProgress;
}
