import React from 'react';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-24 w-24 h-24 bg-primary-foreground rounded-full animate-bounce-gentle delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-foreground rounded-full animate-bounce-gentle delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Ready to build your
                <span className="block">next project?</span>
              </h2>
              <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Transform your ideas into reality with our reliable digital solutions. 
                Let's create something amazing together.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-large hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                Contact Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/20 transition-all duration-300 flex items-center gap-3">
                <Calendar className="h-5 w-5" />
                Schedule Free Consultation
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="pt-6 space-y-4">
              <p className="text-primary-foreground/80 text-sm">
                Prefer to reach out directly? We're available on:
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-primary-foreground font-medium">WhatsApp</div>
                    <div className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-primary-foreground font-medium">Email</div>
                    <div className="text-primary-foreground/80 text-sm">hello@sohibcoding.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-primary-foreground/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-sm">Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                  <span className="text-sm">No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-sm">Quick response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                  <span className="text-sm">100% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;