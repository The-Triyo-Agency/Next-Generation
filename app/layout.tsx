import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next Generation",
    default: "Next Generation | Men's fashion in Kumbakonam",
  },
  description: "Premium Gen-Z men's fashion showcase website for a physical clothing store in Kumbakonam, Tamil Nadu. Clothing, footwear and accessories.",
  alternates: {
    canonical: "https://nextgenerationkumbakonam.com", // Replace with real domain later
  },
  robots: {
    index: true,
    follow: true,
  }
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <head>
        {/* LocalBusiness Structured Data Preparation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Next Generation",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1st Floor, KRC Complex, Mutt St, Opp. to Shankara Mutt, Swaminatha Nagar, Anna Nagar",
                "addressLocality": "Kumbakonam",
                "addressRegion": "Tamil Nadu",
                "postalCode": "612001",
                "addressCountry": "IN"
              },
              "telephone": "+919677031312",
              "areaServed": "Kumbakonam"
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        {/* SVG Filter for Gooey Effects */}
        <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
        
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
