'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoModal from './LogoModal';
import { SITE_CONFIG } from '../../../lib/config/site.config';
import { CORE_COURSES, SPECIAL_PROGRAMS } from '../../../lib/constants/courses.data';
import { COUNTRY_DIRECTORY } from '../../../lib/constants/countries.data';

export default function Footer() {
  const [logoModalOpen, setLogoModalOpen] = useState(false);

  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand-col">
          <div className="brand footer-brand">
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
              />
            </button>
            <Link href="/" className="brand-text">
              <strong>ONLINE QURAN ACADEMY</strong>
              <small>{SITE_CONFIG.shortName.toUpperCase()}</small>
            </Link>
          </div>
          <p className="footer-tagline">
            {SITE_CONFIG.description}
          </p>
          <div className="footer-contact-quick">
            <span>📍 {SITE_CONFIG.contact.location} ({SITE_CONFIG.contact.coverage})</span>
            <span>💬 WhatsApp: {SITE_CONFIG.contact.displayPhone}</span>
            <span>✉️ Email: {SITE_CONFIG.contact.email}</span>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <b>Navigation</b>
            {SITE_CONFIG.navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
            <Link href="/blog">Blog & Guides</Link>
          </div>

          <div>
            <b>Core Courses</b>
            {CORE_COURSES.slice(0, 6).map((c) => (
              <Link key={c.id} href={`/courses#${c.id}`}>
                {c.title}
              </Link>
            ))}
          </div>

          <div>
            <b>Special Tracks</b>
            <Link href="/quran-classes-for-kids">Quran for Kids</Link>
            <Link href="/quran-classes-for-ladies">Quran for Ladies</Link>
            {SPECIAL_PROGRAMS.slice(2).map((sp) => (
              <Link key={sp.id} href={`/courses#${sp.id}`}>
                {sp.title}
              </Link>
            ))}
          </div>

          <div>
            <b>By Country</b>
            <Link href="/learn-quran-online-uk">Learn Quran UK 🇬🇧</Link>
            <Link href="/learn-quran-online-uae">Learn Quran UAE 🇦🇪</Link>
            <Link href="/learn-quran-online-usa">Learn Quran USA 🇺🇸</Link>
            {COUNTRY_DIRECTORY.slice(2, 5).map((c) => (
              <Link key={c.id} href="/courses">
                {c.headline} {c.flag}
              </Link>
            ))}
          </div>

          <div>
            <b>Legal</b>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </span>
        <span>{SITE_CONFIG.contact.location} · {SITE_CONFIG.platform.medium}</span>
      </div>

      {/* Logo Preview Lightbox Modal */}
      <LogoModal
        isOpen={logoModalOpen}
        onClose={() => setLogoModalOpen(false)}
      />
    </footer>
  );
}
