/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['localhost', 'intellenaisolutions.com'],
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;
