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
  compiler: {
    styledComponents: true,
  },
  experimental: {
    optimizeCss: false,
    legacyBrowsers: true,
  },
};

module.exports = nextConfig;
