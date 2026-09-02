/**
 * @file faqs.data.ts
 * @description Single source of truth for frequently asked questions across Homepage and FAQ page.
 */

import { FAQItem } from '../types/academy.types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    q: 'How are the live online Quran classes conducted on Zoom?',
    a: 'Classes are conducted live one-to-one via high-definition Zoom. The teacher and student share digital Quranic pages, Noorani Qaida charts, or Tajweed diagrams on the screen in real-time. The teacher listens attentively to every letter, providing immediate correction of Makharij and measured recitation (Tarteel).',
    category: 'Classes & Technology',
  },
  {
    id: 'faq-2',
    q: 'Can students from UAE, Saudi Arabia, Qatar, Oman, UK, and USA join?',
    a: 'Yes, absolutely! The majority of our students reside in the UAE, Saudi Arabia, Qatar, Oman, UK, USA, Canada, and Australia. We schedule classes strictly according to your country’s local time zone (e.g. GST, AST, GMT, EST) and family convenience.',
    category: 'International Students',
  },
  {
    id: 'faq-3',
    q: 'How does the one-on-one personalized teaching method work?',
    a: 'Every student receives the teacher’s undivided attention during the entire lesson. There are no other students in the Zoom room, which eliminates distractions and allows the teacher to adapt the pace specifically to the student’s reading level and memorization speed.',
    category: 'Teaching Methodology',
  },
  {
    id: 'faq-4',
    q: 'Do you offer a 100% free trial class before enrollment?',
    a: 'Yes, we provide a free trial class with zero financial commitment. This allows you or your child to experience the teaching methodology, evaluate the teacher’s patience, assess the student’s current reading level, and discuss a mutually convenient schedule.',
    category: 'Admissions & Trial',
  },
  {
    id: 'faq-5',
    q: 'What age can children start learning Noorani Qaida?',
    a: 'Children can start as early as 4 to 5 years old. Our teachers use gentle, engaging, and patient techniques specifically tailored for young minds so they fall in love with Arabic letters and Quran recitation.',
    category: 'Children & Kids',
  },
  {
    id: 'faq-6',
    q: 'I am an adult beginner with zero Arabic reading background. Can I learn?',
    a: 'Yes! Our Adult Quran Learning track is designed specifically for beginners. You start from recognizing individual Arabic letters in Noorani Qaida, moving at your personal comfortable pace without pressure or embarrassment.',
    category: 'Adult Learning',
  },
  {
    id: 'faq-7',
    q: 'How many days a week are the classes held?',
    a: 'We offer flexible packages: 2 days, 3 days, 4 days, or 5 days per week. Weekend-only classes (Saturday & Sunday) are also available for busy students and working professionals.',
    category: 'Schedule & Timings',
  },
  {
    id: 'faq-8',
    q: 'What equipment or devices do I need for online classes?',
    a: 'You only need a smartphone, tablet, laptop, or desktop computer with a stable internet connection and the free Zoom application installed. We provide all digital Quranic learning materials and books.',
    category: 'Classes & Technology',
  },
  {
    id: 'faq-9',
    q: 'What are the qualifications of Qari Sadiq Naeem?',
    a: 'Qari Sadiq Naeem is a certified Hafiz-ul-Quran and Tajweed scholar from Multan, Pakistan with 17+ years of Quran teaching experience (6 years in Pakistan, 6 years of prestigious home tuitions across Sharjah & Dubai, UAE, and 5+ years teaching worldwide online).',
    category: 'Teacher & Academy',
  },
  {
    id: 'faq-10',
    q: 'Do you also teach practical Namaz (Salah) and daily Duas?',
    a: 'Yes! Along with Quran recitation, every student learns step-by-step practical Salah with meanings, 6 Kalimas, daily Masnoon Duas (waking up, eating, sleeping, travelling), and basic Islamic manners.',
    category: 'Curriculum & Courses',
  },
  {
    id: 'faq-11',
    q: 'How do I apply for admission?',
    a: 'Simply fill out our online Admission Form on the Contact page or send a message directly to our WhatsApp (+92 301 2195072). We will get back to you promptly to arrange your free trial session.',
    category: 'Admissions & Trial',
  },
];
