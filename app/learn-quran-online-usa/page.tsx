import type { Metadata } from 'next';
import LandingPageLayout from '../components/landing/LandingPageLayout';

export const metadata: Metadata = {
  title: 'Online Quran Classes USA | Live 1-on-1 Quran Tutor for American Muslims',
  description:
    'Best Online Quran Academy for students across the USA (EST, CST, MST, PST). Learn Noorani Qaida, Nazra with Tajweed, and Hifz from certified scholars at home.',
  keywords: [
    'Online Quran Classes USA',
    'Learn Quran Online USA',
    'Quran Tutor America',
    'Online Quran Academy USA',
    'Quran for Kids USA',
    'Learn Quran New York Texas California',
  ],
};

export default function LearnQuranUSAPage() {
  const highlights = [
    '🇺🇸 EST, CST, MST & PST Time Zones Covered',
    '🕒 Evening & Weekend Slots in USA',
    '🎥 1-on-1 Interactive Screen Sharing',
    '🎁 100% Free Assessment Class',
  ];

  const features = [
    {
      icon: '🇺🇸',
      title: 'US Time Zone Flexibility',
      desc: 'Whether you reside in New York (EST), Chicago (CST), Denver (MST), or California (PST), we match your exact schedule.',
    },
    {
      icon: '🌟',
      title: 'Engaging Phonics for US-Born Kids',
      desc: 'Patient, encouraging teaching that builds love for the Quran in children growing up in North America.',
    },
    {
      icon: '📖',
      title: 'Tajweed & Translation Track',
      desc: 'Understand the meanings of daily Salah and verses with word-by-word English explanations.',
    },
  ];

  const faqs = [
    {
      q: 'Can classes be arranged for California and West Coast time (PST)?',
      a: 'Yes, our teachers are available 24/7 and we regularly accommodate students across Eastern, Central, Mountain, and Pacific time zones.',
    },
    {
      q: 'How do payments work from the USA?',
      a: 'We offer flexible contribution (Hadiya) options via international bank transfer, Remitly, Wise, or PayPal according to your financial ease.',
    },
  ];

  return (
    <LandingPageLayout
      eyebrow="USA ONLINE QURAN ACADEMY"
      title="Online Quran Classes in the"
      titleEm="United States (USA)"
      lead="Individualized live 1-on-1 Quran instruction for Muslim families across New York, Texas, California, Illinois, Florida, and all 50 states."
      targetRegion="USA"
      highlights={highlights}
      features={features}
      faqs={faqs}
    />
  );
}
