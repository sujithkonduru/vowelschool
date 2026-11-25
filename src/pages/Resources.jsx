import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { resources, rules } from '../data/site.js';
import { PageIntro, SectionHeading } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

function RuleList({ items }) {
  return (
    <Stagger as="ul" className="rule-list" stagger={0.03}>
      {items.map((item) => (
        <StaggerItem as="li" key={item.slice(0, 32)}>
          {item}
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default function Resources() {
  return (
    <>
      <PageIntro
        title={<>Rules, transport and calendars.</>}
        intro="The operational documents the schools publish: the code of conduct, uniform rules, transport rules and academic calendar charts. Where a published page has no document behind it, that is stated instead of invented."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <h2>Academic calendar</h2>
            <p className="muted">
              The calendar page publishes three image files for 2023–24. Open a chart to
              view it at full size.
            </p>
          </Reveal>
          <Stagger className="calendar-grid" stagger={0.06}>
            {resources.calendarPages.map((page) => (
              <StaggerItem as="a" key={page.href} href={page.href} target="_blank" rel="noreferrer" className="calendar-card">
                <span className="calendar-page">
                  <img src={page.href} alt={page.label} loading="lazy" />
                </span>
                <span className="calendar-label">
                  {page.label}
                  <ExternalLink size={15} aria-hidden="true" />
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="pending-list">
            {resources.pending.map((item) => (
              <Reveal className="pending-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section philosophy-section" id="school-rules">
        <div className="container">
          <SectionHeading
            title="Code of conduct"
            note="Published on the school rules page."
            action={
              <a className="text-link" href="https://vowelites.com/school-rules/" target="_blank" rel="noreferrer">
                <span>Original page</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            }
          />
          <RuleList items={rules.conduct} />
        </div>
      </section>

      <section className="section" id="uniform">
        <div className="container split split-wide">
          <Reveal>
            <h2>Uniform rules</h2>
            <p className="muted">
              The published page lists the girls’ regular and sports uniforms in detail.
              The accessible text ends before a boys’ uniform list, which is not reproduced.
            </p>
          </Reveal>
          <RuleList items={rules.uniform} />
        </div>
      </section>

      <section className="section philosophy-section" id="transport">
        <div className="container">
          <SectionHeading
            title="Transportation"
            note="Van rules, as published. Route maps, stops and driver details are not published on the site."
          />
          <RuleList items={rules.transport} />
          <Reveal as="p" className="source-note" delay={0.05}>
            Transport enquiries: Transport Manager Murali, +91 90300 16141.
          </Reveal>
        </div>
      </section>
    </>
  );
}
