
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const handleRequestQuote = () => {
    toast({
      title: "Quote Requested",
      description: "Your quote request has been sent. We'll contact you within 24 hours with pricing and availability.",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">
              Start adding some pharmaceutical products to your cart to see them here.
            </p>
            <Link to="/products">
              <Button className="medical-gradient text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl text-medical-100">
              Review your selected products and request a quote
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Cart Items ({cartItems.length})</h2>
                <Button variant="outline" onClick={handleClearCart} className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
              
              {cartItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0"></div>
                      
                      <div className="flex-grow">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600">{item.category} • {item.size}</p>
                        <p className="text-medical-600 font-semibold">₹{item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="w-20 text-center"
                          min="1"
                        />
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x {item.quantity}</span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-medical-600">₹{getTotalPrice()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={handleRequestQuote}
                      className="w-full medical-gradient text-white"
                    >
                      Request Quote
                    </Button>
                    
                    <Link to="/products" className="block">
                      <Button variant="outline" className="w-full">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="mt-6 p-4 bg-medical-50 rounded-lg">
                    <p className="text-sm text-medical-800">
                      <strong>Note:</strong> Prices are indicative. Final pricing will be provided in your personalized quote based on quantity and delivery requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
