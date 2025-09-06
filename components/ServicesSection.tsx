"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight } from "lucide-react";
import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";

import { StaticImageData } from "next/image";

interface Service {
  title: string;
  image: string | StaticImageData;
}

const services: Service[] = [
  { title: "Konsultasi IT", image: "/images/itconsulting.png" },
  { title: "Pengembangan Software", image: "/images/software-development.jpg" },
  { title: "Integrasi Sistem", image: "/images/systemintegration.jpg" },
  { title: "Operasional & Pemeliharaan IT", image: "/images/it-operations.jpg" },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="flex flex-col items-center text-center mb-12 gap-6">
          <Slide direction="up" duration={800} delay={200}>
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Layanan Kami
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tingkatkan Bisnis Anda dengan Solusi IT yang Unggul
              </p>
            </div>
          </Slide>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 0.1}
              animation="zoom-in"
            >
              <Bounce duration={1000} delay={index * 200}>
                <motion.div
                  className="relative h-64 lg:h-72 rounded-2xl overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Service Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <h3 className="text-sm lg:text-base font-semibold text-gray-900 leading-tight text-primary">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </Bounce>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
