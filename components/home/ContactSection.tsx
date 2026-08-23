import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#F7F5F0] text-[#111111] py-24 md:py-40 px-6 md:px-12 w-full" id="contact" data-navbar-theme="light">
      <div className="max-w-[1600px] mx-auto text-center flex flex-col items-center">
        
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#FF2400]"></span>
          <span className="text-[#FF2400] font-bold text-[10px] tracking-widest uppercase">04</span>
          <span className="w-8 h-[1px] bg-[#FF2400]"></span>
        </div>
        
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
          Have a<br />Question?
        </h2>
        
        <p className="text-sm md:text-base font-semibold leading-relaxed max-w-md text-[#111111]/70 mb-12">
          Looking for a specific style, size, or just want to know what's new? Message us directly on WhatsApp.
        </p>

        <WhatsAppButton 
          label="Chat with us"
          className="bg-[#FF2400] text-[#F7F5F0] px-10 py-5 rounded-[10px] font-black text-sm tracking-widest uppercase hover:bg-[#111111] transition-colors shadow-lg inline-flex items-center justify-center gap-3 group"
        />

      </div>
    </section>
  );
}
