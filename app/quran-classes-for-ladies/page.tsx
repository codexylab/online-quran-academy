import type { Metadata } from 'next';
import LandingPageLayout from '../components/landing/LandingPageLayout';

export const metadata: Metadata = {
  title: 'Online Quran Classes for Ladies | Qualified Female Quran Teachers',
  description:
    '100% Private and flexible online Quran classes for sisters, homemakers, university students, and working women. Learn with qualified female Quran scholars via Zoom.',
  keywords: [
    'Online Quran Classes for Ladies',
    'Female Quran Teacher Online',
    'Quran Classes for Sisters',
    'Learn Quran for Women',
    'Female Quran Tutor UK UAE USA',
    'Tajweed Classes for Ladies',
  ],
};

export default function QuranForLadiesPage() {
  const highlights = [
    '🧕 100% Female Certified Quran Teachers',
    '🔒 Complete Privacy & Confidentiality',
    '🕒 Flexible Morning, Afternoon & Late Night Slots',
    '🎁 100% Free Trial Class',
  ];

  const features = [
    {
      icon: '🧕',
      title: 'Dedicated Female Scholars',
      desc: 'Learn directly from certified female teachers who hold Sanad in Tajweed and Hifz.',
    },
    {
      icon: '🏡',
      title: 'Learn from the Comfort of Home',
      desc: 'Ideal for busy homemakers, university students, and professionals needing a comfortable, peaceful learning environment.',
    },
    {
      icon: '💎',
      title: 'Tajweed, Translation & Tafseer',
      desc: 'Whether starting from basic Qaida or studying deep Quran translation and Tafseer, we personalize the syllabus to your goals.',
    },
  ];

  const faqs = [
    {
      q: 'Is complete privacy guaranteed during classes?',
      a: 'Yes, 1-on-1 classes are held with certified female teachers with 100% privacy and confidentiality.',
    },
    {
      q: 'Can timings be adjusted for household or work schedules?',
      a: 'Yes, we offer flexible morning, afternoon, and evening slots adapted to your domestic and work commitments.',
    },
  ];

  return (
    <LandingPageLayout
      eyebrow="DEDICATED SISTERS & WOMEN TRACK"
      title="Online Quran Classes for"
      titleEm="Ladies & Sisters"
      lead="Dignified, encouraging, and confidential 1-on-1 Quran classes for sisters and young girls guided by certified female Quran teachers."
      targetRegion="Ladies"
      highlights={highlights}
      features={features}
      faqs={faqs}
    />
  );
}
