import Link from "next/link";
import { collections } from "@/data/collections";
import { ArrowRight } from "lucide-react";
import CollectionCard from "@/components/ui/CollectionCard";

export default function CollectionsSection() {
  return (
    <section className="bg-[#F7F5F0] text-[#111111] py-24 md:py-40 px-6 md:px-12 w-full" id="collections">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FF4E1F] font-bold text-[10px] tracking-widest uppercase">02</span>
              <span className="w-8 h-[1px] bg-[#FF4E1F]"></span>
              <span className="font-bold text-[10px] tracking-widest uppercase text-[#111111]/60">Collections</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              Explore<br />The Looks<span className="text-[#FF4E1F]">.</span>
            </h2>
          </div>
          
          <Link 
            href="/collections" 
            className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:text-[#FF4E1F] transition-colors group"
          >
            View All Collections
            <div className="w-8 h-8 rounded-[8px] border border-[#111111]/20 flex items-center justify-center bg-[#111111]/5 group-hover:border-[#FF4E1F] group-hover:bg-[#FF4E1F] transition-all">
              <ArrowRight className="w-4 h-4 text-[#111111] group-hover:text-[#F7F5F0] group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {collections.map((category) => (
            <CollectionCard key={category.slug} category={category} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
