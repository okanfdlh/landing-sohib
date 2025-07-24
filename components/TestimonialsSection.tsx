import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'Sohib Coding delivered our e-commerce platform ahead of schedule with exceptional quality. Their attention to detail and modern approach helped us achieve a 150% increase in online sales.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Marcus Chen',
      company: 'FitLife App',
      role: 'Founder',
      content: 'Working with Sohib Coding on our mobile app was a fantastic experience. The Flutter app they built is smooth, fast, and our users love it. We reached 10k downloads in the first month!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Elena Rodriguez',
      company: 'Bella Vista Restaurant',
      role: 'Owner',
      content: 'The website and reservation system completely transformed how we handle bookings. Customer experience improved dramatically, and we reduced phone orders by 60%. Highly recommended!',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-20 h-20 bg-accent-green rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 bg-accent-yellow rounded-full animate-bounce-gentle delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about 
              working with Sohib Coding.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-accent-green-foreground" />
                </div>
                
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent-yellow text-accent-yellow" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Overall Rating */}
          <div className="text-center bg-muted/30 rounded-2xl p-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-accent-yellow text-accent-yellow" />
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5.0 / 5.0</div>
                <div className="text-muted-foreground">
                  Based on 10+ client reviews
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence shows in every project. We're proud to maintain 
                a perfect satisfaction rating from all our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;