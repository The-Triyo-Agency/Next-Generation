"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  number: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  className?: string;
  imageClass?: string;
  dark?: boolean;
  alignRight?: boolean;
  overflowVisible?: boolean;
  textOverlayGradient?: string;
  gradientWidthClass?: string;
  href?: string;
}

export default function CollectionCard({
  number,
  title,
  subtitle,
  imageSrc,
  className,
  imageClass,
  dark = false,
  alignRight = false,
  overflowVisible = false,
  textOverlayGradient,
  gradientWidthClass,
  href = "/#collections",
}: CollectionCardProps) {
  // Determine default gradient if not provided
  const defaultGradient = dark 
    ? "from-[#111111] via-[#111111]/70 to-transparent" 
    : "from-[#F4F1EB] via-[#F4F1EB]/70 to-transparent";
    
  const gradientClass = textOverlayGradient || defaultGradient;
  return (
    <Link
      href={href}
      onClick={() => sessionStorage.setItem("scrollToSection", "collections")}
      aria-label={`Explore ${title} collection`}
      className={cn(
        "relative block rounded-[14px] md:rounded-[18px] bg-[#F4F1EB] border border-black/5 group",
        "transition-all duration-500 hover:shadow-sm cursor-pointer",
        dark && "bg-[#111111] border-white/10",
        !overflowVisible && "overflow-hidden",
        className
      )}
    >
      {/* Image Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className={cn(
            "absolute transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            imageClass
          )}
        />
      </div>
      
      {/* Text Protection Gradient */}
      {gradientClass !== "none" && (
        <div className={cn(
          "absolute inset-y-0 pointer-events-none z-[5]",
          alignRight 
            ? `right-0 bg-gradient-to-l ${dark ? 'from-[#111111] via-[#111111]/70' : 'from-[#F4F1EB] via-[#F4F1EB]/70'} to-transparent` 
            : `left-0 bg-gradient-to-r ${gradientClass}`,
          gradientWidthClass || "w-[80%] md:w-[65%] xl:w-[50%]"
        )} />
      )}

      {/* Content */}
      <div className={cn(
        "relative z-10 p-6 md:p-8 flex flex-col h-full pointer-events-none",
        alignRight ? "w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] ml-auto items-end text-right" : "items-start text-left"
      )}>
        <div className={cn("flex items-center gap-3 mb-3 md:mb-4", alignRight && "flex-row-reverse")}>
          <span className="text-[#C8321F] font-oswald text-xl md:text-2xl font-bold tracking-wide">
            {number}
          </span>
          <div className={cn("h-[1px] w-8 md:w-10", dark ? "bg-white/30" : "bg-black/30")} aria-hidden="true" />
        </div>
        
        <h3 className={cn(
          "font-oswald font-bold text-[45px] md:text-[55px] lg:text-[65px] uppercase leading-[0.85] tracking-[-0.02em] mb-3 group-hover:scale-[1.01] transition-transform duration-500 origin-left scale-y-[1.25]",
          dark ? "text-[#F4F1EB]" : "text-[#111111]"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "text-[9px] md:text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase mt-4",
          dark ? "text-[#F4F1EB]/85" : "text-[#111111]/85"
        )}>
          {subtitle}
        </p>

        <div className="mt-auto">
          <div
            className={cn(
              "inline-flex items-center gap-4 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase pointer-events-auto group/link",
              dark ? "text-[#F4F1EB]" : "text-[#111111]"
            )}
          >
            EXPLORE COLLECTION
            <span className="text-[#C8321F] transition-transform duration-300 group-hover/link:translate-x-2">
              <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h16" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
