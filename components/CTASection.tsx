"use client";

import React from "react";
import { MessageCircleMore } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import LiquidEther from "./LiquidEther";
import TextType from "./TextType";
import { Button } from "@/components/ui/button";

const whatsappNumber = "6281281680004";
const message = encodeURIComponent(
  "Halo 👋\n\n" +
  "Saya ingin berkonsultasi terkait pengembangan sistem.\n" +
  "Mohon informasi terkait layanan, alur pengerjaan, estimasi waktu, dan biaya.\n\n" +
  "Terima kasih 🙏"
);
const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-primary overflow-hidden flex items-center justify-center">
      {/* Liquid Background Animation */}
      <div className="absolute inset-0 z-0">
        <LiquidEther className="w-full h-full opacity-70" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="slide-in-left">
            <div className="space-y-10">
              {/* Main Headline */}
              <div className="space-y-6">
                <h2 className="font-inter text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  <TextType
                    text={["Siap Membangun"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    className="text-primary-foreground"
                  />
                  <span className="block text-transparent bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text">
                    <TextType
                      text={["Projek Anda?"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      initialDelay={1000}
                    />
                  </span>
                </h2>
                <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                  Ubah ide-ide Anda menjadi kenyataan dengan solusi digital kami
                  yang andal. Mari ciptakan sesuatu yang luar biasa bersama-sama.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="hero"
                  size="xl"
                  className="group shadow-lg hover:scale-105 transition-transform"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hubungi Kami
                  </a>
                  <MessageCircleMore className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
