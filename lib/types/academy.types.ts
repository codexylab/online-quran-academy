/**
 * @file academy.types.ts
 * @description Central TypeScript interfaces and domain models for Qari Sadiq Naeem Online Quran Academy.
 */

export interface CourseInfo {
  audience: string;
  duration: string;
  format: string;
  prerequisites: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  desc: string;
  tag: string;
  icon: string;
  arabic?: string;
  badge?: string;
  eyebrow?: string;
  image?: string;
  points?: string[];
  action?: string;
  syllabus?: string[];
  info?: CourseInfo;
}

export interface SpecialProgram {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: string;
  arabic?: string;
  badge: string;
  highlight: string;
  action: string;
  points: string[];
}

export interface CountryListing {
  id: string;
  flag: string;
  country: string;
  headline: string;
  cities: string;
  timing: string;
  details: string;
  tag: string;
  defaultTimezone: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  course: string;
  verified: string;
}

export interface FAQItem {
  id: string;
  q: string;
  a: string;
  category: string;
}

export interface StatItem {
  value: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
  badge?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AdmissionFormData {
  studentName: string;
  age: string;
  gender: 'Male' | 'Female';
  parentName: string;
  whatsapp: string;
  email: string;
  country: string;
  timezone: string;
  course: string;
  level: string;
  preferredTime: string;
  message: string;
}

export interface NavLink {
  name: string;
  href: string;
}
