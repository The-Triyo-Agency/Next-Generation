import { Metadata } from "next";
import BagsLookbook from "./BagsLookbook";

export const metadata: Metadata = {
  title: "Premium Bags & Accessories in Kumbakonam | Next Generation",
  description: "Explore the latest collection of premium bags in Kumbakonam. From sling bags and minimalist backpacks to traveler and college bags, discover standout pieces at Next Generation.",
};

export default function BagsPage() {
  return <BagsLookbook />;
}
