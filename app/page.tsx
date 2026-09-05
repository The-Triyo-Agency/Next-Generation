import ParallaxHero from "@/components/hero/ParallaxHero";
import AboutSection from "@/components/home/AboutSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import StoreSection from "@/components/home/StoreSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <ParallaxHero />
      <AboutSection />
      <CollectionsSection />
      <StoreSection />
      <ContactSection />
    </main>
  );
}

