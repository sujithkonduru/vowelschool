import React, { useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { EASE } from '../motion/variants.js';

/**
 * Accessible image viewer: Escape closes, arrow keys move, Tab stays inside,
 * and focus returns to the tile that opened it.
 */
export default function GalleryLightbox({ items, index, onIndexChange, onClose }) {
  const reduce = useReducedMotion();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const restoreRef = useRef(null);

  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onIndexChange(index - 1);
  }, [hasPrev, index, onIndexChange]);

  const goNext = useCallback(() => {
    if (hasNext) onIndexChange(index + 1);
  }, [hasNext, index, onIndexChange]);

  useEffect(() => {
    restoreRef.current = document.activeElement;
    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
      if (restoreRef.current instanceof HTMLElement) restoreRef.current.focus();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev, onClose]);

  if (!item) return null;

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title}. Image ${index + 1} of ${items.length}`}
      ref={dialogRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.22 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="lightbox-bar">
        <span className="lightbox-count">
          {index + 1} / {items.length}
        </span>
        <button type="button" className="lightbox-close" onClick={onClose} ref={closeRef} aria-label="Close image viewer">
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="lightbox-stage">
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={goPrev}
          disabled={!hasPrev}
          aria-label="Previous image"
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </button>

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.id}
            className="lightbox-figure"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.99 }}
            transition={{ duration: reduce ? 0 : 0.24, ease: EASE }}
          >
            <img src={item.src} alt={item.alt} />
            <figcaption>
              <span className="lightbox-title">{item.title}</span>
              <span className="lightbox-meta">
                {item.school}
                {item.activity ? ` · ${item.activity}` : ''}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={goNext}
          disabled={!hasNext}
          aria-label="Next image"
        >
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
}
