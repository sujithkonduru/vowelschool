import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { LOGO } from '../data/images.js';
import { BRAND_TAGLINE, contact } from '../data/site.js';
import { Stagger, StaggerItem } from '../motion/Reveal.jsx';

const explore = [
  ['About Vowelites', '/about'],
  ['Our schools', '/schools'],
  ['Academics', '/academics'],
  ['Campus life', '/campus-life']
];

const discover = [
  ['Events', '/events'],
  ['Gallery', '/gallery'],
  ['Academic resources', '/resources'],
  ['Results', '/results'],
  ['Alumni', '/alumni']
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Stagger className="footer-grid" stagger={0.06}>
          <StaggerItem className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Vowelites — home">
              <img src={LOGO} alt="Vowelites" loading="lazy" />
            </Link>
            <p className="footer-tagline">{BRAND_TAGLINE}</p>
            <p className="footer-address">
              <MapPin size={15} aria-hidden="true" />
              <span>{contact.address}</span>
            </p>
            <a className="footer-contact-link" href={`mailto:${contact.email}`}>
              <Mail size={15} aria-hidden="true" />
              {contact.email}
            </a>
            <a className="footer-contact-link" href={`tel:${contact.admissionsPhone[0].replace(/\s/g, '')}`}>
              <Phone size={15} aria-hidden="true" />
              {contact.admissionsPhone[0]}
            </a>
          </StaggerItem>

          <StaggerItem className="footer-column">
            <h2>Explore</h2>
            <ul>
              {explore.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="footer-column">
            <h2>Discover</h2>
            <ul>
              {discover.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="footer-column">
            <h2>Admissions</h2>
            <ul>
              <li>
                <Link to="/admissions">Enquiry and eligibility</Link>
              </li>
              <li>
                <Link to="/contact">Contact the group</Link>
              </li>
              <li>
                <Link to="/resources">School rules</Link>
              </li>
              <li>
                <Link to="/resources">Transportation</Link>
              </li>
            </ul>
            <p className="footer-hours">{contact.admissionsTimings}</p>
          </StaggerItem>
        </Stagger>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vowel Learning Initiations, Nellore</span>
          <span className="footer-motto">Learning by interaction, understanding and doing</span>
        </div>
      </div>
    </footer>
  );
}
