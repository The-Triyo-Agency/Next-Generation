import Link from "next/link";
import CollectionCard from "@/components/collection/CollectionCard";

export default function CollectionsSection() {
  return (
    <section className="bg-[#F4F1EB] text-[#111111] pt-16 md:pt-24 lg:pt-36 xl:pt-48 pb-16 md:pb-24 px-4 md:px-8 lg:px-10 w-full overflow-hidden" id="collections" data-navbar-theme="light">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <span className="text-[#FF2400] font-black text-xs md:text-sm tracking-[0.2em]">02</span>
          <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-[#FF2400] to-[#111111]/10"></span>
          <h2 className="font-bold text-[10px] md:text-xs lg:text-sm tracking-[0.2em] uppercase text-[#111111]/70 m-0">
            Collections
          </h2>
        </div>

        {/* Main Grid Layout - Ultra Flexible & Spaced for Premium Feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          
          {/* Hero Section */}
          <div className="md:col-span-2 xl:col-span-2 relative h-[450px] md:h-[500px] flex flex-col justify-center lg:justify-start lg:pt-10 group z-10 border border-transparent">
            
            {/* Using scale-y to achieve the exact 'squeezed' tall font look of the reference */}
            <h1 className="font-oswald font-bold text-[55px] md:text-[85px] lg:text-[90px] xl:text-[105px] leading-[0.85] uppercase tracking-[-0.02em] relative z-20 mt-4 text-[#111111] scale-y-[1.25] origin-left w-2/3 md:w-full">
              <div className="block">CURATED</div>
              <div className="flex items-end">
                <span>FOR <span className="text-[#C8321F]">YOU</span></span>
                <span className="inline-block w-[14px] h-[14px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] bg-[#C8321F] ml-3 mb-[12px] lg:mb-[16px] scale-y-[0.8]"></span>
              </div>
            </h1>
            
            <div className="mt-12 md:mt-16 max-w-[200px] md:max-w-[280px] relative z-20">
              <p className="text-[13px] md:text-[15px] font-medium text-black/80 mb-8 leading-relaxed">
                Timeless pieces. Modern attitude.<br/>Explore our categories.
              </p>
              <div
                className="inline-flex items-center gap-4 text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase group/link text-[#111111]"
              >
                EXPLORE ALL
                <span className="text-[#C8321F] transition-transform duration-300 group-hover/link:translate-x-2">
                  <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute left-0 top-0 h-full w-[85%] md:w-[75%] lg:w-[60%] xl:w-[55%] bg-gradient-to-r from-[#F4F1EB] via-[#F4F1EB]/80 to-transparent z-[15] pointer-events-none" />

            {/* Hero Image - Curated.png */}
            <div className="absolute right-[-15%] sm:right-[-10%] md:right-[2%] lg:right-[15%] xl:right-[-3%] top-0 md:top-[5%] lg:top-[-2%] xl:top-[-2%] h-full md:h-[85%] lg:h-[85%] xl:h-[85%] w-[85%] md:w-[85%] lg:w-[50%] pointer-events-none z-10 flex justify-end">
              <img 
                src="/images/collections/curated.png" 
                alt="Curated For You" 
                className="h-full w-auto max-w-none object-contain object-right md:object-right-bottom transition-transform duration-700 ease-out group-hover:scale-[1.01]"
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
            textOverlayGradient="from-white via-white/75 to-transparent"
            imageClass="w-[95%] sm:w-[85%] md:w-[100%] xl:w-[65%] h-full object-cover object-right bottom-0 right-[-15%] sm:right-[-10%] md:right-[-10%] pointer-events-none"
          />
          
          {/* 02 SHIRTS */}
          <CollectionCard 
            number="02" 
            title="SHIRTS" 
            subtitle="CASUAL • FORMAL • TEXTURED" 
            imageSrc="/images/collections/shirt.png"
            dark={true}
            className="md:col-span-1 xl:col-span-2 relative h-[450px] md:h-[500px]"
            imageClass="w-[90%] sm:w-[80%] md:w-[100%] xl:w-[65%] h-full object-cover object-right bottom-0 right-[-15%] sm:right-[-10%] md:right-0 pointer-events-none"
          />
          
          {/* 03 TROUSERS */}
          <CollectionCard 
            number="03" 
            title="TROUSERS" 
            subtitle="CARGO • RELAXED • STRAIGHT" 
            imageSrc="/images/collections/bottom-wear.png"
            alignRight={true}
            className="md:col-span-2 xl:col-span-2 relative h-[450px] md:h-[500px] bg-[#F4F1EB]"
            imageClass="w-[90%] sm:w-[80%] xl:w-[60%] h-full xl:h-[110%] object-cover object-left md:object-left-bottom xl:object-left-bottom left-[-15%] sm:left-[-10%] md:left-[-5%] xl:left-0 pointer-events-none" 
          />

          {/* 04 FOOTWEAR */}
          <CollectionCard 
            number="04" 
            title="FOOTWEAR" 
            subtitle="SNEAKERS • CASUAL • EVERYDAY" 
            imageSrc="/images/collections/foot-wear.png"
            className="md:col-span-1 xl:col-span-2 relative h-[450px] md:h-[500px] bg-[#EBE8E0]"
            textOverlayGradient="none"
            imageClass="w-full h-full object-cover object-center bottom-0 md:bottom-[-5%] xl:bottom-auto xl:top-0 right-0 pointer-events-none xl:scale-[1.1] group-hover:scale-[1.05] xl:group-hover:scale-[1.15] origin-center" 
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
              gradientWidthClass="w-[95%] md:w-[90%] xl:w-[85%]"
              imageClass="w-[90%] xl:w-[70%] h-full object-cover object-right bottom-0 right-0 pointer-events-none"
            />
            {/* 06 BAGS */}
            <CollectionCard 
              number="06" 
              title="BAGS" 
              subtitle="BACKPACKS • SLING • TOTES" 
              imageSrc="/images/collections/bags.png"
              className="flex-1 min-h-[250px] bg-[#F4F1EB]"
              imageClass="w-[90%] xl:w-[70%] h-full object-cover object-right bottom-0 right-0 pointer-events-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
