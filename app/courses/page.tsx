import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import MobileStickyBar from '../components/common/MobileStickyBar';
import { CORE_COURSES } from '../../lib/constants/courses.data';
import { WhatsAppService } from '../../lib/services/whatsapp.service';

export const metadata: Metadata = {
  title: 'Quran Courses & Syllabus | Qari Sadiq Naeem Online Quran Academy',
  description:
    'Comprehensive Quran courses: Noorani Qaida, Nazra with Tajweed, Hifz-ul-Quran, Tajweed Rules, Quran Translation, Tafseer, Quran for Kids, Ladies, and Adults.',
};

export default function CoursesPage() {
  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>All Courses</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> OUR EDUCATIONAL CURRICULUM
          </div>
          <h1>
            Complete Quran <em>Learning Programs</em>
          </h1>
          <p className="page-lead">
            From basic Arabic alphabet recognition to advanced Tajweed and Tafseer, explore our full
            curriculum designed for children, ladies, and adults worldwide.
          </p>
        </div>
      </section>

      <section className="section course-detail-section">
        <div className="container">
          <div className="course-detail-list">
            {CORE_COURSES.map((c) => (
              <div id={c.id} className="course-detail-block" key={c.id}>
                <div className="cd-main">
                  <h2>{c.title}</h2>
                  <p className="cd-desc">{c.desc}</p>

                  <h3>Curriculum &amp; What You Will Learn:</h3>
                  <ul className="cd-syllabus">
                    {c.syllabus?.map((s) => (
                      <li key={s}>
                        <span className="cd-check">✓</span>
                        <div className="cd-item-text">{s}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cd-sidebar">
                  <div className="cd-info-box">
                    <h4>Course Summary</h4>
                    <div className="ci-item">
                      <strong>Suitable For:</strong>
                      <span>{c.info?.audience}</span>
                    </div>
                    <div className="ci-item">
                      <strong>Duration:</strong>
                      <span>{c.info?.duration}</span>
                    </div>
                    <div className="ci-item">
                      <strong>Class Format:</strong>
                      <span>{c.info?.format}</span>
                    </div>
                    <div className="ci-item">
                      <strong>Prerequisites:</strong>
                      <span>{c.info?.prerequisites}</span>
                    </div>

                    <a
                      href={WhatsAppService.getTrialBookingUrl(c.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary full cd-action-btn"
                      style={{ marginTop: '18px' }}
                    >
                      Contact Us on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
