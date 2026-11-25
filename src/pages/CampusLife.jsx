import React from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/gallery.js';
import { PageIntro, TextLink } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';
import { ParallaxMedia } from '../motion/ParallaxMedia.jsx';

const facilities = [
  {
    title: 'Sport',
    copy: 'Sports are named among the facilities the group provides. National Sports Day is observed across the schools.'
  },
  {
    title: 'Libraries',
    copy: 'Libraries are listed among the facilities. The Vowel School profile describes an emphasis on reading and self-learning.'
  },
  {
    title: 'Laboratories',
    copy: 'Labs are named in the group’s facility list, and school galleries record laboratory activity.'
  },
  {
    title: 'Arts',
    copy: 'Arts appear in the same list, alongside the cultural observances recorded in the event archive.'
  }
];

const activityNames = [
  'Morning assembly',
  'Independence Day',
  'Krishna Janmashtami',
  'Hindi Diwas',
  'Club activity',
  'Dance',
  'Karate, chess and carrom',
  'Laboratory activity',
  'Field trips',
  'Science launcher'
];

export default function CampusLife() {
  const photos = galleryItems.filter((item) =>
    ['vs-1', 'v18-1', 'v14-1', 'vm-1', 'jc-1', 'vi-1'].includes(item.id)
  );

  return (
    <>
      <PageIntro
        title={<>Beyond the classroom.</>}
        intro="A school experience shaped by learning, activity, culture and community. Sports, libraries, laboratories and arts are named in the group’s facility list; the galleries record the activities themselves."
      />

      <section className="section">
        <div className="container split split-media">
          <Reveal variant="media" as="figure" className="campus-lead">
            <ParallaxMedia
              src="https://vowelites.com/wp-content/uploads/2024/03/1708947824312-scaled.jpg"
              alt="Academic project displays at a Vowel School expo"
              strength={5}
            />
            <figcaption>
              Academic expo displays at Vowel School
              <span>Vowel School gallery</span>
            </figcaption>
          </Reveal>

          <div>
            <Reveal>
              <h2>What the schools record.</h2>
            </Reveal>
            <Stagger className="facility-list" stagger={0.06}>
              {facilities.map((item) => (
                <StaggerItem className="facility" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="p" className="source-note" delay={0.08}>
              The group names these facility types in general terms. It does not state
              which facilities exist at which campus, so no campus-level claim is made here.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="container split split-wide">
          <Reveal>
            <h2>Activities in the galleries.</h2>
            <p className="muted">
              These are the activity headings the schools use in their own galleries,
              including at Vowel Modern School.
            </p>
            <TextLink to="/gallery">Browse the photographic record</TextLink>
          </Reveal>
          <ul className="activity-list">
            {activityNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2>Campus photographs</h2>
          </Reveal>
          <Stagger className="campus-grid" stagger={0.05} amount={0.08}>
            {photos.map((photo) => (
              <StaggerItem as="figure" className="campus-tile" key={photo.id}>
                <Link to="/gallery">
                  <div className="media-frame">
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                  </div>
                  <figcaption>
                    {photo.school}
                    {photo.activity ? <span>{photo.activity}</span> : null}
                  </figcaption>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
