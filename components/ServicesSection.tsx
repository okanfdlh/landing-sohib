import React from 'react';
import { Globe, Smartphone, Server, Palette, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with React, Next.js, and cutting-edge technologies.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern Frameworks']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps using Flutter for iOS and Android platforms.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready', 'Flutter Framework']
    },
    {
      icon: Server,
      title: 'API/Backend Development',
      description: 'Robust backend systems and APIs for seamless data management and integration.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Scalable Architecture']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: MessageSquare,
      title: 'Tech Consultation',
      description: 'Strategic technology guidance to help you make informed decisions for your business.',
      features: ['Technology Stack', 'Architecture Planning', 'Best Practices', 'Growth Strategy']
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs, 
              from concept to deployment and beyond.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-inter text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Need a custom solution? We'd love to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 hover:shadow-medium hover:scale-105">
                Get Custom Quote
              </button>
              <button className="border border-primary/20 bg-background/50 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-soft">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;