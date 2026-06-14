import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio_2026',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;