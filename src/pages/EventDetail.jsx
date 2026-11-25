import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { events, eventsBySlug } from '../data/events.js';
import { Reveal } from '../motion/Reveal.jsx';
import NotFound from './Info.jsx';

export default function EventDetail() {
  const { slug } = useParams();
  const event = eventsBySlug[slug];

  if (!event) return <NotFound />;

  const index = events.findIndex((item) => item.slug === slug);
  const next = events[index + 1];

  return (
    <>
      <article className="event-detail">
        <div className="container">
          <Link to="/events" className="back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            All event records
          </Link>

          <Reveal className="event-detail-head">
            <time dateTime={event.date}>{event.displayDate}</time>
            <h1>{event.title}</h1>
            <p className="event-detail-summary">{event.summary}</p>
          </Reveal>

          <div className="event-detail-grid">
            <Reveal className="event-detail-body" delay={0.06}>
              {event.body.map((paragraph, i) => (
                <p key={`${event.slug}-${i}`}>{paragraph}</p>
              ))}
              <p className="source-note">
                Reproduced from the event page published by Vowelites.
              </p>
            </Reveal>

            {event.poster ? (
              <Reveal variant="media" as="figure" className="event-detail-poster">
                <div className="media-frame">
                  <img src={event.poster} alt={event.posterAlt} loading="lazy" />
                </div>
                <figcaption>Poster published with the event</figcaption>
              </Reveal>
            ) : (
              <div className="media-placeholder" role="img" aria-label="No poster published">
                <span>{event.title}</span>
                <p>The school did not publish a poster for this observance.</p>
              </div>
            )}
          </div>

          {next ? (
            <Reveal className="event-next">
              <span>Next record</span>
              <Link to={`/events/${next.slug}`}>{next.title}</Link>
            </Reveal>
          ) : null}
        </div>
      </article>
    </>
  );
}
