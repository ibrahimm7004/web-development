import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Heart, Sparkles, Eye } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload thousands of photos',
    description: 'Drag and drop all your trip photos, no matter how many.',
    step: '01',
  },
  {
    icon: Heart,
    title: 'Swipe to train taste',
    description: 'Simple swipes teach our AI what makes photos special to you.',
    step: '02',
  },
  {
    icon: Sparkles,
    title: 'AI selects highlights',
    description: 'Our algorithm curates 30-70 perfect photos into a narrative.',
    step: '03',
  },
  {
    icon: Eye,
    title: 'Preview & print',
    description: 'Review your beautiful eBook and order your linen-bound keepsake.',
    step: '04',
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-tt-linen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-tt-ink mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From chaos to curation in four simple steps.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative text-center group"
              >
                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.2, duration: 0.8 }}
                      className="h-full bg-primary origin-left"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-card rounded-2xl shadow-medium flex items-center justify-center group-hover:shadow-large group-hover:scale-105 transition-all duration-300">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-tt-ink">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-card rounded-2xl shadow-soft p-6 border">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                    className="h-full bg-primary"
                  />
                </div>
                <div className="w-3 h-3 bg-accent rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                Average processing time: 2-5 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};