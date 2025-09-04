import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden mt-6">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full animate-bounce-gentle" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent-green rounded-full animate-bounce-gentle delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent-yellow rounded-full animate-bounce-gentle delay-500" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="font-inter text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
                Solusi Digital
                <span className="block text-transparent bg-gradient-primary bg-clip-text">
                  Untuk Bisnis Modern
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl font-inter">
                Ubah ide Anda menjadi pengalaman digital yang kuat. Kami membuat
                situs web modern, aplikasi mobile, dan solusi khusus yang
                mendorong pertumbuhan dan kesuksesan.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button variant="hero" size="xl" className="group">
                Konsultasi Gratis
                <MessageCircleMore className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="font-inter">
                Produk Kami
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-image.jpg"
                alt="Hero"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </div>

            {/* Decorative Background Layer */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 scale-105 opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
