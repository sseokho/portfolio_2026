import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: 'export',
    basePath: '/portfolio_2026',
    images: { unoptimized: true },
  }),
};

export default nextConfig;