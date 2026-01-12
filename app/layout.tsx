import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/section/Navbar";
import { Toaster } from "@/components/ui/toaster";
import FloatingContactButton from "@/components/FloatingContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sohibtech.vercel.app"),

  title: {
    default: "Sohib Teknologi | Jasa Pembuatan Website Sungailiat",
    template: "%s | Sohib Teknologi",
  },

  description:
    "Sohib Teknologi adalah perusahaan IT di Sungailiat yang menyediakan jasa pembuatan website profesional untuk UMKM, bisnis, dan personal branding. Melayani jasa pembuatan web Sungailiat, website UMKM, dan joki website terpercaya.",

  keywords: [
    "perusahaan IT Sungailiat",
    "jasa pembuatan web Sungailiat",
    "jasa pembuatan website Sungailiat",
    "jasa pembuatan web UMKM",
    "joki website Sungailiat",
    "web developer Sungailiat",
    "pembuatan website Bangka",
    "jasa website UMKM",
  ],

  openGraph: {
    title: "Sohib Teknologi | Jasa Pembuatan Website Sungailiat & UMKM",
    description:
      "Perusahaan IT Sungailiat yang fokus pada jasa pembuatan website UMKM, bisnis, dan joki website dengan desain modern dan SEO-friendly.",
    url: "https://sohibtech.vercel.app",
    siteName: "Sohib Teknologi",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://sohibtech.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sohib Teknologi - Jasa Pembuatan Website Sungailiat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sohib Teknologi | Jasa Website Sungailiat",
    description:
      "Jasa pembuatan website Sungailiat untuk UMKM dan bisnis. Desain modern, cepat, dan SEO-ready.",
    images: ["https://sohibtech.vercel.app/og-image.png"],
  },

  alternates: {
    canonical: "https://sohibtech.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
