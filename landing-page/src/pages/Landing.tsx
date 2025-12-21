import React from 'react';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ValueProps } from '@/components/ValueProps';
import { HowItWorks } from '@/components/HowItWorks';
import { MapTimeline } from '@/components/MapTimeline';
import { Showcase } from '@/components/Showcase';
import { DigitalPhysical } from '@/components/DigitalPhysical';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <MapTimeline />
        <Showcase />
        <DigitalPhysical />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;