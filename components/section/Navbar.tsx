// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";

const sections = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  // { name: "Pricing", href: "#pricing" },
  // { name: "Testimonials", href: "#testimonials" },
  // { name: "FAQ", href: "#faq" },
];

const Navbar = () => (
  <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="text-2xl font-bold text-primary tracking-tight">
        Sohib Teknologi
      </div>
      <div className="flex items-center justify-center h-full">
        <ul className="hidden md:flex items-center gap-6 py-2">
          {sections.map((section) => (
            <li key={section.href}>
              <Link
                href={section.href}
                scroll={true}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {section.name}
              </Link>
            </li>
          ))}
          <Button variant="hero" size="sm" className="group">
            Hubungi Kami
            <MessageCircleMore className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
