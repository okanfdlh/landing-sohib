import React from 'react';
import { Zap, Brush, Clock, Headphones, MessageCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const strengths = [
    {
      icon: Zap,
      title: 'Agile Workflow',
      description: 'We use proven agile methodologies to deliver projects efficiently with regular updates and flexibility for changes.',
      color: 'bg-accent-yellow/10 text-accent-yellow-foreground'
    },
    {
      icon: Brush,
      title: 'Modern Design',
      description: 'Our designs follow the latest trends and best practices, ensuring your product looks professional and contemporary.',
      color: 'bg-accent-green/10 text-accent-green-foreground'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and consistently deliver projects on time without compromising on quality or functionality.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Headphones,
      title: 'After-Launch Support',
      description: 'Our relationship doesn\'t end at launch. We provide ongoing support, maintenance, and updates as needed.',
      color: 'bg-accent-yellow/10 text-accent-yellow-foreground'
    },
    {
      icon: MessageCircle,
      title: 'Easy Communication',
      description: 'Clear, regular communication through your preferred channels. You\'ll always know the project status and next steps.',
      color: 'bg-accent-green/10 text-accent-green-foreground'
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-1/4 right-16 w-24 h-24 bg-accent-green rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent-yellow rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with a client-first approach to deliver 
              exceptional results that exceed expectations.
            </p>
          </div>
          
          {/* Strengths Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${strength.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <strength.icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-inter text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 bg-card rounded-2xl p-8 border shadow-soft animate-fade-in-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">24h</div>
                <div className="text-muted-foreground text-sm">Response Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">2025</div>
                <div className="text-muted-foreground text-sm">Year Founded</div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <h3 className="font-inter text-2xl font-semibold text-primary mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have transformed their business 
              with our reliable digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-large hover:scale-105 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-primary/20 bg-background/50 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-soft">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;