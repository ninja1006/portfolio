import { MetadataRoute } from 'next';
import { getBlogPosts } from './utils/getBlogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getBlogPosts();
    const baseUrl = 'https://yumayev.dev';
    const locales = ['', '/en']; // '' represents default 'tr' at root

    const routes = [
        '',
        '/blog',
    ];

    const allRoutes = routes.flatMap(route =>
        locales.map(locale => ({
            url: `${baseUrl}${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: route === '' ? 'monthly' as const : 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        }))
    );

    const blogRoutes = posts.flatMap(post =>
        locales.map(locale => ({
            url: `${baseUrl}${locale}/blog/${post.slug}`,
            lastModified: new Date(post.publishedDate),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    );

    return [
        ...allRoutes,
        ...blogRoutes,
    ];
}
