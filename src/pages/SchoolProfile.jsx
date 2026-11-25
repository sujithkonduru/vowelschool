import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { schools, schoolsBySlug } from '../data/schools.js';
import { Action, FactList } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';
import NotFound from './Info.jsx';

export default function SchoolProfile() {
  const { slug } = useParams();
  const school = schoolsBySlug[slug];

  if (!school) return <NotFound />;

  const siblings = schools.filter((item) => item.group === school.group && item.slug !== school.slug).slice(0, 4);

  return (
    <>
      <header className="profile-header">
        <div className="container">
          <Link to="/schools" className="back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            All institutions
          </Link>

          <div className="profile-header-grid">
            <Reveal className="profile-heading">
              <h1>{school.name}</h1>
              <p className="profile-summary">{school.summary}</p>

              <div className="profile-quick-actions">
                <Action to={`/admissions?school=${encodeURIComponent(school.name)}`}>
                  Enquire about this school
                </Action>
                {school.phones.length ? (
                  <a className="action action-ghost action-md" href={`tel:${school.phones[0].replace(/[^\d+]/g, '')}`}>
                    <Phone size={16} aria-hidden="true" />
                    <span>{school.phones[0]}</span>
                  </a>
                ) : null}
              </div>
            </Reveal>

            <Reveal className="profile-facts" delay={0.08}>
              <FactList
                items={[
                  { label: 'Levels', value: school.levels || 'Not published' },
                  { label: 'Locality', value: school.locality },
                  { label: 'Principal', value: school.principal },
                  { label: 'Designation', value: school.principalRole },
                  { label: 'Founded', value: school.founded },
                  { label: 'Email', value: school.email },
                  { label: 'Address', value: school.address },
                  {
                    label: 'Telephone',
                    value: school.phones.length ? school.phones.join(' · ') : 'Not published'
                  }
                ]}
              />
            </Reveal>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="split split-media profile-body">
            <Reveal variant="media" as="figure" className="profile-figure">
              {school.photo ? (
                <>
                  <div className="media-frame">
                    <img
                      src={school.photo.src}
                      alt={school.photo.alt}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    {school.photoCredit || school.name}
                    <span>{school.photo.credit}</span>
                  </figcaption>
                </>
              ) : (
                <div className="media-placeholder" role="img" aria-label="No photograph available">
                  <span>{school.name}</span>
                  <p>The institution has not published a campus photograph.</p>
                </div>
              )}
            </Reveal>

            <div className="profile-copy">
              <Reveal>
                <h2>About this institution</h2>
              </Reveal>

              {school.body.length ? (
                <Stagger className="profile-paragraphs" stagger={0.06}>
                  {school.body.map((paragraph, index) => (
                    <StaggerItem as="p" key={`${school.slug}-${index}`}>
                      {paragraph}
                    </StaggerItem>
                  ))}
                </Stagger>
              ) : (
                <Reveal as="p" className="muted">
                  {school.note || 'The institution has not published a description.'}
                </Reveal>
              )}

              {school.body.length && school.note ? (
                <Reveal as="p" className="source-note">
                  {school.note}
                </Reveal>
              ) : null}

              {school.highlights ? (
                <Reveal className="profile-highlights" delay={0.08}>
                  {school.highlights.map(([figure, label]) => (
                    <div key={label}>
                      <strong>{figure}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                  <p className="source-note">Figures as published on the school profile.</p>
                </Reveal>
              ) : null}

              <div className="profile-contact">
                {school.address ? (
                  <p>
                    <MapPin size={16} aria-hidden="true" />
                    {school.address}
                  </p>
                ) : null}
                {school.email ? (
                  <a href={`mailto:${school.email}`}>
                    <Mail size={16} aria-hidden="true" />
                    {school.email}
                  </a>
                ) : null}
                {school.phones.length ? (
                  <p>
                    <Phone size={16} aria-hidden="true" />
                    {school.phones.join(' · ')}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {siblings.length ? (
        <section className="section related-section">
          <div className="container">
            <Reveal>
              <h2>Other {school.group === 'colleges' ? 'colleges and academies' : 'schools'}</h2>
            </Reveal>
            <ul className="related-list">
              {siblings.map((item) => (
                <li key={item.slug}>
                  <Link to={`/schools/${item.slug}`}>
                    <span>{item.name}</span>
                    <span>{item.locality}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
