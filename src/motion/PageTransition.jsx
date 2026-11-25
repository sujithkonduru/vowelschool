import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { pageTransition, reducedPageTransition } from './variants.js';

/**
 * Wraps each route. The wrapper keeps a minimum viewport height so the footer
 * does not jump up during the exit phase of the crossfade.
 */
export function PageTransition({ children }) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedPageTransition : pageTransition;
  return (
    <motion.div
      className="route-frame"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
