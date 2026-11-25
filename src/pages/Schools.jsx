import React from 'react';
import { PageIntro } from '../components/ui.jsx';
import SchoolRegister from '../components/SchoolRegister.jsx';
import { Reveal } from '../motion/Reveal.jsx';
import { schools, schoolGroups } from '../data/schools.js';

export default function Schools() {
  return (
    <>
      <PageIntro
        title={<>Institutions of the Vowelites group.</>}
        intro="Every institution listed in the group's navigation and gallery, with the levels, locality and contact details each one publishes. Institutions that have not published a field are marked so rather than filled in."
        aside={
          <p className="page-intro-count">
            {schools.length} institutions · Nellore district
          </p>
        }
      />

      <section className="section">
        <div className="container">
          {schoolGroups.map((group) => {
            const items = schools.filter((school) => school.group === group.key);
            return (
              <div className="register-group" key={group.key}>
                <Reveal className="register-group-head">
                  <h2>{group.label}</h2>
                  <p>{group.description}</p>
                  <span className="register-count">
                    {items.length} {items.length === 1 ? 'institution' : 'institutions'}
                  </span>
                </Reveal>
                <SchoolRegister items={items} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
