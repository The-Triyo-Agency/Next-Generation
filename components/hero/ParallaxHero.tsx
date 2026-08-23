"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Menu, UsersRound } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxHero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
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

    const ctx = gsap.context(() => {
      // Parallax text down (slower than scroll) so character appears to move up through it
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

    }, container);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={container} className="relative w-full h-[100svh] min-h-[700px] bg-[#F7F5F0] overflow-hidden flex flex-col justify-between selection:bg-[#FF4E1F] selection:text-[#F7F5F0]">

      {/* LAYER 2: Typography Safe Zone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full px-4 overflow-hidden">
        <h1 ref={textRef} className="text-[#111111] font-black tracking-tighter uppercase leading-[0.85] w-full max-w-[1600px] h-full flex flex-col justify-center">
          
          {/* Desktop / Tablet Typography */}
          <div className="hidden md:flex flex-col justify-center h-full w-full relative">
            <span className="text-[min(14vw,230px)] self-start ml-[2vw]">NEXT</span>
            <span className="text-[min(11vw,180px)] self-end mr-[2vw] mt-2">GENERATION</span>
          </div>
          
          {/* Mobile Typography */}
          {/* Tightly controlled sizes to ensure ZERO horizontal clipping on 360px+ screens */}
          <div className="flex md:hidden flex-col h-full w-full pt-[16vh] relative">
            <span className="text-[26vw] self-start ml-[8vw] leading-[0.8] mb-auto">NEXT</span>
            <span className="text-[13.5vw] self-center text-center w-full leading-[0.8] absolute bottom-[47vh]">GENERATION</span>
          </div>

        </h1>
      </div>

      {/* LAYER 3: Character (Z-20) */}
      <div 
        ref={characterRef}
        className="absolute bottom-[30vh] md:bottom-0 left-1/2 transform -translate-x-1/2 z-20 
        w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw] xl:w-[40vw] max-w-[700px] 
        h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] pointer-events-none"
      >
        {/* Character anchored to bottom-0 to ensure transition to black section is seamless */}
        <Image 
          src="/images/hero/hero1.png" 
          alt="Next Generation Men's Fashion Model" 
          fill
          priority
          className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 40vw"
        />
      </div>

      {/* UI LAYER 4 & 5: Bottom Safe Zone (Support Copy & CTAs) */}
      <div className="relative z-50 flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between p-4 md:p-12 pb-6 md:pb-12 pointer-events-none w-full h-full">
        
        {/* Desktop Supporting Copy */}
        <div className="hidden md:block max-w-[220px] pointer-events-auto">
          <p className="text-sm font-semibold leading-relaxed text-[#111111]/80">
            Men's fashion, footwear & accessories <br />— Kumbakonam<span className="text-[#FF4E1F]">.</span>
          </p>
        </div>

        {/* Mobile Bottom Row Stack */}
        <div className="flex flex-col md:hidden w-full gap-6 mt-auto mb-[6vh]">
          
          <div className="pointer-events-auto mb-2">
            <p className="text-xs sm:text-sm font-semibold leading-relaxed text-[#111111]/80 max-w-[200px]">
              Men's fashion,<br />footwear & accessories<br />— Kumbakonam<span className="text-[#FF4E1F]">.</span>
            </p>
          </div>
          
          <div className="flex flex-row items-center justify-between gap-3 w-full pointer-events-auto">
            <Link 
              href={generateWhatsAppLink("Hi Next Generation!")} 
              className="flex-1 text-center bg-[#F7F5F0]/90 backdrop-blur-sm text-[#111111] border border-[#111111]/20 px-4 py-3.5 font-bold text-[10px] tracking-widest uppercase hover:text-[#FF4E1F] hover:border-[#FF4E1F] transition-colors"
            >
              WhatsApp
            </Link>
            <Link 
              href="/collections" 
              className="flex-1 text-center bg-[#111111] text-[#F7F5F0] px-4 py-3.5 font-bold text-[10px] tracking-widest uppercase hover:bg-[#FF4E1F] transition-colors shadow-xl"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex pointer-events-auto">
          <Link 
            href="/collections" 
            className="bg-[#111111] text-[#F7F5F0] px-9 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#FF4E1F] transition-colors shadow-xl"
          >
            Explore Collections
          </Link>
        </div>
        
      </div>
    </div>
  );
}
