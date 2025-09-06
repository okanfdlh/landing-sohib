import React from "react";
import {
  Globe,
  Smartphone,
  Server,
  Palette,
  MessageSquare,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Pengembangan Web",
      description:
        "Website modern, responsif yang dibangun dengan React, Next.js, dan teknologi canggih.",
      features: [
        "Desain Responsif",
        "Optimasi SEO",
        "Kinerja Cepat",
        "Framework Modern",
      ],
    },
    {
      icon: Smartphone,
      title: "Pengembangan Aplikasi Mobile",
      description:
        "Aplikasi mobile lintas platform menggunakan Flutter untuk platform iOS dan Android.",
      features: [
        "Lintas Platform",
        "Kinerja Native",
        "Siap untuk App Store",
        "Framework Flutter",
      ],
    },
    {
      icon: Server,
      title: "API/Backend Development",
      description:
        "Sistem backend yang robust dan API untuk manajemen data yang lancar dan integrasi.",
      features: [
        "API RESTful",
        "Desain Database",
        "Integrasi Cloud",
        "Arsitektur Skalabel",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Desain UI/UX yang berfokus pada pengalaman digital yang intuitif dan menarik.",
      features: [
        "Penelitian Pengguna",
        "Wireframing",
        "Prototyping",
        "Sistem Desain",
      ],
    },
    {
      icon: MessageSquare,
      title: "Konsultasi Teknologi",
      description:
        "Panduan teknologi strategis untuk membantu Anda membuat keputusan yang tepat untuk bisnis Anda.",
      features: [
        "Teknologi Stack",
        "Perencanaan Arsitektur",
        "Praktik Terbaik",
        "Strategi Pertumbuhan",
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Layanan Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menawarkan berbagai layanan pengembangan perangkat lunak untuk membantu
              bisnis Anda tumbuh dan berkembang di era digital.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="zoom-in" 
              delay={(index % 3) * 100}
            >
              <div className="bg-card rounded-xl p-8 border shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
