import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../../lib/constants/testimonials.data';

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow="PARENT & STUDENT REVIEWS"
          title="What Families Say About"
          titleHighlight="Our Classes"
          subtitle="Genuine words of gratitude from students and parents learning with us across the globe."
        />

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card" key={t.id}>
              <div className="testi-stars">{'★'.repeat(t.rating)}</div>
              <p className="testi-quote">“{t.quote}”</p>
              <div className="testi-author">
                <div className="author-avatar">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                  <small className="testi-course">Course: {t.course}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
