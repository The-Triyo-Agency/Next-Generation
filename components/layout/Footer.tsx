import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F7F5F0] pt-16 pb-8 px-6 md:px-12 border-t border-[#F7F5F0]/10">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        
        {/* Brand & Description */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="font-black text-2xl tracking-tighter uppercase leading-none">
            Next Generation<span className="text-[#FF4E1F]">.</span>
          </Link>
          <p className="text-sm text-[#F7F5F0]/70 font-semibold leading-relaxed">
            Everyday men's fashion, streetwear-inspired styles, footwear and accessories for the next generation of Kumbakonam.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#F7F5F0]/50 mb-2">Navigation</span>
            <Link href="/about" className="text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors">About</Link>
            <Link href="/collections" className="text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors">Collections</Link>
            <Link href="/store" className="text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors">Store</Link>
            <Link href="/contact" className="text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#F7F5F0]/50 mb-2">Connect</span>
            <a href="tel:+919677031312" className="text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors">Phone</a>
            <Link 
              href={generateWhatsAppLink("Hi Next Generation, I'd like to know more about the latest men's fashion collections available at your Kumbakonam store.")} 
              className="text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors"
            >
              WhatsApp
            </Link>
            <a href="https://instagram.com/nextgenerationkmu" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors">Instagram</a>
          </div>

        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-[#F7F5F0]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-[#F7F5F0]/40">
        <p>&copy; {new Date().getFullYear()} Next Generation. All rights reserved.</p>
        <p>Kumbakonam, Tamil Nadu</p>
      </div>
    </footer>
  );
}
