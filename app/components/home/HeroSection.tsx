'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '../../../lib/config/site.config';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';

const ROTATING_HEADINGS = [
  'Proper Tajweed & Tarteel',
  'Male & Female Students',
  'Live 1-on-1 Zoom Classes',
  'Complete Hifz & Nazra',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const whatsappUrl = WhatsAppService.getGeneralInquiryUrl();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_HEADINGS.length);
        setIsFading(false);
      }, 350);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero hero-full-bg">
      {/* Full-Size Background Image */}
      <div className="hero-bg-media">
        <Image
          src="/images/hero-quran-cinematic.jpg"
          alt="Holy Quran resting on wooden Rehal with illuminated mosque dome and lanterns"
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-full-content">
        <div className="hero-center-box">
          <h1 className="hero-heading">
            <span className="hero-static-title">Online Quran Learning</span>
            <span className="rotating-text-wrapper">
              <span className={`rotating-heading ${isFading ? 'fading-out' : 'fading-in'}`}>
                {ROTATING_HEADINGS[index]}
              </span>
            </span>
          </h1>

          <p className="hero-lead">
            Master the Holy Quran with <strong>clarity, precision, and authentic Tajweed</strong> from the comfort of your home. Personalized live classes for <strong>children, brothers &amp; sisters</strong> worldwide guided by certified scholar <strong>{SITE_CONFIG.teacher.name}</strong>.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us on WhatsApp
            </a>
            <Link className="btn btn-ghost" href="/courses">
              View All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
