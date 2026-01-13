"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import Image from "next/image";
import { Zoom, Bounce, Slide } from "react-awesome-reveal";

interface ClientLogo {
  id: number;
  name: string;
  type: "government" | "company" | "university";
  image?: string;
}

const allClients: ClientLogo[] = [
  { id: 1, name: "Desa Rias", type: "government", image: "/images/client/basel.png" },
  { id: 2, name: "Desa Pemali", type: "government", image: "/images/client/pemali.png" },
  { id: 3, name: "Badan Pusat Statistik", type: "government", image: "/images/client/bps.jpg" },
  { id: 4, name: "Bahrul Ulum Islamic Center", type: "government", image: "/images/client/pesantren.png" },
  { id: 5, name: "Rumah Seduh", type: "company", image: "/images/client/rslogo.jpg" },
  { id: 6, name: "Intactbase", type: "company", image: "/images/client/intactbase.png" },
  { id: 9, name: "Polman Babel", type: "university", image: "/images/client/polman.png" },
  { id: 10, name: "Universitas Sriwijaya", type: "university", image: "/images/client/unsli.png" },
];

interface ClientGridProps {
  clients: ClientLogo[];
}

const ClientGrid = ({ clients }: ClientGridProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {clients.map((client, index) => (
      <Zoom key={client.id} delay={index * 100}>
        <div className="relative bg-card rounded-lg shadow-soft transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105">
          <div className="aspect-square flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center p-4">
              {client.image ? (
                <Image
                  src={client.image}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              ) : (
                <LogoPlaceholder type={client.type} className="w-20 h-20" />
              )}
            </div>
          </div>
        </div>
      </Zoom>
    ))}
  </div>
);

const ClientShowcase = () => {
  return (
    <section id="client" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Slide direction="up" duration={800}>
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary mb-4">
                Mereka yang telah percaya kepada kami
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dipercaya oleh berbagai instansi, UMKM, dan perusahaan
              </p>
            </div>
          </Slide>

          {/* All Clients Grid */}
          <ClientGrid clients={allClients} />

          {/* More Button */}
          {/* <div className="text-center mt-16">
            <Bounce>
              <Button
                variant="hero"
                size="lg"
                className="bg-gradient-primary text-primary-foreground transition-all duration-300"
              >
                Lebih Banyak
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Bounce>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
