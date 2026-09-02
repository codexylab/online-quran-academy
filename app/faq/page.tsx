'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import MobileStickyBar from '../components/common/MobileStickyBar';
import { FAQS_DATA } from '../../lib/constants/faqs.data';
import { SITE_CONFIG } from '../../lib/config/site.config';
import { WhatsAppService } from '../../lib/services/whatsapp.service';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const waUrl = WhatsAppService.getGeneralInquiryUrl();

  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>FAQs</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> HELP & CLARIFICATIONS
          </div>
          <h1>
            Frequently Asked <em>Questions</em>
          </h1>
          <p className="page-lead">
            Everything you need to know about our online Quran classes, timings, trial sessions,
            curriculum, and course structures.
          </p>
        </div>
      </section>

      <section className="section faq-page-section">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="faq-list">
            {FAQS_DATA.map((f, i) => (
              <div className={`faq-page-item ${openIndex === i ? 'open' : ''}`} key={f.id}>
                <button
                  type="button"
                  className="faq-page-q"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
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

          <div className="faq-cta-banner">
            <h3>Still Have Questions?</h3>
            <p>Speak directly with {SITE_CONFIG.teacher.name} on WhatsApp for personalized guidance and schedule arrangements.</p>
            <div className="faq-banner-actions">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa-direct"
              >
                <span>💬</span> Chat on WhatsApp Now
              </a>
              <Link href="/contact" className="btn btn-primary">
                <span>✦</span> Book Free Trial Class <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
