import { MetadataRoute } from 'next';
import { collections } from '@/data/collections';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextgenerationkumbakonam.com';
  
  const routes = [
    '',
    '/about',
    '/collections',
    '/store',
    '/contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const categoryRoutes = collections.map((category) => ({
    url: `${baseUrl}/collections/${category.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const subcategoryRoutes = collections.flatMap((category) => 
    category.subcategories.map((sub) => ({
      url: `${baseUrl}/collections/${category.slug}/${sub.slug}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  );

  return [...routes, ...categoryRoutes, ...subcategoryRoutes];
}
