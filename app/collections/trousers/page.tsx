import { Metadata } from "next";
import TrousersLookbook from "./TrousersLookbook";

export const metadata: Metadata = {
  title: "Premium Men's Trousers & Pants in Kumbakonam | Next Generation",
  description: "Explore the latest collection of premium men's trousers in Kumbakonam. From baggy jeans to cargo pants and Korean fits, discover standout men's bottoms at Next Generation.",
};

export default function TrousersPage() {
  return <TrousersLookbook />;
}
