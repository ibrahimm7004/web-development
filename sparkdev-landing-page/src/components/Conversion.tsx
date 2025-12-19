import { Button } from '@/components/ui/button';
import { ExternalLink, Check } from 'lucide-react';

const UPWORK_URL = 'https://www.upwork.com/agencies/1753346646711488512/';

const promises = [
  'Clean build; fast delivery; clear communication.',
  'Conversion-first UX; performance-minded engineering.',
  "Support after launch; we don't vanish.",
];

const Conversion = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background pointer-events-none" />
      
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-radial from-spark-orange/20 via-spark-pink/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-8">
            Ready to{' '}
            <span className="text-gradient-spark">spark</span>{' '}
            your next build?
          </h2>

          {/* Promises */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Check className="w-5 h-5 text-spark-orange flex-shrink-0" />
                <span className="text-sm sm:text-base">{promise}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="spark" size="lg" asChild className="mb-4">
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Start Your Project on Upwork
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>

          {/* Micro note */}
          <p className="text-sm text-muted-foreground">
            We'll reply quickly and help you scope it cleanly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
