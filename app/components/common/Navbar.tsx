'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import LogoModal from './LogoModal';
import { SITE_CONFIG } from '../../../lib/config/site.config';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';

const FeePolicyModal = dynamic(() => import('./FeePolicyModal'), {
  ssr: false,
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [feeModalOpen, setFeeModalOpen] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappInquiryUrl = WhatsAppService.getGeneralInquiryUrl();

  return (
    <>
      {/* Top Announcement Bar */}
      {SITE_CONFIG.announcement.enabled && (
        <div className="top-announcement-bar">
          <div className="container tab-inner">
            <div className="tab-left">
              <span className="tab-pill">{SITE_CONFIG.announcement.badgeText}</span>
              <span className="tab-lead-text">{SITE_CONFIG.announcement.message}</span>
            </div>
            <div className="tab-right">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tab-wa-link"
              >
                <span>💬</span> WhatsApp: {SITE_CONFIG.contact.displayPhone}
              </a>
              <span className="tab-divider">|</span>
              <span className="tab-badge">{SITE_CONFIG.announcement.countriesBadge}</span>
            </div>
          </div>
        </div>
      )}

      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
        <nav className="nav container">
          <div className="brand">
            <button
              type="button"
              className="brand-mark brand-mark-btn"
              onClick={() => setLogoModalOpen(true)}
              aria-label="Click to enlarge Academy Logo"
              title="Click to enlarge Logo"
            >
              <Image
                src="/images/logo_clean_v4.webp"
                alt="Qari Sadiq Naeem Quran Academy Logo"
                width={58}
                height={58}
                className="brand-logo-img"
                priority
              />
            </button>
            <Link
              href="/"
              className="brand-text"
              onClick={() => setMenuOpen(false)}
            >
              <strong>ONLINE QURAN ACADEMY</strong>
              <small>{SITE_CONFIG.shortName.toUpperCase()}</small>
            </Link>
          </div>

          <button
            className={`menu-btn ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link
              href="/"
              className={pathname === '/' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={pathname === '/courses' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => {
                setFeeModalOpen(true);
                setMenuOpen(false);
              }}
            >
              Fee
            </button>
            <Link
              href="/about"
              className={pathname === '/about' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className={pathname === '/faq' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/blog"
              className={pathname.startsWith('/blog') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={pathname === '/contact' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              className="nav-cta"
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      </header>

      {/* Fee Policy Modal Popup */}
      <FeePolicyModal
        isOpen={feeModalOpen}
        onClose={() => setFeeModalOpen(false)}
      />

      {/* Logo Preview Lightbox Modal */}
      <LogoModal
        isOpen={logoModalOpen}
        onClose={() => setLogoModalOpen(false)}
      />
    </>
  );
}
