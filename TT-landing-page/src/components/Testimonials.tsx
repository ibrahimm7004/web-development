import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Travel Photographer',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    quote: 'TravelTales turned my 800+ Japan photos into the most beautiful story book. The AI really understood which moments mattered most.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Digital Nomad',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    quote: 'Finally, a way to share my adventures that doesn\'t overwhelm people with hundreds of photos. The curation is spot-on.',
  },
  {
    name: 'Emma Thompson',
    role: 'Family Traveler',
    avatar: '/api/placeholder/64/64',
    rating: 5,
    quote: 'Created photobooks for our whole extended family after our reunion trip. The physical books are stunning - exactly what we hoped for.',
  },
];

const logos = [
  { name: 'TechCrunch', width: 'w-32' },
  { name: 'Product Hunt', width: 'w-28' },
  { name: 'Travel + Leisure', width: 'w-36' },
  { name: 'Conde Nast', width: 'w-32' },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-tt-linen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-tt-ink mb-4">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of storytellers who've transformed their photo chaos into beautiful narratives.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-medium hover:shadow-large transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-tt-ink">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Proof - As Seen In */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-8 font-medium">
              As seen in
            </p>
            
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={`${logo.width} h-8 bg-gradient-to-r from-muted to-muted-foreground/30 rounded-lg flex items-center justify-center`}
                >
                  <span className="text-xs font-semibold text-muted-foreground/70">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Albums Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-sm text-muted-foreground">Photos Curated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};