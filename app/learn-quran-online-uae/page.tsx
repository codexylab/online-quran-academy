import type { Metadata } from 'next';
import LandingPageLayout from '../components/landing/LandingPageLayout';

export const metadata: Metadata = {
  title: 'Online Quran Classes UAE | Dubai, Sharjah & Abu Dhabi Quran Tutor',
  description:
    'Live 1-on-1 Online Quran Classes in UAE (Dubai, Sharjah, Abu Dhabi, Ajman). 6 years of UAE home tuition experience. Noorani Qaida, Nazra, Tajweed, and Hifz for expat families.',
  keywords: [
    'Online Quran Classes UAE',
    'Learn Quran Online Dubai',
    'Quran Teacher Sharjah',
    'Quran Classes Abu Dhabi',
    'Online Quran Tutor UAE',
    'Quran for Kids Dubai',
  ],
};

export default function LearnQuranUAEPage() {
  const highlights = [
    '🇦🇪 Gulf Standard Time (GST / GMT+4)',
    '🏆 6 Years Direct UAE Tuition Experience',
    '🕒 Post-School & After-Maghrib Slots',
    '🎁 100% Free Trial Class',
  ];

  const features = [
    {
      icon: '🇦🇪',
      title: '6 Years UAE Home Tuition Experience',
      desc: 'Qari Sadiq Naeem personally taught hundreds of expat students across Dubai, Sharjah, and Ajman, deeply understanding local curriculum and timing needs.',
    },
    {
      icon: '⏰',
      title: 'Synchronized with UAE School Routines',
      desc: 'Classes easily arranged after school hours (3:00 PM – 9:00 PM GST) or during weekends with zero travel hassle.',
    },
    {
      icon: '👥',
      title: 'Family & Expat Friendly',
      desc: 'Specialized 1-on-1 attention for Pakistani, Indian, Arab, and Western expatriate families living in the UAE.',
    },
  ];

  const faqs = [
    {
      q: 'How are class timings scheduled for Dubai and Sharjah families?',
      a: 'We operate on Gulf Standard Time (GST / GMT+4). Most students take classes between 4:00 PM and 9:30 PM on weekdays or weekend mornings.',
    },
    {
      q: 'Do you provide female teachers for ladies in the UAE?',
      a: 'Yes, we have qualified and certified female Quran scholars for sisters, daughters, and young girls in complete privacy.',
    },
  ];

  return (
    <LandingPageLayout
      eyebrow="UNITED ARAB EMIRATES (UAE) ONLINE QURAN ACADEMY"
      title="Online Quran Classes in"
      titleEm="UAE (Dubai & Sharjah)"
      lead="Premium 1-on-1 Zoom Quran classes for children, ladies, and families across Dubai, Sharjah, Abu Dhabi, and Ajman with 6+ years of direct UAE teaching experience."
      targetRegion="UAE"
      highlights={highlights}
      features={features}
      faqs={faqs}
    />
  );
}
