import Link from 'next/link';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import { SITE_CONFIG } from '../../../lib/config/site.config';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';
import { CORE_COURSES } from '../../../lib/constants/courses.data';

interface LandingProps {
  eyebrow: string;
  title: string;
  titleEm: string;
  lead: string;
  targetRegion: string;
  highlights: string[];
  features: { icon: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export default function LandingPageLayout({
  eyebrow,
  title,
  titleEm,
  lead,
  targetRegion,
  highlights,
  features,
  faqs,
}: LandingProps) {
  const waUrl = WhatsAppService.getTrialBookingUrl('General Trial', targetRegion);

  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>{targetRegion}</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> {eyebrow}
          </div>
          <h1>
            {title} <em>{titleEm}</em>
          </h1>
          <p className="page-lead">{lead}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>✦</span> Book Free Trial Session <span>→</span>
            </a>
            <Link href="/courses" className="btn btn-outline-dark">
              View All 8 Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="section" style={{ padding: '30px 0', background: 'var(--card-bg)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '16px', flexWrap: 'wrap', textAlign: 'center' }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '600', color: 'var(--green)' }}>
                <span style={{ color: 'var(--gold)' }}>✦</span> {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center">
            <div className="eyebrow dark"><span>✦</span> WHY CHOOSE OUR ACADEMY</div>
            <h2>Tailored Learning for <em>{targetRegion} Families</em></h2>
            <p className="section-lead">
              Personalized 1-on-1 Zoom classes designed around your daily schedule and learning goals.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="f-icon-badge" style={{ fontSize: '24px' }}>{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="section" style={{ background: 'rgba(6, 59, 50, 0.02)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head text-center">
            <div className="eyebrow dark"><span>✦</span> COMPLETE CURRICULUM</div>
            <h2>Available <em>Quran Programs</em></h2>
          </div>

          <div className="courses-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {CORE_COURSES.slice(0, 4).map((c) => (
              <div className="course-card" key={c.id}>
                <div className="card-top">
                  <div className="card-tag">{c.tag}</div>
                </div>
                <h3 className="course-title">{c.title}</h3>
                <p className="course-desc">{c.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <a href={WhatsAppService.getTrialBookingUrl(c.title, targetRegion)} target="_blank" rel="noopener noreferrer" className="btn btn-primary full">
                    Enroll in Free Trial →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-head text-center">
            <div className="eyebrow dark"><span>✦</span> QUESTIONS &amp; ANSWERS</div>
            <h2>Frequently Asked Questions in <em>{targetRegion}</em></h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-page-item open" key={i} style={{ marginBottom: '14px' }}>
                <div className="faq-page-q" style={{ cursor: 'default' }}>
                  <h3>{faq.q}</h3>
                </div>
                <div className="faq-page-a" style={{ display: 'block' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta-banner" style={{ marginTop: '35px' }}>
            <h3>Ready to Begin Your Quran Journey?</h3>
            <p>Book a 100% free live 1-on-1 assessment session with {SITE_CONFIG.teacher.name}.</p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa-direct">
              <span>💬</span> Message on WhatsApp for Schedule
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
