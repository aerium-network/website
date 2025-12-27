import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js handles video assets by default
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
