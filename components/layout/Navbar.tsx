"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isNavigating = useRef(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    isNavigating.current = true;
    setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };

  useEffect(() => {
    // Handle scroll state for navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    // Handle section intersection for theme and active link
    const sections = document.querySelectorAll("[data-navbar-theme]");
    const visibleSections = new Map<Element, boolean>();
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target, entry.isIntersecting);
        });

        // Find the first section in DOM order that is currently intersecting the detection band
        const currentSection = Array.from(sections).find(section => visibleSections.get(section));
        
        if (currentSection) {
          const newTheme = currentSection.getAttribute("data-navbar-theme") as "light" | "dark";
          if (newTheme) setTheme(newTheme);
          if (currentSection.id && !isNavigating.current) {
            setActiveSection(currentSection.id);
          }
        }
      },
      {
        // A safe horizontal strip in the top half of the viewport
        rootMargin: "-50px 0px -50% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      visibleSections.set(section, false);
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Theme-based CSS classes
  const isDark = theme === "dark";
  
  const navBgClass = isScrolled
    ? isDark
      ? "bg-[#111111]/85 backdrop-blur-md border-b border-[#F7F5F0]/10 py-4"
      : "bg-[#F7F5F0]/85 backdrop-blur-md border-b border-[#111111]/10 py-4"
    : "bg-transparent py-5 md:py-10 border-b-transparent";

  const textColorClass = isDark ? "text-[#F7F5F0]" : "text-[#111111]";
  const borderColorClass = isDark ? "border-[#F7F5F0]" : "border-[#111111]";
  const menuBgClass = isDark ? "bg-[#111111]/5" : "bg-[#F7F5F0]";
  
  // Mobile overlay always uses light theme colors to maintain readability if opened over dark backgrounds,
  // or we can make it inherit the theme. Let's make the mobile overlay solid off-white for simplicity and premium feel.
  
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-6 lg:px-12 pointer-events-auto transition-all duration-300 ease-in-out ${navBgClass}`}>
        
        {/* Mobile Logo */}
        <Link href="/" className="md:hidden flex items-center gap-2 group flex-shrink-0">
          <Image src="/images/logo.svg" alt="Next Generation Logo" width={60} height={60} className="w-[60px] h-[60px] object-contain flex-shrink-0" />
          <Image src="/images/text-logo.svg" alt="Next Generation" width={150} height={60} className={`w-auto h-[30px] object-contain transition-[filter] duration-300 ${isDark ? 'invert' : ''}`} />
        </Link>

        {/* Desktop Logo */}
        <Link href="/" className="hidden md:flex items-center gap-2 lg:gap-3 group flex-shrink-0">
          <Image src="/images/logo.svg" alt="Next Generation Logo" width={76} height={76} className="w-[60px] lg:w-[76px] h-[60px] lg:h-[76px] object-contain flex-shrink-0" />
          <Image src="/images/text-logo.svg" alt="Next Generation" width={230} height={76} className={`w-auto h-[38px] lg:h-[46px] object-contain transition-[filter] duration-300 ${isDark ? 'invert' : ''}`} />
        </Link>
        
        {/* Desktop Links */}
        <div className={`hidden md:flex gap-4 lg:gap-10 text-[10px] lg:text-xs font-bold tracking-widest uppercase whitespace-nowrap flex-shrink-0 ${textColorClass} transition-colors`}>
          <Link href="#hero" onClick={() => handleNavClick('hero')} className="hover:text-[#FF2400] transition-colors relative group py-1">
            Home
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'hero' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="#about" onClick={() => handleNavClick('about')} className="hover:text-[#FF2400] transition-colors relative group py-1">
            About
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="#collections" onClick={() => handleNavClick('collections')} className="hover:text-[#FF2400] transition-colors relative group py-1">
            Collections
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'collections' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="#store" onClick={() => handleNavClick('store')} className="hover:text-[#FF2400] transition-colors relative group py-1">
            Store
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'store' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="#contact" onClick={() => handleNavClick('contact')} className="hover:text-[#FF2400] transition-colors relative group py-1">
            Contact
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
        </div>
        
        {/* Desktop WhatsApp */}
        <div className="hidden md:block flex-shrink-0">
          <Link 
            href={generateWhatsAppLink("Hi Next Generation, I'd like to know more about the latest men's fashion collections available at your Kumbakonam store.")} 
            className={`blob-btn inline-block whitespace-nowrap px-4 lg:px-6 py-2 lg:py-2.5 font-bold text-[10px] lg:text-xs tracking-widest uppercase text-[#FF2400] ${isDark ? 'blob-btn-dark-hover' : ''}`}
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

        {/* Mobile Hamburger */}
        <button 
          className={`md:hidden p-2 -mr-2 ${textColorClass} hover:text-[#FF2400] transition-colors`}
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
            <Link href="#hero" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/images/logo.svg" alt="Next Generation Logo" width={60} height={60} className="w-[60px] h-[60px] object-contain flex-shrink-0" />
              <Image src="/images/text-logo.svg" alt="Next Generation" width={150} height={60} className="w-auto h-[30px] object-contain" />
            </Link>
            <button 
              className="p-2 -mr-2 text-[#111111] hover:text-[#FF2400] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col items-start px-6 pt-16 gap-8 text-2xl font-black tracking-tighter uppercase text-[#111111]">
            <Link href="#hero" onClick={() => { setMobileMenuOpen(false); handleNavClick('hero'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4">
              Home
              {activeSection === 'hero' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="#about" onClick={() => { setMobileMenuOpen(false); handleNavClick('about'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4">
              About
              {activeSection === 'about' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="#collections" onClick={() => { setMobileMenuOpen(false); handleNavClick('collections'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4">
              Collections
              {activeSection === 'collections' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="#store" onClick={() => { setMobileMenuOpen(false); handleNavClick('store'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4">
              Store
              {activeSection === 'store' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="#contact" onClick={() => { setMobileMenuOpen(false); handleNavClick('contact'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4">
              Contact
              {activeSection === 'contact' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            
            <div className="mt-8 pt-8 border-t border-[#111111]/10 w-full">
              <Link 
                href={generateWhatsAppLink("Hi Next Generation, I'd like to know more about the latest men's fashion collections available at your Kumbakonam store.")} 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 hover:text-[#FF2400] transition-colors"
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
