// components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";

const sections = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#cta" },
];

const Navbar = () => (
  <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold text-primary tracking-tight">Sohib Coding</div>
      <ul className="hidden md:flex gap-6">
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
      </ul>
    </div>
  </nav>
);

export default Navbar;
