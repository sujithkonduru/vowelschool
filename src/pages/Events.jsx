import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { events } from '../data/events.js';
import { PageIntro } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

export default function Events() {
  return (
    <>
      <PageIntro
        title={<>Observances and celebrations.</>}
        intro="A record of the observances published by the Vowelites schools, with their original dates. These are historical entries; the site does not publish an upcoming events calendar."
        aside={<p className="page-intro-count">{events.length} records · August to September 2025</p>}
      />

      <section className="section">
        <div className="container">
          <Stagger as="ul" className="event-record-list" stagger={0.05} amount={0.05}>
            {events.map((event) => (
              <StaggerItem as="li" className="event-record" key={event.slug}>
                <Link to={`/events/${event.slug}`}>
                  <time dateTime={event.date}>{event.shortDate}</time>

                  {event.poster ? (
                    <span className="event-record-poster">
                      <img src={event.poster} alt={event.posterAlt} loading="lazy" />
                    </span>
                  ) : (
                    <span className="event-record-poster is-empty" aria-hidden="true" />
                  )}

                  <span className="event-record-copy">
                    <span className="event-record-title">{event.title}</span>
                    <span className="event-record-summary">{event.summary}</span>
                  </span>

                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal as="p" className="source-note" delay={0.05}>
            Deadlines and dates are reproduced as published. An event poster is shown only
            where the school published one.
          </Reveal>
        </div>
      </section>
    </>
  );
}
