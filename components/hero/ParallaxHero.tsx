"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { generateWhatsAppLink } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxHero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const mobileCharacterRef = useRef<HTMLDivElement>(null);
  const mobileGraphicRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("collections");
    if (element) {
      const navHeight = 100; // Offset for the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      if ((window as any).lenis && typeof (window as any).lenis.scrollTo === 'function') {
        (window as any).lenis.scrollTo(offsetPosition, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    
    // Expose lenis globally so Navbar and other components can trigger smooth scrolls
    (window as any).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();

    // Apply desktop parallax
    mm.add("(min-width: 768px)", () => {
      // Currently no active parallax animations on desktop
      // (Text and character are static as requested)
    });

    // Apply mobile cinematic depth parallax
    mm.add("(max-width: 767px)", () => {
      // Currently no active parallax animations on mobile
      // (Text and character are static as requested)
    });

    return () => {
      mm.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={container} id="hero" data-navbar-theme="light" className="relative w-full bg-[#F7F5F0] overflow-hidden selection:bg-[#FF2400] selection:text-[#F7F5F0]">

      {/* MOBILE HERO (< 768px) */}
      {/* 
        High-Fashion Inspiration Rebuild: 
        Strict 7-layer absolute coordinate system.
        Content hierarchy flows down the left side.
        Model right-biased, standing ON the dark ground plane.
      */}
      <div className="flex md:hidden flex-col w-full min-h-[max(100svh,620px)] relative z-20 overflow-hidden bg-[#F7F5F0]">
        
        {/* LAYER z-20: Left-to-Right Slanting Orange Graphic */}
        <div 
          ref={mobileGraphicRef} 
          className="absolute right-0 top-0 bottom-0 w-full max-w-[420px] z-20 pointer-events-none overflow-hidden"
        >
          <svg 
            viewBox="0 0 390 844" 
            preserveAspectRatio="xMaxYMid slice" 
            className="w-full h-full absolute right-0"
          >
            {/* The Solid 3-Legged X Shape (Top-Right, Bottom-Right, Bottom-Left) */}
            <polygon 
              points="
                240,385
                390,198
                390,278
                272,425
                350,523
                350,603
                240,465
                140,590
                140,510
                208,425
              " 
              fill="#FF2400" 
              opacity="0.95"
              style={{ mixBlendMode: 'multiply' }}
            />
            
            {/* 1px Editorial Construction Lines */}
            <g stroke="#FF2400" strokeWidth="1" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke">
              {/* Missing Top-Left Leg Outline */}
              <polygon points="240,385 208,425 140,340 140,260" />
              
              {/* Intersection Lines spanning the entire geometric X */}
              <line x1="140" y1="260" x2="350" y2="523" />
              <line x1="140" y1="340" x2="350" y2="603" />
              <line x1="140" y1="510" x2="390" y2="198" />
              <line x1="140" y1="590" x2="390" y2="278" />
              
              {/* Architectural Grid */}
              <line x1="0" y1="425" x2="390" y2="425" strokeDasharray="4 4" opacity="0.15" />
              <line x1="240" y1="0" x2="240" y2="844" strokeDasharray="4 4" opacity="0.15" />
            </g>
          </svg>
        </div>

        {/* LAYER z-30: Dark Ground Plane */}
        {/* Massive #111111 block anchored to absolute bottom, slanted top edge */}
        <div 
          className="absolute -bottom-[2px] left-0 w-full h-[22%] bg-[#111111] z-30 origin-bottom pointer-events-none"
          style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)' }}
        >
        </div>

        {/* LAYER z-60: Model (Foreground Element) */}
        {/* Anchored to right with max-width to prevent drifting on wider screens */}
        <div 
          ref={mobileCharacterRef}
          className="absolute bottom-[12%] right-[-5vw] w-[90vw] max-w-[400px] h-[75%] z-60 pointer-events-none"
        >
          <Image
            id="hero-image-mobile"
            src="/images/hero/hero1.png"
            alt="Next Generation Men's Fashion Model"
            fill
            className="object-contain object-right-bottom scale-[0.8]"
            priority
            sizes="(max-width: 768px) 90vw, 400px"
          />
          {/* Shadow explicitly at the intersection of shoes and ground plane */}
          <div className="absolute bottom-[2%] left-[30%] w-[45%] h-[12px] bg-[#000000]/70 blur-[8px] rounded-[100%] z-[-1]" />
        </div>

        {/* LAYER z-50: Content Overlay */}
        <div className="absolute inset-0 z-[50] flex flex-col px-6 pb-5 pointer-events-none">
          {/* Metadata + Headline */}
          {/* Using mt-32 (128px) to safely push below the fixed Navbar on all screens */}
          <div ref={mobileTextRef} className="flex flex-col mt-32">

            {/* The Text 'UNBOUND.' */}
            <h1 className="text-[clamp(50px,15vw,80px)] leading-[0.9] font-black text-[#111111] uppercase tracking-tighter mix-blend-normal z-[5]">
              UNBOUND<span className="text-[#FF2400]">.</span>
            </h1>
          </div>

          {/* Thin Horizontal Line Separator */}
          <div className="w-[40vw] h-[1px] bg-[#111111]/20 mt-5 mb-5" />

          {/* Description (directly below the line) */}
          <p className="text-[11px] sm:text-[12px] font-semibold leading-[1.6] text-[#111111]/85 max-w-[180px] pointer-events-auto">
            Men's fashion,<br />footwear & accessories<br /><span className="text-[#FF2400]">— Kumbakonam.</span>
          </p>

          {/* CTAs pushed into the black layer */}
          <div className="flex flex-col mt-auto mb-2">
            {/* CTA Row - Restored to parallel row, pushed safely underneath the sneaker's vertical position */}
            <div className="flex flex-row flex-wrap items-center gap-4 pointer-events-auto">
              <Link 
                href="/#collections" 
                onClick={handleExploreClick}
                className="bg-[#F7F5F0] text-[#111111] rounded-full px-8 py-3.5 font-bold text-[10px] sm:text-[11px] tracking-widest uppercase hover:bg-[#FF2400] hover:text-[#F7F5F0] transition-colors flex items-center justify-center min-w-[140px] shadow-lg shadow-black/40"
              >
                Explore →
              </Link>
              <Link 
                href={generateWhatsAppLink("Hi Next Generation!")} 
                className="text-[#FF2400] border border-[#FF2400] rounded-full px-6 py-3 font-bold text-[10px] sm:text-[11px] tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#FF2400]/10 transition-colors shadow-lg shadow-[#FF2400]/15"
              >
                WhatsApp <span className="font-black text-[13px]">↗</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* DESKTOP HERO (>= 768px) */}
      <div className="hidden md:flex relative w-full h-[100svh] min-h-[500px] max-h-[850px] lg:max-h-[900px] xl:max-h-[950px] flex-col justify-between">
        
        {/* LAYER 2: Typography Safe Zone */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full px-4 overflow-hidden">
          <h1 ref={textRef} className="text-[#111111] font-black tracking-tighter uppercase leading-[0.85] w-full max-w-[1600px] flex flex-col justify-center">
            
            {/* Desktop / Tablet Typography */}
            <div className="flex flex-col justify-center items-center h-full w-full relative">
              {/* Added a slight negative margin-left on the text block to offset the 'O' from the dead center of the model */}
              <span className="text-[min(17vw,280px)] text-center ml-[-2vw]">
                UNBOUND<span className="text-[#FF2400]">.</span>
              </span>
            </div>
            
          </h1>
        </div>

        {/* LAYER 3: Character (Z-20) */}
        <div 
          ref={characterRef}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 
          w-[60vw] lg:w-[45vw] xl:w-[40vw] max-w-[700px] 
          h-[80%] min-h-[400px] lg:h-[85%] lg:min-h-[500px] pointer-events-none"
        >
          <Image 
            id="hero-image-desktop"
            src="/images/hero/hero1.png" 
            alt="Next Generation Men's Fashion Model" 
            fill
            loading="eager"
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] scale-[0.8]"
            sizes="(max-width: 1024px) 60vw, 40vw"
          />
        </div>

        {/* UI LAYER 4 & 5: Bottom Safe Zone (Support Copy & CTAs) */}
        <div className="relative z-50 flex items-end justify-between p-12 pb-12 pointer-events-none w-full h-full mt-auto">
          
          {/* Desktop Supporting Copy */}
          <div className="block max-w-[220px] pointer-events-auto">
            <p className="text-sm font-semibold leading-relaxed text-[#111111]/80">
              Men's fashion, footwear & accessories <br /><span className="text-[#FF2400]">— Kumbakonam.</span>
            </p>
          </div>

          {/* Desktop CTA */}
          <div className="flex pointer-events-auto">
            <Link 
              href="/#collections" 
              onClick={handleExploreClick}
              className="blob-btn px-9 py-4 rounded-xl font-bold text-xs tracking-widest uppercase text-[#FF2400] shadow-xl"
            >
              <span className="relative z-10">Explore Collections</span>
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

      </div>
    </div>
  );
}
