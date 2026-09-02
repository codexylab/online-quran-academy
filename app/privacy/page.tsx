import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import MobileStickyBar from '../components/common/MobileStickyBar';
import { SITE_CONFIG } from '../../lib/config/site.config';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Privacy policy and student data confidentiality guidelines for ${SITE_CONFIG.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Privacy Policy</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> LEGAL & TRUST
          </div>
          <h1>
            Privacy <em>Policy</em>
          </h1>
          <p className="page-lead">
            Your trust, confidentiality, and family privacy are sacred to us. Learn how we handle and protect
            your student registration details.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container prose-container">
          <h2>1. Commitment to Privacy</h2>
          <p>
            At {SITE_CONFIG.name}, we hold the privacy of our students and their families in the highest regard.
            Any personal information collected during admission or class coordination is handled with strict confidentiality.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We only collect information necessary to deliver and coordinate live online Quran lessons:</p>
          <ul>
            <li>Student name, age, and preferred study track.</li>
            <li>Parent or guardian contact name, WhatsApp number, and email address.</li>
            <li>Country of residence and time zone to schedule appropriate class slots.</li>
          </ul>

          <h2>3. Student Confidentiality & Private Classes</h2>
          <p>
            We strictly maintain student confidentiality and family privacy. Classes are conducted
            in secure, private one-to-one Zoom sessions. Video and audio recordings of lessons
            are never made, stored, or distributed to any external parties.
          </p>

          <h2>4. No Third-Party Data Sharing</h2>
          <p>
            We never sell, rent, or trade your contact information with any marketing agencies or third parties.
            Your WhatsApp and email are strictly used for scheduling, progress updates, and academy announcements.
          </p>

          <h2>5. Contact Us Regarding Your Data</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to update your registered information, please
            contact us at <strong>{SITE_CONFIG.contact.email}</strong> or on WhatsApp at <strong>{SITE_CONFIG.contact.displayPhone}</strong>.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </main>
  );
}
