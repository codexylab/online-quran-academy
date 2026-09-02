/**
 * @file site.config.ts
 * @description Central configuration and constants for academy identity, contact info, and branding.
 * Modify contact details here to propagate changes across the entire website.
 */

export const SITE_CONFIG = {
  name: 'Qari Sadiq Naeem Online Quran Academy',
  shortName: 'Qari Sadiq Naeem',
  title: 'Qari Sadiq Naeem | Online Quran Academy',
  description:
    'Live 1-on-1 online Quran classes for children, ladies, and adults worldwide. Learn Nazra, Hifz, Tajweed, Translation, and Tafseer with 17+ years of experienced guidance.',
  url: 'https://qarisadiqnaeem.com',
  
  // Teacher profile
  teacher: {
    name: 'Qari Sadiq Naeem',
    title: 'Certified Hafiz & Tajweed Scholar',
    experienceYears: '17+',
    pakistanExperienceYears: '6',
    uaeExperienceYears: '6',
    onlineExperienceYears: '5+',
    origin: 'Multan, Pakistan',
    languages: ['Urdu', 'English Phonetics', 'Punjabi', 'Arabic'],
  },

  // Contact Information
  contact: {
    whatsappNumber: '923012195072',
    displayPhone: '+92 301 2195072',
    email: 'abufaisal2195@gmail.com',
    location: 'Multan, Pakistan',
    coverage: 'Worldwide (UAE, UK, Saudi Arabia, Qatar, Oman, USA, Canada, Australia & Pakistan)',
  },

  // Platform details
  platform: {
    medium: 'Live 1-on-1 via Zoom HD Video & Audio',
    trialOffering: '100% Free Assessment & Trial Class',
  },

  // Top Announcement Banner
  announcement: {
    enabled: false,
    badgeText: 'NEW ADMISSIONS OPEN',
    message: 'Live 1-on-1 Online Quran Classes via Zoom • Free Trial Available',
    countriesBadge: '🌍 UK • UAE • KSA • USA • PK',
  },

  // Navigation Links
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
} as const;
