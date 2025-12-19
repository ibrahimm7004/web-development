import { Button } from '@/components/ui/button';
import HeroBackground from './HeroBackground';
import { ArrowDown, ExternalLink } from 'lucide-react';

const UPWORK_URL = 'https://www.upwork.com/agencies/1753346646711488512/';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-spark-orange animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Trusted by clients worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            We Build Websites That{' '}
            <span className="text-gradient-spark">Convert</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Shopify & WordPress specialists delivering polished, high-performance stores and sites. 
            Fast builds. Clean code. Revenue-focused results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="spark" size="lg" asChild>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Start Your Project
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServices}>
              View Services
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
