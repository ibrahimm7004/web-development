import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageCircle, MapPin, BookOpen } from 'lucide-react';

const valueProps = [
  {
    icon: Brain,
    title: 'AI Curation',
    description: 'Removes duplicates and blurs, learns your taste through intelligent swiping.',
    color: 'from-blue-500/10 to-purple-500/10',
  },
  {
    icon: MessageCircle,
    title: 'Conversational Flow',
    description: 'Chat-guided building makes creating your perfect album effortless.',
    color: 'from-green-500/10 to-teal-500/10',
  },
  {
    icon: MapPin,
    title: 'Map & Timeline Library',
    description: 'Your memories anchored to place and time, creating rich storytelling context.',
    color: 'from-orange-500/10 to-red-500/10',
  },
  {
    icon: BookOpen,
    title: 'Digital & Physical',
    description: 'Shareable eBooks for everyone, collectible linen-bound books for keepsakes.',
    color: 'from-purple-500/10 to-pink-500/10',
  },
];

export const ValueProps = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-tt-ink mb-4">
            Why TravelTales?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn chaotic photo collections into beautifully curated stories with AI-powered intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {valueProps.map((prop, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full group cursor-pointer hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${prop.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <prop.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-tt-ink">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};