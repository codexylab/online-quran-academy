import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '../lib/config/site.config';
import { BLOG_POSTS } from '../lib/constants/blog.data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const coreRoutes = [
    { path: '', priority: 1.0, freq: 'weekly' as const },
    { path: '/courses', priority: 0.95, freq: 'weekly' as const },
    { path: '/learn-quran-online-uk', priority: 0.9, freq: 'weekly' as const },
    { path: '/learn-quran-online-uae', priority: 0.9, freq: 'weekly' as const },
    { path: '/learn-quran-online-usa', priority: 0.9, freq: 'weekly' as const },
    { path: '/quran-classes-for-kids', priority: 0.9, freq: 'weekly' as const },
    { path: '/quran-classes-for-ladies', priority: 0.9, freq: 'weekly' as const },
    { path: '/about', priority: 0.85, freq: 'monthly' as const },
    { path: '/contact', priority: 0.85, freq: 'monthly' as const },
    { path: '/faq', priority: 0.85, freq: 'monthly' as const },
    { path: '/blog', priority: 0.85, freq: 'weekly' as const },
    { path: '/privacy', priority: 0.5, freq: 'yearly' as const },
    { path: '/terms', priority: 0.5, freq: 'yearly' as const },
  ];

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...coreRoutes.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...blogRoutes,
  ];
}
