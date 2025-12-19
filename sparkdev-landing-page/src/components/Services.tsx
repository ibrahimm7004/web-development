import ServiceCard from './ServiceCard';
import { ShoppingBag, Globe, Code2, Bot } from 'lucide-react';

const services = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: 'Shopify Development',
    tag: 'PRIMARY' as const,
    features: [
      'Custom Shopify theme builds (Online Store 2.0)',
      'Conversion-focused product pages and PDP optimizations',
      'Speed optimization (Core Web Vitals oriented)',
      'Custom sections, metafields, and dynamic content',
      'Shopify apps integration and checkout enhancements',
      'Post-launch support and iteration',
    ],
    bestFor: 'Brands ready to scale and sell more.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'WordPress Development',
    tag: 'PRIMARY' as const,
    features: [
      'Pixel-perfect, responsive WordPress builds',
      'Elementor & Gutenberg development flexibility',
      'Performance + security hardening',
      'SEO-friendly structure and clean content editing',
      'Integrations (forms, CRM, email, analytics)',
      'Ongoing maintenance without headaches',
    ],
    bestFor: 'Businesses that want control, speed, and polish.',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'React-Based Websites',
    tag: 'SECONDARY' as const,
    features: [
      'MERN stack (MongoDB, Express, React, Node)',
      'Supabase + Python backend solutions',
      'Modern UI systems, component-driven development',
      'Authentication, dashboards, admin panels',
      'API integrations and scalable architecture',
    ],
    bestFor: 'Teams building custom web applications.',
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Add-Ons',
    tag: 'SECONDARY' as const,
    features: [
      'Chatbots trained on your business content',
      'Voice agents for intake and support',
      'Automations (lead capture, support triage, CRM updates)',
      'Custom AI tools embedded into Shopify/WordPress/React',
    ],
    bestFor: 'Less manual work; faster responses; more conversions.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground">
            Focused expertise. Real results. Every project is built to perform.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
