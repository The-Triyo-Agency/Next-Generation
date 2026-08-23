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
  const textRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const mobileCharacterRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();

    // Apply desktop parallax
    mm.add("(min-width: 768px)", () => {
      gsap.to(textRef.current, {
        yPercent: 30, 
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Apply mobile cinematic depth parallax
    mm.add("(max-width: 767px)", () => {
      // Typography moves slightly slower (upward)
      gsap.to(mobileTextRef.current, {
        y: -25, 
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Character moves significantly faster (upward) to create depth and visibly cross typography
      gsap.to(mobileCharacterRef.current, {
        y: -110, 
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      mm.revert();
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={container} id="hero" data-navbar-theme="light" className="relative w-full bg-[#F7F5F0] overflow-hidden selection:bg-[#FF2400] selection:text-[#F7F5F0]">

      {/* MOBILE HERO (< 768px) */}
      <div className="flex md:hidden flex-col w-full min-h-[100svh] pt-[100px] pb-8 relative z-20 justify-between">
        
        {/* Mobile Headline Zone */}
        <div ref={mobileTextRef} className="px-5 w-full relative z-10 mb-0">
          <h1 className="font-black leading-[0.85] tracking-tighter text-[#111111] flex flex-col uppercase" style={{ fontSize: "clamp(2.2rem, 11.5vw, 4.5rem)" }}>
            <span>NEXT</span>
            <span>GENERATION<span className="text-[#FF2400]">.</span></span>
          </h1>
        </div>

        {/* Mobile Character Zone */}
        {/* Adjusted to 45-50% height with subtle ambient atmosphere and contact grounding shadow */}
        <div ref={mobileCharacterRef} className="relative w-[95vw] max-w-[440px] h-[50vh] min-h-[300px] max-h-[420px] self-end -mr-2 -mt-[3vh] z-20 pointer-events-none mb-4">
          
          {/* Extremely Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 top-[5%] left-[5%] w-[90%] h-[90%] bg-[radial-gradient(ellipse_at_center,_#FF2400_0%,_transparent_60%)] opacity-[0.05] blur-3xl z-[-1] rounded-full" />
          
          <Image 
            src="/images/hero/hero1.png" 
            alt="Next Generation Men's Fashion Model" 
            fill
            priority
            className="object-contain object-bottom"
            sizes="90vw"
          />
          
          {/* Grounding Contact Shadow */}
          <div className="absolute bottom-[1.5%] left-[25%] w-[50%] h-[12px] bg-black/15 blur-[8px] rounded-[100%] z-[-1]" />
        </div>

        {/* Mobile Content Zone (Description & CTAs) */}
        {/* Grouped cohesively as a single conversion block */}
        <div className="flex flex-col px-5 z-30 relative mt-auto w-full">
          <div className="flex flex-col gap-6 w-full">
            <p className="text-[12px] sm:text-[13px] font-semibold leading-relaxed text-[#111111]/85 max-w-[240px]">
              Men's fashion,<br />footwear & accessories<br /><span className="text-[#FF2400]">— Kumbakonam.</span>
            </p>
            
            <div className="flex flex-row items-center justify-between gap-3 w-full pointer-events-auto">
              <Link 
                href="/collections" 
                className="flex-1 text-center bg-[#111111] text-[#F7F5F0] border border-[#111111]/20 rounded-[8px] px-2 py-4 font-bold text-[10px] tracking-widest uppercase hover:bg-[#FF2400] hover:border-[#FF2400] transition-colors shadow-[0_8px_16px_rgba(0,0,0,0.08)] flex items-center justify-center min-h-[48px]"
              >
                Explore
              </Link>
              <Link 
                href={generateWhatsAppLink("Hi Next Generation!")} 
                className="blob-btn flex-1 text-center px-2 py-4 font-bold text-[10px] tracking-widest uppercase text-[#FF2400] shadow-[0_8px_16px_rgba(255,36,0,0.12)] flex items-center justify-center min-h-[48px]"
              >
                <span className="relative z-10">WhatsApp</span>
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

      {/* DESKTOP HERO (>= 768px) */}
      <div className="hidden md:flex relative w-full h-[100svh] min-h-[700px] flex-col justify-between">
        
        {/* LAYER 2: Typography Safe Zone */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full px-4 overflow-hidden">
          <h1 ref={textRef} className="text-[#111111] font-black tracking-tighter uppercase leading-[0.85] w-full max-w-[1600px] h-full flex flex-col justify-center">
            
            {/* Desktop / Tablet Typography */}
            <div className="flex flex-col justify-center h-full w-full relative">
              <span className="text-[min(14vw,230px)] self-start ml-[2vw]">NEXT</span>
              <span className="text-[min(11vw,180px)] self-end mr-[2vw] mt-2">GENERATION<span className="text-[#FF2400]">.</span></span>
            </div>
            
          </h1>
        </div>

        {/* LAYER 3: Character (Z-20) */}
        <div 
          ref={characterRef}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 
          w-[60vw] lg:w-[45vw] xl:w-[40vw] max-w-[700px] 
          h-[75vh] lg:h-[80vh] pointer-events-none"
        >
          <Image 
            src="/images/hero/hero1.png" 
            alt="Next Generation Men's Fashion Model" 
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
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
              href="/collections" 
              className="blob-btn px-9 py-4 font-bold text-xs tracking-widest uppercase text-[#FF2400] shadow-xl"
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
