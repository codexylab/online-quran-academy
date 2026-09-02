import AdmissionForm from '../forms/AdmissionForm';
import { SITE_CONFIG } from '../../../lib/config/site.config';

export default function AdmissionSection() {
  return (
    <section id="admission" className="section admission">
      <div className="container admission-grid">
        <div className="admission-copy">
          <div className="eyebrow">
            <span>✦</span> START TODAY
          </div>
          <h2>
            Ready to Begin Your <em>Quran Learning Journey?</em>
          </h2>
          <p>
            Fill out the form to reserve your free trial class. We will reach out promptly via WhatsApp or Email
            to finalize your timetable.
          </p>

          <div className="contact-mini">
            <div>
              <span>💬</span>
              <div>
                <b>Direct WhatsApp</b>
                <small>{SITE_CONFIG.contact.displayPhone} (Instant Reply)</small>
              </div>
            </div>
            <div>
              <span>✉️</span>
              <div>
                <b>Email Address</b>
                <small>{SITE_CONFIG.contact.email}</small>
              </div>
            </div>
            <div>
              <span>🎥</span>
              <div>
                <b>Live Platform</b>
                <small>{SITE_CONFIG.platform.medium}</small>
              </div>
            </div>
            <div>
              <span>📍</span>
              <div>
                <b>Academy Base</b>
                <small>{SITE_CONFIG.contact.location} (Teaching Worldwide)</small>
              </div>
            </div>
          </div>
        </div>

        <AdmissionForm />
      </div>
    </section>
  );
}
