'use client';

import { useState } from 'react';
import { FAQItem } from '../../../lib/types/academy.types';

interface FaqAccordionProps {
  items: FAQItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <div className={`faq-page-item ${openIndex === i ? 'open' : ''}`} key={f.id}>
          <button
            type="button"
            className="faq-page-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <div>
              <span className="faq-category-tag">{f.category}</span>
              <h3>{f.q}</h3>
            </div>
            <span className="faq-toggle-icon">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && (
            <div className="faq-page-a">
              <p>{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
