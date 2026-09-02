'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FAQS_DATA } from '../../../lib/constants/faqs.data';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';
import { SITE_CONFIG } from '../../../lib/config/site.config';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const homeFaqs = FAQS_DATA.slice(0, 8);
  const waUrl = WhatsAppService.getGeneralInquiryUrl();

  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <div>
          <div className="eyebrow dark">
            <span>✦</span> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2>
            Got Questions? <em>We Have Answers.</em>
          </h2>
          <p className="section-lead">
            Find answers to common questions regarding class platform, timings, trial lessons, and curriculum.
          </p>
          <Link href="/faq" className="text-link">
            View all {FAQS_DATA.length}+ frequently asked questions →
          </Link>
          <div className="faq-support-box premium-faq-support">
            <div className="faq-support-top">
              <div className="faq-wa-bubble">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="faq-support-badge">
                <span className="live-dot" /> Instant Reply
              </div>
            </div>
            <h4>Still need personal assistance?</h4>
            <p>Chat directly with {SITE_CONFIG.teacher.name} on WhatsApp for instant guidance and class scheduling.</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa-premium"
            >
              <span>WhatsApp Direct Inquiry</span>
              <strong>→</strong>
            </a>
          </div>
        </div>

        <div className="faq-list">
          {homeFaqs.map((f, i) => (
            <button
              type="button"
              className={`faq-item ${openFaq === i ? 'active' : ''}`}
              key={f.id}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span>{f.q}</span>
              <b>{openFaq === i ? '−' : '+'}</b>
              {openFaq === i && <p>{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
