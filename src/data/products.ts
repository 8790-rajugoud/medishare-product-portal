
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  size: string;
  image: string;
  manufacturer: string;
  ingredients: string[];
  uses: string[];
  dosage: string;
  ageGroup: string;
  inStock: boolean;
  batchNumber: string;
  expiryDate: string;
  composition: string;
  packagingType: string;
  storageConditions: string;
  therapeuticClass: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Iron Plus Syrup",
    category: "Syrups",
    description: "High-quality iron supplement syrup for treating iron deficiency anemia. Enhanced with vitamins for better absorption.",
    price: 125,
    size: "200ml",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    manufacturer: "MedPharma Industries",
    ingredients: ["Ferrous Sulfate", "Vitamin C", "Folic Acid", "Vitamin B12"],
    uses: ["Iron deficiency anemia", "Nutritional support", "Pregnancy support"],
    dosage: "Adults: 10ml twice daily, Children: 5ml twice daily",
    ageGroup: "Adults & Children above 6 months",
    inStock: true,
    batchNumber: "IP2024001",
    expiryDate: "Dec 2026",
    composition: "Each 10ml contains Ferrous Sulfate 200mg, Vitamin C 75mg",
    packagingType: "Glass bottle with measuring cup",
    storageConditions: "Store in cool, dry place below 25°C",
    therapeuticClass: "Hematological Preparations"
  },
  {
    id: 2,
    name: "Vitamin D3 Drops",
    category: "Drops",
    description: "Essential vitamin D3 supplement drops for bone health and immune system support. Specially formulated for infants and children.",
    price: 85,
    size: "15ml",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
    manufacturer: "MedPharma Industries",
    ingredients: ["Cholecalciferol (Vitamin D3)", "Medium Chain Triglycerides"],
    uses: ["Vitamin D deficiency", "Bone health", "Immune support", "Rickets prevention"],
    dosage: "Infants: 2 drops daily, Children: 4 drops daily",
    ageGroup: "Infants & Children",
    inStock: true,
    batchNumber: "VD2024002",
    expiryDate: "Jan 2027",
    composition: "Each ml contains 1000 IU Vitamin D3",
    packagingType: "Dark glass bottle with dropper",
    storageConditions: "Store in refrigerator, protect from light",
    therapeuticClass: "Vitamin Supplements"
  },
  {
    id: 3,
    name: "Protein Plus Powder",
    category: "Sachets",
    description: "Complete protein supplement powder with essential amino acids. Perfect for nutritional support and muscle development.",
    price: 15,
    size: "30g sachet",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    manufacturer: "MedPharma Industries",
    ingredients: ["Whey Protein", "Casein", "Essential Amino Acids", "Vitamins", "Minerals"],
    uses: ["Protein deficiency", "Muscle development", "Post-workout recovery", "Nutritional support"],
    dosage: "Mix 1 sachet in 200ml water or milk, twice daily",
    ageGroup: "Adults & Children above 12 years",
    inStock: true,
    batchNumber: "PP2024003",
    expiryDate: "Nov 2025",
    composition: "Each sachet contains 20g protein, vitamins A, C, E",
    packagingType: "Aluminum foil sachets",
    storageConditions: "Store in cool, dry place",
    therapeuticClass: "Nutritional Supplements"
  },
  {
    id: 4,
    name: "Calcium Complex Tablets",
    category: "Tablets",
    description: "Advanced calcium complex tablets with Vitamin D3 and magnesium for optimal bone health and calcium absorption.",
    price: 95,
    size: "60 tablets",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
    manufacturer: "MedPharma Industries",
    ingredients: ["Calcium Carbonate", "Vitamin D3", "Magnesium", "Zinc"],
    uses: ["Osteoporosis prevention", "Bone health", "Calcium deficiency", "Dental health"],
    dosage: "1-2 tablets daily with meals",
    ageGroup: "Adults",
    inStock: true,
    batchNumber: "CC2024004",
    expiryDate: "Oct 2026",
    composition: "Each tablet contains 500mg Calcium, 200 IU Vitamin D3",
    packagingType: "Blister pack",
    storageConditions: "Store below 30°C, protect from moisture",
    therapeuticClass: "Bone Health Supplements"
  },
  {
    id: 5,
    name: "Multivitamin Powder",
    category: "Jar",
    description: "Comprehensive multivitamin and mineral powder supplement. Contains essential nutrients for overall health and wellness.",
    price: 220,
    size: "200g jar",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=400&fit=crop",
    manufacturer: "MedPharma Industries",
    ingredients: ["Vitamins A, B, C, D, E", "Iron", "Zinc", "Calcium", "Magnesium", "Antioxidants"],
    uses: ["Nutritional deficiency", "Immune support", "Energy boost", "Overall wellness"],
    dosage: "Mix 1 teaspoon in water or juice, once daily",
    ageGroup: "Adults & Children above 8 years",
    inStock: true,
    batchNumber: "MV2024005",
    expiryDate: "Sep 2026",
    composition: "Complete vitamin-mineral complex per serving",
    packagingType: "HDPE jar with measuring spoon",
    storageConditions: "Store in cool, dry place, tightly closed",
    therapeuticClass: "Multivitamin Preparations"
  },
  {
    id: 6,
    name: "Omega-3 Capsules",
    category: "Tablets",
    description: "Premium omega-3 fatty acid capsules sourced from marine fish oil. Supports heart and brain health.",
    price: 180,
    size: "90 capsules",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8743?w=400&h=400&fit=crop",
    manufacturer: "MedPharma Industries",
    ingredients: ["Fish Oil", "EPA", "DHA", "Vitamin E"],
    uses: ["Heart health", "Brain function", "Joint health", "Eye health"],
    dosage: "1-2 capsules daily with meals",
    ageGroup: "Adults",
    inStock: true,
    batchNumber: "OM2024006",
    expiryDate: "Aug 2026",
    composition: "Each capsule contains 1000mg fish oil with 300mg EPA/DHA",
    packagingType: "Soft gelatin capsules in bottle",
    storageConditions: "Store in cool place, protect from light",
    therapeuticClass: "Cardiovascular Health"
  }
];
