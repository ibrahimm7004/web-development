import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, LayoutGrid, BookOpen } from 'lucide-react';

const showcaseItems = [
  {
    id: 1,
    title: 'Mediterranean Summer',
    subtitle: 'Santorini & Mykonos, Greece',
    pages: 42,
    photos: 156,
    beforeGrid: true,
  },
  {
    id: 2,
    title: 'Nordic Adventure',
    subtitle: 'Iceland & Norway',
    pages: 38,
    photos: 203,
    beforeGrid: false,
  },
  {
    id: 3,
    title: 'City of Lights',
    subtitle: 'Paris Weekend',
    pages: 28,
    photos: 89,
    beforeGrid: true,
  },
];

export const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const currentItem = showcaseItems[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-tt-ink mb-4">
            Sample Albums
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            See how TravelTales transforms chaotic photo collections into beautifully curated stories.
          </p>

          {/* Before/After Toggle */}
          <div className="inline-flex items-center bg-muted rounded-2xl p-2">
            <Button
              variant={showBefore ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setShowBefore(false)}
              className="rounded-xl"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Curated Layout
            </Button>
            <Button
              variant={showBefore ? "ghost" : "secondary"}
              size="sm"
              onClick={() => setShowBefore(true)}
              className="rounded-xl"
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              Original Chaos
            </Button>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Carousel */}
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full shadow-medium hover:shadow-large"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="text-center">
                <h3 className="font-serif text-2xl font-bold text-tt-ink">
                  {currentItem.title}
                </h3>
                <p className="text-muted-foreground">{currentItem.subtitle}</p>
                <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-muted-foreground">
                  <span>{currentItem.pages} pages</span>
                  <span>•</span>
                  <span>{currentItem.photos} photos</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full shadow-medium hover:shadow-large"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Showcase Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${showBefore}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl shadow-large p-8 border"
              >
                {showBefore ? (
                  // Before: Chaotic Grid
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="font-serif text-lg font-semibold text-tt-ink mb-2">
                        Before: Raw Photo Dump
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {currentItem.photos} unorganized photos with duplicates, blurs, and no story
                      </p>
                    </div>
                    <div className="grid grid-cols-8 gap-2 opacity-75">
                      {[...Array(32)].map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-lg ${
                            i % 7 === 0 ? 'bg-red-200' : // blurry
                            i % 5 === 0 ? 'bg-gray-300' : // duplicate
                            'bg-gradient-to-br from-tt-accent-light to-tt-gold-light'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  // After: Curated Layout
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="font-serif text-lg font-semibold text-tt-ink mb-2">
                        After: Curated Story
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        AI-selected highlights arranged in beautiful, story-driven spreads
                      </p>
                    </div>
                    
                    {/* Sample spread layouts */}
                    <div className="space-y-4">
                      {/* Hero spread */}
                      <div className="grid grid-cols-3 gap-4 h-32">
                        <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl" />
                        <div className="bg-gradient-to-br from-purple-200 to-pink-300 rounded-xl col-span-2" />
                      </div>
                      
                      {/* Detail spread */}
                      <div className="grid grid-cols-4 gap-4 h-24">
                        <div className="bg-gradient-to-br from-orange-200 to-red-300 rounded-xl col-span-2" />
                        <div className="bg-gradient-to-br from-green-200 to-teal-300 rounded-xl" />
                        <div className="bg-gradient-to-br from-yellow-200 to-orange-300 rounded-xl" />
                      </div>
                      
                      {/* Closing spread */}
                      <div className="grid grid-cols-2 gap-4 h-28">
                        <div className="bg-gradient-to-br from-indigo-200 to-purple-300 rounded-xl" />
                        <div className="bg-gradient-to-br from-pink-200 to-rose-300 rounded-xl" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};