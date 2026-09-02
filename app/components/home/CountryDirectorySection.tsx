import SectionHeading from '../common/SectionHeading';
import { COUNTRY_DIRECTORY } from '../../../lib/constants/countries.data';

const GLOBAL_ADVANTAGES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '100% Time Zone Friendly',
    desc: 'Flexible slots synchronized around your local school, work, and family schedule — anywhere in the world.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Bilingual Instruction (Urdu & English)',
    desc: 'Patient coaching with English phonetics for children raised abroad and fluent Urdu guidance.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: '1-on-1 Zoom HD Screen Sharing',
    desc: 'Direct live engagement with digital Noorani Qaida, Quran pages, and real-time pronunciation correction.',
  },
];

export default function CountryDirectorySection() {
  return (
    <section id="by-country" className="section by-country">
      <div className="container">
        <SectionHeading
          eyebrow="GLOBAL REACH & ACCESSIBILITY"
          title="Worldwide Quran Learning Across"
          titleHighlight="9+ Countries"
        />

        <div className="global-presence-wrapper">
          {/* Countries Chip Cloud */}
          <div className="country-chips-grid">
            {COUNTRY_DIRECTORY.map((c) => (
              <div className="country-chip" key={c.id}>
                <span className="chip-flag">{c.flag}</span>
                <span className="chip-name">{c.country}</span>
              </div>
            ))}
          </div>

          {/* 3 Core Trust Bullets */}
          <div className="global-trust-grid">
            {GLOBAL_ADVANTAGES.map((adv, idx) => (
              <div className="global-trust-card" key={idx}>
                <div className="gt-icon-wrap">{adv.icon}</div>
                <div>
                  <h4>{adv.title}</h4>
                  <p>{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
