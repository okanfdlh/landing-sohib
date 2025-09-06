"use client";
import React, { useEffect } from "react";
import HeroSection from "@/components/pages/hero/HeroSection";
import AboutSection from "@/components/pages/about/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ClientSection from "@/components/pages/client/ClientSection";
import Footer from "@/components/section/Footer";

const Index = () => {
  // Efek parallax saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Efek parallax untuk elemen dekoratif
      document.querySelectorAll('.parallax-bg').forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const yPos = -(scrollY * parseFloat(speed));
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-inter">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ClientSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
