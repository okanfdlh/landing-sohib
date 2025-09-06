"use client";

import React from "react";
import AnimatedSection from "../../AnimatedSection";
import { Slide, Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative w-full h-[33vh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Background animation (reactbits style) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-indigo-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-indigo-500/20 rounded-full animate-scale-slow"></div>
        <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-indigo-300/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/2 w-10 h-10 bg-indigo-200/25 rounded-full animate-float"></div>
      </div>

      {/* Konten */}
      <AnimatedSection>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white flex flex-col items-center justify-center">
          {/* Judul dengan animasi slide-up */}
          <Slide direction="up" duration={800} delay={200}>
            <h2 className="text-4xl font-extrabold mb-2 inline-block relative">
              Tentang Kami
              <span className="block w-20 h-1 bg-indigo-400 rounded mt-2 mx-auto"></span>
            </h2>
          </Slide>

          {/* Paragraf dengan animasi fade-in */}
          <Fade delay={400} duration={1000} cascade damping={0.2}>
            <p className="text-md leading-relaxed tracking-wide max-w-3xl mx-auto">
              Kami adalah perusahaan yang berdedikasi untuk memberikan solusi
              terbaik di bidang teknologi aplikasi. Dengan pengalaman lebih dari 10
              tahun, kami berkomitmen untuk membantu klien mencapai tujuan bisnis
              mereka melalui inovasi dan layanan berkualitas tinggi.
            </p>
          </Fade>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutUs;
