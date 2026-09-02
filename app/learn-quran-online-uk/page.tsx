import type { Metadata } from 'next';
import LandingPageLayout from '../components/landing/LandingPageLayout';
import { SITE_CONFIG } from '../../lib/config/site.config';

export const metadata: Metadata = {
  title: 'Online Quran Classes UK | Live 1-on-1 Quran Tutor for Kids & Adults',
  description:
    'Best Online Quran Classes in the UK for kids and adults. Learn Noorani Qaida, Tajweed, and Hifz with 1-on-1 Zoom sessions aligned with UK school and evening GMT/BST hours.',
  keywords: [
    'Online Quran Classes UK',
    'Learn Quran Online UK',
    'Quran Teacher London',
    'Quran Tutor Birmingham',
    'Quran Classes Manchester',
    'Noorani Qaida for Kids UK',
    'Online Quran Academy UK',
  ],
};

export default function LearnQuranUKPage() {
  const highlights = [
    '🇬🇧 UK Timezone (GMT / BST) Friendly',
    '🕒 After-School Slots (4:00 PM – 9:00 PM)',
    '🎥 1-on-1 Live Zoom HD Interactive',
    '🎁 100% Free Trial Assessment',
  ];

  const features = [
    {
      icon: '🇬🇧',
      title: 'UK After-School Timings',
      desc: 'Flexible scheduling specifically designed around British primary and secondary school hours, plus weekend morning slots.',
    },
    {
      icon: '🗣️',
      title: 'Bilingual English & Urdu Mentorship',
      desc: 'Clear communication tailored for British-born Muslim children to ensure strong pronunciation and understanding of Tajweed rules.',
    },
    {
      icon: '🧕',
      title: 'Male & Female UK Certified Scholars',
      desc: 'Dedicated female teachers for sisters and girls; experienced male Qari for young boys and adults.',
    },
  ];

  const faqs = [
    {
      q: 'What time slots are available for students in the United Kingdom?',
      a: 'We offer flexible 1-on-1 classes throughout the day, with prime slots between 4:00 PM and 9:00 PM GMT/BST after school, as well as Saturday & Sunday morning slots.',
    },
    {
      q: 'How does the free trial class work in the UK?',
      a: 'You can book a 100% free assessment session on Zoom. Qari Sadiq Naeem will evaluate the student’s level and propose a tailored plan.',
    },
    {
      q: 'Can young British kids with zero Arabic background join?',
      a: 'Yes! Our Noorani Qaida course is built specifically for young beginners with patient, gentle phonics-based teaching.',
    },
  ];

  return (
    <LandingPageLayout
      eyebrow="UNITED KINGDOM (UK) ONLINE QURAN ACADEMY"
      title="Online Quran Classes in the"
      titleEm="United Kingdom (UK)"
      lead="Live 1-on-1 personalized Quran reading, Tajweed, and Hifz classes tailored for British Muslim children, ladies, and adults across London, Birmingham, Manchester, Leeds, and Glasgow."
      targetRegion="UK"
      highlights={highlights}
      features={features}
      faqs={faqs}
    />
  );
}
