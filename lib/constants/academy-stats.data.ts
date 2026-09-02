/**
 * @file academy-stats.data.ts
 * @description Single source of truth for stats, Why Choose Us features, How-it-works steps, and Teacher Timeline.
 */

import { StatItem, FeatureItem, StepItem, ExperienceTimelineItem } from '../types/academy.types';

export const ACADEMY_STATS: StatItem[] = [
  {
    value: '17+',
    title: 'Years Experience',
    description: 'Serving Pakistan, UAE & Worldwide',
  },
  {
    value: '1-on-1',
    title: 'Personal Attention',
    description: 'Live interactive classes via Zoom',
  },
  {
    value: '100%',
    title: 'Free Trial Class',
    description: 'Evaluation with zero commitment',
  },
  {
    value: 'Sanad',
    title: 'Certified Scholar',
    description: 'Hafiz & Tajweed pedagogy expert',
  },
];

export const WHY_CHOOSE_US_FEATURES: FeatureItem[] = [
  {
    id: 'feat-1',
    icon: 'scholar',
    tag: '17+ Years Sanad',
    title: 'Certified & Qualified Scholar',
    description:
      'Learn under a certified Hafiz & Tajweed expert with 17+ years of classical sanad training and proven international pedagogical experience.',
  },
  {
    id: 'feat-2',
    icon: 'zoom',
    tag: 'Live via Zoom HD',
    title: 'Live One on One Interactive Zoom',
    description:
      'Real-time correction on the spot — not pre-recorded videos or automated apps. Immediate feedback on Makharij and pronunciation.',
  },
  {
    id: 'feat-3',
    icon: 'clock',
    tag: 'Global Timezones',
    title: 'Custom Flexible Schedules',
    description:
      'Morning, afternoon, evening, and weekend slots coordinated around school, work, and your local country time zone.',
  },
  {
    id: 'feat-4',
    icon: 'heart',
    tag: 'Gentle & Patient',
    title: 'Patient & Encouraging Methodology',
    description:
      'Extraordinary patience with young kids and beginner adults — creating a calm, supportive, and dignified atmosphere for learning.',
  },
  {
    id: 'feat-5',
    icon: 'chart',
    tag: 'Parent WhatsApp Updates',
    title: 'Structured Progress Tracking',
    description:
      'Regular milestone check-ins, monthly performance reviews, and transparent parent-teacher WhatsApp communication.',
  },
  {
    id: 'feat-6',
    icon: 'globe',
    tag: '9+ Countries Served',
    title: 'Worldwide Accessibility',
    description:
      'Welcoming students from UAE, Saudi Arabia, Qatar, Oman, UK, USA, Canada, Australia, and Pakistan.',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Submit Details',
    description: 'Fill out our quick admission form with the student’s age, desired course, and country.',
  },
  {
    number: '02',
    title: 'Choose Schedule',
    description: 'Select your preferred days and convenient timing aligned with your country’s time zone.',
  },
  {
    number: '03',
    title: 'Attend Free Trial',
    description: 'Join a live One on One Zoom trial session with Qari Sahib to evaluate teaching & assess reading level.',
  },
  {
    number: '04',
    title: 'Begin Learning',
    description: 'Confirm your regular weekly schedule and embark on your fulfilling Quranic learning journey!',
  },
];

export const TEACHER_TIMELINE: ExperienceTimelineItem[] = [
  {
    year: '17+ Years Total Excellence',
    title: 'Distinguished Quran Teaching Career',
    description: 'Comprehensive instruction across Noorani Qaida, Nazra, Hifz, Tajweed, Translation, and Tafseer.',
  },
  {
    year: '6 Years in Pakistan',
    title: 'Madrasa & Community Instruction in Multan',
    description: 'Mentored students through Qaida and Nazra, established Hifz memorization frameworks, and trained young Huffaz.',
  },
  {
    year: '6 Years in Sharjah & Dubai, UAE',
    title: 'Home Tuition for Expatriate & Arab Families',
    description: 'Delivered customized one-to-one home tuition for prominent families across Sharjah, Dubai, and Ajman.',
  },
  {
    year: '5+ Years Worldwide Online',
    title: 'Global Live Online Academy via Zoom',
    description: 'Conducting live 1-on-1 classes for students across UAE, Saudi Arabia, Qatar, Oman, UK, USA, Canada, and Australia.',
  },
];
