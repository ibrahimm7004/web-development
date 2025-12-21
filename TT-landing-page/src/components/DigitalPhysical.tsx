import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Download, Truck, Gift, Smartphone, Book } from 'lucide-react';

export const DigitalPhysical = () => {
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
            Digital & Physical Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share instantly with digital eBooks, or create lasting keepsakes with premium linen-bound photobooks.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Digital eBooks */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full shadow-large border-2 border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Digital eBooks</CardTitle>
                  <p className="text-muted-foreground">Instant sharing, private libraries</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
                    <div className="aspect-[3/4] bg-card rounded-xl shadow-medium border flex items-center justify-center mb-4">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto" />
                        <p className="text-xs text-muted-foreground">Interactive eBook</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-serif font-semibold text-tt-ink mb-2">Your Personal Library</h4>
                      <p className="text-sm text-muted-foreground">Access anywhere, anytime</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Share2 className="w-5 h-5 text-primary" />
                      <span className="text-sm">Share with family & friends instantly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-primary" />
                      <span className="text-sm">Download for offline viewing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="accent" className="text-xs">Free Forever</Badge>
                      <span className="text-sm">No subscription required</span>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full">
                    Create Digital Album
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Physical Photobooks */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full shadow-large border-2 border-accent/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Book className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Linen-bound Photobooks</CardTitle>
                  <p className="text-muted-foreground">Premium keepsakes that last generations</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-br from-accent/5 to-tt-gold/5 rounded-2xl p-6">
                    <div className="flex justify-center space-x-2 mb-4">
                      {/* Book stack visualization */}
                      <div className="w-16 h-20 bg-accent/20 rounded-lg border shadow-medium transform rotate-2" />
                      <div className="w-16 h-20 bg-tt-gold/20 rounded-lg border shadow-medium transform -rotate-1" />
                      <div className="w-16 h-20 bg-accent/30 rounded-lg border shadow-medium" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-serif font-semibold text-tt-ink mb-2">Collection Box Set</h4>
                      <p className="text-sm text-muted-foreground">Build your travel library</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-5 h-5 text-accent" />
                      <span className="text-sm">Perfect for gifts & special occasions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-accent" />
                      <span className="text-sm">Delivery: 7–10 days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="price" className="text-xs">€30–50</Badge>
                      <span className="text-sm text-muted-foreground">per book</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button variant="accent" className="w-full">
                      Order Photobook
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      20% discount for Plus members
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Gift Bundles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-card rounded-3xl shadow-medium p-8 border">
              <h3 className="font-serif text-2xl font-bold text-tt-ink mb-4">
                Gift Bundles
              </h3>
              <p className="text-muted-foreground mb-6">
                Perfect for weddings, families, and travel groups
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { books: 3, price: '€80', discount: '10%' },
                  { books: 5, price: '€125', discount: '15%' },
                  { books: 10, price: '€220', discount: '25%' },
                ].map((bundle, index) => (
                  <div key={index} className="bg-muted/50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{bundle.books}</div>
                    <div className="text-sm text-muted-foreground mb-2">photobooks</div>
                    <div className="text-lg font-semibold text-tt-ink">{bundle.price}</div>
                    <Badge variant="accent" className="text-xs mt-2">
                      Save {bundle.discount}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};