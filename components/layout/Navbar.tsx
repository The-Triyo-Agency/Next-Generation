"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isNavigating = useRef(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setActiveSection(section);
    isNavigating.current = true;
    
    if (pathname !== "/") {
      // If we are not on the home page, navigate to home and prevent the default jump.
      // The useEffect below will catch the hash and handle the smooth scroll once mounted.
      router.push("/#" + section, { scroll: false });
      return;
    }

    // Custom smooth scroll logic for when already on homepage
    const element = document.getElementById(section);
    if (element) {
      const navHeight = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };

  // Handle cross-page hash navigation and initial load with hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const section = window.location.hash.substring(1);
      const element = document.getElementById(section);
      
      if (element) {
        // Small delay to ensure the page layout is ready after navigation
        setTimeout(() => {
          const navHeight = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          if (!isNavigating.current) {
            setActiveSection(section);
          }
          
          setTimeout(() => {
            isNavigating.current = false;
          }, 1000);
        }, 100);
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Handle scroll state for navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    let observer: IntersectionObserver;

    // Use a small timeout to ensure Next.js has fully mounted the new page's DOM elements
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll("[data-navbar-theme]");
      const visibleSections = new Map<Element, boolean>();
      
      // If there are no sections with data-navbar-theme, default to light
      if (sections.length === 0) {
        setTheme("light");
      }
      
      observer = new IntersectionObserver(
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
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  // Theme-based CSS classes
  const isDark = theme === "dark";
  
  const navBgClass = isScrolled
    ? isDark
      ? "bg-[#111111]/85 backdrop-blur-md border-b border-[#F7F5F0]/10 py-4"
      : "bg-[#F7F5F0]/85 backdrop-blur-md border-b border-[#111111]/10 py-4"
    : "bg-transparent py-5 md:py-6 lg:py-8 border-b-transparent";

  const textColorClass = isDark ? "text-[#F7F5F0]" : "text-[#111111]";
  const borderColorClass = isDark ? "border-[#F7F5F0]" : "border-[#111111]";
  const menuBgClass = isDark ? "bg-[#111111]/5" : "bg-[#F7F5F0]";
  
  // Mobile overlay always uses light theme colors to maintain readability if opened over dark backgrounds,
  // or we can make it inherit the theme. Let's make the mobile overlay solid off-white for simplicity and premium feel.
  
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12 pointer-events-auto transition-all duration-300 ease-in-out ${navBgClass}`}>
        
        {/* Mobile Logo */}
        <Link href="/" className="min-[1400px]:hidden flex items-center gap-3 group flex-shrink-0">
          <Image src="/images/logo.svg" alt="Next Generation Logo" width={80} height={80} className="w-[40px] min-[400px]:w-[50px] md:w-[60px] lg:w-[80px] h-[40px] min-[400px]:h-[50px] md:h-[60px] lg:h-[80px] object-contain flex-shrink-0" />
          <Image src="/images/text-logo.svg" alt="Next Generation" width={240} height={80} className={`w-auto h-[24px] min-[400px]:h-[30px] md:h-[36px] lg:h-[48px] object-contain transition-[filter] duration-300 ${isDark ? 'invert' : ''}`} />
        </Link>

        {/* Desktop Logo */}
        <Link href="/" className="hidden min-[1400px]:flex items-center gap-2 2xl:gap-3 group flex-shrink-0">
          <Image src="/images/logo.svg" alt="Next Generation Logo" width={76} height={76} className="w-[65px] 2xl:w-[76px] h-[65px] 2xl:h-[76px] object-contain flex-shrink-0" />
          <Image src="/images/text-logo.svg" alt="Next Generation" width={230} height={76} className={`w-auto h-[38px] 2xl:h-[46px] object-contain transition-[filter] duration-300 ${isDark ? 'invert' : ''}`} />
        </Link>
        
        {/* Desktop Links */}
        <div className={`hidden min-[1400px]:flex gap-12 2xl:gap-16 text-[15px] 2xl:text-[18px] font-bold tracking-widest uppercase whitespace-nowrap flex-shrink-0 ${textColorClass} transition-colors`}>
          <Link href="/#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-[#FF2400] transition-colors relative group py-1 cursor-pointer">
            Home
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'hero' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#FF2400] transition-colors relative group py-1 cursor-pointer">
            About
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="/#collections" onClick={(e) => handleNavClick(e, 'collections')} className="hover:text-[#FF2400] transition-colors relative group py-1 cursor-pointer">
            Collections
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'collections' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="/#store" onClick={(e) => handleNavClick(e, 'store')} className="hover:text-[#FF2400] transition-colors relative group py-1 cursor-pointer">
            Store
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'store' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#FF2400] transition-colors relative group py-1 cursor-pointer">
            Contact
            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF2400] transition-transform duration-300 origin-left ${activeSection === 'contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
        </div>
        
        {/* Desktop WhatsApp */}
        <div className="hidden min-[1400px]:block flex-shrink-0">
          <Link 
            href={generateWhatsAppLink("Hi Next Generation, I'd like to know more about the latest men's fashion collections available at your Kumbakonam store.")} 
            className={`blob-btn inline-block whitespace-nowrap px-6 2xl:px-8 py-2.5 2xl:py-3 rounded-xl font-bold text-[13px] 2xl:text-[15px] tracking-widest uppercase text-[#FF2400] ${isDark ? 'blob-btn-dark-hover' : ''}`}
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
          className={`min-[1400px]:hidden p-2 -mr-2 ${textColorClass} hover:text-[#FF2400] transition-colors`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-[#F7F5F0] overflow-y-auto pointer-events-auto">
          <div className="flex flex-col min-h-full w-full">
            <div className="flex items-center justify-between pt-5 lg:pt-8 px-4 md:px-8 lg:px-12 w-full flex-shrink-0">
              <Link href="#hero" className="flex items-center gap-2 md:gap-3 group" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/images/logo.svg" alt="Next Generation Logo" width={90} height={90} className="w-[40px] min-[400px]:w-[55px] md:w-[75px] lg:w-[90px] h-[40px] min-[400px]:h-[55px] md:h-[75px] lg:h-[90px] object-contain flex-shrink-0" />
              <Image src="/images/text-logo.svg" alt="Next Generation" width={220} height={90} className="w-auto max-w-[140px] min-[400px]:max-w-[180px] sm:max-w-none h-[24px] min-[400px]:h-[30px] md:h-[40px] lg:h-[50px] object-contain" />
            </Link>
            <button 
              className="p-2 -mr-2 text-[#111111] hover:text-[#FF2400] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7 min-[400px]:w-9 min-[400px]:h-9 md:w-12 md:h-12 lg:w-16 lg:h-16" />
            </button>
          </div>
          
          <div className="flex flex-col flex-grow w-full items-start px-6 md:px-12 lg:px-20 pt-10 md:pt-16 lg:pt-20 pb-20 gap-8 md:gap-12 lg:gap-16 text-2xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-[#111111]">
            <Link href="/#hero" onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, 'hero'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4 flex-shrink-0 cursor-pointer">
              Home
              {activeSection === 'hero' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="/#about" onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, 'about'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4 flex-shrink-0 cursor-pointer">
              About
              {activeSection === 'about' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="/#collections" onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, 'collections'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4 flex-shrink-0 cursor-pointer">
              Collections
              {activeSection === 'collections' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="/#store" onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, 'store'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4 flex-shrink-0 cursor-pointer">
              Store
              {activeSection === 'store' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            <Link href="/#contact" onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, 'contact'); }} className="hover:text-[#FF2400] transition-colors flex items-center gap-4 flex-shrink-0 cursor-pointer">
              Contact
              {activeSection === 'contact' && <span className="w-2 h-2 rounded-full bg-[#FF2400]"></span>}
            </Link>
            
            <div className="mt-4 md:mt-8 pt-6 md:pt-8 border-t border-[#111111]/10 w-full flex-shrink-0">
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
        </div>
      )}
    </>
  );
}
