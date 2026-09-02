import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '../lib/config/site.config';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Learn Quran Online | Online Quran Academy - Qari Sadiq Naeem',
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Learn Quran Online',
    'Online Quran Academy',
    'Online Quran Classes',
    'Online Quran',
    'Quran Reading',
    'Online Quran Tutor',
    'Noorani Qaida for Kids Online',
    'Nazra Quran with Tajweed',
    'Online Hifz ul Quran',
    'Quran Classes for Ladies',
    'Quran Classes for Kids',
    'Online Quran Classes for Adults',
    'Learn Quran Online UAE',
    'Learn Quran Online UK',
    'Learn Quran Online USA',
    'Learn Quran Online Saudi Arabia',
    'Qari Sadiq Naeem',
  ],
  authors: [{ name: SITE_CONFIG.teacher.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: 'Learn Quran Online | Online Quran Academy - Qari Sadiq Naeem',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-quran-cinematic.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Live 1-on-1 Online Quran Classes`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/images/hero-quran-cinematic.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo_clean_v4.webp',
    apple: '/images/logo_clean_v4.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        inLanguage: 'en-US',
      },
      {
        '@type': 'EducationalOrganization',
        '@id': `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo_clean_v4.webp`,
        image: `${SITE_CONFIG.url}/images/hero-quran-cinematic.jpg`,
        telephone: `+${SITE_CONFIG.contact.whatsappNumber}`,
        email: SITE_CONFIG.contact.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Multan',
          addressCountry: 'PK',
        },
        founder: {
          '@type': 'Person',
          name: SITE_CONFIG.teacher.name,
          jobTitle: SITE_CONFIG.teacher.title,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          ratingCount: '168',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
