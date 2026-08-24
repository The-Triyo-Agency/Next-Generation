import Link from "next/link";
import CollectionCard from "@/components/collection/CollectionCard";

export default function CollectionsSection() {
  return (
    <section className="bg-[#F4F1EB] text-[#111111] pt-16 md:pt-24 lg:pt-36 xl:pt-48 pb-16 md:pb-24 px-4 md:px-8 lg:px-10 w-full overflow-hidden" id="collections" data-navbar-theme="light">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Main Grid Layout - Ultra Flexible & Spaced for Premium Feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          
          {/* Hero Section */}
          <div className="md:col-span-2 xl:col-span-2 relative h-[450px] md:h-[500px] flex flex-col justify-center lg:justify-start lg:pt-10 group z-10 border border-transparent">
            
            {/* Using scale-y to achieve the exact 'squeezed' tall font look of the reference */}
            <h1 className="font-oswald font-bold text-[65px] md:text-[85px] lg:text-[90px] xl:text-[105px] leading-[0.85] uppercase tracking-[-0.02em] relative z-20 mt-4 text-[#111111] scale-y-[1.25] origin-left">
              <div className="block">CURATED</div>
              <div className="flex items-end">
                <span>FOR <span className="text-[#C8321F]">YOU</span></span>
                <span className="inline-block w-[14px] h-[14px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] bg-[#C8321F] ml-3 mb-[12px] lg:mb-[16px] scale-y-[0.8]"></span>
              </div>
            </h1>
            
            <div className="mt-12 md:mt-16 max-w-[280px] relative z-20">
              <p className="text-[14px] md:text-[15px] font-medium text-black/80 mb-8 leading-relaxed">
                Timeless pieces. Modern attitude.<br/>Explore our categories.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-4 text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase group/link text-[#111111]"
              >
                EXPLORE ALL
                <span className="text-[#C8321F] transition-transform duration-300 group-hover/link:translate-x-2">
                  <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Hero Image - Curated.png */}
            <div className="absolute right-[-6%] xl:right-[-8%] bottom-0 h-[75%] xl:h-[115%] w-[85%] lg:w-[50%] pointer-events-none z-0 flex justify-end">
              <img 
                src="/images/collections/curated.png" 
                alt="Curated For You" 
                className="h-full w-auto max-w-none object-contain object-right-bottom transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
            
            {/* Subtle background line decoration */}
            <div className="hidden lg:block absolute left-[-20px] top-[15%] w-[1px] h-[60%] bg-black/10 z-0" />
            <div className="hidden lg:block absolute left-[-20px] top-[20%] w-[12px] h-[1px] bg-black/10 z-0" />
            <div className="hidden lg:block absolute left-[-8px] top-[10%] w-[1px] h-[40px] bg-black/10 rotate-45 z-0" />
          </div>

          {/* 01 T-SHIRTS */}
          <CollectionCard 
            number="01" 
            title="T-SHIRTS" 
            subtitle="OVERSIZED • ESSENTIAL • GRAPHIC" 
            imageSrc="/images/collections/tshirt.png"
            className="md:col-span-1 xl:col-span-2 relative h-[450px] md:h-[500px] bg-[linear-gradient(to_right,#FFFFFF_45%,#EBE8E0_45%)]"
            imageClass="w-[90%] md:w-[100%] xl:w-[65%] h-[80%] xl:h-full object-cover object-right-bottom xl:object-right bottom-0 xl:top-0 right-[-4%] pointer-events-none"
          />
          
          {/* 02 SHIRTS */}
          <CollectionCard 
            number="02" 
            title="SHIRTS" 
            subtitle="CASUAL • FORMAL • TEXTURED" 
            imageSrc="/images/collections/shirt.png"
            dark={true}
            className="md:col-span-1 xl:col-span-2 relative h-[450px] md:h-[500px]"
            imageClass="w-[90%] xl:w-[65%] h-[75%] xl:h-full object-cover object-right-bottom xl:object-right bottom-0 xl:top-0 right-0 pointer-events-none"
          />
          
          {/* 03 TROUSERS */}
          <CollectionCard 
            number="03" 
            title="TROUSERS" 
            subtitle="CARGO • RELAXED • STRAIGHT" 
            imageSrc="/images/collections/bottom-wear.png"
            alignRight={true}
            className="md:col-span-2 xl:col-span-2 relative h-[450px] md:h-[500px] bg-[#F4F1EB]"
            imageClass="w-[90%] xl:w-[60%] h-[75%] xl:h-[110%] object-contain object-right-bottom xl:object-left-bottom right-[-5%] xl:right-auto xl:left-0 bottom-[-5%] pointer-events-none" 
          />

          {/* 04 FOOTWEAR */}
          <CollectionCard 
            number="04" 
            title="FOOTWEAR" 
            subtitle="SNEAKERS • CASUAL • EVERYDAY" 
            imageSrc="/images/collections/foot-wear.png"
            className="md:col-span-1 xl:col-span-2 relative h-[450px] md:h-[500px] bg-[#EBE8E0]"
            imageClass="w-[85%] xl:w-full h-[65%] xl:h-full object-contain object-right-bottom xl:object-right bottom-[-5%] xl:bottom-auto xl:top-0 right-0 pointer-events-none xl:scale-[1.1] origin-right" 
          />
          
          {/* 05 ACCESSORIES & 06 BAGS - Stacked inside two columns on desktop to fill the row */}
          <div className="md:col-span-1 xl:col-span-2 flex flex-col gap-6 lg:gap-8 xl:gap-10 h-full">
            {/* 05 ACCESSORIES */}
            <CollectionCard 
              number="05" 
              title="ACCESSORIES" 
              subtitle="STYLISH • MINIMAL • BOLD" 
              imageSrc="/images/collections/accessories.png"
              className="flex-1 min-h-[250px] bg-[#EBE8E0]"
              imageClass="w-[90%] xl:w-[60%] h-[90%] xl:h-[130%] object-cover object-right-bottom xl:object-right bottom-[-5%] xl:bottom-auto xl:top-[-10%] right-[-5%] pointer-events-none"
            />
            {/* 06 BAGS */}
            <CollectionCard 
              number="06" 
              title="BAGS" 
              subtitle="BACKPACKS • SLING • TOTES" 
              imageSrc="/images/collections/bags.png"
              className="flex-1 min-h-[250px] bg-[#F4F1EB]"
              imageClass="w-[90%] xl:w-[60%] h-[90%] xl:h-[130%] object-cover object-right-bottom xl:object-right-bottom bottom-[-5%] xl:bottom-auto xl:top-[-10%] right-[-5%] pointer-events-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
