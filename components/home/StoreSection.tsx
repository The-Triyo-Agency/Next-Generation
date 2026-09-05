"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";

export default function StoreSection() {
  const [loadMap, setLoadMap] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#111111] text-[#F7F5F0] w-full py-24 md:py-32 relative overflow-hidden" 
      id="store" 
      data-navbar-theme="dark"
    >
      <div className="w-[92%] md:w-[94%] max-w-[1700px] mx-auto bg-[#F7F5F0] text-[#111111] rounded-[2rem] lg:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col lg:flex-row min-h-[700px] relative">
        
        {/* Left: Store Info */}
        <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col pt-12 pb-12 px-8 md:px-12 lg:pl-16 xl:pl-24 lg:pr-12 lg:pt-16 lg:pb-16 relative z-10">
          
          {/* Dot Matrix Decorator */}
          <div className="flex flex-col gap-[6px] mb-8" aria-hidden="true">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex gap-[6px]">
                {[0, 1, 2].map((col) => (
                  <div key={col} className="w-[6px] h-[6px] rounded-full bg-[#FF2400]/40" />
                ))}
              </div>
            ))}
          </div>

          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#FF2400] font-bold text-xs tracking-widest uppercase">03</span>
            <span className="w-12 h-[1px] bg-[#FF2400]" aria-hidden="true"></span>
            <span className="font-bold text-xs tracking-widest uppercase text-[#111111]">Location</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
            Visit Our<br />
            <span className="text-[#FF2400]">Store<span className="text-[#111111]">.</span></span>
          </h2>

          {/* Vertical Timeline Info */}
          <div className="relative pl-6 flex flex-col gap-8 max-w-sm mb-12 border-l border-[#111111]/20">
            
            {/* Address */}
            <div className="relative">
              <div className="absolute -left-[37px] top-0 w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center" aria-hidden="true">
                <MapPin className="w-3.5 h-3.5 text-[#FF2400]" />
              </div>
              <h3 className="font-black tracking-widest text-[13px] uppercase mb-2">Address</h3>
              <p className="text-[15px] text-[#111111]/85 font-semibold leading-relaxed">
                1st Floor, KRC Complex,<br />
                Mutt St, Opp. to Shankara Mutt,<br />
                Swaminatha Nagar, Anna Nagar,<br />
                Kumbakonam, Tamil Nadu 612001
              </p>
            </div>

            {/* Store Hours */}
            <div className="relative">
              <div className="absolute -left-[37px] top-0 w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center" aria-hidden="true">
                <Clock className="w-3.5 h-3.5 text-[#FF2400]" />
              </div>
              <h3 className="font-black tracking-widest text-[13px] uppercase mb-2">Store Hours</h3>
              <p className="text-[15px] text-[#111111]/85 font-semibold leading-relaxed">
                Open Everyday<br />
                9:30 AM – 10:00 PM
              </p>
            </div>

            {/* Contact */}
            <div className="relative">
              <div className="absolute -left-[37px] top-0 w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center" aria-hidden="true">
                <Phone className="w-3.5 h-3.5 text-[#FF2400]" />
              </div>
              <h3 className="font-black tracking-widest text-[13px] uppercase mb-2">Contact</h3>
              <a 
                href="tel:+919677031312" 
                aria-label="Call Next Generation at +91 96770 31312"
                className="text-[15px] text-[#111111]/85 hover:text-[#FF2400] font-semibold leading-relaxed transition-colors block"
              >
                +91 96770 31312
              </a>
            </div>

          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-auto">
            <a 
              href="https://www.google.com/maps/place/Next+Generation/@10.966852,79.3752883,17z/data=!3m1!4b1!4m6!3m5!1s0x3baacd5301ee53cb:0x6fb159d8ad45dd76!8m2!3d10.966852!4d79.3778632!16s%2Fg%2F11f3vl7s4s?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noreferrer"
              aria-label="Get Directions to Next Generation Kumbakonam on Google Maps"
              className="blob-btn inline-block whitespace-nowrap px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase text-[#FF2400] text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </a>
            
            <a 
              href="https://wa.me/919677031312?text=Hi%20Next%20Generation,%20I'd%20like%20to%20know%20more%20about%20the%20latest%20men's%20fashion%20collections%20available%20at%20your%20Kumbakonam%20store."
              target="_blank"
              rel="noreferrer"
              aria-label="Message Next Generation on WhatsApp"
              className="blob-btn inline-block whitespace-nowrap px-8 py-3.5 rounded-xl shadow-xl shadow-black/10 font-bold text-xs tracking-widest uppercase text-[#111111] text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span>Message Us</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Right: Map Area */}
        <div className="w-full h-[600px] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-[58%] xl:w-[60%] z-0 relative lg:overflow-hidden">
          
          {/* Mobile Diagonal Cut Map */}
          {/* Black line effect layer */}
          <div 
            className="lg:hidden absolute inset-0 bg-[#111111] w-full h-full"
            style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0% 100%)' }}
            aria-hidden="true"
          ></div>
          {/* Orange border layer */}
          <div 
            className="lg:hidden absolute inset-0 bg-[#FF2400] w-full h-full mt-[4px]"
            style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0% 100%)' }}
            aria-hidden="true"
          ></div>
          {/* Actual map layer */}
          <div 
            className="lg:hidden absolute inset-0 w-full h-full bg-[#111111] mt-[10px]"
            style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0% 100%)' }}
          >
             {loadMap ? (
               <iframe 
                  src="https://maps.google.com/maps?q=10.966852,79.3778632&t=k&z=17&output=embed" 
                  title="Next Generation Kumbakonam Store Location Mobile Map"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full mix-blend-normal opacity-90 scale-105"
                ></iframe>
             ) : (
               <div className="w-full h-full bg-[#181818] flex items-center justify-center">
                 <div className="text-[#F7F5F0]/50 text-xs font-mono uppercase tracking-widest">Loading Map...</div>
               </div>
             )}
              <div className="absolute inset-0 bg-[#111111]/10 pointer-events-none" aria-hidden="true"></div>
          </div>

          {/* Desktop Diagonal Cut Map */}
          {/* Background Black layer for the black line effect */}
          <div 
            className="hidden lg:block absolute inset-0 bg-[#111111] w-full h-full"
            style={{
              clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 5% 100%, 25% 50%, 10% 30%)'
            }}
            aria-hidden="true"
          ></div>

          {/* Background Orange layer for the border effect */}
          <div 
            className="hidden lg:block absolute inset-0 bg-[#FF2400] w-full h-full ml-[4px]"
            style={{
              clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 5% 100%, 25% 50%, 10% 30%)'
            }}
            aria-hidden="true"
          ></div>
          
          {/* Actual Map layer, shifted slightly right to reveal borders */}
          <div 
            className="hidden lg:block absolute inset-0 w-full h-full bg-[#111111] ml-[10px]"
            style={{
              clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 5% 100%, 25% 50%, 10% 30%)'
            }}
          >
              {loadMap ? (
                <iframe 
                  src="https://maps.google.com/maps?q=10.966852,79.3778632&t=k&z=18&output=embed" 
                  title="Next Generation Kumbakonam Store Location Desktop Map"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0 mix-blend-normal opacity-90 scale-105"
                ></iframe>
              ) : (
                <div className="w-full h-full bg-[#181818] flex items-center justify-center">
                  <div className="text-[#F7F5F0]/50 text-xs font-mono uppercase tracking-widest">Loading Map...</div>
                </div>
              )}
              {/* Optional: Slight dark overlay for editorial feel */}
              <div className="absolute inset-0 bg-[#111111]/10 pointer-events-none" aria-hidden="true"></div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

