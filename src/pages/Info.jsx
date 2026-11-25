import React from 'react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/ui.jsx';
import { Reveal } from '../motion/Reveal.jsx';

/**
 * Pages the original site lists but does not populate with publishable content.
 * The honest state is to say so and offer a route that does work.
 */
function NoticePage({ title, intro, note }) {
  return (
    <>
      <PageIntro title={title} intro={intro} />
      <section className="section">
        <div className="container">
          <Reveal className="notice-panel">
            <h2>Not published yet</h2>
            <p>{note}</p>
            <p>
              The Vowelites team can confirm the current information directly. Contact
              details for every branch are on the contact page.
            </p>
            <div className="notice-actions">
              <Link className="action action-ink action-md" to="/contact">
                <span>Contact the group</span>
              </Link>
              <Link className="text-link" to="/schools">
                Browse institutions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function Results() {
  return (
    <NoticePage
      title={<>Results and achievements.</>}
      intro="Academic results published by the Vowelites group."
      note="The results page on the original site did not return any published results when checked, and no verified result records are available to reproduce here."
    />
  );
}

export function Alumni() {
  return (
    <NoticePage
      title={<>Alumni.</>}
      intro="Alumni information from the Vowelites group."
      note="The alumni page on the original site did not return any content when checked, so no alumni records or stories are reproduced here."
    />
  );
}

export default function NotFound() {
  return (
    <NoticePage
      title={<>Page not found.</>}
      intro="The page you asked for is not part of this site."
      note="The address may be out of date. The institution register and the contact page are the quickest routes back to current information."
    />
  );
}
