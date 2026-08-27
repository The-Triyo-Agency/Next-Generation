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
    image: "/images/lookbook/accessories1.webp",
    imageStyle: "scale-100 md:scale-105",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "02",
    title: "CHAINS,\nRINGS &\nBRACELETS",
    description: "Layer-ready jewellery pieces designed to add subtle detail, texture and personality to contemporary outfits.",
    highlights: ["EASY LAYERING", "MODERN METAL DETAILS", "EVERYDAY ACCESSORY STYLE"],
    image: "/images/lookbook/accessories2.webp",
    imageStyle: "scale-100",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "03",
    title: "WATCHES",
    description: "A refined everyday timepiece that brings a polished and confident finish to both casual and elevated looks.",
    highlights: ["CLEAN TIMEPIECE DESIGN", "REFINED EVERYDAY STYLE", "VERSATILE OUTFIT PAIRING"],
    image: "/images/lookbook/accessories3.webp",
    imageStyle: "scale-[1.05]",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "04",
    title: "LEATHER\nBELTS",
    description: "Classic leather belts designed to complete modern outfits with a clean and understated finish.",
    highlights: ["CLASSIC LEATHER LOOK", "ADJUSTABLE FIT", "SMART EVERYDAY ESSENTIAL"],
    image: "/images/lookbook/accessories4.webp",
    imageStyle: "scale-100",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  },
  {
    id: "05",
    title: "WALLETS",
    description: "Compact everyday wallets combining practical storage with a clean, refined look.",
    highlights: ["COMPACT EVERYDAY DESIGN", "PRACTICAL CARD STORAGE", "REFINED FINISH"],
    image: "/images/lookbook/accessories5.webp",
    imageStyle: "scale-105",
    whatsappMsg: "Hi, I'm interested in men's accessories. Could you please share the currently available options and prices?"
  }
];

export default function AccessoriesLookbook() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAccessory = accessoriesData[activeIndex];

  const handleIndexChange = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setActiveIndex(newIndex);
  };

  const nextAccessory = () => {
    handleIndexChange((activeIndex + 1) % accessoriesData.length);
  };

  const prevAccessory = () => {
    handleIndexChange((activeIndex - 1 + accessoriesData.length) % accessoriesData.length);
  };

  // Swipe gesture handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.changedTouches[0].clientX;
    const distance = touchStart - currentTouch;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextAccessory();
    } else if (isRightSwipe) {
      prevAccessory();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextAccessory();
      if (e.key === "ArrowLeft") prevAccessory();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <main data-navbar-theme="light" className="min-h-screen bg-[#F7F5F0] pt-24 md:pt-32 lg:pt-36 xl:pt-44 pb-12 overflow-x-hidden lg:overflow-hidden flex flex-col">
      
      {/* Container */}
      <div className="max-w-[1700px] mx-auto w-full px-6 md:px-12 flex flex-col flex-1 relative">
        
        {/* Navigation / Counter */}
        <div className="flex items-center justify-end mb-8 z-20 relative w-full">
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
            <div key={activeAccessory.id} className="transition-opacity duration-300">
              
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
            <div 
              className="w-full flex-1 relative min-h-[400px] md:min-h-[500px] lg:min-h-0"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* The subtle visual treatment - a large typography watermark in background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.04]">
                <span className="text-[25vw] lg:text-[20vw] font-black tracking-tighter uppercase leading-none whitespace-nowrap">
                  NO {activeIndex + 1}
                </span>
              </div>
              
              {accessoriesData.map((accessory, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <div
                    key={accessory.id}
                    className={cn(
                      "absolute inset-2 md:inset-4 lg:inset-2 lg:-top-2 transition-opacity duration-300 ease-out",
                      isSelected ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={accessory.image}
                      alt={accessory.title.replace(/\n/g, ' ')}
                      fill
                      priority={idx === 0 || idx === 1}
                      className={cn("object-contain object-center drop-shadow-2xl", accessory.imageStyle)}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom: Horizontal Thumbnails */}
            <div className="w-full flex items-center lg:justify-center gap-2.5 lg:gap-3 overflow-x-auto pb-4 pt-2 no-scrollbar z-20 mt-1 lg:mt-2 px-6 lg:px-0">
              {accessoriesData.map((accessory, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={accessory.id}
                    onClick={() => handleIndexChange(idx)}
                    aria-label={`View ${accessory.title.replace(/\n/g, ' ')}`}
                    className={cn(
                      "relative w-16 h-24 sm:w-18 sm:h-26 lg:w-20 lg:h-28 xl:w-24 xl:h-32 flex-shrink-0 overflow-hidden transition-all duration-300 rounded-lg group border-2",
                      isActive ? "border-[#FF2400] scale-105 shadow-md lg:shadow-lg" : "border-transparent opacity-60 lg:opacity-50 hover:opacity-100 hover:scale-105"
                    )}
                  >
                    <Image
                      src={accessory.image}
                      alt={`Thumbnail of ${accessory.title.replace(/\n/g, ' ')}`}
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
