// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";
import { Divide as Hamburger } from "hamburger-react";

const sections = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Client", href: "#client" },
  { name: "Test Page", href: "/test" },
];

const whatsappNumber = "6281281680004"; // format WA internasional

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="text-2xl font-bold text-primary tracking-tight">
          Sohib Teknologi
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              scroll={true}
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

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white shadow-lg border-t border-border animate-fadeIn">
          <ul className="flex flex-col items-start gap-4 px-6 py-6">
            {sections.map((section) => (
              <li key={section.href}>
                <Link
                  href={section.href}
                  scroll={true}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {section.name}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full flex justify-center group"
                >
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
