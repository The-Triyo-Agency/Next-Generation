import { Metadata } from "next";
import ShoesLookbook from "./ShoesLookbook";

export const metadata: Metadata = {
  title: "Premium Men's Shoes & Footwear in Kumbakonam | Next Generation",
  description: "Explore the latest collection of premium men's footwear in Kumbakonam. From baggy shoes and sneakers to loafers and boots, discover standout footwear at Next Generation.",
};

export default function ShoesPage() {
  return <ShoesLookbook />;
}
