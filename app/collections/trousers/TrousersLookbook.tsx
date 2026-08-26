"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA ---
const trousersData = [
  {
    id: "01",
    title: "BAGGY JEANS",
    description: "Relaxed denim designed for a loose contemporary silhouette and effortless everyday styling.",
    highlights: ["Relaxed Silhouette", "Comfortable Denim", "Easy Everyday Style"],
    image: "/images/lookbook/trousers_baggy.png",
    whatsappMsg: "Hi, I'm interested in men's trousers and jeans. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "02",
    title: "CARGO PANTS",
    description: "Utility-inspired pants designed for a relaxed fit with practical details and modern streetwear appeal.",
    highlights: ["Functional Cargo Pockets", "Relaxed Fit", "Utility-Inspired Style"],
    image: "/images/lookbook/trousers_cargo.png",
    whatsappMsg: "Hi, I'm interested in men's trousers and jeans. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "03",
    title: "MOM FIT PANTS",
    description: "A comfortable everyday silhouette with a relaxed upper fit and clean casual structure.",
    highlights: ["Comfortable Fit", "Relaxed Silhouette", "Easy To Style"],
    image: "/images/lookbook/trousers_mom.png",
    whatsappMsg: "Hi, I'm interested in men's trousers and jeans. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "04",
    title: "STRAIGHT-FIT JEANS",
    description: "A timeless straight-leg silhouette designed for clean everyday outfits and versatile styling.",
    highlights: ["Classic Straight Fit", "Everyday Denim", "Versatile Style"],
    image: "/images/lookbook/pant4.png",
    whatsappMsg: "Hi, I'm interested in men's trousers and jeans. Could you please share the currently available styles, sizes, colours and prices?"
  },
  {
    id: "05",
    title: "KOREAN PANTS",
    description: "Minimal Korean-inspired trousers combining a relaxed silhouette with a refined contemporary look.",
    highlights: ["Relaxed Tailored Fit", "Clean Silhouette", "Modern Minimal Style"],
    image: "/images/lookbook/pant5.png",
    whatsappMsg: "Hi, I'm interested in men's trousers and jeans. Could you please share the currently available styles, sizes, colours and prices?"
  }
];

export default function TrousersLookbook() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const activeTrouser = trousersData[activeIndex];

  const handleIndexChange = (newIndex: number) => {
    if (newIndex === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setImageLoaded(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
    }, 300); // Wait for fade out
  };

  const nextTrouser = () => {
    handleIndexChange((activeIndex + 1) % trousersData.length);
  };

  const prevTrouser = () => {
    handleIndexChange((activeIndex - 1 + trousersData.length) % trousersData.length);
  };

  // Swipe gesture handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.changedTouches[0].clientX;
    const distance = touchStart - currentTouch;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextTrouser();
    } else if (isRightSwipe) {
      prevTrouser();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextTrouser();
      if (e.key === "ArrowLeft") prevTrouser();
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
    <main data-navbar-theme="light" className="min-h-screen bg-[#F7F5F0] pt-24 md:pt-32 lg:pt-36 xl:pt-44 pb-12 overflow-x-hidden lg:overflow-hidden flex flex-col">
      
      {/* Container */}
      <div className="max-w-[1700px] mx-auto w-full px-6 md:px-12 flex flex-col flex-1 relative">
        
        {/* Navigation / Counter */}
        <div className="flex items-center justify-end mb-8 z-20 relative w-full">
          <div className="flex items-center gap-4 text-[#111111] font-bold text-sm tracking-widest">
            <button onClick={prevTrouser} className="hover:text-[#FF2400] transition-colors w-10 h-10 flex items-center justify-center border border-[#111111]/10 rounded-full hover:border-[#FF2400]"><ArrowLeft className="w-4 h-4" /></button>
            <span className="min-w-[60px] text-center">{activeTrouser.id} <span className="text-[#111111]/30">/ 05</span></span>
            <button onClick={nextTrouser} className="hover:text-[#FF2400] transition-colors w-10 h-10 flex items-center justify-center border border-[#111111]/10 rounded-full hover:border-[#FF2400]"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
          
          {/* LEFT: Content */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center order-2 lg:order-1 lg:pr-12 pt-8 lg:pt-0 z-20">
            <div className={cn("transition-all duration-500", isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0")}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#FF2400] font-black text-sm tracking-[0.2em]">{activeTrouser.id}</span>
                <span className="w-12 h-[1px] bg-gradient-to-r from-[#FF2400] to-[#111111]/10"></span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[65px] xl:text-[80px] font-black tracking-tighter uppercase leading-[0.85] text-[#111111] mb-8">
                {activeTrouser.title.split(' ').map((word, i, arr) => (
                  <span key={i} className="block">
                    {i === arr.length - 1 ? <span className="text-[#FF2400]">{word}.</span> : word}
                  </span>
                ))}
              </h1>
              
              <p className="text-sm md:text-base font-medium leading-relaxed max-w-sm text-[#111111]/70 mb-10">
                {activeTrouser.description}
              </p>
              
              <ul className="flex flex-col gap-3 mb-12">
                {activeTrouser.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#111111]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2400]"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={generateWhatsAppLink(activeTrouser.whatsappMsg)}
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
            <div 
              className="w-full flex-1 relative min-h-[450px] md:min-h-[500px] lg:min-h-0"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* The subtle visual treatment - a large typography watermark in background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.04]">
                <span className="text-[25vw] lg:text-[20vw] font-black tracking-tighter uppercase leading-none whitespace-nowrap">
                  NO {activeIndex + 1}
                </span>
              </div>
              
              <div className={cn("absolute inset-2 md:inset-4 lg:inset-0 lg:-top-4 lg:-bottom-2 transition-all duration-700", isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100")}>
                <Image
                  src={activeTrouser.image}
                  alt={activeTrouser.title}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </div>
            </div>

            {/* Bottom: Horizontal Thumbnails */}
            <div className="w-full flex items-center lg:justify-center gap-2.5 lg:gap-3 overflow-x-auto pb-4 pt-2 no-scrollbar z-20 mt-1 lg:mt-2 px-6 lg:px-0">
              {trousersData.map((trouser, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={trouser.id}
                    onClick={() => handleIndexChange(idx)}
                    className={cn(
                      "relative w-16 h-24 sm:w-18 sm:h-26 lg:w-20 lg:h-28 xl:w-24 xl:h-32 flex-shrink-0 overflow-hidden transition-all duration-300 rounded-lg group border-2",
                      isActive ? "border-[#FF2400] scale-105 shadow-md lg:shadow-lg" : "border-transparent opacity-60 lg:opacity-50 hover:opacity-100 hover:scale-105"
                    )}
                  >
                    <Image
                      src={trouser.image}
                      alt={`Thumbnail of ${trouser.title}`}
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
