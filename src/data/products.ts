
export interface Product {
  id: string;
  name: string;
  category: "Drops" | "Syrups" | "Sachets" | "Tablets" | "Jar";
  size: string;
  description: string;
  detailedDescription: string;
  price: number;
  image: string;
  ingredients: string[];
  uses: string[];
  dosage: string;
  ageGroup: string;
  manufacturer: string;
  inStock: boolean;
}

export const products: Product[] = [
  // Drops (15ML unless specified)
  {
    id: "axoleo-drops",
    name: "Axoleo Drops",
    category: "Drops",
    size: "15ML",
    description: "Premium nutritional drops for pediatric care",
    detailedDescription: "Axoleo Drops is a comprehensive nutritional supplement specially formulated for infants and children. Contains essential vitamins and minerals for healthy growth and development.",
    price: 125,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop&q=80",
    ingredients: ["Vitamin A", "Vitamin D3", "Vitamin E", "Omega-3 Fatty Acids"],
    uses: ["Nutritional deficiency", "Growth support", "Immune system strengthening"],
    dosage: "0.5ml twice daily or as directed by physician",
    ageGroup: "0-12 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "ferol-drops",
    name: "Ferol Drops",
    category: "Drops",
    size: "15ML",
    description: "Iron supplement drops for anemia treatment",
    detailedDescription: "Ferol Drops provides essential iron supplementation for treating and preventing iron deficiency anemia in infants and children.",
    price: 110,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=500&fit=crop&q=80",
    ingredients: ["Ferrous Fumarate", "Folic Acid", "Vitamin C"],
    uses: ["Iron deficiency anemia", "Growth support", "Energy boost"],
    dosage: "0.5ml once daily or as directed by physician",
    ageGroup: "6 months - 12 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "carmipep-drops",
    name: "Carmipep Drops",
    category: "Drops",
    size: "15ML",
    description: "Digestive enzyme drops for infant care",
    detailedDescription: "Carmipep Drops contains digestive enzymes that help improve digestion and reduce colic in infants and young children.",
    price: 95,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=500&fit=crop&q=80",
    ingredients: ["Pepsin", "Diastase", "Carminative agents"],
    uses: ["Digestive disorders", "Colic relief", "Appetite improvement"],
    dosage: "5-10 drops before meals",
    ageGroup: "0-5 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "zx-24-drops",
    name: "Zx-24 Drops",
    category: "Drops",
    size: "15ML",
    description: "Multi-vitamin drops for overall health",
    detailedDescription: "Zx-24 Drops is a comprehensive multivitamin formulation providing 24 essential nutrients for optimal child development.",
    price: 140,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=500&fit=crop&q=80",
    ingredients: ["Multivitamins", "Minerals", "Antioxidants"],
    uses: ["Nutritional support", "Immune boost", "Overall wellness"],
    dosage: "0.5ml daily or as directed",
    ageGroup: "0-12 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "zinka-drops",
    name: "Zinka Drops",
    category: "Drops",
    size: "15ML",
    description: "Zinc supplement drops for immune support",
    detailedDescription: "Zinka Drops provides essential zinc supplementation to boost immune system and support healthy growth in children.",
    price: 85,
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=500&h=500&fit=crop&q=80",
    ingredients: ["Zinc Sulphate", "Vitamin C"],
    uses: ["Immune support", "Wound healing", "Growth support"],
    dosage: "0.5ml once daily",
    ageGroup: "6 months - 12 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "leomol-drops",
    name: "Leomol Drops",
    category: "Drops",
    size: "15ML",
    description: "Pain relief drops for infants",
    detailedDescription: "Leomol Drops provides safe and effective pain relief and fever reduction for infants and young children.",
    price: 75,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=500&h=500&fit=crop&q=80",
    ingredients: ["Paracetamol"],
    uses: ["Fever reduction", "Pain relief", "Teething discomfort"],
    dosage: "As per age and weight chart",
    ageGroup: "3 months - 2 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "excel-d3-drops",
    name: "Excel-D3 Drops",
    category: "Drops",
    size: "30ML",
    description: "Vitamin D3 supplement drops",
    detailedDescription: "Excel-D3 Drops provides high-potency Vitamin D3 for bone development and calcium absorption in growing children.",
    price: 180,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=500&fit=crop&q=80",
    ingredients: ["Cholecalciferol (Vitamin D3)"],
    uses: ["Bone development", "Calcium absorption", "Rickets prevention"],
    dosage: "400 IU daily or as directed",
    ageGroup: "0-18 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "onting-drops",
    name: "Onting Drops",
    category: "Drops",
    size: "30ML",
    description: "Anti-nausea drops for motion sickness",
    detailedDescription: "Onting Drops effectively prevents and treats nausea and vomiting associated with motion sickness and other conditions.",
    price: 165,
    image: "https://images.unsplash.com/photo-1584362917165-526738dd3aeb?w=500&h=500&fit=crop&q=80",
    ingredients: ["Ondansetron"],
    uses: ["Motion sickness", "Nausea relief", "Vomiting prevention"],
    dosage: "As directed by physician",
    ageGroup: "2+ years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },

  // Syrups - 60ML
  {
    id: "zinka-syp-60",
    name: "Zinka Syp",
    category: "Syrups",
    size: "60ML",
    description: "Zinc supplement syrup for children",
    detailedDescription: "Zinka Syrup is a pleasant-tasting zinc supplement that supports immune function and promotes healthy growth in children.",
    price: 120,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=500&fit=crop&q=80",
    ingredients: ["Zinc Gluconate", "Natural flavoring"],
    uses: ["Immune support", "Appetite improvement", "Growth enhancement"],
    dosage: "5ml twice daily",
    ageGroup: "1-12 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "leomol-m-60",
    name: "Leomol-M",
    category: "Syrups",
    size: "60ML",
    description: "Pain relief syrup with mefenamic acid",
    detailedDescription: "Leomol-M combines paracetamol with mefenamic acid for effective pain relief and anti-inflammatory action.",
    price: 95,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=500&h=500&fit=crop&q=80",
    ingredients: ["Paracetamol", "Mefenamic Acid"],
    uses: ["Pain relief", "Fever reduction", "Anti-inflammatory"],
    dosage: "As per age chart",
    ageGroup: "2+ years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "leomol-mds-60",
    name: "Leomol-MDS",
    category: "Syrups",
    size: "60ML",
    description: "Pediatric pain and fever relief syrup",
    detailedDescription: "Leomol-MDS is specially formulated for children with precise dosing for safe and effective fever and pain management.",
    price: 105,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=500&h=500&fit=crop&q=80",
    ingredients: ["Paracetamol", "Phenylephrine"],
    uses: ["Fever reduction", "Pain relief", "Cold symptoms"],
    dosage: "As per weight chart",
    ageGroup: "6 months - 12 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "leomol-120-60",
    name: "Leomol-120",
    category: "Syrups",
    size: "60ML",
    description: "Paracetamol syrup 120mg/5ml",
    detailedDescription: "Leomol-120 provides accurate paracetamol dosing for effective fever and pain relief in children.",
    price: 85,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=500&h=500&fit=crop&q=80",
    ingredients: ["Paracetamol 120mg/5ml"],
    uses: ["Fever reduction", "Pain relief", "Post-vaccination fever"],
    dosage: "5ml as needed",
    ageGroup: "1-6 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },
  {
    id: "leomol-250-60",
    name: "Leomol-250",
    category: "Syrups",
    size: "60ML",
    description: "Paracetamol syrup 250mg/5ml",
    detailedDescription: "Leomol-250 offers higher strength paracetamol for older children requiring more potent fever and pain relief.",
    price: 115,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=500&h=500&fit=crop&q=80",
    ingredients: ["Paracetamol 250mg/5ml"],
    uses: ["Fever reduction", "Pain relief", "Headache"],
    dosage: "5ml as needed",
    ageGroup: "6-12 years",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },

  // Continue with remaining products...
  {
    id: "carmipep-syp-100",
    name: "Carmipep Syp",
    category: "Syrups",
    size: "100ML",
    description: "Digestive enzyme syrup for better digestion",
    detailedDescription: "Carmipep Syrup contains comprehensive digestive enzymes to improve digestion and reduce gastrointestinal discomfort.",
    price: 145,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=500&fit=crop&q=80",
    ingredients: ["Pepsin", "Diastase", "Papain", "Simethicone"],
    uses: ["Digestive disorders", "Bloating relief", "Appetite enhancement"],
    dosage: "5-10ml before meals",
    ageGroup: "All ages",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },

  // Sachets
  {
    id: "leoarg",
    name: "Leoarg",
    category: "Sachets",
    size: "Pack of 10",
    description: "L-Arginine supplement sachets",
    detailedDescription: "Leoarg sachets contain high-quality L-Arginine to support cardiovascular health and athletic performance.",
    price: 225,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=500&fit=crop&q=80",
    ingredients: ["L-Arginine", "Natural flavoring"],
    uses: ["Cardiovascular support", "Athletic performance", "Wound healing"],
    dosage: "1 sachet daily in water",
    ageGroup: "Adults",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },

  // Tablets
  {
    id: "carmipep-tablets",
    name: "Carmipep",
    category: "Tablets",
    size: "Pack of 10",
    description: "Digestive enzyme tablets",
    detailedDescription: "Carmipep tablets provide comprehensive digestive enzyme support for improved digestion and nutrient absorption.",
    price: 65,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=500&fit=crop&q=80",
    ingredients: ["Pepsin", "Diastase", "Pancreatin"],
    uses: ["Digestive disorders", "Enzyme deficiency", "Bloating"],
    dosage: "1 tablet before meals",
    ageGroup: "Adults",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  },

  // Jar
  {
    id: "bestimune-jar",
    name: "Bestimune",
    category: "Jar",
    size: "200g",
    description: "Immune booster powder jar",
    detailedDescription: "Bestimune powder is a comprehensive immune system booster containing vitamins, minerals, and antioxidants for optimal health.",
    price: 485,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=500&fit=crop&q=80",
    ingredients: ["Vitamin C", "Zinc", "Echinacea", "Probiotics"],
    uses: ["Immune support", "Overall wellness", "Recovery aid"],
    dosage: "1 scoop daily in milk/water",
    ageGroup: "All ages",
    manufacturer: "MedPharma Ltd.",
    inStock: true
  }
];
