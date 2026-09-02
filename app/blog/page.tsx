import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { BLOG_POSTS } from '../../lib/constants/blog.data';
import { SITE_CONFIG } from '../../lib/config/site.config';

export const metadata: Metadata = {
  title: 'Quran Learning Blog & Guides | Qari Sadiq Naeem Online Quran Academy',
  description:
    'Helpful Islamic educational articles, Tajweed guides, Noorani Qaida tips for parents, and Hifz memorization routines from experienced Quran scholar Qari Sadiq Naeem.',
  keywords: [
    'Quran Learning Blog',
    'How to Learn Quran Online',
    'Tajweed Rules Guide',
    'Teach Kids Noorani Qaida',
    'Hifz Quran Routine',
  ],
};

export default function BlogIndexPage() {
  return (
    <main className="main-wrapper">
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Blog &amp; Articles</span>
          </div>
          <div className="eyebrow">
            <span>✦</span> QURANIC WISDOM &amp; LEARNING GUIDES
          </div>
          <h1>
            Articles &amp; <em>Learning Insights</em>
          </h1>
          <p className="page-lead">
            Practical advice, Tajweed tutorials, and parenting guides for raising Quran-loving children and excelling in recitation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div className="courses-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '28px' }}>
            {BLOG_POSTS.map((post) => (
              <article className="course-card" key={post.slug} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card-top">
                  <span className="card-tag">{post.category}</span>
                  <small style={{ color: 'var(--muted)', fontSize: '12px' }}>{post.readTime}</small>
                </div>
                <h3 className="course-title" style={{ fontSize: '20px', lineHeight: '1.35', marginTop: '10px' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="course-desc" style={{ fontSize: '14px', flexGrow: 1 }}>
                  {post.description}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--line)' }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>By {post.author}</span>
                  <Link href={`/blog/${post.slug}`} className="btn btn-ghost" style={{ padding: '6px 14px', fontSize: '13px' }}>
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
