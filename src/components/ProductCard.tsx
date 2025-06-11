
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Package, Shield, Thermometer, ChevronDown, ChevronUp } from "lucide-react";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Drops": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Syrups": return "bg-green-100 text-green-800 border-green-200";
      case "Sachets": return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "Tablets": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Jar": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 advanced-card cursor-pointer ${
        showDetails ? 'glow-blue-intense' : 'glow-blue'
      }`}
      onClick={handleCardClick}
    >
      {/* Stock indicator */}
      {product.inStock && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-green-500 text-white text-xs px-2 py-1 animate-pulse">
            In Stock
          </Badge>
        </div>
      )}

      {/* Batch number */}
      <div className="absolute top-3 right-3 z-10">
        <Badge variant="outline" className="text-xs bg-white/80 backdrop-blur-sm">
          {product.batchNumber}
        </Badge>
      </div>

      {/* Click indicator */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-300">
        {showDetails ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </div>

      <CardHeader className="p-4 relative">
        <div className="aspect-square relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Rating stars */}
        <div className="flex items-center space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-500 ml-1">(5.0)</span>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-grow space-y-3">
        <div className="flex items-center justify-between">
          <Badge className={getCategoryColor(product.category)} variant="secondary">
            {product.category}
          </Badge>
          <div className="text-xs text-gray-500 flex items-center space-x-1">
            <Package className="h-3 w-3" />
            <span>{product.packagingType.split(' ')[0]}</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-gray-900">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
          
          {/* Manufacturer */}
          <p className="text-xs text-gray-500 mb-2">by {product.manufacturer}</p>
          
          {/* Therapeutic class */}
          <div className="mb-3">
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
              {product.therapeuticClass}
            </span>
          </div>
          
          {/* Key uses */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.uses.slice(0, 2).map((use, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border"
              >
                {use}
              </span>
            ))}
            {product.uses.length > 2 && (
              <span className="text-xs text-gray-500">+{product.uses.length - 2} more</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="text-xs text-gray-500 flex items-center space-x-1">
            <Shield className="h-3 w-3" />
            <span>Quality Assured & Certified</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        {/* Detailed info section - only shows when clicked */}
        <div className={`w-full overflow-hidden transition-all duration-500 ${
          showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pharma-gradient-glass rounded-lg p-4 text-xs space-y-3 border border-blue-200">
            <div className="text-center mb-3">
              <h4 className="font-semibold text-blue-700 text-sm">Complete Product Information</h4>
            </div>
            
            <div>
              <strong className="text-blue-700">Composition:</strong>
              <p className="text-gray-600 mt-1">{product.composition}</p>
            </div>
            
            <div>
              <strong className="text-blue-700">Dosage Instructions:</strong>
              <p className="text-gray-600 mt-1">{product.dosage}</p>
            </div>
            
            <div>
              <strong className="text-blue-700">Storage Conditions:</strong>
              <p className="text-gray-600 flex items-center mt-1">
                <Thermometer className="h-3 w-3 mr-1" />
                {product.storageConditions}
              </p>
            </div>
            
            <div>
              <strong className="text-blue-700">Packaging Type:</strong>
              <p className="text-gray-600 mt-1">{product.packagingType}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-200">
              <div>
                <strong className="text-blue-700">Batch:</strong>
                <span className="text-gray-600 ml-1 text-xs">{product.batchNumber}</span>
              </div>
              <div>
                <strong className="text-blue-700">Expiry:</strong>
                <span className="text-gray-600 ml-1 text-xs">{product.expiryDate}</span>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-blue-600">Contact us for pricing and availability</p>
            </div>
          </div>
        </div>
        
        {/* Clear instruction when details are hidden */}
        {!showDetails && (
          <div className="w-full text-center">
            <p className="text-xs text-gray-500 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
              Click anywhere on the card to view detailed information
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
