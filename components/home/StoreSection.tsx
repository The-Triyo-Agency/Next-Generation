import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MapPin, Clock, Phone } from "lucide-react";

export default function StoreSection() {
  return (
    <section className="bg-[#111111] text-[#F7F5F0] py-24 md:py-40 px-6 md:px-12 w-full border-t border-[#F7F5F0]/10" id="store">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left: Store Info */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#FF4E1F] font-bold text-[10px] tracking-widest uppercase">03</span>
            <span className="w-8 h-[1px] bg-[#FF4E1F]"></span>
            <span className="font-bold text-[10px] tracking-widest uppercase text-[#F7F5F0]/60">Location</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
            Visit The<br />Store<span className="text-[#FF4E1F]">.</span>
          </h2>

          <div className="flex flex-col gap-8 max-w-sm w-full">
            
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#FF4E1F] shrink-0 mt-1" />
              <div>
                <h3 className="font-black tracking-widest text-xs uppercase mb-2">Address</h3>
                <p className="text-sm text-[#F7F5F0]/70 font-semibold leading-relaxed">
                  1st Floor, KRC Complex,<br />
                  Mutt St, Opp. to Shankara Mutt,<br />
                  Swaminatha Nagar, Anna Nagar,<br />
                  Kumbakonam, Tamil Nadu 612001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#FF4E1F] shrink-0 mt-1" />
              <div>
                <h3 className="font-black tracking-widest text-xs uppercase mb-2">Store Hours</h3>
                <p className="text-sm text-[#F7F5F0]/70 font-semibold leading-relaxed">
                  Open Everyday<br />
                  9:30 AM – 10:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[#FF4E1F] shrink-0 mt-1" />
              <div>
                <h3 className="font-black tracking-widest text-xs uppercase mb-2">Contact</h3>
                <a href="tel:+919677031312" className="text-sm text-[#F7F5F0]/70 hover:text-[#FF4E1F] font-semibold leading-relaxed transition-colors block">
                  +91 96770 31312
                </a>
              </div>
            </div>

          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Next+Generation,+1st+Floor,+KRC+Complex,+Mutt+St,+Opp.+to+Shankara+Mutt,+Swaminatha+Nagar,+Anna+Nagar,+Kumbakonam,+Tamil+Nadu+612001"
              target="_blank" 
              rel="noreferrer"
              className="bg-[#F7F5F0] text-[#111111] px-8 py-4 rounded-[10px] font-bold text-xs tracking-widest uppercase hover:bg-[#FF4E1F] hover:text-[#F7F5F0] transition-colors text-center"
            >
              Get Directions
            </a>
            <WhatsAppButton 
              className="bg-[#111111] border-[1.5px] border-[#F7F5F0]/20 text-[#F7F5F0] px-8 py-4 rounded-[10px] font-bold text-xs tracking-widest uppercase hover:border-[#FF4E1F] hover:text-[#FF4E1F] transition-colors text-center" 
              label="Message Us"
            />
          </div>
        </div>

        {/* Right: Premium Location Text Visual */}
        <div className="flex-1 w-full min-h-[400px] lg:min-h-[500px] bg-[#111111] border border-[#F7F5F0]/10 flex flex-col items-center justify-center relative p-8 md:p-12 overflow-hidden group">
          {/* Decorative background grid/lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(247,245,240,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,240,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <div className="relative z-10 text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#FF4E1F]/30 flex items-center justify-center bg-[#FF4E1F]/10 group-hover:scale-110 transition-transform duration-500">
              <MapPin className="w-6 h-6 text-[#FF4E1F]" />
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] text-[#F7F5F0]">
              Kumbakonam<span className="text-[#FF4E1F]">.</span>
            </h3>
            
            <p className="text-xs tracking-widest uppercase font-bold text-[#F7F5F0]/40 max-w-[250px] leading-relaxed">
              Premium men's streetwear and everyday fashion in the heart of the city.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
