import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '../motion/Reveal.jsx';

/**
 * Single action primitive so button language stays identical across routes.
 * Renders a router link, an anchor or a button depending on what it receives.
 */
export function Action({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  ...rest
}) {
  const classes = `action action-${variant} action-${size} ${className}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRight size={16} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {inner}
    </button>
  );
}

export function TextLink({ to, href, children, onClick, className = '' }) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight size={15} aria-hidden="true" />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={`text-link ${className}`.trim()} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={`text-link ${className}`.trim()} onClick={onClick}>
      {content}
    </a>
  );
}

/**
 * Section heading. No decorative eyebrow: the heading carries the section, and
 * `note` is used only where it states something factual.
 */
export function SectionHeading({ title, note, action, align = 'start', level = 2, id, className = '' }) {
  const Tag = `h${level}`;
  return (
    <div className={`section-heading section-heading-${align} ${className}`.trim()}>
      <div className="section-heading-main">
        <Tag id={id}>
          {title}
        </Tag>
        {note ? <p className="section-heading-note">{note}</p> : null}
      </div>
      {action ? <div className="section-heading-action">{action}</div> : null}
    </div>
  );
}

/** Page opener used by every inner route. */
export function PageIntro({ title, intro, aside, children }) {
  return (
    <header className="page-intro">
      <div className="container page-intro-inner">
        <Reveal className="page-intro-title" as="div">
          <h1>{title}</h1>
        </Reveal>
        <Reveal className="page-intro-aside" delay={0.1} as="div">
          {intro ? <p className="page-intro-lede">{intro}</p> : null}
          {aside}
          {children}
        </Reveal>
      </div>
    </header>
  );
}

/** Figure with an optional factual caption. */
export function Figure({ src, alt, caption, credit, className = '', ratio, loading = 'lazy' }) {
  return (
    <figure className={`figure ${className}`.trim()}>
      <div className="media-frame" style={ratio ? { aspectRatio: ratio } : undefined}>
        <img src={src} alt={alt} loading={loading} />
      </div>
      {caption || credit ? (
        <figcaption>
          {caption ? <span>{caption}</span> : null}
          {credit ? <span className="figure-credit">{credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Definition-style fact list used on school profiles and contact blocks. */
export function FactList({ items, className = '' }) {
  return (
    <dl className={`fact-list ${className}`.trim()}>
      {items
        .filter((item) => item && item.value)
        .map((item) => (
          <div className="fact-row" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
    </dl>
  );
}
