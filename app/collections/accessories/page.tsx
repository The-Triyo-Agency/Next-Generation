import { Metadata } from "next";
import AccessoriesLookbook from "./AccessoriesLookbook";

export const metadata: Metadata = {
  title: "Premium Accessories in Kumbakonam | Next Generation",
  description: "Explore the latest collection of premium accessories in Kumbakonam. From coolers and jewellery to watches, belts and wallets, discover standout pieces at Next Generation.",
};

export default function AccessoriesPage() {
  return <AccessoriesLookbook />;
}
