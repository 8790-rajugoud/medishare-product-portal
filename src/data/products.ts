
export interface Product {
  id: string;
  name: string;
  category: "Drops" | "Syrups" | "Sachets" | "Tablets" | "Jar";
  size: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  // Drops (15ML unless specified)
  {
    id: "axoleo-drops",
    name: "Axoleo Drops",
    category: "Drops",
    size: "15ML",
    description: "Premium nutritional drops for pediatric care",
    price: 125,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: "ferol-drops",
    name: "Ferol Drops",
    category: "Drops",
    size: "15ML",
    description: "Iron supplement drops for anemia treatment",
    price: 110,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: "carmipep-drops",
    name: "Carmipep Drops",
    category: "Drops",
    size: "15ML",
    description: "Digestive enzyme drops for infant care",
    price: 95,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: "zx-24-drops",
    name: "Zx-24 Drops",
    category: "Drops",
    size: "15ML",
    description: "Multi-vitamin drops for overall health",
    price: 140,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: "zinka-drops",
    name: "Zinka Drops",
    category: "Drops",
    size: "15ML",
    description: "Zinc supplement drops for immune support",
    price: 85,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: "leomol-drops",
    name: "Leomol Drops",
    category: "Drops",
    size: "15ML",
    description: "Pain relief drops for infants",
    price: 75,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: "excel-d3-drops",
    name: "Excel-D3 Drops",
    category: "Drops",
    size: "30ML",
    description: "Vitamin D3 supplement drops",
    price: 180,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },
  {
    id: "onting-drops",
    name: "Onting Drops",
    category: "Drops",
    size: "30ML",
    description: "Anti-nausea drops for motion sickness",
    price: 165,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop"
  },

  // Syrups - 60ML
  {
    id: "zinka-syp-60",
    name: "Zinka Syp",
    category: "Syrups",
    size: "60ML",
    description: "Zinc supplement syrup for children",
    price: 120,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "leomol-m-60",
    name: "Leomol-M",
    category: "Syrups",
    size: "60ML",
    description: "Pain relief syrup with mefenamic acid",
    price: 95,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "leomol-mds-60",
    name: "Leomol-MDS",
    category: "Syrups",
    size: "60ML",
    description: "Pediatric pain and fever relief syrup",
    price: 105,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "leomol-120-60",
    name: "Leomol-120",
    category: "Syrups",
    size: "60ML",
    description: "Paracetamol syrup 120mg/5ml",
    price: 85,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "leomol-250-60",
    name: "Leomol-250",
    category: "Syrups",
    size: "60ML",
    description: "Paracetamol syrup 250mg/5ml",
    price: 115,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },

  // Syrups - 100ML
  {
    id: "carmipep-syp-100",
    name: "Carmipep Syp",
    category: "Syrups",
    size: "100ML",
    description: "Digestive enzyme syrup for better digestion",
    price: 145,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "zx-24-syp-100",
    name: "Zx-24 Syp",
    category: "Syrups",
    size: "100ML",
    description: "Multi-vitamin syrup for children",
    price: 185,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "axoleo-syp-100",
    name: "Axoleo Syp",
    category: "Syrups",
    size: "100ML",
    description: "Nutritional syrup for growth support",
    price: 175,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "excel-d3-syp-100",
    name: "Excel-D3 Syp",
    category: "Syrups",
    size: "100ML",
    description: "Vitamin D3 syrup for bone health",
    price: 220,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },

  // Syrups - 200ML
  {
    id: "carmipep-syp-200",
    name: "Carmipep Syp",
    category: "Syrups",
    size: "200ML",
    description: "Digestive enzyme syrup family pack",
    price: 265,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "zx-24-syp-200",
    name: "Zx-24 Syp",
    category: "Syrups",
    size: "200ML",
    description: "Multi-vitamin syrup family pack",
    price: 335,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "ferol-syp-200",
    name: "Ferol Syp",
    category: "Syrups",
    size: "200ML",
    description: "Iron supplement syrup for anemia",
    price: 285,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "calcipro-syp-200",
    name: "Calcipro Syp",
    category: "Syrups",
    size: "200ML",
    description: "Calcium supplement syrup",
    price: 295,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "calcipro-p-syp-200",
    name: "Calcipro-P Syp",
    category: "Syrups",
    size: "200ML",
    description: "Calcium with phosphorus syrup",
    price: 315,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },

  // Sachets
  {
    id: "leoarg",
    name: "Leoarg",
    category: "Sachets",
    size: "Pack of 10",
    description: "L-Arginine supplement sachets",
    price: 225,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
  },
  {
    id: "leoarg-p",
    name: "Leoarg-P",
    category: "Sachets",
    size: "Pack of 10",
    description: "L-Arginine with probiotics sachets",
    price: 275,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
  },
  {
    id: "srl",
    name: "SRL",
    category: "Sachets",
    size: "Pack of 10",
    description: "Oral rehydration salt sachets",
    price: 85,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
  },
  {
    id: "srl-z",
    name: "SRL-Z",
    category: "Sachets",
    size: "Pack of 10",
    description: "ORS with zinc sachets",
    price: 105,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
  },
  {
    id: "bestimune-sachets",
    name: "Bestimune",
    category: "Sachets",
    size: "Pack of 10",
    description: "Immune booster sachets",
    price: 195,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
  },

  // Tablets
  {
    id: "carmipep-tablets",
    name: "Carmipep",
    category: "Tablets",
    size: "Pack of 10",
    description: "Digestive enzyme tablets",
    price: 65,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "zx-24-tablets",
    name: "Zx-24",
    category: "Tablets",
    size: "Pack of 10",
    description: "Multi-vitamin tablets",
    price: 155,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "zinka-tablets",
    name: "Zinka",
    category: "Tablets",
    size: "Pack of 10",
    description: "Zinc supplement tablets",
    price: 75,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "ferol-tablets",
    name: "Ferol",
    category: "Tablets",
    size: "Pack of 10",
    description: "Iron supplement tablets",
    price: 95,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "calcipro-tablets",
    name: "Calcipro",
    category: "Tablets",
    size: "Pack of 10",
    description: "Calcium supplement tablets",
    price: 85,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "onting-md",
    name: "Onting-MD",
    category: "Tablets",
    size: "Pack of 10",
    description: "Anti-nausea tablets",
    price: 125,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "leomol-650",
    name: "Leomol-650",
    category: "Tablets",
    size: "Pack of 10",
    description: "Paracetamol 650mg tablets",
    price: 45,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },
  {
    id: "bestimune-tablets",
    name: "Bestimune",
    category: "Tablets",
    size: "Pack of 10",
    description: "Immune booster tablets",
    price: 175,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"
  },

  // Jar
  {
    id: "bestimune-jar",
    name: "Bestimune",
    category: "Jar",
    size: "200g",
    description: "Immune booster powder jar",
    price: 485,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"
  }
];
