import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { IMAGES } from '../data/images.js';
import { schools } from '../data/schools.js';
import { events } from '../data/events.js';
import { philosophy, principles, testimonials, values } from '../data/site.js';
import { Action, SectionHeading, TextLink } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';
import { ParallaxMedia } from '../motion/ParallaxMedia.jsx';
import { EASE } from '../motion/variants.js';
import { useMediaQuery } from '../hooks/useMediaQuery.js';

/* Below this width the hero stacks (artwork band + ink panel), so the photograph
   is no longer a fixed layer that can be parallaxed. */
const STACKED_HERO = '(max-width: 980px)';

const heroFacts = [
  ['Established', '2011'],
  ['Region', 'Nellore district'],
  ['Stages', 'Nursery to Class X'],
  ['Boards', 'CBSE & State Board']
];

export default function Home() {
  const reduce = useReducedMotion();
  const stackedHero = useMediaQuery(STACKED_HERO);
  const still = reduce || stackedHero;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  /* The background layer is 20% taller than the hero, so a small drift never
     exposes an edge. The copy lifts and fades slightly as the hero is left. */
  const bgY = useTransform(scrollYProgress, [0, 1], ['-4%', '5%']);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -46]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

  const heroStagger = reduce
    ? {}
    : {
        initial: 'hidden',
        animate: 'visible',
        variants: { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
      };

  const line = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
      };

  const homeSchools = schools.slice(0, 6);
  const latestEvents = events.slice(0, 3);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <motion.div
          className="hero-bg"
          aria-hidden="true"
          style={{
            '--hero-src': `url(${IMAGES.campusHero.src})`,
            '--hero-src-mobile': `url(${IMAGES.campusHero.srcMobile})`,
            ...(still ? {} : { y: bgY })
          }}
        />
        <div className="hero-scrim" aria-hidden="true" />
        <p className="visually-hidden">
          Artwork: children arriving at a Vowel School entrance in the morning.
        </p>

        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            style={still ? undefined : { y: copyY, opacity: copyOpacity }}
          >
            <motion.div {...heroStagger}>
              <motion.p className="hero-place" variants={line}>
                <MapPin size={14} aria-hidden="true" />
                Nellore, Andhra Pradesh
              </motion.p>
              <motion.h1 variants={line}>
                Powered by intellect.
                <br />
                Driven by values.
              </motion.h1>
              <motion.p className="hero-lede" variants={line}>
                Rational learning through interaction, understanding and doing — across
                the schools and colleges of the Vowel Learning Initiations group.
              </motion.p>
              <motion.div className="hero-actions" variants={line}>
                <Action to="/schools">Explore our schools</Action>
                <Action to="/admissions" variant="ghost">
                  Admission requirements
                </Action>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="hero-facts">
            {heroFacts.map(([label, value]) => (
              <div className="hero-fact" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split split-wide">
          <Reveal className="split-lead">
            <h2>
              Learning by interaction,
              <br />
              understanding and doing.
            </h2>
          </Reveal>
          <div className="split-body">
            <Reveal delay={0.06}>
              <p className="lede">
                Vowelites is dedicated to enhancing the rate of teaching and training
                through self-learning and a comprehensive approach to education.
              </p>
              <p>
                With a multidisciplinary, structured and systematic approach, the group
                places emphasis on psychological and pedagogical assessment to support
                each learner. Vowel Learning Initiation society began Vowel School in
                June 2011; the group now publishes schools and colleges across Nellore
                district.
              </p>
              <TextLink to="/about">Read the institutional story</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <SectionHeading
            title={
              <>
                The four statements
                <br />
                the group is built on.
              </>
            }
            note="Mission, vision, policy and motto, reproduced as the schools publish them."
          />

          <Stagger className="principles-grid" stagger={0.08}>
            {principles.map((item) => (
              <StaggerItem className="principle" key={item.label}>
                <span className="principle-label">{item.label}</span>
                <h3>{item.headline}</h3>
                <p>{item.copy}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section schools-preview">
        <div className="container">
          <SectionHeading
            title="Schools and colleges in the group"
            note={`${schools.length} institutions are listed, from pre-primary schooling to civil-services preparation.`}
            action={<TextLink to="/schools">View the full register</TextLink>}
          />

          <Stagger as="ul" className="preview-list" stagger={0.05} amount={0.1}>
            {homeSchools.map((school) => (
              <StaggerItem as="li" key={school.slug} className="preview-row">
                <Link to={`/schools/${school.slug}`}>
                  <span className="preview-name">{school.name}</span>
                  <span className="preview-levels">{school.levels || 'Levels not published'}</span>
                  <span className="preview-locality">{school.locality}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="container split split-media">
          <Reveal
            className="philosophy-media"
            variant="media"
            as="figure"
          >
            <ParallaxMedia
              src={IMAGES.faculty.src}
              alt={IMAGES.faculty.alt}
              strength={6}
            />
            <figcaption>
              Teachers of Vowel 18 CBSE School
              <span>{IMAGES.faculty.credit}</span>
            </figcaption>
          </Reveal>

          <div className="philosophy-body">
            <Reveal>
              <h2>We are dynamic, and ethically committed.</h2>
            </Reveal>
            <Stagger className="philosophy-list" stagger={0.08}>
              {philosophy.map((item) => (
                <StaggerItem className="philosophy-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <TextLink to="/academics">How the academic approach works</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container split split-wide">
          <Reveal>
            <h2>What the schools ask of a learner.</h2>
            <p className="muted">
              Six values, with the explanation the group publishes for each.
            </p>
          </Reveal>
          <Stagger as="ul" className="value-list" stagger={0.05}>
            {values.map((value) => (
              <StaggerItem as="li" className="value-row" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section events-preview">
        <div className="container">
          <SectionHeading
            title="Observances across the schools"
            note="Published event records with their original dates; these are past observances, not an upcoming calendar."
            action={<TextLink to="/events">All event records</TextLink>}
          />

          <Stagger as="ul" className="event-lines" stagger={0.06}>
            {latestEvents.map((event) => (
              <StaggerItem as="li" className="event-line" key={event.slug}>
                <Link to={`/events/${event.slug}`}>
                  <time dateTime={event.date}>{event.shortDate}</time>
                  <span className="event-line-title">{event.title}</span>
                  <span className="event-line-summary">{event.summary}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <SectionHeading
            title="In parents’ words"
            note="Testimonials published on the Vowelites homepage, with the attribution given there."
          />
          <Stagger className="testimonial-grid" stagger={0.1}>
            {testimonials.map((item) => (
              <StaggerItem as="figure" className="testimonial" key={item.name}>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <span>{item.name}</span>
                  <span>{item.role}</span>
                </figcaption>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="admissions-band">
        <div className="container admissions-band-inner">
          <Reveal className="admissions-band-copy">
            <h2>
              Admissions are open
              <br />
              to every capable child.
            </h2>
            <p>
              Eligibility for Nursery, UKG and Class I is stated by age as on 30 June.
              The documents required and the enquiry route are set out on the admissions page.
            </p>
          </Reveal>
          <Reveal className="admissions-band-actions" delay={0.1}>
            <Action to="/admissions">Read admission requirements</Action>
            <Action to="/contact" variant="ghost">
              Contact the group
            </Action>
          </Reveal>
        </div>
      </section>
    </>
  );
}
