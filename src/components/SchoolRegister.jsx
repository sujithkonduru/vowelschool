import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Stagger, StaggerItem } from '../motion/Reveal.jsx';

/**
 * The school directory is a register, not a card wall: one continuous list with
 * aligned factual fields so institutions can be compared by the same columns.
 */
export default function SchoolRegister({ items }) {
  return (
    <Stagger as="ul" className="register" stagger={0.045} amount={0.08}>
      {items.map((school) => (
        <StaggerItem as="li" className="register-row" key={school.slug}>
          <Link to={`/schools/${school.slug}`} className="register-link">
            <span className="register-name">
              <span className="register-title">{school.name}</span>
              <span className="register-summary">{school.summary}</span>
            </span>
            <span className="register-field">
              <span className="register-label">Levels</span>
              <span>{school.levels || 'Not published'}</span>
            </span>
            <span className="register-field">
              <span className="register-label">Locality</span>
              <span>{school.locality || 'Not published'}</span>
            </span>
            <span className="register-arrow" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
