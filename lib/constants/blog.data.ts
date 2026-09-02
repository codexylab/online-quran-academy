export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-teach-kids-noorani-qaida-at-home',
    title: 'How to Teach Noorani Qaida to Kids at Home: A Complete Parent Guide',
    description:
      'Learn step-by-step strategies for teaching Noorani Qaida to young children (ages 4–8) at home, focusing on correct letter articulation, patient pacing, and daily habit building.',
    date: 'August 28, 2026',
    readTime: '5 min read',
    category: 'Kids & Beginners',
    author: 'Qari Sadiq Naeem',
    content: [
      'Teaching young children the Holy Quran is one of the greatest blessings and responsibilities for Muslim parents. The foundation of fluent Quran reading begins with Noorani Qaida.',
      '### 1. Start with Phonics and Accurate Letter Recognition (Mufradat)',
      'Never rush through the first lesson of the Arabic alphabet. Ensure the child recognizes letters in isolation before moving to combined shapes (Murakkabat). Use color-coded visual charts and gentle repetition.',
      '### 2. Focus on Accurate Makharij (Pronunciation Points)',
      'Arabic contains distinct sounds like heavy letters (خ, ص, ض, ط, ظ, غ, ق) and throat letters (ح, ع, ه, ء). Correcting these articulation points in the early years prevents lifelong reading errors.',
      '### 3. Keep Daily Sessions Short and Joyful (20–30 Minutes)',
      'Young children have limited attention spans. A consistent daily 25-minute live 1-on-1 session is far more effective than an exhausting hour-long class once a week.',
      '### 4. Practice Daily Sabaq and Revision Routine',
      'Always start each lesson by reviewing yesterday’s lesson before introducing new lines. Positive encouragement and gentle praise build a child’s confidence and love for the Book of Allah.',
    ],
  },
  {
    slug: 'top-tajweed-rules-for-beginners',
    title: 'Essential Tajweed Rules for Beginners: A Simple Practical Breakdown',
    description:
      'Understand fundamental Tajweed rules including Noon Saakin, Meem Saakin, Ghunnah, Qalqalah, and Madd to recite the Holy Quran with melody and precision.',
    date: 'August 20, 2026',
    readTime: '6 min read',
    category: 'Tajweed Mastery',
    author: 'Qari Sadiq Naeem',
    content: [
      'Tajweed is the art and science of reciting the Holy Quran as it was revealed to Prophet Muhammad ﷺ. Mastering basic Tajweed rules elevates your recitation from mechanical reading into soulful, melodious Tarteel.',
      '### 1. Rules of Noon Saakin and Tanween',
      'Whenever a Noon with Sukoon (نْ) or Tanween appears, four primary rules apply: Izhar (clear pronunciation), Idgham (merging letters), Iqlab (changing sound to Meem), and Ikhfa (hidden nasalization).',
      '### 2. The 5 Letters of Qalqalah (Echoing Sound)',
      'The letters of Qalqalah are collected in the phrase "Qutbu Jaddin" (ق, ط, ب, ج, د). When these letters carry a Sukoon, an echoing bounce is produced from the articulation point.',
      '### 3. Madd (Elongation Rules)',
      'Normal natural elongation (Madd Asli) is 2 counts, while connected or compulsory Madd (Madd Muttasil or Lazim) extends up to 4 to 6 counts. Consistent breath control ensures smooth transitions.',
      '### 4. The Importance of Real-Time Scholar Guidance',
      'While reading theory from books is helpful, Tajweed can only be truly perfected by reciting out loud to an experienced Qari who can identify subtle oral flaws in real-time.',
    ],
  },
  {
    slug: 'step-by-step-guide-to-hifz-quran-online',
    title: 'How to Memorize the Quran Online (Hifz): The Golden 3-Step Routine',
    description:
      'Discover the classical Islamic memorization formula: Sabaq (new lesson), Sabaqi (recent revision), and Manzil (cumulative retention) for online Hifz students.',
    date: 'August 15, 2026',
    readTime: '7 min read',
    category: 'Hifz-ul-Quran',
    author: 'Qari Sadiq Naeem',
    content: [
      'Memorizing the Book of Allah is a sacred spiritual journey. With modern 1-on-1 online classes, students across the world can now complete their Hifz from home under structured guidance.',
      '### Step 1: Sabaq (The Daily New Target)',
      'The student memorizes half a page to one full page daily. Before memorizing, the student recites the verses to the teacher with flawless Tajweed to prevent memorizing mistakes.',
      '### Step 2: Sabaqi (Recent Sub-Quarter Revision)',
      'Every day, the student recites the most recent 5 to 10 pages previously memorized. This solidifies short-term memory into permanent retention.',
      '### Step 3: Manzil (Cumulative Lifetime Revision)',
      'A Hafiz must revise at least one full Juz (Para) every single day from previously completed portions. Without a strict Manzil cycle, memorized verses gradually fade.',
      '### Spiritual Discipline and Consistency',
      'Consistency is the secret to Hifz. Praying for Allah’s help, staying away from distractions, and maintaining a fixed daily class schedule ensure successful completion with lifelong retention.',
    ],
  },
];
