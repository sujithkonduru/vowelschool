import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery.js';
import { PageIntro } from '../components/ui.jsx';
import { Reveal } from '../motion/Reveal.jsx';
import GalleryLightbox from '../components/GalleryLightbox.jsx';
import { EASE, fadeUp } from '../motion/variants.js';

export default function Gallery() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const items = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter]
  );

  const tile = fadeUp(reduce, 14);

  return (
    <>
      <PageIntro
        title={<>Photographs from the schools.</>}
        intro="Images published by the schools in their own galleries. Each photograph keeps its school association; where the source states an activity, it is named."
        aside={<p className="page-intro-count">{galleryItems.length} photographs · {galleryCategories.length - 1} galleries</p>}
      />

      <section className="section">
        <div className="container">
          <div className="gallery-toolbar">
            <div className="filters" role="group" aria-label="Filter photographs by school">
              {galleryCategories.map((category) => {
                const selected = filter === category;
                return (
                  <button
                    type="button"
                    key={category}
                    className={selected ? 'is-selected' : ''}
                    aria-pressed={selected}
                    onClick={() => {
                      setFilter(category);
                      setActiveIndex(null);
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <p className="gallery-count" aria-live="polite">
              {items.length} {items.length === 1 ? 'photograph' : 'photographs'}
            </p>
          </div>

          <motion.div className="gallery-grid" layout>
            <AnimatePresence mode="popLayout" initial={false}>
              {items.map((item, index) => (
                <motion.button
                  type="button"
                  key={item.id}
                  layout
                  className="gallery-tile"
                  variants={tile}
                  initial="hidden"
                  animate="visible"
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open ${item.school} photograph ${index + 1} of ${items.length}`}
                >
                  <span className="gallery-media">
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <span className="gallery-expand" aria-hidden="true">
                      <Expand size={16} />
                    </span>
                  </span>
                  <span className="gallery-caption">
                    <span className="gallery-school">{item.school}</span>
                    {item.activity ? <span className="gallery-activity">{item.activity}</span> : null}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {items.length === 0 ? (
            <div className="empty-state">
              <p>No photographs are published for this gallery.</p>
              <button type="button" className="action action-ink action-sm" onClick={() => setFilter('All')}>
                <span>Clear filter</span>
              </button>
            </div>
          ) : null}

          <Reveal as="p" className="source-note" delay={0.05}>
            The source galleries load their images dynamically, so this selection is the
            set whose files could be verified. Photographs are shown at their published
            aspect ratio and are not cropped to a house style.
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null ? (
          <GalleryLightbox
            items={items}
            index={activeIndex}
            onIndexChange={setActiveIndex}
            onClose={() => setActiveIndex(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
