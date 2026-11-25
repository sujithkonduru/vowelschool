import React from 'react';
import { Mail, MapPin, Phone, Truck, UserRound } from 'lucide-react';
import { branchContacts, contact } from '../data/site.js';
import { PageIntro, SectionHeading } from '../components/ui.jsx';
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal.jsx';

export default function Contact() {
  return (
    <>
      <PageIntro
        title={<>Contact the group.</>}
        intro="Contact details as published on the Vowelites contact page: one address for the group office, a telephone and email for each branch, and separate contacts for admissions and transport."
      />

      <section className="section">
        <div className="container">
          <Stagger className="contact-cards" stagger={0.07}>
            <StaggerItem className="contact-card">
              <MapPin size={20} aria-hidden="true" />
              <h2>Campus address</h2>
              <p>{contact.address}</p>
              <p className="contact-muted">{contact.locality}</p>
            </StaggerItem>

            <StaggerItem className="contact-card">
              <Phone size={20} aria-hidden="true" />
              <h2>Admissions</h2>
              {contact.admissionsPhone.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>
                  {phone}
                </a>
              ))}
              <p className="contact-muted">{contact.admissionsTimings}</p>
            </StaggerItem>

            <StaggerItem className="contact-card">
              <Mail size={20} aria-hidden="true" />
              <h2>Email</h2>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <p className="contact-muted">
                Used for admissions, transport and general enquiries.
              </p>
            </StaggerItem>
          </Stagger>

          <div className="contact-secondary">
            <Reveal className="contact-secondary-block">
              <Truck size={20} aria-hidden="true" />
              <h3>Transport</h3>
              <p>
                Transport Manager: {contact.transport.manager}
              </p>
              <a href={`tel:${contact.transport.phone.replace(/\s/g, '')}`}>
                {contact.transport.phone}
              </a>
            </Reveal>

            <Reveal className="contact-secondary-block" delay={0.06}>
              <UserRound size={20} aria-hidden="true" />
              <h3>Recruitment</h3>
              <p>Recruitment-related queries</p>
              <a href={`tel:${contact.recruitmentPhone.replace(/\s/g, '')}`}>
                {contact.recruitmentPhone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section contact-directory">
        <div className="container">
          <SectionHeading
            title="Branch telephone numbers"
            note="Published on the contact page. Individual school profiles may list a different number for the principal’s office."
          />

          <div className="table-wrap">
            <table className="data-table branch-table">
              <caption className="visually-hidden">Contact details by branch</caption>
              <thead>
                <tr>
                  <th scope="col">Institution</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {branchContacts.map((branch) => (
                  <tr key={branch.name}>
                    <th scope="row">{branch.name}</th>
                    <td>{branch.phones}</td>
                    <td>
                      {branch.email ? (
                        <a href={`mailto:${branch.email}`}>{branch.email}</a>
                      ) : (
                        <span className="contact-muted">Not published</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Reveal as="p" className="source-note" delay={0.05}>
            Social handle as printed on school material: {contact.social.handle}. Confirm
            the account before linking it.
          </Reveal>
        </div>
      </section>
    </>
  );
}
