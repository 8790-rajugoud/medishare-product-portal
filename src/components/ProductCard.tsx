
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Info } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      size: product.size,
      price: product.price,
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Drops": return "bg-blue-100 text-blue-800";
      case "Syrups": return "bg-green-100 text-green-800";
      case "Sachets": return "bg-indigo-100 text-indigo-800";
      case "Tablets": return "bg-purple-100 text-purple-800";
      case "Jar": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="p-4">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <Badge className={getCategoryColor(product.category)} variant="secondary">
            {product.category}
          </Badge>
          <span className="text-sm text-gray-500">{product.size}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="text-xl font-bold text-medical-600">₹{product.price}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          onClick={handleAddToCart}
          className="flex-1 medical-gradient text-white hover:opacity-90"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" size="sm">
          <Info className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
