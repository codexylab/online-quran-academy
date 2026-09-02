import { COUNTRY_DIRECTORY } from '../../../lib/constants/countries.data';

const CREDENTIAL_BULLETS = [
  {
    title: '17+ Years Academic Excellence',
    desc: '6 Years in Pakistan, 6 Years in Dubai & Sharjah (UAE), and 5+ Years Online Worldwide.',
  },
  {
    title: 'Male & Female Teachers Available',
    desc: 'Dedicated female teachers for sisters & young girls; qualified male scholars for boys.',
  },
  {
    title: 'No Fixed Fee (Flexible Hadiya)',
    desc: 'No rigid fee structure. Contribute willingly according to your financial ease and budget.',
  },
  {
    title: 'Certified & Qualified Scholars',
    desc: 'Certified Hafiz & Tajweed experts with authentic teaching methodology.',
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container stats-unified-grid">
        {/* Left Islamic Royal Arch: Academy Credentials & Foundation */}
        <div className="islamic-royal-card">
          <div className="royal-arch-frame">
            <div className="royal-arch-header">
              <span className="royal-arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
              <span className="royal-eyebrow">✦ ACADEMY CREDENTIALS</span>
              <h3 className="royal-title">
                Authentic Quranic <em>Excellence</em>
              </h3>
            </div>

            <div className="royal-bullet-list">
              {CREDENTIAL_BULLETS.map((b, idx) => (
                <div className="royal-bullet-item" key={idx}>
                  <span className="royal-bullet-icon">✦</span>
                  <div className="royal-bullet-text">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Islamic Royal Arch: One on One Zoom Worldwide & Country Chips */}
        <div className="islamic-royal-card">
          <div className="royal-arch-frame">
            <div className="royal-arch-header">
              <div className="royal-hadith-box">
                <span className="hadith-line-intro">قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ</span>
                <span className="hadith-line-main">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</span>
                <span className="hadith-line-ref">رَوَاهُ الْبُخَارِيُّ</span>
                <p className="hadith-translation">
                  &ldquo;The best among you are those who learn the Quran and teach it.&rdquo;
                </p>
              </div>
              <span className="royal-eyebrow">✦ WORLDWIDE ACCESSIBILITY</span>
              <h3 className="royal-title">
                One on One Live <em>Interactive Zoom</em>
              </h3>
            </div>

            <div className="royal-global-body">
              <p className="royal-lead-text">
                Dedicated personal attention with real-time Tajweed correction for students <strong>all over the world</strong>.
              </p>

              <div className="royal-chips-grid">
                {COUNTRY_DIRECTORY.slice(0, 9).map((c) => (
                  <span className="royal-country-chip" key={c.id}>
                    {c.country.replace(/\s*\(.*?\)\s*/g, '')}
                  </span>
                ))}
              </div>

              <div className="royal-bottom-pill">
                <span>✦</span> 100% Flexible Timetable Across All Time Zones
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
