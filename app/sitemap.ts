import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '../lib/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const routes = ['', '/courses', '/about', '/contact', '/faq', '/privacy', '/terms'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/courses' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/courses' || route === '/contact' ? 0.9 : 0.7,
  }));
}
