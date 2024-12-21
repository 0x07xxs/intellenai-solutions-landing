'use client';

import dynamic from 'next/dynamic';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SkipToContent } from '@/components/shared/SkipToContent';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/hero/Hero';
import FAQ from '@/components/sections/FAQ';

// Dynamically import components
const About = dynamic(
  () => import('@/components/about/About').then(mod => mod.default),
  {
    loading: () => <div className="py-20 bg-[#0a192f]" />
  }
);

const Services = dynamic(
  () => import('@/components/services/Services').then(mod => mod.default),
  {
    loading: () => <div className="py-20 bg-[#0a192f]" />
  }
);

const WhyChooseUs = dynamic(
  () => import('@/components/why-choose-us/WhyChooseUs').then(mod => mod.default),
  {
    loading: () => <div className="py-20 bg-[#0a192f]" />
  }
);

const Contact = dynamic(
  () => import('@/components/contact/Contact').then(mod => mod.default),
  {
    loading: () => <div className="py-20 bg-[#0a192f]" />
  }
);

export default function Home() {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main className="min-h-screen bg-[#0a192f]" id="main" tabIndex={-1}>
        <section id="hero">
          <Hero />
        </section>
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        <AnimatedSection id="services">
          <Services />
        </AnimatedSection>
        <AnimatedSection id="why-choose-us">
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
        <AnimatedSection id="faq">
          <FAQ />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}