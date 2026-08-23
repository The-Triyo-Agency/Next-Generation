"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, UsersRound, X } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 flex items-center justify-between pt-5 md:pt-10 px-4 md:px-12 w-full pointer-events-auto">
        {/* Mobile Logo */}
        <Link href="/" className="md:hidden flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-[8px] border-[1.5px] border-[#111111] flex items-center justify-center group-hover:border-[#FF4E1F] transition-colors bg-[#F7F5F0]">
            <UsersRound className="w-4 h-4 text-[#111111] group-hover:text-[#FF4E1F] transition-colors" strokeWidth={2.5} />
          </div>
          <span className="font-black text-lg tracking-tighter uppercase leading-none text-[#111111]">
            Next Generation<span className="text-[#FF4E1F]">.</span>
          </span>
        </Link>

        {/* Desktop Logo */}
        <Link href="/" className="hidden md:flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-[10px] border-[1.5px] border-[#111111] flex items-center justify-center group-hover:border-[#FF4E1F] transition-colors bg-[#F7F5F0]">
            <UsersRound className="w-5 h-5 text-[#111111] group-hover:text-[#FF4E1F] transition-colors" strokeWidth={2.5} />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase leading-none text-[#111111]">
            Next Generation<span className="text-[#FF4E1F]">.</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[11px] lg:text-xs font-bold tracking-widest uppercase text-[#111111]">
          <Link href="/about" className="hover:text-[#FF4E1F] transition-colors relative group">
            About<span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#FF4E1F] rounded-full -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link href="/collections" className="hover:text-[#FF4E1F] transition-colors relative group">
            Collections<span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#FF4E1F] rounded-full -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link href="/store" className="hover:text-[#FF4E1F] transition-colors relative group">
            Store<span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#FF4E1F] rounded-full -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link href="/contact" className="hover:text-[#FF4E1F] transition-colors relative group">
            Contact<span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[#FF4E1F] rounded-full -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </div>
        
        {/* Desktop WhatsApp */}
        <div className="hidden md:block">
          <Link 
            href={generateWhatsAppLink("Hi Next Generation, I'd like to know more about the latest men's fashion collections available at your Kumbakonam store.")} 
            className="text-[11px] lg:text-xs font-bold tracking-widest uppercase text-[#111111] hover:text-[#FF4E1F] transition-colors"
          >
            WhatsApp
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 -mr-2 text-[#111111] hover:text-[#FF4E1F] transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F7F5F0] flex flex-col pointer-events-auto">
          <div className="flex items-center justify-between pt-5 px-4 w-full">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-[8px] border-[1.5px] border-[#111111] flex items-center justify-center group-hover:border-[#FF4E1F] transition-colors">
                <UsersRound className="w-4 h-4 text-[#111111] group-hover:text-[#FF4E1F] transition-colors" strokeWidth={2.5} />
              </div>
              <span className="font-black text-lg tracking-tighter uppercase leading-none text-[#111111]">
                Next Generation<span className="text-[#FF4E1F]">.</span>
              </span>
            </Link>
            <button 
              className="p-2 -mr-2 text-[#111111] hover:text-[#FF4E1F] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col items-start px-6 pt-16 gap-8 text-2xl font-black tracking-tighter uppercase text-[#111111]">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF4E1F] transition-colors">About</Link>
            <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF4E1F] transition-colors">Collections</Link>
            <Link href="/store" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF4E1F] transition-colors">Store</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF4E1F] transition-colors">Contact</Link>
            
            <div className="mt-8 pt-8 border-t border-[#111111]/10 w-full">
              <Link 
                href={generateWhatsAppLink("Hi Next Generation, I'd like to know more about the latest men's fashion collections available at your Kumbakonam store.")} 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 hover:text-[#FF4E1F] transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
