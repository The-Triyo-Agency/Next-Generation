import AboutSection from "@/components/home/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Next Generation, Kumbakonam's premium Gen-Z men's fashion store.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <div className="pt-24 md:pt-32">
        <AboutSection />
      </div>
    </main>
  );
}
