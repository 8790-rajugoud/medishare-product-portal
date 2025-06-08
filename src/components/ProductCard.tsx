
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Star, Package, Users, Clock, Calendar, Shield, Thermometer } from "lucide-react";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isHovered ? 'scale-105' : ''
      } bg-gradient-to-br from-white via-gray-50 to-white border-2 hover:border-medical-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

      <CardHeader className="p-4 relative">
        <div className="aspect-square relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover:shadow-lg transition-all duration-500">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Product info overlay */}
          <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="text-white text-center p-4 space-y-2">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{product.ageGroup}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Package className="h-4 w-4" />
                  <span>{product.size}</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-1 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Exp: {product.expiryDate}</span>
              </div>
            </div>
          </div>
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
          <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-medical-600 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
          
          {/* Manufacturer */}
          <p className="text-xs text-gray-500 mb-2">by {product.manufacturer}</p>
          
          {/* Therapeutic class */}
          <div className="mb-3">
            <span className="text-xs bg-medical-50 text-medical-700 px-2 py-1 rounded-full border border-medical-200">
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

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-medical-600">₹{product.price}</div>
          <div className="text-xs text-gray-500 flex items-center space-x-1">
            <Shield className="h-3 w-3" />
            <span>Quality Assured</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="flex gap-2 w-full">
          <Button 
            variant="outline" 
            className="flex-1 hover:bg-medical-50 hover:border-medical-300 transition-all duration-300"
          >
            <Info className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
            className="hover:bg-medical-50 hover:border-medical-300 transition-all duration-300"
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Detailed info toggle */}
        <div className={`w-full overflow-hidden transition-all duration-500 ${
          showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-2 border border-gray-200">
            <div>
              <strong className="text-medical-700">Composition:</strong>
              <p className="text-gray-600">{product.composition}</p>
            </div>
            <div>
              <strong className="text-medical-700">Dosage:</strong>
              <p className="text-gray-600">{product.dosage}</p>
            </div>
            <div>
              <strong className="text-medical-700">Storage:</strong>
              <p className="text-gray-600 flex items-center">
                <Thermometer className="h-3 w-3 mr-1" />
                {product.storageConditions}
              </p>
            </div>
            <div>
              <strong className="text-medical-700">Packaging:</strong>
              <p className="text-gray-600">{product.packagingType}</p>
            </div>
            <div>
              <strong className="text-medical-700">Batch:</strong>
              <span className="text-gray-600 ml-1">{product.batchNumber}</span>
              <strong className="text-medical-700 ml-3">Expiry:</strong>
              <span className="text-gray-600 ml-1">{product.expiryDate}</span>
            </div>
          </div>
        </div>
      </CardFooter>

      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-medical-400 via-medical-500 to-medical-600 p-[2px]">
          <div className="w-full h-full bg-white rounded-lg"></div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
