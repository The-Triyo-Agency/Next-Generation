export type SubCategory = {
  slug: string;
  name: string;
  description: string;
  image?: string; 
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  spanClass: string;
  imagePosition: string;
  subcategories: SubCategory[];
};

export const collections: Category[] = [
  {
    slug: "shirts",
    name: "Shirts",
    description: "Premium shirts for every occasion.",
    image: "/images/collections/shirt.jpg",
    spanClass: "col-span-1 md:col-span-7 h-[60vh] md:h-[70vh]",
    imagePosition: "object-center",
    subcategories: [
      { slug: "striped-shirts", name: "Striped Shirts", description: "Classic and modern striped shirts." },
      { slug: "denim-shirts", name: "Denim Shirts", description: "Rugged, stylish denim shirts for a streetwear edge." }
    ]
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    description: "Everyday essentials and oversized fits.",
    image: "/images/collections/tshirt.jpg",
    spanClass: "col-span-1 md:col-span-5 h-[50vh] md:h-[70vh]",
    imagePosition: "object-center",
    subcategories: [
      { slug: "oversized", name: "Oversized T-Shirts", description: "Comfortable, drop-shoulder oversized fits." },
      { slug: "acid-wash", name: "Acid Wash T-Shirts", description: "Vintage-inspired acid wash finishes." }
    ]
  },
  {
    slug: "bottom-wear",
    name: "Bottom Wear",
    description: "Jeans, cargos, and trousers.",
    image: "/images/collections/bottom-wear.jpeg",
    spanClass: "col-span-1 md:col-span-5 h-[50vh] md:h-[60vh]",
    imagePosition: "object-center",
    subcategories: [
      { slug: "cargo-pants", name: "Cargo Pants", description: "Utility cargo pants with multiple pockets." },
      { slug: "baggy-jeans", name: "Baggy Jeans", description: "Relaxed, wide-leg denim." }
    ]
  },
  {
    slug: "footwear",
    name: "Footwear",
    description: "Sneakers, shoes, and casual footwear.",
    image: "/images/collections/foot-wear.jpeg",
    spanClass: "col-span-1 md:col-span-7 h-[60vh] md:h-[60vh]",
    imagePosition: "object-center",
    subcategories: []
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Chains, keychains, watches and more.",
    image: "/images/collections/accessories.jpeg",
    spanClass: "col-span-1 md:col-span-6 h-[50vh] md:h-[60vh]",
    imagePosition: "object-center",
    subcategories: []
  },
  {
    slug: "bags",
    name: "Bags",
    description: "Backpacks and streetwear bags.",
    image: "/images/collections/bags.jpeg",
    spanClass: "col-span-1 md:col-span-6 h-[50vh] md:h-[60vh]",
    imagePosition: "object-center",
    subcategories: []
  }
];
