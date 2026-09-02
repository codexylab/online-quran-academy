import SectionHeading from '../common/SectionHeading';
import { HOW_IT_WORKS_STEPS } from '../../../lib/constants/academy-stats.data';

function StepSvgIcon({ number }: { number: string }) {
  switch (number) {
    case '01':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case '02':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case '03':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    case '04':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HowItWorksSection() {
  return (
    <section id="how" className="section how">
      <div className="container">
        <SectionHeading
          eyebrow="SIMPLE & TRANSPARENT"
          title="How It Works in"
          titleHighlight="Four Easy Steps"
        />

        <div className="steps-premium-grid">
          {HOW_IT_WORKS_STEPS.map((st) => (
            <div className="premium-step-card" key={st.number}>
              <div className="step-card-header">
                <div className="step-badge-number">
                  <span>STEP</span>
                  <strong>{st.number}</strong>
                </div>
                <div className="step-icon-bubble">
                  <StepSvgIcon number={st.number} />
                </div>
              </div>
              <div className="step-card-body">
                <h3 className="step-card-title">{st.title}</h3>
                <p className="step-card-desc">{st.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
