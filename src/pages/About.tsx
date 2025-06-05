
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MedPharma</h1>
            <p className="text-xl text-medical-100 max-w-3xl mx-auto">
              Leading the way in pharmaceutical distribution with unwavering commitment to quality, 
              innovation, and healthcare excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-medical-600 mr-4" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide healthcare institutions with reliable access to high-quality pharmaceutical products, 
                  ensuring that every patient receives the best possible care through our comprehensive distribution network 
                  and unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-medical-600 mr-4" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the most trusted pharmaceutical distribution partner in the healthcare industry, 
                  recognized for our innovation, reliability, and contribution to improving global health outcomes 
                  through strategic partnerships and cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Distribution Channels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve a diverse network of healthcare providers, ensuring quality pharmaceutical products 
              reach where they're needed most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Users className="h-16 w-16 text-medical-600 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-3">Hospitals & Clinics</h3>
                <p className="text-gray-600">
                  Comprehensive pharmaceutical supply solutions for healthcare institutions, 
                  ensuring consistent availability of essential medications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Globe className="h-16 w-16 text-medical-600 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-3">Retail Pharmacies</h3>
                <p className="text-gray-600">
                  Supporting community pharmacies with reliable inventory management 
                  and timely delivery of quality pharmaceutical products.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <Shield className="h-16 w-16 text-medical-600 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-3">Healthcare Professionals</h3>
                <p className="text-gray-600">
                  Direct partnerships with doctors, pediatricians, and specialists 
                  to provide specialized pharmaceutical solutions for patient care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Standards & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our rigorous quality control measures 
              and industry-leading certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Award className="h-8 w-8 text-medical-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">ISO 9001:2015 Certified</h3>
                  <p className="text-gray-600">
                    Quality management system certification ensuring consistent product quality and customer satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-medical-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">GDP Compliance</h3>
                  <p className="text-gray-600">
                    Full compliance with Good Distribution Practice guidelines for pharmaceutical products.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Target className="h-8 w-8 text-medical-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Regulatory Approval</h3>
                  <p className="text-gray-600">
                    All products meet stringent regulatory requirements and safety standards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-medical-50 p-8 rounded-lg">
              <h3 className="font-semibold text-xl mb-4 text-medical-800">Quality Assurance Process</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-medical-600 rounded-full mr-3"></div>
                  Incoming material inspection and testing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-medical-600 rounded-full mr-3"></div>
                  Temperature-controlled storage facilities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-medical-600 rounded-full mr-3"></div>
                  Cold chain management for sensitive products
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-medical-600 rounded-full mr-3"></div>
                  Regular quality audits and batch testing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-medical-600 rounded-full mr-3"></div>
                  Traceability and documentation systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Message
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center italic mb-8">
                "At MedPharma Distribution, we believe that access to quality healthcare is a fundamental right. 
                Our commitment goes beyond just distributing pharmaceutical products – we're partners in healing, 
                dedicated to ensuring that every healthcare provider has the tools they need to save lives and improve health outcomes."
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-lg text-gray-900">Dr. Medical Director</div>
                <div className="text-gray-600">Chief Executive Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
