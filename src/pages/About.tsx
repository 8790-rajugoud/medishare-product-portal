
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Header */}
      <section className="pharma-gradient-primary text-white py-24 relative overflow-hidden">
        <div className="particles-advanced">
          <div className="particle-advanced w-4 h-4 top-[20%] left-[10%] animation-delay-0"></div>
          <div className="particle-advanced w-6 h-6 top-[60%] left-[80%] animation-delay-2s"></div>
          <div className="particle-advanced w-3 h-3 top-[80%] left-[20%] animation-delay-4s"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-advanced">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-secondary drop-shadow-2xl">About MedPharma</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Leading the way in pharmaceutical distribution with unwavering commitment to quality, 
              innovation, and healthcare excellence.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="advanced-card glow-blue stagger-advanced">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="pharma-gradient-accent p-4 rounded-2xl mr-6 glow-blue">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">Our Mission</h2>
                </div>
                <p className="text-advanced">
                  To provide healthcare institutions with reliable access to high-quality pharmaceutical products, 
                  ensuring that every patient receives the best possible care through our comprehensive distribution network 
                  and unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="advanced-card glow-purple stagger-advanced">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="pharma-gradient-secondary p-4 rounded-2xl mr-6 glow-purple">
                    <Eye className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary">Our Vision</h2>
                </div>
                <p className="text-advanced">
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
      <section className="section-padding bg-gradient-to-br from-blue-50/50 to-purple-50/50 relative">
        <div className="absolute inset-0 pharma-gradient-glass"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-advanced">
            <h2 className="heading-secondary text-gradient-primary mb-6">
              Our Distribution Channels
            </h2>
            <p className="text-advanced max-w-3xl mx-auto text-xl">
              We serve a diverse network of healthcare providers, ensuring quality pharmaceutical products 
              reach where they're needed most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="advanced-card text-center glow-blue stagger-advanced">
              <CardContent className="p-8">
                <div className="pharma-gradient-primary p-6 rounded-3xl w-20 h-20 mx-auto mb-6 glow-blue-intense floating-advanced">
                  <Users className="h-8 w-8 text-white mx-auto" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-gradient-primary">Hospitals & Clinics</h3>
                <p className="text-advanced">
                  Comprehensive pharmaceutical supply solutions for healthcare institutions, 
                  ensuring consistent availability of essential medications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="advanced-card text-center glow-purple stagger-advanced">
              <CardContent className="p-8">
                <div className="pharma-gradient-accent p-6 rounded-3xl w-20 h-20 mx-auto mb-6 glow-purple floating-advanced">
                  <Globe className="h-8 w-8 text-white mx-auto" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-gradient-primary">Retail Pharmacies</h3>
                <p className="text-advanced">
                  Supporting community pharmacies with reliable inventory management 
                  and timely delivery of quality pharmaceutical products.
                </p>
              </CardContent>
            </Card>
            
            <Card className="advanced-card text-center glow-blue stagger-advanced">
              <CardContent className="p-8">
                <div className="pharma-gradient-secondary p-6 rounded-3xl w-20 h-20 mx-auto mb-6 glow-blue-intense floating-advanced">
                  <Shield className="h-8 w-8 text-white mx-auto" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-gradient-primary">Healthcare Professionals</h3>
                <p className="text-advanced">
                  Direct partnerships with doctors, pediatricians, and specialists 
                  to provide specialized pharmaceutical solutions for patient care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-advanced">
            <h2 className="heading-secondary text-gradient-primary mb-6">
              Quality Standards & Certifications
            </h2>
            <p className="text-advanced max-w-3xl mx-auto text-xl">
              Our commitment to excellence is reflected in our rigorous quality control measures 
              and industry-leading certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 stagger-advanced">
              <Card className="advanced-card glow-blue">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="pharma-gradient-success p-3 rounded-xl mr-6 glow-blue">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-gradient-primary">ISO 9001:2015 Certified</h3>
                      <p className="text-advanced">
                        Quality management system certification ensuring consistent product quality and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="advanced-card glow-purple">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="pharma-gradient-accent p-3 rounded-xl mr-6 glow-purple">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-gradient-primary">GDP Compliance</h3>
                      <p className="text-advanced">
                        Full compliance with Good Distribution Practice guidelines for pharmaceutical products.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="advanced-card glow-blue">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="pharma-gradient-secondary p-3 rounded-xl mr-6 glow-blue-intense">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-gradient-primary">Regulatory Approval</h3>
                      <p className="text-advanced">
                        All products meet stringent regulatory requirements and safety standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="glass-card border-gradient glow-blue-intense stagger-advanced">
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-6 text-gradient-primary">Quality Assurance Process</h3>
                <ul className="space-y-4">
                  {[
                    "Incoming material inspection and testing",
                    "Temperature-controlled storage facilities", 
                    "Cold chain management for sensitive products",
                    "Regular quality audits and batch testing",
                    "Traceability and documentation systems"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center stagger-advanced">
                      <div className="w-3 h-3 pharma-gradient-primary rounded-full mr-4 glow-blue"></div>
                      <span className="text-advanced font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="section-padding bg-gradient-to-br from-purple-50/30 to-blue-50/30 relative">
        <div className="absolute inset-0 pharma-gradient-glass"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="advanced-card glow-blue-intense border-gradient fade-in-advanced">
            <CardContent className="p-12 md:p-16 text-center">
              <div className="mb-12">
                <h2 className="heading-secondary text-gradient-primary mb-6">
                  Leadership Message
                </h2>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <blockquote className="text-xl md:text-2xl leading-relaxed italic mb-12 text-advanced">
                  "At MedPharma Distribution, we believe that access to quality healthcare is a fundamental right. 
                  Our commitment goes beyond just distributing pharmaceutical products – we're partners in healing, 
                  dedicated to ensuring that every healthcare provider has the tools they need to save lives and improve health outcomes."
                </blockquote>
                
                <div className="space-y-2">
                  <div className="font-bold text-xl text-gradient-primary">Dr. Medical Director</div>
                  <div className="text-advanced font-medium">Chief Executive Officer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
