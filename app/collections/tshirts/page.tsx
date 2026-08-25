import { Metadata } from "next";
import TshirtsLookbook from "./TshirtsLookbook";

export const metadata: Metadata = {
  title: "Premium Men's T-Shirts in Kumbakonam | Next Generation",
  description: "Explore the latest collection of premium men's t-shirts in Kumbakonam. From oversized essentials to signature graphics, discover standout men's fashion and clothing at Next Generation.",
};

export default function TshirtsPage() {
  return <TshirtsLookbook />;
}
