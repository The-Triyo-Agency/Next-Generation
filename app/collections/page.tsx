import { collections } from "@/data/collections";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Men's Fashion Collections",
  description: "Explore the latest men's fashion collections including shirts, t-shirts, bottom wear, and accessories at Next Generation Kumbakonam.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#FF4E1F]"></span>
            <span className="text-[#FF4E1F] font-bold text-[10px] tracking-widest uppercase">Collections</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-[#111111]">
            Explore<br />All Collections<span className="text-[#FF4E1F]">.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collections.map((category) => (
            <Link 
              key={category.slug} 
              href={`/collections/${category.slug}`}
              className="group flex flex-col bg-[#111111]/[0.02] hover:bg-[#111111]/[0.04] transition-colors border border-[#111111]/10 h-[400px] relative overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-[#111111]/5 flex items-center justify-center text-[10px] uppercase tracking-widest font-bold text-[#111111]/30">
                [ {category.name} Image ]
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/80 to-transparent">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-black text-3xl tracking-tighter uppercase group-hover:text-[#FF4E1F] transition-colors text-[#111111]">
                      {category.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#111111]/60 max-w-[200px]">
                      {category.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#111111]/20 flex items-center justify-center bg-[#F7F5F0] group-hover:border-[#FF4E1F] group-hover:bg-[#FF4E1F] transition-all shrink-0">
                    <ArrowRight className="w-5 h-5 text-[#111111] group-hover:text-[#F7F5F0]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
