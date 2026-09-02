import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import MobileStickyBar from '../components/common/MobileStickyBar';
import { SITE_CONFIG } from '../../lib/config/site.config';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_CONFIG.name}`,
  description: `Terms and conditions for enrolling in live online Quran classes at ${SITE_CONFIG.name}.`,
};

export default function TermsPage() {
  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Terms & Conditions</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> GUIDELINES & POLICIES
          </div>
          <h1>
            Terms & <em>Conditions</em>
          </h1>
          <p className="page-lead">
            Clear, transparent guidelines designed to ensure punctuality, mutual respect,
            and fruitful Quranic study for all students.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container prose-container">
          <h2>1. 100% Free Trial Class Policy</h2>
          <p>
            Every new student is entitled to a free one-on-one trial session. There is no financial obligation
            or credit card required to attend the trial class. Formal enrollment begins only after you are completely
            satisfied with the teacher’s methodology.
          </p>

          <h2>2. Punctuality & Attendance</h2>
          <p>
            Students and teachers are expected to join Zoom classes at the agreed scheduled time. In case of emergency
            or unavoidable absence, parents are requested to notify the teacher on WhatsApp at least 3 hours in advance
            so a make-up lesson can be rescheduled.
          </p>

          <h2>3. Classroom Etiquette & Discipline</h2>
          <p>
            Students should attend classes in a quiet, distraction-free environment with a working microphone and
            stable internet connection. The sacred sanctity (Adab) of the Holy Quran must be honored at all times.
          </p>

          <h2>4. Monthly Fee Structure & Payments</h2>
          <p>
            Tuition fees are payable monthly in advance following the completion of the free trial period.
            We offer transparent fee structures tailored to your country’s currency (AED, SAR, QAR, OMR, GBP, USD, CAD, PKR).
          </p>

          <h2>5. Inquiries & Support</h2>
          <p>
            For any billing, scheduling, or curriculum questions, please reach out directly via WhatsApp at{' '}
            <strong>{SITE_CONFIG.contact.displayPhone}</strong> or email <strong>{SITE_CONFIG.contact.email}</strong>.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </main>
  );
}
