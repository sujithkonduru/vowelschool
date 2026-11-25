import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FileCheck, Mail, Phone, Clock } from 'lucide-react';
import { admissions, contact } from '../data/site.js';
import { PageIntro, SectionHeading } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';

export default function Admissions() {
  const [params] = useSearchParams();
  const schoolParam = params.get('school') || '';

  return (
    <>
      <PageIntro
        title={<>Admissions and eligibility.</>}
        intro={admissions.statement}
        aside={
          <p className="page-intro-count">
            Enquiries: {contact.admissionsTimings}
          </p>
        }
      />

      <section className="section">
        <div className="container admissions-layout">
          <div className="admissions-content">
            <Reveal>
              <h2>What the schools describe</h2>
              {admissions.intro.map((paragraph, index) => (
                <p key={`intro-${index}`}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={0.06}>
              <h2>Eligibility as on 30 June</h2>
              <div className="table-wrap">
                <table className="data-table">
                  <caption className="visually-hidden">Admission age eligibility by stage</caption>
                  <thead>
                    <tr>
                      <th scope="col">Stage</th>
                      <th scope="col">Age requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admissions.eligibility.map((row) => (
                      <tr key={row.stage}>
                        <th scope="row">{row.stage}</th>
                        <td>{row.requirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2>Documents required</h2>
              <p className="source-note">{admissions.step}</p>
              <Stagger as="ul" className="document-list" stagger={0.04}>
                {admissions.documents.map((doc) => (
                  <StaggerItem as="li" key={doc}>
                    <FileCheck size={17} aria-hidden="true" />
                    <span>{doc}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal className="admissions-contact" delay={0.1}>
              <div>
                <Phone size={18} aria-hidden="true" />
                <span>Admissions</span>
                <a href={`tel:${contact.admissionsPhone[0].replace(/\s/g, '')}`}>
                  {contact.admissionsPhone[0]}
                </a>
                <a href={`tel:${contact.admissionsPhone[1].replace(/\s/g, '')}`}>
                  {contact.admissionsPhone[1]}
                </a>
              </div>
              <div>
                <Mail size={18} aria-hidden="true" />
                <span>Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div>
                <Clock size={18} aria-hidden="true" />
                <span>Office hours</span>
                <p>{contact.admissionsTimings}</p>
              </div>
            </Reveal>
          </div>

          <div className="admissions-form-column">
            <SectionHeading title="Prepare an enquiry" note="Nothing is submitted to a server." />
            <EnquiryForm initialSchool={schoolParam} />
          </div>
        </div>
      </section>
    </>
  );
}
