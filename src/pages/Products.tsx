
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import { Search, Filter, Grid, List, SlidersHorizontal } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["All", "Drops", "Syrups", "Sachets", "Tablets", "Jar"];
  const sortOptions = [
    { value: "name", label: "Name A-Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "category", label: "Category" }
  ];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.uses.some(use => use.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = !selectedCategory || selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  // Simulate loading when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Enhanced Header with Clear Description */}
      <section className="pharma-gradient-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="particles-advanced">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="particle-advanced"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 4}px`,
                  height: `${Math.random() * 6 + 4}px`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-advanced">
            <h1 className="heading-primary text-white mb-8">Our Premium Products</h1>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl text-white/90 mb-6 font-light leading-relaxed">
                Comprehensive range of high-quality pharmaceutical products designed for 
                healthcare professionals, hospitals, and pharmacies worldwide.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                From precision drops and therapeutic syrups to advanced sachets and tablets, 
                each product meets international quality standards with detailed batch tracking 
                and complete pharmaceutical documentation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-card text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">{products.length}+</div>
                <div className="text-white/80 text-lg">Premium Products</div>
              </div>
              <div className="glass-card text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">5</div>
                <div className="text-white/80 text-lg">Product Categories</div>
              </div>
              <div className="glass-card text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-lg">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="py-8 pharma-gradient-glass sticky top-20 z-40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pharma-500 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search products, ingredients, or uses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-slate-800 placeholder:text-slate-500 hover:border-pharma-300 focus:border-pharma-500 transition-all duration-300"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-12 px-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg text-slate-800 hover:border-pharma-300 focus:border-pharma-500 transition-all duration-300"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category === "All" ? null : category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category || (category === "All" && !selectedCategory) 
                      ? "pharma-gradient-secondary text-white shadow-lg glow-blue" 
                      : "bg-white/10 backdrop-blur-sm border-white/20 text-slate-700 hover:border-pharma-300 hover:text-pharma-600 hover:bg-white/20"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "pharma-gradient-accent text-white" : "text-slate-600 hover:text-pharma-600"}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "pharma-gradient-accent text-white" : "text-slate-600 hover:text-pharma-600"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">
              Showing {filteredProducts.length} of {products.length} products
              {selectedCategory && selectedCategory !== "All" && (
                <span className="ml-1">in {selectedCategory}</span>
              )}
            </span>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Active Filters: {[searchTerm, selectedCategory].filter(Boolean).length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 flex-grow bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="advanced-card rounded-2xl p-6 h-96 pulse-advanced"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1 lg:grid-cols-2"
            }`}>
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="stagger-advanced" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 fade-in-advanced">
              <div className="w-32 h-32 mx-auto mb-8 pharma-gradient-glass rounded-full flex items-center justify-center glow-blue">
                <Search className="h-16 w-16 text-pharma-500" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">No products found</h3>
              <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                Try adjusting your search criteria or browse our categories to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                  setSortBy("name");
                }}
                className="btn-pharma-primary text-lg px-8 py-4"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
