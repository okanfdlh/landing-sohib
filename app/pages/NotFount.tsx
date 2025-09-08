import React from 'react';
import HeroSection from '@/components/pages/hero/HeroSection';
import AboutSection from '@/components/pages/about/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/section/Footer';

const Index = () => {
  return (
    <div className="font-inter">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
