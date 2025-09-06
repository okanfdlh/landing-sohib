import React from 'react';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration with reactbits animation */}
      <div className="absolute inset-0 opacity-10">
        {/* Existing animated elements with improved animations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-24 w-24 h-24 bg-primary-foreground rounded-full animate-scale-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-foreground rounded-full animate-pulse"></div>
        
        {/* New reactbits animations - lightweight particles */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-primary-foreground/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-primary-foreground/20 rounded-full animate-scale-slow" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-primary-foreground/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-2/3 w-10 h-10 bg-primary-foreground/25 rounded-full animate-scale-slow" style={{ animationDelay: '1.2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Siap untuk membangun
                <span className="block">projek anda?</span>
              </h2>
              <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Ubah ide-ide Anda menjadi kenyataan dengan solusi digital kami yang andal.
                  Mari ciptakan sesuatu yang luar biasa bersama-sama.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-large hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                Hubungi kami
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="pt-6 space-y-4">
              <p className="text-primary-foreground/80 text-sm">
                Lebih suka menghubungi langsung? Kami tersedia di:
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-primary-foreground font-medium">WhatsApp</div>
                    <div className="text-primary-foreground/80 text-sm">+62 81281680004</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-primary-foreground font-medium">Email</div>
                    <div className="text-primary-foreground/80 text-sm">sohibcoding@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-primary-foreground/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-sm"> konsultasi gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-sm">Respon cepat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full"></div>
                  <span className="text-sm">100% kepuasan</span>
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