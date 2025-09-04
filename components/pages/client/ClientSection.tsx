import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoPlaceholder from "@/components/LogoPlaceholder";
import Image from "next/image";

interface ClientLogo {
  id: number;
  name: string;
  type: 'government' | 'company' | 'university';
  image?: string;
}

const governmentClients: ClientLogo[] = [
  { id: 1, name: "Desa Rias", type: 'government' },
  { id: 2, name: "Desa Pemali", type: 'government' },
  { id: 3, name: "Badan Pusat Statistik", type: 'government' },
  { id: 4, name: "Kementerian Komunikasi", type: 'government' },
];

const industryClients: ClientLogo[] = [
  { id: 5, name: "Rumah Seduh", type: 'company', image: "/images/client/rslogo.jpg" },
  { id: 6, name: "Cinema XXI", type: 'company' },
  { id: 7, name: "LTDO Cinema", type: 'company' },
  { id: 8, name: "Bank Mandiri", type: 'company' },
];

const universityClients: ClientLogo[] = [
  { id: 9, name: "Polman Babel", type: 'university',image: "/images/client/polman.png"},
  { id: 10, name: "Universitas Sriwijaya", type: 'university',image: "/images/client/unsli.png" },
  // { id: 11, name: "Universitas Gadjah Mada", type: 'university' },
  // { id: 12, name: "Universitas Airlangga", type: 'university' },
];

interface ClientGridProps {
  clients: ClientLogo[];
}

const ClientGrid = ({ clients }: ClientGridProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
    {clients.map((client) => (
      <div
        key={client.id}
        className="group relative bg-card rounded-lg  transition-all duration-500 hover:-translate-y-1 cursor-pointer overflow-hidden animate-fade-in"
      >
        <div className="aspect-square flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            {client.image ? (
              <Image 
                src={client.image} 
                alt={client.name} 
                width={100}
                height={100} 
                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <LogoPlaceholder type={client.type} className="w-20 h-20" />
            )}
          </div>
        </div>
        {/* <div className="text-center mt-4 font-medium text-sm">{client.name}</div> */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>
    ))}
  </div>
);

interface ClientSectionProps {
  title: string;
  clients: ClientLogo[];
}

const ClientSection = ({ title, clients }: ClientSectionProps) => (
  <div className="space-y-6">
    <h3 className="font-inter text-xl font-semibold text-primary text-center">
      {title}
    </h3>
    <ClientGrid clients={clients} />
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
              Klien Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dipercaya oleh berbagai instansi dan perusahaan
            </p>
          </div>

          {/* Client Categories */}
          <div className="space-y-16">
            <ClientSection
              title="Instansi Pemerintah"
              clients={governmentClients}
            />
            
            <ClientSection
              title="Perusahaan & Industri"
              clients={industryClients}
            />
            
            <ClientSection
              title="Universitas"
              clients={universityClients}
            />
          </div>

          {/* More Button */}
          <div className="text-center mt-16 animate-fade-in-up">
            <Button variant="hero" size="lg" className="group bg-gradient-primary text-primary-foreground hover:shadow-large hover:scale-105 transition-all duration-300">
              Lebih Banyak
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;