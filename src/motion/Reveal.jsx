import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, mediaReveal, staggerGroup, staggerItem } from './variants.js';

/**
 * Viewport-triggered reveal. One shared implementation keeps timing consistent
 * across routes. When the reader has asked for reduced motion the element is
 * rendered as plain markup: content is present immediately and nothing is
 * ever gated behind an animation.
 */
export function Reveal({
  children,
  as = 'div',
  variant = 'up',
  delay = 0,
  distance,
  className = '',
  amount = 0.18,
  once = true,
  ...rest
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Tag = motion[as] || motion.div;
  const variants = variant === 'media' ? mediaReveal(reduce) : fadeUp(reduce, distance);

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Parent that staggers its StaggerItem children when it enters the viewport. */
export function Stagger({
  children,
  as = 'div',
  className = '',
  stagger = 0.07,
  delayChildren = 0.05,
  amount = 0.15,
  once = true,
  ...rest
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerGroup(reduce, { stagger, delayChildren })}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, as = 'div', className = '', distance, ...rest }) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const Tag = motion[as] || motion.div;
  return (
    <Tag className={className} variants={staggerItem(reduce, distance)} {...rest}>
      {children}
    </Tag>
  );
}
