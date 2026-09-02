import Link from 'next/link';
import SectionHeading from '../common/SectionHeading';
import { SPECIAL_PROGRAMS } from '../../../lib/constants/courses.data';

export default function SpecialTracksSection() {
  return (
    <section id="special-programs" className="section special-programs">
      <div className="container">
        <SectionHeading
          theme="light"
          eyebrow="SPECIALIZED LEARNING TRACKS"
          title="Tailored Programs for"
          titleHighlight="Every Learner"
          subtitle="Specially curated formats for children, sisters, personalized 1-on-1 mentorship, and working adults."
        />

        <div className="special-grid">
          {SPECIAL_PROGRAMS.map((prog) => (
            <div className="special-card" key={prog.id}>
              <div className="special-badge">{prog.badge}</div>
              <div className="special-icon">{prog.icon}</div>
              <h3>{prog.title}</h3>
              <h4 className="special-sub">{prog.subtitle}</h4>
              <ul className="special-points">
                {prog.points.map((pt) => (
                  <li key={pt}>
                    <span>✓</span> {pt}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-gold-outline">
                {prog.action} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
