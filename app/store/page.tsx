import StoreSection from "@/components/home/StoreSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Our Store",
  description: "Visit Next Generation in Kumbakonam. Get directions, store hours, and contact details for our men's fashion store located at KRC Complex, Anna Nagar.",
};

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      <div className="pt-24 pb-0 md:pt-32">
        <StoreSection />
      </div>
    </main>
  );
}
