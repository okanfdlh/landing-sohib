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
    default: "Sohib Teknologi",
    template: "%s | Sohib Teknologi",
  },
  description:
    "Sohib Teknologi adalah penyedia jasa pembuatan website dan solusi digital untuk bisnis, UMKM, dan personal branding.",
  openGraph: {
    title: "Sohib Teknologi",
    description:
      "Jasa pembuatan website profesional untuk bisnis dan UMKM dengan teknologi modern.",
    url: "https://sohibtech.vercel.app",
    siteName: "Sohib Teknologi",
    type: "website",
    images: [
      {
        url: "https://sohibtech.vercel.app/og-image.png", // kalau belum ada, nanti saya bisa buatkan
        width: 1200,
        height: 630,
        alt: "Sohib Teknologi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohib Teknologi",
    description:
      "Layanan pembuatan website profesional untuk bisnis dan UMKM.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="y-kA3P26QnMT0JAtonL27UAyq0CPuJR9NvlCZNs-xWU" />
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

