import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { SITE_CONFIG } from '../../lib/config/site.config';
import { WhatsAppService } from '../../lib/services/whatsapp.service';

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_CONFIG.name}`,
  description:
    'Contact Qari Sadiq Naeem directly on WhatsApp for online Quran classes, course details, and customized international timings.',
};

export default function ContactPage() {
  const waUrl = WhatsAppService.getGeneralInquiryUrl();

  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Contact Us</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> DIRECT WHATSAPP INQUIRY
          </div>
          <h1>
            Contact <em>Qari Sadiq Naeem</em>
          </h1>
          <p className="page-lead">
            Connect directly on WhatsApp for instant guidance, course consultation, and customized live class scheduling.
          </p>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-hub-container">
          {/* Main WhatsApp Direct Action Card */}
          <div className="contact-main-hero-card">
            <div className="cmh-top">
              <div className="cmh-wa-badge">
                <span className="live-dot"></span> WhatsApp Direct
              </div>
              <span className="cmh-instant-tag">⚡ Instant Reply Available</span>
            </div>
            
            <h2 className="cmh-title">Start Your Quran Learning Journey Today</h2>
            <p className="cmh-desc">
              Speak directly with <strong>{SITE_CONFIG.teacher.name}</strong> on WhatsApp. Ask any questions about Noorani Qaida, Nazra with Tajweed, Hifz, or adult classes.
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa-direct-large"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Message on WhatsApp Now ({SITE_CONFIG.contact.displayPhone})</span>
              <strong>→</strong>
            </a>
          </div>

          {/* Contact Details Grid */}
          <div className="contact-details-grid">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-card premium-contact-card"
            >
              <div className="cic-icon-box wa-accent">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="cic-info">
                <div className="cic-tag">DIRECT WHATSAPP</div>
                <strong className="cic-value">{SITE_CONFIG.contact.displayPhone}</strong>
                <span className="cic-sub">Click to chat with {SITE_CONFIG.teacher.name}</span>
              </div>
              <div className="cic-arrow">→</div>
            </a>

            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="contact-item-card premium-contact-card">
              <div className="cic-icon-box mail-accent">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="cic-info">
                <div className="cic-tag">OFFICIAL EMAIL</div>
                <strong className="cic-value">{SITE_CONFIG.contact.email}</strong>
                <span className="cic-sub">Send inquiries or academic questions</span>
              </div>
              <div className="cic-arrow">→</div>
            </a>

            <div className="contact-item-card premium-contact-card">
              <div className="cic-icon-box zoom-accent">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div className="cic-info">
                <div className="cic-tag">CLASS MEDIUM</div>
                <strong className="cic-value">{SITE_CONFIG.platform.medium}</strong>
                <span className="cic-sub">Live 1-on-1 High Definition screen sharing</span>
              </div>
            </div>

            <div className="contact-item-card premium-contact-card">
              <div className="cic-icon-box loc-accent">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="cic-info">
                <div className="cic-tag">HEADQUARTERS & REACH</div>
                <strong className="cic-value">{SITE_CONFIG.contact.location}</strong>
                <span className="cic-sub">{SITE_CONFIG.contact.coverage}</span>
              </div>
            </div>
          </div>

          {/* International Support Box */}
          <div className="intl-timings-note contact-hub-note">
            <h4>
              <span>✦</span> Worldwide Scheduling &amp; Time Zones
            </h4>
            <p>
              We provide customized 1-on-1 class slots for students across <strong>UAE (GST), Saudi Arabia (AST), Qatar, Oman, UK (GMT/BST), USA (EST/CST/PST), Canada, Australia, and Pakistan (PKT)</strong>. Feel free to message on WhatsApp anytime to pick your convenient slot!
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
