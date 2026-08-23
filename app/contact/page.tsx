import ContactSection from "@/components/home/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Next Generation in Kumbakonam. Have a question about our men's fashion collections? Message us directly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      <div className="pt-24 pb-0 md:pt-32 h-screen flex flex-col justify-center">
        <ContactSection />
      </div>
    </main>
  );
}
