"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple landing pages take 5-7 days, standard websites 2-4 weeks, and custom applications 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, Node.js, and TypeScript for web development. For mobile apps, we use Flutter for cross-platform solutions. We also work with various databases, APIs, and cloud services to create comprehensive solutions.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely! All our projects include post-launch support ranging from 1-6 months depending on the plan. This includes bug fixes, minor updates, and technical assistance. We also offer extended maintenance packages for ongoing partnership.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically work with a 50% upfront payment to begin the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods including bank transfers, PayPal, and major credit cards.'
    },
    {
      question: 'Can you help with hosting and domain setup?',
      answer: 'Yes, we can assist with hosting recommendations, domain registration, and complete deployment setup. We work with reliable hosting providers and ensure your website or application is properly configured for optimal performance and security.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We've got answers. Here are the most common questions 
              we receive from our clients.
            </p>
          </div>
          
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border shadow-soft overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                >
                  <h3 className="font-inter text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Help */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="font-inter text-xl font-semibold text-primary mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're here to help! Don't hesitate to reach out if you need more information 
                about our services or have specific questions about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 hover:shadow-medium hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-primary/20 bg-background/50 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-soft">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;