"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA ---
const accessoriesData = [
  {
    id: "01",
    title: "COOLERS",
    description: "Statement eyewear designed to add a sharp finishing touch to everyday streetwear and modern casual looks.",
    highlights: ["BOLD FRAME DESIGN", "EVERYDAY WEARABILITY", "EFFORTLESS STREET STYLE"],
    image: "/images/lookbook/accessories1.png",
    imageStyle: "scale-100 md:scale-105",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "02",
    title: "CHAINS,\nRINGS &\nBRACELETS",
    description: "Layer-ready jewellery pieces designed to add subtle detail, texture and personality to contemporary outfits.",
    highlights: ["EASY LAYERING", "MODERN METAL DETAILS", "EVERYDAY ACCESSORY STYLE"],
    image: "/images/lookbook/accessories2.png",
    imageStyle: "scale-100",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "03",
    title: "WATCHES",
    description: "A refined everyday timepiece that brings a polished and confident finish to both casual and elevated looks.",
    highlights: ["CLEAN TIMEPIECE DESIGN", "REFINED EVERYDAY STYLE", "VERSATILE OUTFIT PAIRING"],
    image: "/images/lookbook/accessories3.png",
    imageStyle: "scale-[1.05]",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "04",
    title: "LEATHER\nBELTS",
    description: "Classic leather belts designed to complete modern outfits with a clean and understated finish.",
    highlights: ["CLASSIC LEATHER LOOK", "ADJUSTABLE FIT", "SMART EVERYDAY ESSENTIAL"],
    image: "/images/lookbook/accessories4.png",
    imageStyle: "scale-100",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "05",
    title: "WALLETS",
    description: "Compact everyday wallets combining practical storage with a clean, refined look.",
    highlights: ["COMPACT EVERYDAY DESIGN", "PRACTICAL CARD STORAGE", "REFINED FINISH"],
    image: "/images/lookbook/accessories5.png",
    imageStyle: "scale-105",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  }
];

export default function AccessoriesLookbook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const activeAccessory = accessoriesData[activeIndex];

  const handleIndexChange = (newIndex: number) => {
    if (newIndex === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
    }, 300); // Wait for fade out
  };

  const nextAccessory = () => {
    handleIndexChange((activeIndex + 1) % accessoriesData.length);
  };

  const prevAccessory = () => {
    handleIndexChange((activeIndex - 1 + accessoriesData.length) % accessoriesData.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextAccessory();
      if (e.key === "ArrowLeft") prevAccessory();
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
            <button aria-label="Previous accessory" onClick={prevAccessory} className="hover:text-[#FF2400] transition-colors w-10 h-10 flex items-center justify-center border border-[#111111]/10 rounded-full hover:border-[#FF2400]"><ArrowLeft className="w-4 h-4" /></button>
            <span className="min-w-[60px] text-center">{activeAccessory.id} <span className="text-[#111111]/30">/ 05</span></span>
            <button aria-label="Next accessory" onClick={nextAccessory} className="hover:text-[#FF2400] transition-colors w-10 h-10 flex items-center justify-center border border-[#111111]/10 rounded-full hover:border-[#FF2400]"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
          
          {/* LEFT: Content */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1 lg:pr-12 pt-8 lg:pt-0 z-20">
            <div className={cn("transition-all duration-500", isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0")}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#FF2400] font-black text-sm tracking-[0.2em]">{activeAccessory.id}</span>
                <span className="w-12 h-[1px] bg-gradient-to-r from-[#FF2400] to-[#111111]/10"></span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[65px] xl:text-[80px] font-black tracking-tighter uppercase leading-[0.85] text-[#111111] mb-8">
                {activeAccessory.title.split('\n').map((line, i, arr) => (
                  <span key={i} className="block">
                    {i === arr.length - 1 ? <span className="text-[#FF2400]">{line}.</span> : line}
                  </span>
                ))}
              </h1>
              
              <p className="text-sm md:text-base font-medium leading-relaxed max-w-sm text-[#111111]/70 mb-10">
                {activeAccessory.description}
              </p>
              
              <ul className="flex flex-col gap-3 mb-12">
                {activeAccessory.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#111111]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2400]"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={generateWhatsAppLink(activeAccessory.whatsappMsg)}
                target="_blank"
                aria-label={`Enquire about ${activeAccessory.title.replace(/\n/g, ' ')} on WhatsApp`}
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
            <div className="w-full flex-1 relative min-h-[400px] md:min-h-[500px] lg:min-h-0 flex items-center justify-center">
              {/* The subtle visual treatment - a large typography watermark in background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.04]">
                <span className="text-[25vw] lg:text-[20vw] font-black tracking-tighter uppercase leading-none whitespace-nowrap">
                  NO {activeIndex + 1}
                </span>
              </div>
              
              <div className={cn("absolute inset-0 w-full h-full transition-all duration-700 flex items-center justify-center", isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100")}>
                {/* STAGE: Bulletproof strict container with hardcoded heights to absolutely guarantee the image cannot blow up */}
                <div className="relative w-full max-w-[280px] md:max-w-[400px] xl:max-w-[480px] h-[350px] md:h-[500px] xl:h-[550px] flex items-center justify-center">
                  <Image
                    src={activeAccessory.image}
                    alt={activeAccessory.title.replace(/\n/g, ' ')}
                    fill
                    priority
                    className={cn("object-contain drop-shadow-2xl transition-transform duration-700 ease-out", activeAccessory.imageStyle)}
                    sizes="(max-width: 768px) 280px, (max-width: 1280px) 400px, 480px"
                    onLoadingComplete={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>

            {/* Bottom: Horizontal Thumbnails */}
            <div className="w-full flex items-center lg:justify-center gap-3 lg:gap-4 overflow-x-auto pb-6 pt-4 no-scrollbar z-20 mt-2 lg:mt-4 px-6 lg:px-0">
              {accessoriesData.map((acc, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={acc.id}
                    onClick={() => handleIndexChange(idx)}
                    aria-label={`View ${acc.title.replace(/\n/g, ' ')}`}
                    className={cn(
                      "relative w-20 h-28 lg:w-24 lg:h-32 xl:w-28 xl:h-36 flex-shrink-0 overflow-hidden transition-all duration-300 rounded-lg group border-2",
                      isActive ? "border-[#FF2400] scale-105 shadow-md lg:shadow-lg" : "border-transparent opacity-60 lg:opacity-50 hover:opacity-100 hover:scale-105"
                    )}
                  >
                    <Image
                      src={acc.image}
                      alt={`Thumbnail of ${acc.title.replace(/\n/g, ' ')}`}
                      fill
                      className="object-cover object-center bg-[#111111]/5"
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
