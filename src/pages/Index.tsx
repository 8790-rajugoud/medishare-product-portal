
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Users, Award, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.8), rgba(2, 132, 199, 0.8)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=600&fit=crop')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Professional Healthcare Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-medical-100">
            Leading pharmaceutical distribution company serving hospitals, pharmacies, and clinics with premium quality medical products.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-medical-600 hover:bg-medical-50 text-lg px-8 py-4">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Healthcare Partner
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With years of experience in pharmaceutical distribution, we provide comprehensive healthcare solutions 
              including drops, syrups, tablets, sachets, and specialized medical products to healthcare providers nationwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-medical-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                <p className="text-gray-600">All products meet stringent pharmaceutical standards and regulatory requirements.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-medical-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Healthcare Focus</h3>
                <p className="text-gray-600">Specialized in serving hospitals, pharmacies, clinics, and healthcare professionals.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-medical-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Certified Products</h3>
                <p className="text-gray-600">Comprehensive range of drops, syrups, tablets, sachets, and jars for all medical needs.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-medical-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Reliable Distribution</h3>
                <p className="text-gray-600">Efficient supply chain management ensuring timely delivery to your facility.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive range of pharmaceutical products for all your healthcare needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Drops", count: "8 products", color: "bg-blue-500" },
              { name: "Syrups", count: "13 products", color: "bg-green-500" },
              { name: "Sachets", count: "5 products", color: "bg-yellow-500" },
              { name: "Tablets", count: "8 products", color: "bg-purple-500" },
              { name: "Jar", count: "1 product", color: "bg-orange-500" },
            ].map((category) => (
              <Card key={category.name} className="text-center p-6 card-hover cursor-pointer">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{category.name[0]}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="medical-gradient text-white">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
