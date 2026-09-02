/**
 * @file testimonials.data.ts
 * @description Single source of truth for verified parent and student reviews.
 */

import { Testimonial } from '../types/academy.types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: "Ayesha's Mother",
    location: 'London, United Kingdom 🇬🇧',
    rating: 5,
    quote:
      'My children (ages 6 and 9) look forward to every single class with Qari Sahib. Their recitation and Tajweed pronunciation have improved remarkably in just three months. Finding a teacher with such patience in the UK was a blessing!',
    course: 'Noorani Qaida & Nazra Quran',
    verified: 'Verified Parent Review',
  },
  {
    id: 'testi-2',
    name: 'M. Hassan',
    location: 'Sharjah, United Arab Emirates 🇦🇪',
    rating: 5,
    quote:
      'Qari Sadiq Naeem previously taught home tuitions in Sharjah and his standard of teaching is exemplary. The one-to-one attention on Zoom made a huge difference in my son’s Hifz retention and daily revision. Highly recommended!',
    course: 'Hifz-ul-Quran (Memorization)',
    verified: 'Verified UAE Parent',
  },
  {
    id: 'testi-3',
    name: 'Sarah K.',
    location: 'Toronto, Canada 🇨🇦',
    rating: 5,
    quote:
      'As an adult starting from absolute basics, I was nervous and hesitant. However, Qari Sahib is so polite and encouraging that I never felt pressured. I can now recite the Holy Quran with proper Tajweed and understand its meaning.',
    course: 'Tajweed Mastery & Translation',
    verified: 'Verified Adult Student',
  },
  {
    id: 'testi-4',
    name: 'Tariq Mehmood',
    location: 'Riyadh, Saudi Arabia 🇸🇦',
    rating: 5,
    quote:
      'Finding a sincere Quran teacher who truly connects with kids was difficult until we joined this academy. The Zoom classes are crystal clear, punctual, and very flexible with our busy Saudi schedule.',
    course: 'Quran for Kids & Masnoon Duas',
    verified: 'Verified Parent Review',
  },
];
