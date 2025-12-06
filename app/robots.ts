import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'https';

    // Only allow indexing on the main production domain
    const isMainProduction = host === 'adylshayumayev.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: isMainProduction ? '/' : [],
            disallow: isMainProduction ? '/private/' : '/',
        },
        sitemap: `${protocol}://${host}/sitemap.xml`,
    };
}
