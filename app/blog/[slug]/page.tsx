import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import WhatsAppButton from '../../components/common/WhatsAppButton';
import { BLOG_POSTS } from '../../../lib/constants/blog.data';
import { SITE_CONFIG } from '../../../lib/config/site.config';
import { WhatsAppService } from '../../../lib/services/whatsapp.service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | ${SITE_CONFIG.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo_clean_v4.webp`,
      },
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  };

  const waUrl = WhatsAppService.getGeneralInquiryUrl();

  return (
    <main className="main-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />

      <section className="page-hero">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Blog</Link> <span>/</span> <span>{post.category}</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> {post.category.toUpperCase()} • {post.readTime}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>{post.title}</h1>
          <p className="page-lead">{post.description}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '13px', color: 'var(--gold)', marginTop: '12px' }}>
            <span>✍️ By {post.author}</span>
            <span>•</span>
            <span>📅 {post.date}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="article-body" style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--ink)' }}>
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h2 key={index} style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--green)', marginTop: '35px', marginBottom: '14px' }}>
                    {paragraph.replace('### ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} style={{ marginBottom: '20px' }}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="faq-cta-banner" style={{ marginTop: '50px' }}>
            <h3>Start Live 1-on-1 Quran Classes Today</h3>
            <p>Experience personalized learning with Qari Sadiq Naeem. Book your 100% free assessment session on Zoom.</p>
            <div className="faq-banner-actions">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa-direct">
                <span>💬</span> WhatsApp Direct Message
              </a>
              <Link href="/contact" className="btn btn-primary">
                <span>✦</span> Book Free Trial <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
