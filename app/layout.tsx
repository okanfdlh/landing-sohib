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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sohibtech.vercel.app"
  ),

  title: {
    default: "Sohib Teknologi | Jasa Pembuatan Website Sungailiat",
    template: "%s | Sohib Teknologi",
  },

  description:
    "Sohib Teknologi adalah perusahaan IT Sungailiat yang menyediakan jasa pembuatan website profesional untuk UMKM, bisnis, dan personal branding. Melayani jasa pembuatan web Sungailiat dan joki website terpercaya.",

  openGraph: {
    title: "Sohib Teknologi | Jasa Pembuatan Website Sungailiat",
    description:
      "Perusahaan IT Sungailiat yang fokus pada jasa pembuatan website UMKM dan bisnis dengan desain modern dan SEO-friendly.",
    url: "https://sohibtech.vercel.app",
    siteName: "Sohib Teknologi",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://sohibtech.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sohib Teknologi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sohib Teknologi | Jasa Website Sungailiat",
    description:
      "Jasa pembuatan website Sungailiat untuk UMKM dan bisnis.",
    images: ["https://sohibtech.vercel.app/og-image.png"],
  },

  alternates: {
    canonical: "https://sohibtech.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta
          name="google-site-verification"
          content="y-kA3P26QnMT0JAtonL27UAyq0CPuJR9NvlCZNs-xWU"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <FloatingContactButton />
      </body>
    </html>
  );
}
