import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    // const baseUrl = 'https://yumayev.dev';
    const baseUrl = 'https://ioriito.dev';
    
    const locales = ['', '/en'];

    const routes = [''];

    return routes.flatMap(route =>
        locales.map(locale => ({
            url: `${baseUrl}${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        }))
    );
}
