import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#F7F5F0] text-[#111111] w-full pt-12 md:pt-20 relative overflow-hidden" id="contact" data-navbar-theme="light">
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Mobile: Content First */}
        <div className="md:hidden w-full px-6 pt-24 pb-4 flex flex-col justify-center relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#FF2400] font-black text-xs tracking-[0.2em]">04</span>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#FF2400] to-[#111111]/10"></span>
            <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-[#111111]/70 m-0">Contact</span>
          </div>
          
          <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
            Have a<br />
            <span className="text-[#FF2400]">Question?</span>
          </h2>
          
          <p className="text-sm font-semibold leading-relaxed max-w-sm text-[#111111]/70 mb-10">
            Looking for a specific style, size, or just want to know what's new? Message us directly on WhatsApp.
          </p>

          <Link 
            href={generateWhatsAppLink("Hi Next Generation, I have a question regarding your collections.")}
            className="blob-btn inline-block whitespace-nowrap px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase text-[#FF2400] text-center shadow-xl shadow-black/10 w-fit"
          >
            <span className="relative z-10 flex items-center justify-center gap-4">
              <span>Chat with us</span>
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

        {/* Character Image */}
        <div className="w-full md:w-[45%] lg:w-[50%] h-[350px] sm:h-[400px] md:h-auto min-h-[350px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[500px] relative flex-shrink-0 z-10">
          <Image 
            src="/images/hero/contact-hero3.png" 
            alt="Next Generation model showcasing apparel"
            fill
            priority
            className="object-contain object-bottom origin-bottom scale-100 md:scale-[0.95] lg:scale-[0.90] md:translate-x-4 lg:translate-x-8 drop-shadow-[-20px_0_25px_rgba(0,0,0,0.15)]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Desktop: Content Right */}
        <div className="hidden md:flex md:w-[55%] lg:w-[50%] px-12 lg:px-20 py-24 flex-col justify-center z-20 relative">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#FF2400] font-black text-sm tracking-[0.2em]">04</span>
            <span className="w-12 h-[1px] bg-gradient-to-r from-[#FF2400] to-[#111111]/10"></span>
            <span className="font-bold text-xs lg:text-sm tracking-[0.2em] uppercase text-[#111111]/70 m-0">Contact</span>
          </div>
          
          <h2 className="text-7xl lg:text-[100px] font-black tracking-tighter uppercase leading-[0.85] mb-10">
            Have a<br />
            <span className="text-[#FF2400]">Question?</span>
          </h2>
          
          <p className="text-base lg:text-lg font-medium leading-relaxed max-w-md text-[#111111]/80 mb-12">
            Looking for a specific style, size, or just want to know what's new? Message us directly on WhatsApp.
          </p>

          <Link 
            href={generateWhatsAppLink("Hi Next Generation, I have a question regarding your collections.")}
            className="blob-btn inline-block whitespace-nowrap px-10 py-4 rounded-xl font-bold text-xs lg:text-sm tracking-widest uppercase text-[#FF2400] text-center shadow-xl shadow-black/10 w-fit"
          >
            <span className="relative z-10 flex items-center justify-center gap-4">
              <span>Chat with us</span>
              <ArrowUpRight className="w-5 h-5" />
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
    </section>
  );
}
