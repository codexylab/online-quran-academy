import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';
import { CORE_COURSES } from '../../../lib/constants/courses.data';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';

export default function CoreCoursesSection() {
  return (
    <section id="courses" className="section special-programs">
      <div className="container">
        <SectionHeading
          theme="light"
          center
          eyebrow="OUR LEARNING PROGRAMS"
          title="Choose the path that fits"
          titleHighlight="your journey."
        />

        <div className="special-grid">
          {CORE_COURSES.map((c) => (
            <div className="special-card" key={c.id}>
              {c.image && (
                <div className="course-card-image-wrap">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={400}
                    height={260}
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="course-card-img"
                  />
                </div>
              )}

              <div className="course-card-content">
                <h3 className="course-card-title">{c.title}</h3>
                {c.subtitle && <h4 className="special-sub">{c.subtitle}</h4>}

                {c.points && (
                  <ul className="special-points">
                    {c.points.map((pt) => (
                      <li key={pt}>
                        <span>✓</span> {pt}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={WhatsAppService.getTrialBookingUrl(c.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold-outline full-width-btn"
                >
                  Contact on WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-cta-wrap">
          <Link href="/courses" className="btn btn-primary">
            View All Courses &amp; Syllabus
          </Link>
        </div>
      </div>
    </section>
  );
}
