import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoPlaceholder from "@/components/LogoPlaceholder";

interface ClientLogo {
  id: number;
  name: string;
  type: 'government' | 'company' | 'university';
}

const governmentClients: ClientLogo[] = [
  { id: 1, name: "Kementerian Dalam Negeri", type: 'government' },
  { id: 2, name: "Pemerintah Provinsi DKI Jakarta", type: 'government' },
  { id: 3, name: "Badan Pusat Statistik", type: 'government' },
  { id: 4, name: "Kementerian Komunikasi", type: 'government' },
];

const industryClients: ClientLogo[] = [
  { id: 5, name: "PT Timah Tbk", type: 'company' },
  { id: 6, name: "Cinema XXI", type: 'company' },
  { id: 7, name: "LTDO Cinema", type: 'company' },
  { id: 8, name: "Bank Mandiri", type: 'company' },
];

const universityClients: ClientLogo[] = [
  { id: 9, name: "Universitas Indonesia", type: 'university' },
  { id: 10, name: "Institut Teknologi Bandung", type: 'university' },
  { id: 11, name: "Universitas Gadjah Mada", type: 'university' },
  { id: 12, name: "Universitas Airlangga", type: 'university' },
];

interface ClientGridProps {
  clients: ClientLogo[];
}

const ClientGrid = ({ clients }: ClientGridProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {clients.map((client) => (
      <div
        key={client.id}
        className="group relative bg-client-logo-bg border border-client-logo-border rounded-lg p-8 hover:shadow-client-hover transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <div className="aspect-square flex items-center justify-center">
          <div className="w-20 h-20 flex items-center justify-center">
            <LogoPlaceholder type={client.type} className="w-20 h-20" />
          </div>
        </div>
        <div className="absolute inset-0 bg-client-logo-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
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
    <h3 className="text-xl font-semibold text-client-category text-center">
      {title}
    </h3>
    <ClientGrid clients={clients} />
  </div>
);

const ClientShowcase = () => {
  return (
    <section className="bg-client-section py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            Lebih Banyak
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;