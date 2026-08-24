import ParallaxHero from "@/components/hero/ParallaxHero";
import AboutSection from "@/components/home/AboutSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import StoreSection from "@/components/home/StoreSection";
import ContactSection from "@/components/home/ContactSection";
import IntroAnimation from "@/components/hero/IntroAnimation";

export default function Home() {
  return (
    <main>
      <IntroAnimation />
      <ParallaxHero />
      <AboutSection />
      <CollectionsSection />
      <StoreSection />
      <ContactSection />
    </main>
  );
}
