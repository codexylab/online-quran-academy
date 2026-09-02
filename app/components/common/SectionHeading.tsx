import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  theme?: 'dark' | 'light';
}

export default function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  center = true,
  theme = 'dark',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${center ? 'center' : ''} ${theme === 'light' ? 'light-theme' : ''}`}>
      <div className={`eyebrow ${theme === 'light' ? 'light' : 'dark'}`}>
        <span>✦</span> {eyebrow}
      </div>
      <h2>
        {title} {titleHighlight && <em>{titleHighlight}</em>}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
