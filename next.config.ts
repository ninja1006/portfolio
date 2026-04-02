import type { NextConfig } from 'next';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const pagesBasePath =
  process.env.PAGES_BASE_PATH ??
  (isGitHubActions && repoName ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: process.env.NEXT_DIST_DIR || '.next',
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath || undefined,
  images: {
    unoptimized: true,
    qualities: [75, 80, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
