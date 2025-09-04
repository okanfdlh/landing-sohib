import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "TechStore E-commerce",
      service: "Web Development",
      description:
        "Modern e-commerce platform with advanced product filtering, secure payments, and admin dashboard.",
      outcomes: "Increased sales by 150% and improved user engagement by 200%",
      imageUrl:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230816191453/gfglogo.png", // letakkan gambar di public/images/
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "FitTracker Mobile App",
      service: "Mobile App Development",
      description:
        "Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.",
      outcomes: "10k+ downloads within first month and 4.8/5 app store rating",
      imageUrl:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230816191453/gfglogo.png",
      tech: ["Flutter", "Firebase", "REST API", "Cloud Functions"],
    },
    {
      title: "InnovateCorp Website",
      service: "Web Development",
      description:
        "Professional corporate website with CMS integration, multi-language support, and SEO optimization.",
      outcomes: "Improved SEO ranking by 300% and lead generation by 180%",
      imageUrl:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230816191453/gfglogo.png",
      tech: ["Next.js", "Headless CMS", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Bella Vista Restaurant",
      service: "Web Development",
      description:
        "Restaurant website with online reservation system, menu management, and integrated ordering.",
      outcomes:
        "Reduced phone orders by 60% and increased online reservations by 250%",
      imageUrl:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230816191453/gfglogo.png",
      tech: ["React", "Express.js", "PostgreSQL", "Payment Gateway"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary mb-4">
            Portofolio Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi proyek terbaru kami dan lihat bagaimana kami membantu
            bisnis mencapai tujuan transformasi digital mereka.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 sm:h-64 md:h-72">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0} // Prioritaskan gambar pertama untuk loading cepat
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    aria-label={`Visit live site of ${project.title}`}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 text-gray-800" />
                  </a>
                  <a
                    href="#"
                    aria-label={`View GitHub repo of ${project.title}`}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 text-gray-800" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-primary transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-indigo-100 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                    {project.service}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-primary font-semibold mb-1">
                    Hasil Utama:
                  </h4>
                  <p className="text-gray-600 italic text-sm">
                    {project.outcomes}
                  </p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-2">
                    Teknologi:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 text-primary text-xs rounded-md select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16 max-w-xl mx-auto">
          <p className="text-gray-600 mb-6 text-lg">
            Ingin melihat lebih banyak karya kami atau mendiskusikan proyek
            Anda?
          </p>
          <button className="bg-primary text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:bg-primary transition-colors duration-300 transform hover:scale-105">
            Lihat Portofolio Lengkap
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
