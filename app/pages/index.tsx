import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
// import WhyChooseUsSection from "@/components/WhyChooseUsSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import PricingSection from "@/components/PricingSection";
// import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ClientSection from "@/components/pages/client/ClientSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ClientSection />
      <PortfolioSection />
      {/* <WhyChooseUsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <FAQSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
