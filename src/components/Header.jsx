import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll
} from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { LOGO } from '../data/images.js';
import { BRAND_TAGLINE, navigation } from '../data/site.js';
import { schools, schoolGroups } from '../data/schools.js';
import { EASE, mobileMenuItem } from '../motion/variants.js';

const DESKTOP_QUERY = '(min-width: 861px)';

export default function Header() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const megaTrigger = useRef(null);
  const megaWrap = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 18);
  });

  /* Close every panel when the route changes. */
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  /* Escape closes panels and returns focus to the trigger. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      if (megaOpen) {
        setMegaOpen(false);
        megaTrigger.current?.focus();
      }
      if (menuOpen) setMenuOpen(false);
    };
    const onPointerDown = (event) => {
      if (megaOpen && megaWrap.current && !megaWrap.current.contains(event.target)) {
        setMegaOpen(false);
      }
    };
    const media = window.matchMedia(DESKTOP_QUERY);
    const onViewportChange = () => {
      if (media.matches) setMenuOpen(false);
      else setMegaOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    media.addEventListener('change', onViewportChange);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      media.removeEventListener('change', onViewportChange);
    };
  }, [megaOpen, menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const onResize = () => {
        if (!window.matchMedia(DESKTOP_QUERY).matches) return;
        setMenuOpen(false);
      };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }
    return undefined;
  }, [menuOpen]);

  const panelTransition = reduce
    ? { duration: 0 }
    : { duration: 0.22, ease: EASE };

  /* Profile and event pages open on a light surface, so the header must be
     solid there from the first frame instead of overlaying in white. */
  const solidTop =
    /^\/schools\/[^/]+$/.test(pathname) || /^\/events\/[^/]+$/.test(pathname);
  const solid = scrolled || solidTop || menuOpen;

  return (
    <header className={`site-header${solid ? ' is-scrolled' : ''}${menuOpen ? ' has-menu' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Vowelites — home">
          <img src={LOGO} alt="Vowelites" className="brand-logo" />
          <span className="brand-tagline">{BRAND_TAGLINE}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navigation.map((item) =>
            item.mega ? (
              <div className="nav-mega" key={item.label} ref={megaWrap}>
                <button
                  type="button"
                  ref={megaTrigger}
                  className={`nav-item nav-mega-trigger${pathname.startsWith('/schools') ? ' is-active' : ''}`}
                  aria-expanded={megaOpen}
                  aria-controls="schools-menu"
                  onClick={() => setMegaOpen((open) => !open)}
                >
                  {item.label}
                  <motion.span
                    className="chevron"
                    animate={{ rotate: megaOpen ? 180 : 0 }}
                    transition={panelTransition}
                  >
                    <ChevronDown size={14} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {megaOpen ? (
                    <motion.div
                      id="schools-menu"
                      className="mega-panel"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                      transition={panelTransition}
                    >
                      {schoolGroups.map((group) => (
                        <div className="mega-group" key={group.key}>
                          <p className="mega-group-label">{group.label}</p>
                          <ul>
                            {schools
                              .filter((school) => school.group === group.key)
                              .map((school) => (
                                <li key={school.slug}>
                                  <Link to={`/schools/${school.slug}`}>
                                    <span>{school.name}</span>
                                    {school.levels ? <small>{school.levels}</small> : null}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                      <Link className="mega-all" to="/schools">
                        All institutions
                      </Link>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `nav-item${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="header-actions">
          <Link className="header-cta" to="/admissions">
            Admissions enquiry
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Primary"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.34, ease: EASE }}
          >
            <motion.ul
              className="mobile-menu-list"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduce ? 0 : 0.045 } }
              }}
            >
              {navigation.map((item) => (
                <motion.li key={item.label} variants={mobileMenuItem}>
                  <Link to={item.to} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={mobileMenuItem} className="mobile-menu-secondary">
                <span>Institutions</span>
                <ul>
                  {schools.slice(0, 6).map((school) => (
                    <li key={school.slug}>
                      <Link to={`/schools/${school.slug}`} onClick={() => setMenuOpen(false)}>
                        {school.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/schools" onClick={() => setMenuOpen(false)}>
                      All institutions
                    </Link>
                  </li>
                </ul>
              </motion.li>
              <motion.li variants={mobileMenuItem}>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </motion.li>
              <motion.li variants={mobileMenuItem}>
                <Link className="action action-primary action-md" to="/admissions" onClick={() => setMenuOpen(false)}>
                  <span>Admissions enquiry</span>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
