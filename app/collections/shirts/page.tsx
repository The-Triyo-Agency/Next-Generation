import { Metadata } from "next";
import ShirtsLookbook from "./ShirtsLookbook";

export const metadata: Metadata = {
  title: "Premium Men's Shirts in Kumbakonam | Next Generation",
  description: "Explore the latest collection of premium men's shirts in Kumbakonam. From casual shirts for men to everyday essentials, discover standout men's fashion and clothing at Next Generation.",
};

export default function ShirtsPage() {
  return <ShirtsLookbook />;
}
