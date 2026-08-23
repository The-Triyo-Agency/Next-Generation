import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
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
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
