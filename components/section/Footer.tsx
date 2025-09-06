import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="font-inter text-2xl font-bold mb-2">Sohib Teknologi</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Solusi Digital Andal untuk Bisnis Modern. Didirikan pada tahun 2025,
                kami membuat website, aplikasi mobile, dan solusi khusus yang mendorong pertumbuhan.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Mobile App Development</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">API/Backend Development</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Tech Consultation</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Portfolio</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Testimonials</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a href="mailto:hello@sohibcoding.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    sohibcoding@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <a href="tel:+15551234567" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    +62 81281680004
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <span className="text-primary-foreground/80 text-sm">Sungailiat, Bangka Belitung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Sohib Coding. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;