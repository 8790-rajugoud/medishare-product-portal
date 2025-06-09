
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
    { name: "Drops", count: products.filter(p => p.category === "Drops").length, gradient: "pharma-gradient-primary", icon: "💧" },
    { name: "Syrups", count: products.filter(p => p.category === "Syrups").length, gradient: "pharma-gradient-secondary", icon: "🍯" },
    { name: "Sachets", count: products.filter(p => p.category === "Sachets").length, gradient: "pharma-gradient-accent", icon: "📦" },
    { name: "Tablets", count: products.filter(p => p.category === "Tablets").length, gradient: "pharma-gradient-success", icon: "💊" },
    { name: "Jar", count: products.filter(p => p.category === "Jar").length, gradient: "pharma-gradient-secondary", icon: "🏺" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Advanced Hero Section */}
      <section className="relative overflow-hidden pharma-gradient-primary min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="particles-advanced absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle-advanced"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="text-center fade-in-advanced">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-2xl">
              MedPharma Industries
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
              Premium pharmaceutical products for distributors and healthcare professionals. 
              Explore our comprehensive range of quality medicines and supplements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/products">
                <Button className="btn-pharma-primary text-xl px-12 py-6 glow-blue">
                  Explore Products <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/about">
                <Button className="btn-pharma-secondary text-xl px-12 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Company Stats */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Package, value: "50+", label: "Products", gradient: "pharma-gradient-primary" },
              { icon: Shield, value: "100%", label: "Quality Assured", gradient: "pharma-gradient-secondary" },
              { icon: Globe, value: "15+", label: "States Covered", gradient: "pharma-gradient-accent" },
              { icon: Users, value: "500+", label: "Healthcare Partners", gradient: "pharma-gradient-success" },
            ].map((stat, index) => (
              <div key={index} className="text-center stagger-advanced">
                <div className={`${stat.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-blue floating-advanced`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Product Categories */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-advanced">
            <h2 className="heading-secondary text-gradient-primary">Product Categories</h2>
            <p className="text-advanced max-w-3xl mx-auto">
              Comprehensive range of pharmaceutical products designed for different therapeutic needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((category, index) => (
              <Card key={category.name} className="advanced-card group cursor-pointer stagger-advanced border-gradient">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-all duration-500 glow-blue`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-800">{category.name}</h3>
                  <p className="text-slate-600 text-lg">{category.count} Products</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Featured Products */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-advanced">
            <h2 className="heading-secondary text-gradient-secondary">Featured Products</h2>
            <p className="text-advanced max-w-3xl mx-auto">
              Our most popular and trusted pharmaceutical products for healthcare professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="advanced-card group stagger-advanced border-gradient">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-pharma-100 text-pharma-800 px-4 py-2 rounded-xl">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-slate-800">{product.name}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-2 text-lg">{product.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-500">
                      <Package className="h-5 w-5 mr-3" />
                      <span className="text-lg">{product.size} • {product.packagingType.split(' ')[0]}</span>
                    </div>
                    <div className="flex items-center text-slate-500">
                      <Thermometer className="h-5 w-5 mr-3" />
                      <span className="text-lg">{product.therapeuticClass}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gradient-primary">₹{product.price}</span>
                    <Badge className="bg-green-100 text-green-800 px-4 py-2 rounded-xl">In Stock</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16 fade-in-advanced">
            <Link to="/products">
              <Button className="btn-pharma-primary text-xl px-12 py-6 glow-blue-intense">
                View All Products <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 fade-in-advanced">
            <h2 className="heading-secondary text-gradient-primary">Why Choose MedPharma</h2>
            <p className="text-advanced max-w-3xl mx-auto">
              Trusted by healthcare professionals across the country for quality and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "All products undergo rigorous quality control and are manufactured in WHO-GMP certified facilities.",
                gradient: "pharma-gradient-primary"
              },
              {
                icon: Award,
                title: "Regulatory Compliance",
                description: "Complete compliance with FSSAI, CDSCO regulations and international quality standards.",
                gradient: "pharma-gradient-secondary"
              },
              {
                icon: Microscope,
                title: "Research & Development",
                description: "Continuous innovation and research to develop effective pharmaceutical solutions.",
                gradient: "pharma-gradient-accent"
              },
            ].map((feature, index) => (
              <Card key={index} className="advanced-card text-center stagger-advanced border-gradient">
                <CardContent className="p-10">
                  <div className={`${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 glow-purple floating-advanced`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
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
