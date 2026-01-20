"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import { Divide as Hamburger } from "hamburger-react";

const sections = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Client", href: "#client" },
];

const whatsappNumber = "6281281680004";

const message = encodeURIComponent(
  "Halo 👋\n\n" +
    "Saya ingin berkonsultasi terkait pengembangan sistem.\n" +
    "Mohon informasi terkait layanan, alur pengerjaan, estimasi waktu, dan biaya.\n\n" +
    "Terima kasih 🙏"
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/images/sohib-logo.png"
            alt="Sohib Teknologi Logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              scroll
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {section.name}
            </Link>
          ))}

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="sm" className="group">
              Hubungi Kami
              <MessageCircleMore className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white shadow-lg border-t border-border animate-fadeIn">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {sections.map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium hover:text-primary"
                >
                  {section.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="sm" className="w-full group">
                  Hubungi Kami
                  <MessageCircleMore className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
