import React from 'react';
import { Target, Users, Rocket, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Tentang Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami adalah sebuah perusahaan yang bergerak di bidang teknologi informasi. 
                Kami memiliki pengalaman lebih dari 10 tahun dalam pengembangan perangkat lunak dan solusi teknologi.
            </p>
          </div>
          
          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h3 className="font-inter text-2xl font-semibold text-primary">Jalur Kami</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sejak didirikan pada awal 2025, Sohib Coding telah cepat menjadi mitra yang 
                  dipercaya untuk inovasi digital. Dengan lebih dari 10 proyek sukses 
                  completed, we've helped startups launch their first products and assisted 
                  established businesses modernize their digital presence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pendekatan kami menggabungkan teknologi canggih dengan solusi bisnis praktis, 
                  memastikan setiap proyek memberikan nilai nyata dan menghasilkan hasil yang dapat diukur.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent-green mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary">10+ Proyek Selesai</div>
                  <div className="text-sm text-muted-foreground">Dalam berbagai industri dan teknologi</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 animate-fade-in">
              <div className="bg-card p-6 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Misi Kami</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Membantu bisnis kecil dan startup digitalisasi dengan menyediakan 
                      solusi teknologi modern, skalabel, dan mudah digunakan.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent-green-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Visi Kami</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Menjadi mitra utama bagi bisnis yang mencari solusi digital yang 
                      handal, inovatif, dan mendorong pertumbuhan dan kesuksesan.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-accent-yellow-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Nilai Kami</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Kualitas, transparansi, dan kesuksesan klien menjadi dasar dari apa yang kami lakukan. 
                      Kami percaya pada hubungan jangka panjang, bukan hanya proyek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;