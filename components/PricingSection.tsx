import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Mini',
      price: 'Starting at $499',
      duration: 'per project',
      description: 'Perfect for small businesses and startups needing a professional web presence.',
      features: [
        'Responsive Landing Page',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Mobile Optimization',
        '1 Month Support',
        'Fast Delivery (5-7 days)'
      ],
      buttonText: 'Get Started',
      popular: false,
      color: 'border-border'
    },
    {
      name: 'Standard',
      price: 'Starting at $1,299',
      duration: 'per project',
      description: 'Ideal for growing businesses requiring advanced features and custom functionality.',
      features: [
        'Multi-page Website/App',
        'Custom Design & Development',
        'CMS Integration',
        'Advanced SEO Optimization',
        'Analytics Setup',
        '3 Months Support',
        'API Integration',
        'Performance Optimization'
      ],
      buttonText: 'Choose Standard',
      popular: true,
      color: 'border-primary shadow-large'
    },
    {
      name: 'Custom',
      price: 'Custom Quote',
      duration: 'tailored to you',
      description: 'Enterprise-level solutions with full customization and ongoing partnership.',
      features: [
        'Complete Digital Solution',
        'Custom Architecture',
        'Third-party Integrations',
        'Advanced Security Features',
        'Scalable Infrastructure',
        '6+ Months Support',
        'Priority Support',
        'Ongoing Maintenance'
      ],
      buttonText: 'Request Quote',
      popular: false,
      color: 'border-accent-green'
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-20 w-24 h-24 bg-primary rounded-full"></div>
        <div className="absolute bottom-1/3 right-24 w-20 h-20 bg-accent-yellow rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Pricing Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that best fits 
              your project needs and budget.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-card rounded-xl border-2 ${plan.color} p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in relative ${
                  plan.popular ? 'scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <h3 className="font-inter text-2xl font-bold text-primary">{plan.name}</h3>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">{plan.duration}</div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-accent-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-accent-green-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-primary text-primary-foreground hover:shadow-large' 
                        : 'border border-primary/20 bg-background/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft'
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="bg-card rounded-xl p-8 border shadow-soft">
              <h3 className="font-inter text-xl font-semibold text-primary mb-4">
                Not sure which plan is right for you?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every project is unique. We'd be happy to discuss your specific needs 
                and create a custom solution that fits your budget and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent-green text-accent-green-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent-yellow hover:text-accent-yellow-foreground transition-all duration-300 hover:shadow-medium hover:scale-105">
                  Schedule Free Consultation
                </button>
                <button className="border border-primary/20 bg-background/50 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-soft">
                  View Portfolio
                </button>
              </div>
            </div>
            
            {/* Guarantee */}
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <span className="text-sm">30-day money-back guarantee</span>
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <span className="text-sm">Free revisions included</span>
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <span className="text-sm">Ongoing support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;