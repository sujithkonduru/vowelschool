import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll
} from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { pageMeta } from '../data/site.js';
import { schoolsBySlug } from '../data/schools.js';
import { eventsBySlug } from '../data/events.js';
import { EASE } from '../motion/variants.js';

const DEFAULT_META = {
  title: 'Vowelites | Learn, Grow, Lead',
  description:
    'Vowelites is an educational group in Nellore, Andhra Pradesh, teaching through interaction, understanding and doing.'
};

/**
 * Restores scroll position on navigation. The global stylesheet enables smooth
 * scrolling for in-page anchors, so it is suspended for one frame here —
 * otherwise a new route would visibly scroll up from the previous position.
 */
export function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previous;
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);
  return null;
}

function resolveMeta(pathname) {
  if (pageMeta[pathname]) return pageMeta[pathname];

  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'schools' && parts[1]) {
    const school = schoolsBySlug[parts[1]];
    if (school) return school.meta;
  }
  if (parts[0] === 'events' && parts[1]) {
    const event = eventsBySlug[parts[1]];
    if (event) {
      return {
        title: `${event.title} | Vowelites events`,
        description: event.summary
      };
    }
  }
  return DEFAULT_META;
}

/** Keeps the document title and description in step with the route. */
export function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname);
    document.title = meta.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

function BackToTop() {
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    setVisible(value > 720);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.24, ease: EASE }}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

/**
 * Site chrome. The skip link is the first focusable element so keyboard users
 * can bypass the navigation on every route.
 */
export function Shell({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
