"use client";

import React from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Instagram,
  Copy,
} from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { ToastAction } from "@/components/ui/toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "sohibcoding@gmail.com";
  const { toast } = useToast();

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Salin email ke clipboard
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: "📧 Email berhasil disalin",
        description: `${email} telah disalin ke clipboard Anda.`,
        action: <ToastAction altText="Tutup">Tutup</ToastAction>,
      });
    });

    // Buka mail client
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
    }, 300);
  };

  return (
    <footer className="bg-background text-primary">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <Fade cascade damping={0.3}>
                <Image
                  src="/images/sohib-logo.png"
                  alt="Sohib Teknologi Logo"
                  width={160}
                  height={48}
                  className="h-12 w-auto mb-2"
                />
              </Fade>

              <TypeAnimation
                sequence={[
                  "Solusi Digital Andal untuk Bisnis Modern.",
                  1500,
                  "Didirikan pada tahun 2025.",
                  1500,
                  "Kami membuat website, aplikasi mobile, dan solusi khusus.",
                  1500,
                ]}
                speed={50}
                wrapper="p"
                repeat={Infinity}
                className="text-primary/80 text-sm leading-relaxed"
              />
            </div>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/sohibcoding"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile App Development",
                "API/Backend Development",
                "UI/UX Design",
                "Tech Consultation",
              ].map((service, i) => (
                <Slide key={i} direction="up" triggerOnce cascade>
                  <li>
                    <a
                      href="#"
                      className="text-primary/80 hover:text-primary transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                </Slide>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Portfolio", "Testimonials", "Pricing", "FAQ"].map(
                (item, i) => (
                  <Fade key={i} cascade triggerOnce>
                    <li>
                      <a
                        href="#"
                        className="text-primary/80 hover:text-primary transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  </Fade>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a
                    href="#"
                    onClick={handleEmailClick}
                    className="text-primary/80 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {email}
                    <Copy className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary/80 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <span className="text-primary/80 text-sm">
                    Sungailiat, Bangka Belitung
                  </span>
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
            <div className="text-primary/80 text-sm">
              <TypeAnimation
                sequence={[
                  `© ${currentYear} Sohib Coding. All rights reserved.`,
                  3000,
                  "",
                ]}
                speed={70}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-primary/80 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary/80 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary/80 hover:text-primary transition-colors text-sm"
              >
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
