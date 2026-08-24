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
}: CollectionCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[14px] md:rounded-[18px] bg-[#F4F1EB] border border-black/5 group",
        "transition-all duration-500 hover:shadow-sm",
        dark && "bg-[#111111] border-white/10",
        !overflowVisible && "overflow-hidden",
        className
      )}
    >
      {/* Content */}
      <div className={cn(
        "relative z-10 p-6 md:p-8 flex flex-col h-full pointer-events-none",
        alignRight && "md:w-1/2 md:ml-auto"
      )}>
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="text-[#C8321F] font-oswald text-xl md:text-2xl font-bold tracking-wide">
            {number}
          </span>
          <div className={cn("h-[1px] w-8 md:w-10", dark ? "bg-white/30" : "bg-black/30")} />
        </div>
        
        <h2 className={cn(
          "font-oswald font-bold text-[45px] md:text-[55px] lg:text-[65px] uppercase leading-[0.85] tracking-[-0.02em] mb-3 group-hover:scale-[1.01] transition-transform duration-500 origin-left scale-y-[1.25]",
          dark ? "text-[#F4F1EB]" : "text-[#111111]"
        )}>
          {title}
        </h2>
        
        <p className={cn(
          "text-[9px] md:text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase mt-4",
          dark ? "text-[#F4F1EB]/70" : "text-[#111111]/70"
        )}>
          {subtitle}
        </p>

        <div className="mt-auto">
          <Link
            href="/collections"
            className={cn(
              "inline-flex items-center gap-4 text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase pointer-events-auto group/link",
              dark ? "text-[#F4F1EB]" : "text-[#111111]"
            )}
          >
            EXPLORE COLLECTION
            <span className="text-[#C8321F] transition-transform duration-300 group-hover/link:translate-x-2">
              <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Image Container */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={imageSrc}
          alt={title}
          className={cn(
            "absolute transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            imageClass
          )}
        />
      </div>
    </div>
  );
}

