import Image from 'next/image';

export default function AboutSection() {
  const differentiators = [
    {
      title: "Gen-Z Focused",
      description: "Curated for a generation that builds its own style."
    },
    {
      title: "Street-Led",
      description: "Bringing global streetwear energy into everyday wear."
    },
    {
      title: "Everyday Essentials",
      description: "Premium menswear and footwear, without the premium price."
    },
    {
      title: "Kumbakonam",
      description: "A definitive fashion destination built for our local community."
    }
  ];

  const brandHooks = [
    "CONTEMPORARY MENSWEAR, ROOTED IN KUMBAKONAM",
    "STREETWEAR ENERGY FOR EVERYDAY STYLE",
    "PREMIUM FOOTWEAR, CURATED FOR THE NEXT GENERATION",
    "ESSENTIALS CHOSEN WITH INTENTION",
    "GLOBAL STYLE, LOCALLY CURATED",
    "ACCESSORIES THAT COMPLETE THE LOOK"
  ];

  return (
    <section className="bg-[#111111] text-[#F7F5F0] pt-20 md:pt-28 pb-0 w-full relative" id="about" aria-labelledby="about-heading">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 w-full flex flex-col items-center">
        
        {/* COMPACT TWO-TONE EDITORIAL CARD */}
        <div className="relative w-full max-w-[1300px] mb-16 md:mb-24 flex flex-col md:flex-row">
          
          {/* Background Layer with overflow-hidden for rounded corners */}
          <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-[rgba(247,245,240,0.08)] bg-[#F7F5F0] shadow-2xl">
            {/* Background Split - GRAY */}
            <div className="absolute top-0 left-0 w-full h-[320px] md:h-full md:w-[45%] bg-[#D9D9D9] pointer-events-none z-0"></div>
          </div>

          {/* Character Image (Outside overflow-hidden so it can cross boundaries) */}
          <div className="absolute top-0 left-0 w-full h-[420px] md:h-full md:w-[48%] pointer-events-none z-10">
            <div className="relative w-full h-full">
              <Image 
                src="/images/hero/about-hero2.png" 
                alt="Next Generation menswear model wearing contemporary streetwear in Kumbakonam"
                fill
                className="object-contain object-bottom md:object-right-bottom scale-[1.05] md:scale-[1.0] origin-bottom md:translate-x-8 md:translate-y-8 lg:translate-y-10"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-20 w-full flex flex-col md:flex-row">
            
            {/* Spacer for Mobile Gray Area and Desktop Left Area */}
            <div className="w-full h-[320px] md:h-auto md:w-[45%] flex-shrink-0"></div>
            
            {/* Right Side / Bottom Content (Off-White Environment) */}
            <div className="w-full md:w-[55%] px-6 pb-12 pt-28 md:px-10 md:pt-16 md:pb-16 lg:p-20 flex flex-col justify-center">
              
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[#FF4E1F] font-black text-xs md:text-sm tracking-[0.2em]">01</span>
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-[#FF4E1F] to-[#111111]/10"></span>
                <h2 className="font-bold text-[10px] md:text-xs lg:text-sm tracking-[0.2em] uppercase text-[#111111]/70 m-0" id="about-heading">
                  Why Next Generation
                </h2>
              </div>
              
              <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#111111]/50 mb-8 font-bold">
                Kumbakonam, TN
              </div>

              <p className="text-base md:text-lg font-medium leading-[1.6] max-w-[26rem] text-[#111111]/80 mb-10 md:mb-12">
                Born in Kumbakonam, Next Generation fuses contemporary menswear with streetwear energy. We curate everyday essentials, premium footwear, and accessories for a generation that dresses with its own point of view.
              </p>
              
              <div className="text-[clamp(3.25rem,6.5vw,6rem)] font-black tracking-[-0.03em] uppercase leading-[0.85] mb-2 break-words text-[#111111]">
                BUILT<br />
                FOR THE<br />
                NEXT<span className="text-[#FF4E1F]">.</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* FOUR BRAND PRINCIPLES (OUTSIDE THE CARD) */}
        <div className="w-full max-w-[1300px] grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-12 mb-16 md:mb-20">
          {differentiators.map((item, i) => (
            <div key={i} className="group flex flex-col gap-3 relative pt-4 border-t border-[rgba(247,245,240,0.14)]">
              <div className="absolute top-[-1px] left-0 w-0 h-[1px] bg-[#FF4E1F] transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="text-[#FF4E1F] font-bold text-[10px] tracking-[0.2em]">
                0{i + 1}
              </span>
              <h3 className="font-black text-sm md:text-base lg:text-lg tracking-tight uppercase text-[#F7F5F0]">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-[#F7F5F0]/50 leading-relaxed font-medium group-hover:text-[#F7F5F0]/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* BRAND HOOK MARQUEE (FULL WIDTH) */}
      <div className="w-full bg-[#E5E3DB] py-6 md:py-8 overflow-hidden flex group">
        <div className="flex animate-marquee whitespace-nowrap items-center group-hover:[animation-play-state:paused]">
          {brandHooks.map((hook, i) => (
            <div key={`hook-1-${i}`} className="flex items-center">
              <span className="text-[#111111] font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">
                {hook}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF4E1F]"></span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
          {brandHooks.map((hook, i) => (
            <div key={`hook-2-${i}`} className="flex items-center">
              <span className="text-[#111111] font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">
                {hook}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF4E1F]"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
