import { collections } from "@/data/collections";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = collections.find((c) => c.slug === resolvedParams.category);
  
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `Men's ${category.name} in Kumbakonam`,
    description: `Explore the latest men's ${category.name.toLowerCase()} collection at Next Generation Kumbakonam. ${category.description}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = collections.find((c) => c.slug === resolvedParams.category);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase mb-12">
          <Link href="/collections" className="text-[#111111]/50 hover:text-[#FF4E1F] transition-colors">Collections</Link>
          <ChevronRight className="w-3 h-3 text-[#111111]/30" />
          <span className="text-[#111111]">{category.name}</span>
        </nav>

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-[#111111] mb-6">
            {category.name}<span className="text-[#FF4E1F]">.</span>
          </h1>
          <p className="text-sm md:text-base font-semibold leading-relaxed max-w-xl text-[#111111]/70">
            {category.description}
          </p>
        </header>

        {category.subcategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {category.subcategories.map((sub) => (
              <Link 
                key={sub.slug} 
                href={`/collections/${category.slug}/${sub.slug}`}
                className="group flex flex-col bg-[#111111]/[0.02] hover:bg-[#111111]/[0.04] transition-colors border border-[#111111]/10 h-[400px] relative overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[#111111]/5 flex items-center justify-center text-[10px] uppercase tracking-widest font-bold text-[#111111]/30">
                  [ {sub.name} Image ]
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-black text-3xl tracking-tighter uppercase group-hover:text-[#FF4E1F] transition-colors text-[#111111]">
                        {sub.name}
                      </h2>
                      <p className="text-sm font-semibold text-[#111111]/60 max-w-[200px]">
                        {sub.description}
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
        ) : (
          <div className="py-24 text-center border border-[#111111]/10 bg-[#111111]/[0.02] flex flex-col items-center justify-center">
            <h3 className="font-black text-2xl tracking-tighter uppercase text-[#111111] mb-2">Coming Soon</h3>
            <p className="text-sm font-semibold text-[#111111]/60">We are currently updating our {category.name.toLowerCase()} catalog.</p>
          </div>
        )}

      </div>
    </main>
  );
}
