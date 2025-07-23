import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nextjs-fullstack-evening.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://nextjs-fullstack-evening.vercel.app/product',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://nextjs-fullstack-evening.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nextjs-fullstack-evening.vercel.app/todos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://nextjs-fullstack-evening.vercel.app/users',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
     {
      url: 'https://nextjs-fullstack-evening.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
