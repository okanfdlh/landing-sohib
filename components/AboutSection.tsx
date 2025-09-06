import React from "react";
import AnimatedSection from "./AnimatedSection";

const AboutUs = () => {
  return (
    <section
      className="relative w-full h-[33vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Konten */}
      <AnimatedSection animation="fade-in-up">
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white w-full">
          <h2 className="text-4xl font-extrabold mb-2 inline-block relative">
            Tentang Kami
            <span className="block w-20 h-1 bg-indigo-400 rounded mt-2 mx-auto"></span>
          </h2>
          <p className="text-md leading-relaxed tracking-wide max-w-3xl mx-auto">
            Kami adalah perusahaan yang berdedikasi untuk memberikan solusi
            terbaik di bidang teknologi aplikasi. Dengan pengalaman lebih dari 10
            tahun, kami berkomitmen untuk membantu klien mencapai tujuan bisnis
            mereka melalui inovasi dan layanan berkualitas tinggi.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutUs;
