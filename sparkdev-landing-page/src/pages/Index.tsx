import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Conversion from '@/components/Conversion';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = 'SparkDev | Shopify & WordPress Development Agency';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SparkDev builds conversion-focused Shopify stores and WordPress sites. Fast delivery, clean code, revenue-focused results. Trusted by clients worldwide.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'SparkDev builds conversion-focused Shopify stores and WordPress sites. Fast delivery, clean code, revenue-focused results. Trusted by clients worldwide.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Conversion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
