import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-tt-linen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl lg:text-6xl font-bold text-tt-ink leading-tight"
            >
              From chaos to{' '}
              <span className="text-primary relative">
                curated stories
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              AI turns thousands of messy trip photos into elegant, story-driven digital eBooks and linen-bound photobooks.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-tt-accent-light border border-tt-accent/20 rounded-2xl p-4 max-w-lg"
            >
              <p className="text-sm text-tt-accent font-medium">
                ✨ Create 3 albums free • Upgrade anytime for unlimited eBooks and print discounts
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" className="group">
                Start Free — 3 Albums Included
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="heroSecondary" size="xl" className="group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch 45s Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="bg-card shadow-large rounded-3xl p-8 border transform rotate-2"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-tt-accent-light to-tt-gold-light rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary-foreground rounded-sm" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Linen-bound Photobook</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-4 -right-4 bg-card shadow-medium rounded-2xl p-6 border transform -rotate-2"
              >
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 bg-gradient-to-br from-tt-gold-light to-tt-accent-light rounded-lg" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center font-medium">AI Curated</p>
              </motion.div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};