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
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
    modern: true,
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-slot',
    ],
  },
  generateBuildId: async () => {
    return process.env.BUILD_ID || 'development'
  },
};

module.exports = nextConfig;
