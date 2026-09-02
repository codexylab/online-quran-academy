import { WhatsAppService } from '../../../lib/services/whatsapp.service';

export default function MobileStickyBar() {
  const waUrl = WhatsAppService.getGeneralInquiryUrl();

  return (
    <div className="mobile-sticky-bar">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ms-btn ms-wa"
      >
        <span>💬</span> WhatsApp Chat
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ms-btn ms-book"
      >
        <span>✦</span> Contact Us
      </a>
    </div>
  );
}
