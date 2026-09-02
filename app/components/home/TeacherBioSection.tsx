import Link from 'next/link';
import { SITE_CONFIG } from '../../../lib/config/site.config';

export default function TeacherBioSection() {
  return (
    <section id="about" className="section about-teacher">
      <div className="container two-col">
        <div>
          <div className="eyebrow dark">
            <span>✦</span> MEET YOUR TEACHER
          </div>
          <h2>
            {SITE_CONFIG.teacher.experienceYears} Years of Dedicated <em>Quranic Instruction</em>
          </h2>
          <p className="section-lead">
            <strong>{SITE_CONFIG.teacher.name}</strong> is a certified Hafiz & Tajweed scholar from {SITE_CONFIG.teacher.origin},
            dedicated to spreading the correct recitation, understanding, and love of the Holy Quran worldwide.
          </p>
          <p>
            His distinguished teaching career spans <strong>{SITE_CONFIG.teacher.pakistanExperienceYears} years in Pakistan</strong>,
            followed by <strong>{SITE_CONFIG.teacher.uaeExperienceYears} years in Sharjah &amp; Dubai (UAE)</strong> providing prestigious home tuitions,
            and <strong>{SITE_CONFIG.teacher.onlineExperienceYears} years of worldwide online instruction</strong> via live 1-on-1 Zoom.
          </p>

          <div className="experience-list">
            <div>
              <span>01</span>
              <div>
                <b>{SITE_CONFIG.teacher.pakistanExperienceYears} Years in Pakistan</b>
                <small>Strong foundation of madrasa instruction and student mentorship in Multan.</small>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <b>{SITE_CONFIG.teacher.uaeExperienceYears} Years in Sharjah &amp; Dubai</b>
                <small>Trusted home tuition for prominent expatriate &amp; Arab families in the UAE.</small>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <b>{SITE_CONFIG.teacher.onlineExperienceYears} Years Worldwide Online</b>
                <small>Live 1-on-1 Zoom classes tailored to all international time zones.</small>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <Link href="/about" className="btn btn-primary">
              Read Biography
            </Link>
          </div>
        </div>

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
      </div>
    </section>
  );
}
