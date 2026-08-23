import { collections } from "@/data/collections";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Props = {
  params: Promise<{ category: string; subcategory: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = collections.find((c) => c.slug === resolvedParams.category);
  const subcategory = category?.subcategories.find((s) => s.slug === resolvedParams.subcategory);
  
  if (!category || !subcategory) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${subcategory.name} in Kumbakonam | Next Generation`,
    description: `Explore our collection of ${subcategory.name.toLowerCase()} at Next Generation Kumbakonam. ${subcategory.description}`,
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = collections.find((c) => c.slug === resolvedParams.category);
  const subcategory = category?.subcategories.find((s) => s.slug === resolvedParams.subcategory);

  if (!category || !subcategory) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] pt-32 pb-24">
      
      {/* BreadcrumbList JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Collections",
                "item": "https://nextgenerationkumbakonam.com/collections"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": category.name,
                "item": `https://nextgenerationkumbakonam.com/collections/${category.slug}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": subcategory.name,
                "item": `https://nextgenerationkumbakonam.com/collections/${category.slug}/${subcategory.slug}`
              }
            ]
          })
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase mb-12">
          <Link href="/collections" className="text-[#111111]/50 hover:text-[#FF4E1F] transition-colors">Collections</Link>
          <ChevronRight className="w-3 h-3 text-[#111111]/30" />
          <Link href={`/collections/${category.slug}`} className="text-[#111111]/50 hover:text-[#FF4E1F] transition-colors">{category.name}</Link>
          <ChevronRight className="w-3 h-3 text-[#111111]/30" />
          <span className="text-[#111111]">{subcategory.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="flex-1">
            <header className="mb-12">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-[#111111] mb-6">
                {subcategory.name}<span className="text-[#FF4E1F]">.</span>
              </h1>
              <p className="text-sm md:text-base font-semibold leading-relaxed max-w-xl text-[#111111]/70">
                {subcategory.description}
              </p>
            </header>

            <div className="bg-[#111111] text-[#F7F5F0] p-8 md:p-12 mb-12 max-w-xl">
              <h3 className="font-black tracking-widest text-xs uppercase mb-4 text-[#FF4E1F]">Interested in this style?</h3>
              <p className="text-sm font-semibold leading-relaxed text-[#F7F5F0]/80 mb-8">
                Send us a message on WhatsApp to check availability, sizes, and pricing for our {subcategory.name.toLowerCase()}.
              </p>
              <WhatsAppButton 
                context={subcategory.name}
                label="Enquire on WhatsApp"
                className="bg-[#FF4E1F] text-[#F7F5F0] px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#F7F5F0] hover:text-[#111111] transition-colors inline-flex"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Visual Look Gallery Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`bg-[#111111]/[0.03] border border-[#111111]/10 flex items-center justify-center text-[10px] tracking-widest uppercase font-bold text-[#111111]/30 ${i === 1 ? 'sm:col-span-2 h-[400px]' : 'h-[300px]'}`}>
                  [ Look {i} ]
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
