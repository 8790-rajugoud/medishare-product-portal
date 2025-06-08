
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Award, Users, Microscope, Globe, CheckCircle, Star, Package, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 3);
  const categories = [
    { name: "Drops", count: products.filter(p => p.category === "Drops").length, gradient: "from-blue-500 to-blue-600", icon: "💧" },
    { name: "Syrups", count: products.filter(p => p.category === "Syrups").length, gradient: "from-green-500 to-green-600", icon: "🍯" },
    { name: "Sachets", count: products.filter(p => p.category === "Sachets").length, gradient: "from-indigo-500 to-indigo-600", icon: "📦" },
    { name: "Tablets", count: products.filter(p => p.category === "Tablets").length, gradient: "from-purple-500 to-purple-600", icon: "💊" },
    { name: "Jar", count: products.filter(p => p.category === "Jar").length, gradient: "from-orange-500 to-orange-600", icon: "🏺" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden medical-gradient text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="particles absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2">
              Professional Product Showcase
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              MedPharma Industries
            </h1>
            <p className="text-xl md:text-2xl text-medical-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Premium pharmaceutical products for distributors and healthcare professionals. 
              Explore our comprehensive range of quality medicines and supplements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button size="lg" className="bg-white text-medical-600 hover:bg-gray-100 btn-glow text-lg px-8 py-3">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Package, value: "50+", label: "Products" },
              { icon: Shield, value: "100%", label: "Quality Assured" },
              { icon: Globe, value: "15+", label: "States Covered" },
              { icon: Users, value: "500+", label: "Healthcare Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center stagger-animation card-hover">
                <div className="medical-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 medical-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of pharmaceutical products designed for different therapeutic needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Card key={category.name} className="group cursor-pointer card-hover stagger-animation medical-border-gradient">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300 medical-glow`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-medical-600 transition-colors">{category.name}</h3>
                  <p className="text-gray-600">{category.count} Products</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and trusted pharmaceutical products for healthcare professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group card-hover stagger-animation medical-border-gradient">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-medical-100 text-medical-800">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-medical-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Package className="h-4 w-4 mr-2" />
                      <span>{product.size} • {product.packagingType.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Thermometer className="h-4 w-4 mr-2" />
                      <span>{product.therapeuticClass}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-medical-600">₹{product.price}</span>
                    <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in-up">
            <Link to="/products">
              <Button size="lg" className="medical-gradient text-white hover:opacity-90 btn-glow px-8 py-3">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose MedPharma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by healthcare professionals across the country for quality and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "All products undergo rigorous quality control and are manufactured in WHO-GMP certified facilities.",
              },
              {
                icon: Award,
                title: "Regulatory Compliance",
                description: "Complete compliance with FSSAI, CDSCO regulations and international quality standards.",
              },
              {
                icon: Microscope,
                title: "Research & Development",
                description: "Continuous innovation and research to develop effective pharmaceutical solutions.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center card-hover stagger-animation medical-border-gradient">
                <CardContent className="p-8">
                  <div className="medical-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 medical-glow">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
