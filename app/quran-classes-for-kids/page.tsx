import type { Metadata } from 'next';
import LandingPageLayout from '../components/landing/LandingPageLayout';

export const metadata: Metadata = {
  title: 'Online Quran Classes for Kids | Fun & Patient Noorani Qaida & Tajweed',
  description:
    'Patient and gentle online Quran classes for children ages 4 to 14. Interactive 1-on-1 Zoom classes with Noorani Qaida, Nazra, short Surahs, Salah training, and daily Duas.',
  keywords: [
    'Online Quran Classes for Kids',
    'Learn Quran for Children',
    'Noorani Qaida for Kids Online',
    'Quran Tutor for Children',
    '1 on 1 Quran for Kids',
    'Kids Quran Teacher Online',
  ],
};

export default function QuranForKidsPage() {
  const highlights = [
    '🧒 Ages 4 to 14 Specialized Track',
    '💖 Zero Scolding / 100% Patient Teaching',
    '📊 Weekly Progress Reports for Parents',
    '🎁 100% Free Trial Assessment',
  ];

  const features = [
    {
      icon: '🎨',
      title: 'Visual Phonics & Screen Sharing',
      desc: 'High-definition digital Qaida highlighting letters in real-time, making lessons fun, engaging, and memorable.',
    },
    {
      icon: '🕊️',
      title: 'Gentle & Encouraging Methodology',
      desc: 'We never rush or scold. We build confidence with smiles, positive rewards, and joyful daily practice.',
    },
    {
      icon: '🤲',
      title: 'Salah (Namaz) & Masnoon Duas',
      desc: 'Along with Quran reading, kids learn practical Wudhu, 5 daily prayers, Kalimahs, and essential daily Sunnah Duas.',
    },
  ];

  const faqs = [
    {
      q: 'Can a 4 or 5-year-old child focus during an online Zoom class?',
      a: 'Yes! Our lessons for young children are interactive and kept to an optimal 30-minute duration with engaging visual tools so they stay attentive.',
    },
    {
      q: 'Can parents monitor the classes?',
      a: 'Absolutely. Parents are welcome to sit beside their child or observe classes on Zoom anytime.',
    },
  ];

  return (
    <LandingPageLayout
      eyebrow="SPECIALIZED CHILDREN QURAN TRACK"
      title="Online Quran Classes for"
      titleEm="Kids & Beginners"
      lead="Help your child develop a lifelong love for the Holy Quran with patient, gentle, and engaging 1-on-1 live Zoom classes guided by certified scholars."
      targetRegion="Kids"
      highlights={highlights}
      features={features}
      faqs={faqs}
    />
  );
}
