'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';

interface FeePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeePolicyModal({ isOpen, onClose }: FeePolicyModalProps) {
  const whatsappUrl = WhatsAppService.getGeneralInquiryUrl();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="fee-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Fee Policy Modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="fee-modal-header">
          <div className="fee-modal-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
          <span className="fee-modal-eyebrow">✦ OUR SACRED MISSION ✦</span>
          <h2 className="fee-modal-title">
            Our Policy Regarding <em>Fees &amp; Hadiya</em>
          </h2>
          <div className="fee-modal-divider"></div>
        </div>

        {/* Modal Body */}
        <div className="fee-modal-body">
          <div className="fee-highlight-box">
            <span className="fee-highlight-icon">🤲</span>
            <p className="fee-highlight-text">
              <strong>We do not charge or set any fixed fee for Quran education.</strong>
            </p>
          </div>

          <div className="fee-policy-paragraphs">
            <p>
              Our sincere desire is that <strong>every Muslim</strong>, regardless of their financial circumstances, can learn and recite the Holy Quran with ease, dignity, and authentic Tajweed guidance.
            </p>

            <p>
              If you wish to contribute towards our educational services according to your personal willingness and affordability, you may send whatever amount you choose. <strong>This contribution is completely voluntary and based solely on your ease</strong> — there is no mandatory fee required.
            </p>

            <p>
              Our foremost priority is to spread the sacred teachings of the Holy Quran to as many children, brothers, and sisters as possible across the world.
            </p>
          </div>

          <div className="fee-dua-box">
            <p className="fee-dua-arabic">
              جَزَاكُمُ اللَّهُ خَيْرًا وَبَارَكَ فِيكُمْ
            </p>
            <p className="fee-dua-translation">
              <em>“May Allah Almighty accept our humble efforts and make your generous support a lasting source of <strong>Sadaqah Jariyah</strong> (continuous reward) for you and your family. Ameen.”</em>
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="fee-modal-footer">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary full"
            onClick={onClose}
          >
            Contact on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
