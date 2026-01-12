import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import AnimatedSection from "../../AnimatedSection";
import LiquidEther from "../../LiquidEther";
import TextType from '../../TextType';

const whatsappNumber = "6281281680004";
const message = encodeURIComponent(
  "Halo 👋\n\n" +
  "Saya ingin berkonsultasi terkait pengembangan sistem.\n" +
  "Mohon informasi terkait layanan, alur pengerjaan, estimasi waktu, dan biaya.\n\n" +
  "Terima kasih 🙏"
);
const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden mt-6">
      {/* LiquidEther Background Animation */}
      <div className="absolute inset-0 z-0">
        <LiquidEther className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Content */}
        <AnimatedSection animation="slide-in-left">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-inter text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <TextType 
                    text={["Solusi Digital"]} 
                    typingSpeed={75} 
                    pauseDuration={1500} 
                    showCursor={false}
                    className="text-primary"
                  />
                  <span className="block text-transparent bg-gradient-primary bg-clip-text">
                    <TextType 
                      text={["Untuk Bisnis Modern"]} 
                      typingSpeed={75} 
                      pauseDuration={1500} 
                      showCursor={true} 
                      cursorCharacter="|" 
                      initialDelay={1000}
                    />
                  </span>
                </h1>
              <p className="text-lg lg:text-xl text-primary max-w-2xl font-inter mx-auto">
                Ubah ide Anda menjadi pengalaman digital yang kuat. Kami membuat
                situs web modern, aplikasi mobile, dan solusi khusus yang
                mendorong pertumbuhan dan kesuksesan.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button variant="hero" size="xl" className="group">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis
                </a>
                <MessageCircleMore className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="font-inter">
                Produk Kami
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

  );
};

export default HeroSection;
