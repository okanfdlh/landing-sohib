import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import Image from "next/image";

interface ClientLogo {
  id: number;
  name: string;
  type: "government" | "company" | "university";
  image?: string;
}

const allClients: ClientLogo[] = [
  { id: 1, name: "Desa Rias", type: "government" },
  { id: 2, name: "Desa Pemali", type: "government" },
  { id: 3, name: "Badan Pusat Statistik", type: "government",image: "/images/client/bps.jpg"  },
  { id: 4, name: "Bahrul Ulum Islamic Center", type: "government", image: "/images/client/pesantren.png" },
  { id: 5, name: "Rumah Seduh", type: "company", image: "/images/client/rslogo.jpg" },
  { id: 9, name: "Polman Babel", type: "university", image: "/images/client/polman.png" },
  { id: 10, name: "Universitas Sriwijaya", type: "university", image: "/images/client/unsli.png" },
];

interface ClientGridProps {
  clients: ClientLogo[];
}

const ClientGrid = ({ clients }: ClientGridProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {clients.map((client) => (
      <div
        key={client.id}
        className="relative bg-card rounded-lg shadow-soft transition-all duration-500 overflow-hidden animate-fade-in cursor-pointer animate-float"
      >
        <div className="aspect-square flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            {client.image ? (
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={100}
                className="object-contain w-full h-full animate-scale-slow"
              />
            ) : (
              <LogoPlaceholder
                type={client.type}
                className="w-20 h-20 animate-scale-slow"
              />
            )}
          </div>
        </div>
        <div className="absolute inset-0 to-transparent opacity-70 transition-opacity duration-300 rounded-lg" />
      </div>
    ))}
  </div>
);

const ClientShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary mb-4">
              Mereka yang telah percaya kepada kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dipercaya oleh berbagai instansi, UMKM, dan perusahaan
            </p>
          </div>

          {/* All Clients Grid */}
          <ClientGrid clients={allClients} />

          {/* More Button */}
          <div className="text-center mt-16 animate-fade-in-up">
            <Button
              variant="hero"
              size="lg"
              className="bg-gradient-primary text-primary-foreground transition-all duration-300 animate-float"
            >
              Lebih Banyak
              <ArrowRight className="w-4 h-4 animate-scale-slow" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
