import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { SITE_CONFIG } from '../../lib/config/site.config';
import { TEACHER_TIMELINE } from '../../lib/constants/academy-stats.data';
import { WhatsAppService } from '../../lib/services/whatsapp.service';

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.teacher.name} | ${SITE_CONFIG.teacher.experienceYears} Years Experience Quran Scholar`,
  description: `Meet ${SITE_CONFIG.teacher.name} — a certified Hafiz and Tajweed teacher from ${SITE_CONFIG.teacher.origin} with ${SITE_CONFIG.teacher.experienceYears} years teaching experience in Pakistan and UAE.`,
};

export default function AboutPage() {
  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>About Teacher</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> DEDICATED QURAN SCHOLAR
          </div>
          <h1>
            About <em>{SITE_CONFIG.teacher.name}</em>
          </h1>
          <p className="page-lead">
            A lifelong devotion to teaching the Book of Allah with Tajweed excellence, compassion,
            and {SITE_CONFIG.teacher.experienceYears} years of international teaching experience across Pakistan and the UAE.
          </p>
        </div>
      </section>

      <section className="section about-full">
        <div className="container two-col" style={{ alignItems: 'start' }}>
          <div>
            <div className="eyebrow dark">
              <span>✦</span> BIOGRAPHY & BACKGROUND
            </div>
            <h2>A {SITE_CONFIG.teacher.experienceYears} Journey in <em>Quranic Instruction</em></h2>
            <p className="section-lead">
              <strong>{SITE_CONFIG.teacher.name}</strong> is a revered Quran teacher and certified Hafiz hailing from{' '}
              <strong>{SITE_CONFIG.teacher.origin}</strong>. Over the past {SITE_CONFIG.teacher.experienceYears} years, he has dedicated his life
              to preserving and imparting the authentic recitation, Tajweed, and meaning of the Holy Quran.
            </p>
            <p>
              His teaching career began in Pakistan, where he taught for <strong>{SITE_CONFIG.teacher.pakistanExperienceYears} years</strong> in established
              madrasas, schools, and private family settings. He guided hundreds of young students through their
              first Noorani Qaida, helped dozens complete their full Hifz-ul-Quran, and established a reputation for
              extraordinary patience with young learners and beginner adults.
            </p>
            <p>
              In recognition of his teaching expertise, he relocated to the <strong>United Arab Emirates (UAE)</strong>,
              where he spent <strong>{SITE_CONFIG.teacher.uaeExperienceYears} years</strong> conducting prestigious one-to-one home tuitions across{' '}
              <strong>Sharjah, Dubai, and Ajman</strong>. There, he taught children and adults from diverse cultural
              backgrounds, adapting his lessons to international school schedules and developing bilingual teaching methods.
            </p>
            <p>
              Over the last <strong>{SITE_CONFIG.teacher.onlineExperienceYears} years</strong>, through this online academy, {SITE_CONFIG.teacher.name} brings that same depth of personal care and pedagogical mastery
              to Muslim households worldwide via live one-to-one Zoom classes.
            </p>

            <div className="experience-timeline">
              {TEACHER_TIMELINE.map((item) => (
                <div className="tl-item" key={item.year}>
                  <div className="tl-year">{item.year}</div>
                  <div className="tl-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '45px', marginBottom: '18px' }}>Teaching Philosophy & Core Values:</h3>
            <ul className="values-list">
              <li>
                <strong>Patience & Warmth:</strong> We never scold, rush, or pressure. Young children and beginner adults flourish in an encouraging, peaceful atmosphere.
              </li>
              <li>
                <strong>Tajweed Precision First:</strong> Accuracy comes before speed. We ensure correct articulation of every letter from its proper origin (Makhraj) before increasing reading tempo.
              </li>
              <li>
                <strong>Understanding & Life Application:</strong> Recitation must connect with the heart. We integrate translation, Masnoon Duas, and Islamic manners into everyday lessons.
              </li>
            </ul>
          </div>

          <div className="about-sidebar">
            <div className="about-card">
              <div className="seal">﷽</div>
              <div className="quote-mark">“</div>
              <blockquote>
                The best among you are those who learn the Quran and teach it to others.
              </blockquote>
              <div className="quote-line"></div>
              <b>{SITE_CONFIG.teacher.name}</b>
              <span>{SITE_CONFIG.teacher.title}</span>
            </div>

            <div className="qualifications-card">
              <h4>Verified Qualifications:</h4>
              <ul>
                <li>✓ Certified Hafiz-ul-Quran</li>
                <li>✓ Formal Sanad in Tajweed Rules & Makharij</li>
                <li>✓ {SITE_CONFIG.teacher.experienceYears} Years Continuous Teaching Experience</li>
                <li>✓ {SITE_CONFIG.teacher.uaeExperienceYears} Years UAE Expat Home Tuition Experience</li>
                <li>✓ Bilingual Guidance ({SITE_CONFIG.teacher.languages.join(', ')})</li>
                <li>✓ 100% Free Trial Assessment Class</li>
              </ul>
              <a
                href={WhatsAppService.getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary full"
                style={{ marginTop: '24px' }}
              >
                <span>✦</span> Contact Qari Sahib on WhatsApp <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
