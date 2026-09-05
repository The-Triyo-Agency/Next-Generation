"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function IntroAnimation() {
  const introRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsComplete(true);
      return;
    }

    // Snappy, cinematic intro that completes quickly to protect LCP & Speed Index
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
      }
    });

    // 1. Logo fades in
    tl.fromTo(
      logoWrapperRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
    );

    // 2. Logo fades out and moves up slightly
    tl.to(logoWrapperRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in"
    });

    // 3. Curved Mask Wipe Reveal
    tl.to(
      pathRef.current,
      {
        attr: { d: "M 0 0 L 1 0 L 1 0 Q 0.5 -0.3 0 0 Z" },
        duration: 0.5,
        ease: "power3.inOut"
      },
      "-=0.1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (isComplete) return null;

  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }} aria-hidden="true">
        <clipPath id="intro-clip" clipPathUnits="objectBoundingBox">
          <path ref={pathRef} d="M 0 0 L 1 0 L 1 1 Q 0.5 1 0 1 Z" />
        </clipPath>
      </svg>
      
      <div 
        ref={introRef}
        className="fixed inset-0 z-[200] bg-[#111111] flex flex-col items-center justify-center pointer-events-auto"
        style={{ clipPath: "url(#intro-clip)" }}
      >
        <div ref={logoWrapperRef} className="flex flex-col items-center gap-6 md:gap-8 opacity-0">
          {/* text-logo.svg inverted to be white */}
          <div style={{ filter: "invert(1)" }}>
            <Image 
              src="/images/text-logo.svg" 
              alt="Next Generation" 
              width={240} 
              height={80} 
              className="w-auto h-8 md:h-12 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
