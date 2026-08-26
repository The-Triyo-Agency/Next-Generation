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
    // Disable scrolling during intro
    document.body.style.overflow = "hidden";
    // Scroll to top to ensure intro looks correct
    window.scrollTo(0, 0);

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setIsComplete(true);
      }
    });

    // 1. Logo fades and scales in
    tl.fromTo(
      logoWrapperRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );

    // 2. Hold for a moment
    tl.to({}, { duration: 0.3 });

    // 3. Logo moves up slightly before wipe (adds to cinematic feel)
    tl.to(logoWrapperRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });

    // 4. Curved Mask Wipe Reveal
    // We animate the SVG clipPath from full coverage to zero coverage with a curved bottom edge
    tl.to(
      pathRef.current,
      {
        attr: { d: "M 0 0 L 1 0 L 1 0 Q 0.5 -0.3 0 0 Z" },
        duration: 1.0,
        ease: "power4.inOut"
      },
      "-=0.2" // Start wiping just before the logo fully fades out
    );

    // 5. Hero Image Scale Reveal
    // Target both mobile and desktop hero images
    tl.to(
      "#main-model-desktop, #main-model-mobile",
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      },
      "-=0.6" // Start scaling as the wipe is halfway up
    );

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (isComplete) return null;

  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
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
