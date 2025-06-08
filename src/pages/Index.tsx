
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Users, Award, Truck, Star, CheckCircle, Globe, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with enhanced animations */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.85), rgba(2, 132, 199, 0.85)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=700&fit=crop&q=80')`
          }}
        />
        
        {/* Animated particles */}
        <div className="particles absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 4 + 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="slide-in-left">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text bg-white bg-clip-text text-transparent leading-tight">
              Professional Healthcare Solutions
            </h1>
          </div>
          <div className="slide-in-right">
            <p className="text-xl md:text-2xl mb-8 text-medical-100 max-w-4xl mx-auto leading-relaxed">
              Leading pharmaceutical distribution company serving hospitals, pharmacies, and clinics with premium quality medical products backed by excellence and trust.
            </p>
          </div>
          <div className="fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button size="lg" className="bg-white text-medical-600 hover:bg-medical-50 text-lg px-10 py-4 btn-glow transition-all duration-300 medical-border-gradient">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-medical-600 text-lg px-10 py-4 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-up">
            {[
              { number: "500+", label: "Healthcare Partners" },
              { number: "35+", label: "Premium Products" },
              { number: "10+", label: "Years Experience" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center stagger-animation">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-medical-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview with enhanced styling */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">
              Trusted Healthcare Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With years of experience in pharmaceutical distribution, we provide comprehensive healthcare solutions 
              including drops, syrups, tablets, sachets, and specialized medical products to healthcare providers nationwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "All products meet stringent pharmaceutical standards and regulatory requirements with full compliance.",
                color: "text-blue-600"
              },
              {
                icon: Users,
                title: "Healthcare Focus",
                description: "Specialized in serving hospitals, pharmacies, clinics, and healthcare professionals nationwide.",
                color: "text-green-600"
              },
              {
                icon: Award,
                title: "Certified Products",
                description: "Comprehensive range of drops, syrups, tablets, sachets, and jars for all medical needs.",
                color: "text-purple-600"
              },
              {
                icon: Truck,
                title: "Reliable Distribution",
                description: "Efficient supply chain management ensuring timely delivery to your facility with tracking.",
                color: "text-orange-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-8 card-hover medical-border-gradient stagger-animation group">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-medical-500 to-medical-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 floating-animation">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-medical-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview with enhanced design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive range of pharmaceutical products for all your healthcare needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[
              { name: "Drops", count: "8 products", color: "bg-gradient-to-br from-blue-500 to-blue-600", icon: "💧" },
              { name: "Syrups", count: "13 products", color: "bg-gradient-to-br from-green-500 to-green-600", icon: "🥤" },
              { name: "Sachets", count: "5 products", color: "bg-gradient-to-br from-indigo-500 to-indigo-600", icon: "📦" },
              { name: "Tablets", count: "8 products", color: "bg-gradient-to-br from-purple-500 to-purple-600", icon: "💊" },
              { name: "Jar", count: "1 product", color: "bg-gradient-to-br from-orange-500 to-orange-600", icon: "🏺" },
            ].map((category, index) => (
              <Card key={category.name} className="text-center p-8 card-hover cursor-pointer group medical-border-gradient stagger-animation">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 floating-animation medical-glow`}>
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-medical-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{category.count}</p>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center fade-in-up">
            <Link to="/products">
              <Button size="lg" className="medical-gradient text-white text-lg px-12 py-4 btn-glow">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust indicators section */}
      <section className="py-16 bg-gradient-to-r from-medical-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 gradient-text">Why Healthcare Professionals Trust Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Nationwide Reach",
                description: "Serving healthcare facilities across the country with reliable distribution network"
              },
              {
                icon: Heart,
                title: "Patient Safety First",
                description: "Every product undergoes rigorous quality checks ensuring patient safety and efficacy"
              },
              {
                icon: CheckCircle,
                title: "Regulatory Compliance",
                description: "Full compliance with all pharmaceutical regulations and industry standards"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 stagger-animation">
                <div className="w-16 h-16 mx-auto mb-4 bg-medical-gradient rounded-full flex items-center justify-center floating-animation">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
