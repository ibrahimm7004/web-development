import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const features = {
  free: [
    'Create up to 3 eBooks',
    'AI photo curation',
    'Basic timeline view',
    'Digital sharing',
    'Standard templates',
  ],
  plus: [
    'Unlimited eBooks',
    'Advanced AI curation',
    'Interactive map & timeline',
    'Priority support',
    'Premium templates',
    '20% off photobooks',
    'Collaboration features',
    'Custom branding',
  ],
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-tt-ink mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free with 3 albums. Upgrade when you're ready for unlimited storytelling.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full shadow-medium hover:shadow-large transition-all duration-300">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Free</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-tt-ink">€0</div>
                    <p className="text-muted-foreground">Perfect for trying TravelTales</p>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    3 Albums Included
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {features.free.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" size="lg">
                    Start Free
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    No credit card required
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plus Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full shadow-large border-2 border-primary/20 relative overflow-hidden">
                {/* Popular badge */}
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
                
                <CardHeader className="text-center pb-8 pt-12">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Crown className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Plus</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-tt-ink">€9</div>
                    <p className="text-muted-foreground">per month, billed annually</p>
                  </div>
                  <Badge variant="accent" className="mt-2">
                    Unlimited Albums
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {features.plus.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" className="w-full" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Upgrade to Plus
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Cancel anytime • 14-day free trial
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Print Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-bold text-tt-ink mb-2">
                    Print-on-Demand Photobooks
                  </h3>
                  <p className="text-muted-foreground">
                    Premium linen-bound books delivered to your door
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-20 mx-auto bg-gradient-to-b from-tt-gold-light to-tt-gold/20 rounded-lg border shadow-soft mb-4" />
                    <h4 className="font-serif font-semibold text-tt-ink mb-2">Standard</h4>
                    <div className="text-2xl font-bold text-primary mb-1">€30</div>
                    <p className="text-sm text-muted-foreground">20-40 pages</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-20 mx-auto bg-gradient-to-b from-primary/20 to-primary/10 rounded-lg border shadow-soft mb-4" />
                    <h4 className="font-serif font-semibold text-tt-ink mb-2">Premium</h4>
                    <div className="text-2xl font-bold text-primary mb-1">€40</div>
                    <p className="text-sm text-muted-foreground">40-60 pages</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-20 mx-auto bg-gradient-to-b from-accent/20 to-accent/10 rounded-lg border shadow-soft mb-4" />
                    <h4 className="font-serif font-semibold text-tt-ink mb-2">Deluxe</h4>
                    <div className="text-2xl font-bold text-primary mb-1">€50</div>
                    <p className="text-sm text-muted-foreground">60+ pages + slipcase</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Typical delivery: 7–10 days • Prices subject to change
                  </p>
                  <Button variant="accent">
                    View Print Samples
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};