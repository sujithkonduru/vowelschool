/**
 * Shared motion language. Distances stay small so sections settle rather than
 * slide, and every transform collapses to a plain fade when the reader has
 * asked for reduced motion.
 */
export const EASE = [0.22, 1, 0.36, 1];
export const EASE_OUT = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.22,
  base: 0.5,
  slow: 0.72
};

const spring = { type: 'spring', stiffness: 320, damping: 32, mass: 0.9 };

/** Section / element reveal rising a short distance. */
export function fadeUp(reduce, distance = 22) {
  if (reduce) return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASE }
    }
  };
}

export function fadeIn(reduce) {
  if (reduce) return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DURATION.base, ease: EASE } }
  };
}

/** Horizontal entrances for split editorial layouts. */
export function slideIn(reduce, from = 'left', distance = 30) {
  if (reduce) return fadeIn(reduce);
  const x = from === 'left' ? -distance : distance;
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION.slow, ease: EASE }
    }
  };
}

/** Media reveal: opens from a slight inset instead of zooming. */
export function mediaReveal(reduce) {
  if (reduce) return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return {
    hidden: { opacity: 0, scale: 0.985, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE_OUT }
    }
  };
}

/** Parent orchestrator for staggered groups. */
export function staggerGroup(reduce, { delayChildren = 0.06, stagger = 0.07 } = {}) {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren: reduce ? 0 : stagger
      }
    }
  };
}

/** Child within a staggered group. */
export function staggerItem(reduce, distance = 18) {
  return fadeUp(reduce, distance);
}

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE }
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

export const reducedPageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.12 } }
};

/** Dropdown / disclosure panels. */
export const panelMotion = {
  initial: { opacity: 0, y: -6, scale: 0.995 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: EASE_OUT } },
  exit: { opacity: 0, y: -4, scale: 0.995, transition: { duration: 0.14, ease: 'easeIn' } }
};

export const mobileMenuItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } }
};

export { spring };
