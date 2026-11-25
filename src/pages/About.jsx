import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/images.js';
import { coreValues, philosophy, principles, values } from '../data/site.js';
import { Action, PageIntro, TextLink } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

export default function About() {
  return (
    <>
      <PageIntro
        title={<>An education that goes beyond the classroom.</>}
        intro="Vowelites exists to replace an empty mind with an open one: learning by interaction, learning by understanding and learning by doing, across a group of schools and colleges in Nellore district."
        aside={
          <p className="page-intro-count">
            Founded as Vowel School in June 2011
          </p>
        }
      />

      <section className="section">
        <div className="container split split-wide">
          <Reveal>
            <h2>
              Welcome to
              <br />
              Vowelites.
            </h2>
            <p className="lede">
              Education’s purpose, in the words the school quotes from Malcolm S. Forbes,
              is to replace an empty mind with an open one.
            </p>
          </Reveal>

          <div className="split-body">
            <Reveal delay={0.06}>
              <p>
                Vowel Learning Initiation society began Vowel School in June 2011, with
                the aim of developing exceptional students who contribute to society. The
                group describes high academic standards, an advanced curriculum, and
                facilities that include sports, libraries, labs and arts.
              </p>
              <p>
                Its approach is multidisciplinary, structured and systematic, with
                psychological and pedagogical assessment used to support individual
                learning needs. Parents and teachers, the schools state, are committed to
                channelling students’ talents and energy into creative community building.
              </p>
              <p>
                Today the group publishes schools and colleges across Nellore district,
                from pre-primary schooling to higher secondary, degree and civil-services
                preparation.
              </p>
              <TextLink to="/schools">See every institution</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <Reveal>
            <h2>The statements the group is built on.</h2>
          </Reveal>
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

      <section className="section">
        <div className="container split split-media">
          <Reveal variant="media" as="figure" className="figure">
            <div className="media-frame">
              <img src={IMAGES.venu.src} alt={IMAGES.venu.alt} loading="lazy" />
            </div>
            <figcaption>
              R. Venu, Founder
              <span>{IMAGES.venu.credit}</span>
            </figcaption>
          </Reveal>

          <div>
            <Reveal>
              <h2>“Knowledge is liberation.”</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <blockquote className="founder-quote">
                Vowel is a dynamic learning institution seeking excellence for present and
                future needs, while learning from Indian ethical and moral value systems.
                Parents and teachers are committed to channelling students’ talents and
                energy into creative community building.
              </blockquote>
              <p className="attribution">
                R. Venu, Founder — from the principal’s message on the Vowel School profile
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="container">
          <Reveal>
            <h2>How the approach is described.</h2>
          </Reveal>
          <Stagger className="philosophy-columns" stagger={0.08}>
            {philosophy.map((item) => (
              <StaggerItem className="philosophy-column" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section values-section">
        <div className="container split split-wide">
          <Reveal>
            <h2>Values the group says it nurtures.</h2>
            <p className="muted">
              “To be a dynamic institution in equilibrium, we nurture the following
              values,” states the About page.
            </p>
            <ul className="core-values">
              {coreValues.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
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

      <section className="admissions-band">
        <div className="container admissions-band-inner">
          <Reveal>
            <h2>Visit a campus.</h2>
            <p>
              Each institution lists its own address and telephone numbers. Admissions
              enquiries for every branch are handled by the group office.
            </p>
          </Reveal>
          <Reveal className="admissions-band-actions" delay={0.08}>
            <Action to="/contact">Contact the group</Action>
            <Link className="text-link" to="/admissions">
              Admission requirements
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
