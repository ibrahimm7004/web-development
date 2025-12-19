import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SparkLogo from './SparkLogo';
import { ExternalLink } from 'lucide-react';

const UPWORK_URL = 'https://www.upwork.com/agencies/1753346646711488512/';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <SparkLogo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
          <span className="font-display font-bold text-xl text-foreground tracking-tight">
            SparkDev
          </span>
        </a>

        {/* CTA Button */}
        <Button
          variant="spark"
          size="default"
          asChild
        >
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
