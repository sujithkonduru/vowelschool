import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { schools } from '../data/schools.js';
import { contact } from '../data/site.js';
import { EASE } from '../motion/variants.js';

/**
 * There is no admissions endpoint, so the form must not claim that a submission
 * was delivered. It prepares the enquiry and hands it to the reader's email
 * client, and says exactly that.
 */
export default function EnquiryForm({ initialSchool = '' }) {
  const reduce = useReducedMotion();
  const [prepared, setPrepared] = useState(null);

  const mailto = useMemo(() => {
    if (!prepared) return '';
    const subject = `Admission enquiry — ${prepared.school || 'Vowelites'}`;
    const lines = [
      `Parent / guardian: ${prepared.guardian}`,
      `Student: ${prepared.student}`,
      `Email: ${prepared.email}`,
      `Phone: ${prepared.phone}`,
      `Institution of interest: ${prepared.school || 'Not specified'}`,
      `Class / programme: ${prepared.stage || 'Not specified'}`,
      '',
      prepared.message || ''
    ];
    return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join('\n')
    )}`;
  }, [prepared]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPrepared({
      guardian: data.get('guardian') || '',
      student: data.get('student') || '',
      email: data.get('email') || '',
      phone: data.get('phone') || '',
      school: data.get('school') || '',
      stage: data.get('stage') || '',
      message: data.get('message') || ''
    });
  };

  const panelMotion = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 }
      };

  return (
    <div className="enquiry">
      <AnimatePresence mode="wait" initial={false}>
        {prepared ? (
          <motion.div
            key="prepared"
            className="enquiry-prepared"
            role="status"
            aria-live="polite"
            {...panelMotion}
            transition={{ duration: reduce ? 0 : 0.32, ease: EASE }}
          >
            <span className="enquiry-step">Enquiry prepared</span>
            <h3>Send it from your email app</h3>
            <p>
              This website has no admissions endpoint, so nothing has been transmitted yet.
              Your enquiry is ready to send from your own email app to {contact.email}.
            </p>
            <dl className="enquiry-summary">
              <div>
                <dt>Student</dt>
                <dd>{prepared.student}</dd>
              </div>
              <div>
                <dt>Institution</dt>
                <dd>{prepared.school || 'Not specified'}</dd>
              </div>
            </dl>
            <div className="enquiry-actions">
              <a className="action action-primary action-md" href={mailto}>
                <span>Open email draft</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <button
                type="button"
                className="action action-quiet action-md"
                onClick={() => setPrepared(null)}
              >
                <span>Edit details</span>
              </button>
            </div>
            <p className="enquiry-fallback">
              Or call the admissions team on{' '}
              <a href={`tel:${contact.admissionsPhone[0].replace(/\s/g, '')}`}>
                {contact.admissionsPhone[0]}
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="enquiry-form"
            onSubmit={handleSubmit}
            {...panelMotion}
            transition={{ duration: reduce ? 0 : 0.32, ease: EASE }}
          >
            <div className="form-row">
              <label className="field">
                <span>Parent or guardian name</span>
                <input name="guardian" required autoComplete="name" placeholder="Your name" />
              </label>
              <label className="field">
                <span>Student name</span>
                <input name="student" required autoComplete="off" placeholder="Student name" />
              </label>
            </div>

            <div className="form-row">
              <label className="field">
                <span>Email address</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label className="field">
                <span>Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone number"
                />
              </label>
            </div>

            <label className="field">
              <span>Institution of interest</span>
              <select name="school" defaultValue={initialSchool}>
                <option value="">No preference</option>
                {schools.map((school) => (
                  <option key={school.slug} value={school.name}>
                    {school.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Class or programme</span>
              <input name="stage" placeholder="For example, Class I" />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea name="message" rows="4" placeholder="How can we help?" />
            </label>

            <button className="action action-ink action-md form-submit" type="submit">
              <span>Prepare enquiry</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>

            <p className="form-note">
              <Mail size={14} aria-hidden="true" />
              Your details are used only to prepare this email. Nothing is stored or sent by this site.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
