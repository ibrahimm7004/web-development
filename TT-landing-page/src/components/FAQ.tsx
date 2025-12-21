import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does TravelTales protect my photos and privacy?',
    answer: 'Your photos are encrypted and stored securely. We never share your images with third parties, and you maintain full ownership. You can delete your data at any time, and we comply with GDPR and other privacy regulations.',
  },
  {
    question: 'What\'s the typical delivery time for printed photobooks?',
    answer: 'Our linen-bound photobooks typically take 7-10 business days to print and deliver. We\'ll send you tracking information once your order ships. Rush delivery options are available for special occasions.',
  },
  {
    question: 'Do I own my photos and albums?',
    answer: 'Absolutely! You retain complete ownership of your photos and created albums. TravelTales simply provides the tools and AI to help you curate and present your memories beautifully.',
  },
  {
    question: 'How does the AI curation actually work?',
    answer: 'Our AI analyzes factors like image quality, composition, facial expressions, and uniqueness. As you swipe and rate photos, it learns your preferences to better select meaningful moments that tell your story.',
  },
  {
    question: 'Can I edit or customize the AI\'s selections?',
    answer: 'Yes! The AI provides a starting point, but you have full control. You can add, remove, or rearrange photos, adjust layouts, and customize text. Think of it as a smart assistant, not a replacement for your creativity.',
  },
  {
    question: 'What are the subscription limits for the free plan?',
    answer: 'The free plan includes 3 complete albums with all basic features. Each album can contain up to 70 photos. There\'s no time limit - your 3 albums are yours forever, even if you never upgrade.',
  },
  {
    question: 'Can I cancel my Plus subscription anytime?',
    answer: 'Yes, you can cancel anytime with no penalty. Your albums remain accessible, but you\'ll lose Plus features like unlimited albums and print discounts. We offer a 14-day free trial for new subscribers.',
  },
  {
    question: 'Do you offer refunds for printed photobooks?',
    answer: 'We stand behind our print quality. If you\'re not satisfied with your photobook, contact us within 30 days for a full refund or reprint. Manufacturing defects are replaced at no cost.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-tt-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about creating beautiful photo stories with TravelTales.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border shadow-soft px-6 py-2"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pr-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-card rounded-2xl p-8 shadow-soft border">
              <h3 className="font-serif text-xl font-semibold text-tt-ink mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                We're here to help! Reach out to our friendly support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Contact Support
                </a>
                <span className="text-muted-foreground hidden sm:block">•</span>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Live Chat
                </a>
                <span className="text-muted-foreground hidden sm:block">•</span>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Help Center
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};