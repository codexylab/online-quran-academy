'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoModal({ isOpen, onClose }: LogoModalProps) {
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

  return (
    <div
      className={`modal-backdrop logo-modal-backdrop ${isOpen ? 'active' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="logo-modal-pure" onClick={(e) => e.stopPropagation()}>
        {/* Single Close Button */}
        <button
          type="button"
          className="modal-close-btn logo-pure-close"
          onClick={onClose}
          aria-label="Close Logo Preview"
        >
          ✕
        </button>

        {/* Large Logo Frame Only */}
        <div className="logo-pure-frame">
          <Image
            src="/images/logo_clean_v4.webp"
            alt="Qari Sadiq Naeem Online Quran Academy Logo"
            width={380}
            height={380}
            className="logo-pure-img"
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}


