"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { ChevronRight, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA ---
const shirtsData = [
  {
    id: "01",
    title: "ESSENTIAL PLAIN SHIRT",
    description: "A clean everyday essential designed for effortless styling. Comfortable, versatile and easy to wear from casual days to elevated looks.",
    highlights: ["Clean Everyday Fit", "Comfortable Fabric", "Easy To Style"],
    image: "/images/lookbook/shirt1.png",
    whatsappMsg: "Hi, I'm interested in men's shirts. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "02",
    title: "SIGNATURE STRIPED SHIRT",
    description: "Classic stripes with a modern relaxed feel. Designed to bring an effortless smart-casual edge to everyday dressing.",
    highlights: ["Modern Stripe Detail", "Relaxed Comfort", "Smart-Casual Style"],
    image: "/images/lookbook/shirt2.png",
    whatsappMsg: "Hi, I'm interested in men's shirts. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "03",
    title: "EVERYDAY DENIM SHIRT",
    description: "A timeless denim layer built for everyday versatility. Easy to pair, easy to wear and made for effortless street-ready looks.",
    highlights: ["Durable Denim", "Versatile Layer", "Everyday Style"],
    image: "/images/lookbook/shirt3.png",
    whatsappMsg: "Hi, I'm interested in men's shirts. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "04",
    title: "PREMIUM LINEN SHIRT",
    description: "Light, breathable and refined. A relaxed linen essential made for warm days and effortless everyday style.",
    highlights: ["Breathable Fabric", "Lightweight Feel", "Relaxed Fit"],
    image: "/images/lookbook/shirt4.png",
    whatsappMsg: "Hi, I'm interested in men's shirts. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "05",
    title: "STATEMENT PRINTED SHIRT",
    description: "Bold prints designed to make everyday dressing stand out. A confident statement piece for modern casual style.",
    highlights: ["Statement Print", "Relaxed Silhouette", "Standout Style"],
    image: "/images/lookbook/shirt5.png",
    whatsappMsg: "Hi, I'm interested in men's shirts. Could you please share the currently available styles, sizes, colours and prices?"
  }
];

export default function ShirtsLookbook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const activeShirt = shirtsData[activeIndex];

  const handleIndexChange = (newIndex: number) => {
    if (newIndex === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
    }, 300); // Wait for fade out
  };

  const nextShirt = () => {
    handleIndexChange((activeIndex + 1) % shirtsData.length);
  };

  const prevShirt = () => {
    handleIndexChange((activeIndex - 1 + shirtsData.length) % shirtsData.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextShirt();
      if (e.key === "ArrowLeft") prevShirt();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, isTransitioning]);

  useEffect(() => {
    if (imageLoaded) {
      setIsTransitioning(false);
    }
  }, [imageLoaded]);

  return (
    <main data-navbar-theme="light" className="min-h-screen bg-[#F7F5F0] pt-24 md:pt-32 lg:pt-36 xl:pt-44 pb-12 overflow-hidden flex flex-col">
      
      {/* Container */}
      <div className="max-w-[1700px] mx-auto w-full px-6 md:px-12 flex flex-col flex-1 relative">
        
        {/* Navigation / Counter */}
        <div className="flex items-center justify-between mb-8 z-20 relative w-full">
          {/* Back to Collections */}
          <Link href="/#collections" className="flex items-center gap-2 text-[#111111]/60 hover:text-[#FF2400] transition-colors text-xs font-bold tracking-widest uppercase group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="hidden sm:inline">Collections</span>
          </Link>
          <div className="flex items-center gap-4 text-[#111111] font-bold text-sm tracking-widest">
            <button onClick={prevShirt} className="hover:text-[#FF2400] transition-colors w-10 h-10 flex items-center justify-center border border-[#111111]/10 rounded-full hover:border-[#FF2400]"><ArrowLeft className="w-4 h-4" /></button>
            <span className="min-w-[60px] text-center">{activeShirt.id} <span className="text-[#111111]/30">/ 05</span></span>
            <button onClick={nextShirt} className="hover:text-[#FF2400] transition-colors w-10 h-10 flex items-center justify-center border border-[#111111]/10 rounded-full hover:border-[#FF2400]"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
          
          {/* LEFT: Content */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1 lg:pr-12 pt-8 lg:pt-0 z-20">
            <div className={cn("transition-all duration-500", isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0")}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#FF2400] font-black text-sm tracking-[0.2em]">{activeShirt.id}</span>
                <span className="w-12 h-[1px] bg-gradient-to-r from-[#FF2400] to-[#111111]/10"></span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[65px] xl:text-[80px] font-black tracking-tighter uppercase leading-[0.85] text-[#111111] mb-8">
                {activeShirt.title.split(' ').map((word, i, arr) => (
                  <span key={i} className="block">
                    {i === arr.length - 1 ? <span className="text-[#FF2400]">{word}.</span> : word}
                  </span>
                ))}
              </h1>
              
              <p className="text-sm md:text-base font-medium leading-relaxed max-w-sm text-[#111111]/70 mb-10">
                {activeShirt.description}
              </p>
              
              <ul className="flex flex-col gap-3 mb-12">
                {activeShirt.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#111111]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2400]"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={generateWhatsAppLink(activeShirt.whatsappMsg)}
                target="_blank"
                className="blob-btn inline-block whitespace-nowrap px-8 lg:px-10 py-4 rounded-xl font-bold text-xs tracking-widest uppercase text-[#FF2400] text-center shadow-xl shadow-black/10 w-fit"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  <span>Enquire on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Image & Horizontal Thumbnails */}
          <div className="w-full lg:w-[60%] flex flex-col relative order-1 lg:order-2">
            
            {/* Top: Active Image Stage */}
            <div className="w-full flex-1 relative min-h-[500px] md:min-h-[600px] lg:min-h-0">
              {/* The subtle visual treatment - a large typography watermark in background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.04]">
                <span className="text-[25vw] lg:text-[20vw] font-black tracking-tighter uppercase leading-none whitespace-nowrap">
                  NO {activeIndex + 1}
                </span>
              </div>
              
              <div className={cn("absolute inset-0 w-full h-full transition-all duration-700", isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100")}>
                <Image
                  src={activeShirt.image}
                  alt={activeShirt.title}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </div>
            </div>

            {/* Bottom: Horizontal Thumbnails */}
            <div className="w-full flex items-center lg:justify-center gap-3 lg:gap-4 overflow-x-auto pb-6 pt-4 no-scrollbar z-20 mt-2 lg:mt-4 px-6 lg:px-0">
              {shirtsData.map((shirt, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={shirt.id}
                    onClick={() => handleIndexChange(idx)}
                    className={cn(
                      "relative w-20 h-28 lg:w-24 lg:h-32 xl:w-28 xl:h-36 flex-shrink-0 overflow-hidden transition-all duration-300 rounded-lg group border-2",
                      isActive ? "border-[#FF2400] scale-105 shadow-md lg:shadow-lg" : "border-transparent opacity-60 lg:opacity-50 hover:opacity-100 hover:scale-105"
                    )}
                  >
                    <Image
                      src={shirt.image}
                      alt={`Thumbnail of ${shirt.title}`}
                      fill
                      className="object-cover object-top bg-[#111111]/5"
                      sizes="(max-width: 1024px) 100px, 150px"
                    />
                    <div className={cn("absolute inset-0 bg-black/20 transition-opacity hidden lg:block", isActive ? "opacity-0" : "group-hover:opacity-10")} />
                  </button>
                );
              })}
            </div>
            
          </div>
          
        </div>

      </div>
    </main>
  );
}
