import React from 'react';
import { Link } from 'react-router-dom';
import { schools } from '../data/schools.js';
import { philosophy } from '../data/site.js';
import { PageIntro, SectionHeading, TextLink } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

export default function Academics() {
  const staged = schools.filter((school) => school.levels);

  return (
    <>
      <PageIntro
        title={<>Learning by doing. Growing by exploring.</>}
        intro="Rational learning is learning by interaction, learning by understanding and learning by doing. The group describes its approach as multidisciplinary, structured and systematic, with psychological and pedagogical assessment."
      />

      <section className="section">
        <div className="container split split-wide">
          <Reveal>
            <h2>The approach, in the group’s own terms.</h2>
          </Reveal>
          <Stagger className="split-body" stagger={0.07}>
            <StaggerItem as="p" className="lede">
              Vowelites prefers self-learning within a comprehensive mode of learning.
            </StaggerItem>
            <StaggerItem as="p">
              Teaching and training are supported by psychological and pedagogical
              assessment, so that individual learning needs can be identified and
              supported. The schools describe small classes, with facilitators
              encouraging students to collaborate, participate in discussion, solve
              problems and communicate their ideas.
            </StaggerItem>
            <StaggerItem as="p">
              Where a school publishes its class range, it is recorded in the table below.
              Where it does not, the page says so rather than inferring a range from the
              school’s name.
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="container">
          <SectionHeading
            title="Three commitments"
            note="The homepage summary of what the schools commit to."
          />
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

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Stages published by each institution"
            note="Only the stages each institution states on its own profile."
            action={<TextLink to="/schools">Institution register</TextLink>}
          />

          <div className="table-wrap">
            <table className="data-table">
              <caption className="visually-hidden">
                Class ranges and levels by institution
              </caption>
              <thead>
                <tr>
                  <th scope="col">Institution</th>
                  <th scope="col">Levels published</th>
                  <th scope="col">Locality</th>
                </tr>
              </thead>
              <tbody>
                {staged.map((school) => (
                  <tr key={school.slug}>
                    <th scope="row">
                      <Link to={`/schools/${school.slug}`}>{school.name}</Link>
                    </th>
                    <td>{school.levels}</td>
                    <td>{school.locality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Reveal as="p" className="source-note">
            Nine institutions publish a class range. The remaining profiles are live but
            do not state one.
          </Reveal>
        </div>
      </section>

      <section className="section resource-band">
        <div className="container resource-band-inner">
          <div>
            <h2>Academic resources</h2>
            <p>
              Calendar charts, school rules and transport rules, as published by the
              schools. Time tables and circulars are listed on the original site but do
              not contain any published documents.
            </p>
          </div>
          <Link className="action action-primary action-md" to="/resources">
            <span>Open resources</span>
          </Link>
        </div>
      </section>
    </>
  );
}
