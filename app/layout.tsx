import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://intellenaisolutions.com'),
  title: 'AI Automation Solutions | Transform Your Business',
  description: 'Custom AI solutions designed to drive efficiency, scalability, and innovation. Transform your business with our expert AI automation services.',
  keywords: 'AI automation, business transformation, custom AI solutions, workflow automation',
  openGraph: {
    title: 'AI Automation Solutions | Transform Your Business',
    description: 'Custom AI solutions designed to drive efficiency, scalability, and innovation.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Intellenai Solutions - AI Automation Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Solutions | Transform Your Business',
    description: 'Custom AI solutions designed to drive efficiency, scalability, and innovation.',
    images: ['/og-image.jpg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a192f" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}