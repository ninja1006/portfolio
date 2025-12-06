import { MetadataRoute } from 'next';
import { getBlogPosts } from './utils/getBlogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getBlogPosts();
    const baseUrl = 'https://adylshayumayev.vercel.app';

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogUrls,
    ];
}
