import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const timelineItems = [
  { year: '2023', location: 'Paris, France', photos: 247 },
  { year: '2023', location: 'Tokyo, Japan', photos: 189 },
  { year: '2024', location: 'Bali, Indonesia', photos: 156 },
  { year: '2024', location: 'Iceland', photos: 312 },
  { year: '2024', location: 'New York, USA', photos: 89 },
];

export const MapTimeline = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-tt-linen to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-tt-ink mb-4">
            Your stories, on a map and a timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every memory anchored to place and time, creating a beautiful narrative of your adventures.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform -translate-y-1/2" />
            
            {/* Timeline items */}
            <div className="flex justify-between items-center relative">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="flex flex-col items-center relative group"
                >
                  {/* Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-medium z-10 cursor-pointer group-hover:shadow-large transition-all duration-300"
                  />
                  
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    className={`mt-6 bg-card p-4 rounded-2xl shadow-soft border min-w-[160px] ${
                      index % 2 === 0 ? 'transform -translate-y-4' : 'transform translate-y-4'
                    } group-hover:shadow-medium group-hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground font-medium">{item.year}</span>
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-tt-ink mb-1">
                      {item.location}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.photos} photos
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 bg-card rounded-3xl p-8 shadow-medium border"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-tt-ink">
                Interactive Memory Map
              </h3>
            </div>
            
            <div className="aspect-[16/9] bg-gradient-to-br from-tt-accent-light via-background to-tt-gold-light rounded-2xl relative overflow-hidden">
              {/* Map pins animation */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                  className="absolute w-3 h-3 bg-primary rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                </motion.div>
              ))}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Travel memories across the globe
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Click any pin to explore that adventure
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};