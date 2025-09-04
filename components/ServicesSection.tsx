import React from "react";
import {
  Globe,
  Smartphone,
  Server,
  Palette,
  MessageSquare,
} from "lucide-react";

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi digital yang sesuai dengan kebutuhan bisnis Anda, dari konsep
            hingga deployment dan lebih jauh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-tr from-primary to-primary flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-1"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-gray-600 mb-8 text-lg">
            Butuh solusi kustom? Kami akan senang membicarakan kebutuhan proyek
            Anda.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-primary text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:bg-primary transition-colors duration-300 transform hover:scale-105">
              Dapatkan Penawaran Kustom
            </button>
            <button className="border border-primary text-primary px-10 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
