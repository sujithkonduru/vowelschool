import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/**
 * A restrained parallax frame: the image drifts inside a clipped window while
 * the page scrolls. It never changes the element's box, so nothing below it
 * shifts, and it becomes a still image under reduced motion.
 */
export function ParallaxMedia({
  src,
  alt,
  className = '',
  strength = 8,
  scale = 1.06,
  loading = 'lazy'
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`media-frame parallax ${className}`.trim()}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        style={
          reduce
            ? undefined
            : { y, scale }
        }
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}
