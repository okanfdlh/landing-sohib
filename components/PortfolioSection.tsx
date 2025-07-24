import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
// import projectEcommerce from '../assets/project-ecommerce.jpg';
import projectMobile from '../assets/project-mobile.jpg';
// import projectCorporate from '../assets/project-corporate.jpg';
import projectRestaurant from '../assets/project-restaurant.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'TechStore E-commerce',
      service: 'Web Development',
      description: 'Modern e-commerce platform with advanced product filtering, secure payments, and admin dashboard.',
      outcomes: 'Increased sales by 150% and improved user engagement by 200%',
      // image: projectEcommerce,
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'FitTracker Mobile App',
      service: 'Mobile App Development',
      description: 'Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.',
      outcomes: '10k+ downloads within first month and 4.8/5 app store rating',
      // image: projectMobile,
      tech: ['Flutter', 'Firebase', 'REST API', 'Cloud Functions']
    },
    {
      title: 'InnovateCorp Website',
      service: 'Web Development',
      description: 'Professional corporate website with CMS integration, multi-language support, and SEO optimization.',
      outcomes: 'Improved SEO ranking by 300% and lead generation by 180%',
      // image: projectCorporate,
      tech: ['Next.js', 'Headless CMS', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Bella Vista Restaurant',
      service: 'Web Development',
      description: 'Restaurant website with online reservation system, menu management, and integrated ordering.',
      outcomes: 'Reduced phone orders by 60% and increased online reservations by 250%',
      // image: projectRestaurant,
      tech: ['React', 'Express.js', 'PostgreSQL', 'Payment Gateway']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-primary">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our recent projects and see how we've helped businesses 
              achieve their digital transformation goals.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    // src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </button>
                    <button className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
                      <Github className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-inter text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-accent-green/10 text-accent-green-foreground text-xs font-medium rounded-full">
                      {project.service}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-primary mb-1">Key Outcomes:</h4>
                      <p className="text-sm text-muted-foreground italic">
                        {project.outcomes}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More CTA */}
          <div className="text-center mt-12 animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Want to see more of our work or discuss your project?
            </p>
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-large hover:scale-105 transition-all duration-300">
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;