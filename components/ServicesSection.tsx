import React from 'react';
import { Globe, Smartphone, Server, Palette, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Pengembangan Web',
      description: 'Website modern, responsif yang dibangun dengan React, Next.js, dan teknologi canggih.',
      features: ['Desain Responsif', 'Optimasi SEO', 'Kinerja Cepat', 'Framework Modern']
    },
    {
      icon: Smartphone,
      title: 'Pengembangan Aplikasi Mobile',
      description: 'Aplikasi mobile lintas platform menggunakan Flutter untuk platform iOS dan Android.',
      features: ['Lintas Platform', 'Kinerja Native', 'Siap untuk App Store', 'Framework Flutter']
    },
    {
      icon: Server,
      title: 'API/Backend Development',
      description: 'Sistem backend yang robust dan API untuk manajemen data yang lancar dan integrasi.',
      features: ['API RESTful', 'Desain Database', 'Integrasi Cloud', 'Arsitektur Skalabel']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Desain UI/UX yang berfokus pada pengalaman digital yang intuitif dan menarik.',
      features: ['Penelitian Pengguna', 'Wireframing', 'Prototyping', 'Sistem Desain']
    },
    {
      icon: MessageSquare,
      title: 'Konsultasi Teknologi',
      description: 'Panduan teknologi strategis untuk membantu Anda membuat keputusan yang tepat untuk bisnis Anda.',
      features: ['Teknologi Stack', 'Perencanaan Arsitektur', 'Praktik Terbaik', 'Strategi Pertumbuhan']
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi digital yang sesuai dengan kebutuhan bisnis Anda, 
              dari konsep hingga deployment dan lebih jauh.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-inter text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Butuh solusi kustom? Kami akan senang membicarakan kebutuhan proyek Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all duration-300 hover:shadow-medium hover:scale-105">
                Dapatkan Penawaran Kustom
              </button>
              <button className="border border-primary/20 bg-background/50 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-soft">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;