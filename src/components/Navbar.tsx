
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="pharma-gradient-glass sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="pharma-gradient-primary w-12 h-12 rounded-2xl mr-4 glow-blue group-hover:scale-110 transition-all duration-300"></div>
              <span className="font-bold text-2xl text-gradient-primary">MedPharma</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
                  isActive(path) 
                    ? "pharma-gradient-primary text-white shadow-lg glow-blue" 
                    : "text-slate-700 hover:text-pharma-600 hover:bg-white/20"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-pharma-600 focus:outline-none p-2 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pharma-gradient-glass border-t border-white/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                  isActive(path) 
                    ? "pharma-gradient-primary text-white shadow-lg" 
                    : "text-slate-700 hover:text-pharma-600 hover:bg-white/20"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
