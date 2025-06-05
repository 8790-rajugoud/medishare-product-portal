
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="medical-gradient w-8 h-8 rounded-lg mr-3"></div>
              <span className="font-bold text-xl">MedPharma Distribution</span>
            </div>
            <p className="text-medical-200 mb-4">
              Leading pharmaceutical distribution company providing quality healthcare products 
              to hospitals, pharmacies, and clinics across the region.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-medical-400" />
                <span className="text-medical-200">info@medpharma.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-medical-400" />
                <span className="text-medical-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-medical-400" />
                <span className="text-medical-200">123 Medical Center Dr, Healthcare City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-medical-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/products" className="block text-medical-200 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/about" className="block text-medical-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-medical-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product Categories</h3>
            <div className="space-y-2">
              <span className="block text-medical-200">Drops</span>
              <span className="block text-medical-200">Syrups</span>
              <span className="block text-medical-200">Tablets</span>
              <span className="block text-medical-200">Sachets</span>
              <span className="block text-medical-200">Jars</span>
            </div>
          </div>
        </div>

        <div className="border-t border-medical-800 mt-8 pt-8 text-center">
          <p className="text-medical-200">
            © {currentYear} MedPharma Distribution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
