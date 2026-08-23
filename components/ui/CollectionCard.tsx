import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/collections";

interface CollectionCardProps {
  category: Category;
}

export default function CollectionCard({ category }: CollectionCardProps) {
  return (
    <Link 
      href={`/collections/${category.slug}`}
      className={`group relative overflow-hidden bg-[#111111] block w-full ${category.spanClass}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={category.image}
          alt={`Men's ${category.name.toLowerCase()} collection at Next Generation`}
          fill
          className={`object-cover ${category.imagePosition} grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[700ms] ease-out`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Subtle overlay to ensure label readability if necessary */}
        <div className="absolute inset-0 bg-[#111111]/10 group-hover:bg-[#111111]/0 transition-colors duration-[700ms]"></div>
      </div>

      {/* Label / Editorial Box */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#111111] text-[#F7F5F0] p-4 md:p-6 pr-12 md:pr-16 inline-flex flex-col gap-1 border border-[#F7F5F0]/10">
        <h3 className="font-black text-xl md:text-2xl tracking-tighter uppercase">
          {category.name}
        </h3>
        
        {/* Hover Arrow Indicator */}
        <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2">
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#F7F5F0] group-hover:text-[#FF4E1F] transition-colors duration-500" />
        </div>
      </div>
    </Link>
  );
}
