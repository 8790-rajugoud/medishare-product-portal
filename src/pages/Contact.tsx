
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Navbar />
      
      {/* Enhanced Header with Purple-Pink Gradient */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="particles-advanced">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="particle-advanced bg-gradient-to-r from-yellow-300 to-pink-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-advanced">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-white/95 mb-6 font-light leading-relaxed">
                Get in touch with our team for inquiries, partnerships, or support.
              </p>
              <p className="text-lg text-white/85 leading-relaxed">
                We're here to help you with all your pharmaceutical distribution needs 
                and provide professional healthcare solutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 fade-in-advanced">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-slate-700 mb-10 leading-relaxed">
                  Ready to partner with us? Have questions about our products? 
                  Our dedicated team is here to provide you with the information and support you need.
                </p>
              </div>

              <div className="space-y-8">
                <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl mr-6 shadow-lg">
                        <Mail className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white mb-2">Email</h3>
                        <p className="text-white/90 text-lg">info@medpharma.com</p>
                        <p className="text-white/90 text-lg">sales@medpharma.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-pink-500 to-orange-500 border-0 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl mr-6 shadow-lg">
                        <Phone className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white mb-2">Phone</h3>
                        <p className="text-white/90 text-lg">+1 (555) 123-4567</p>
                        <p className="text-white/90 text-lg">+1 (555) 765-4321</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl mr-6 shadow-lg">
                        <MapPin className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white mb-2">Address</h3>
                        <p className="text-white/90 text-lg">123 Medical Center Drive</p>
                        <p className="text-white/90 text-lg">Healthcare City, HC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl mr-6 shadow-lg">
                        <Clock className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white mb-2">Business Hours</h3>
                        <p className="text-white/90 text-lg">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-white/90 text-lg">Saturday: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 slide-in-advanced">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl">
                <CardTitle className="text-3xl text-white font-bold">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-slate-800 mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-14 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-slate-800 mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-14 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-lg font-semibold text-slate-800 mb-3">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Hospital, Pharmacy, Clinic, etc."
                      className="h-14 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-slate-800 mb-3">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your inquiry, including specific products of interest, quantity requirements, or partnership opportunities..."
                      rows={6}
                      className="text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-purple-500/20"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-bold py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-advanced">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Visit Our Headquarters
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Located in the heart of the medical district for easy access by healthcare professionals
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm h-96 rounded-3xl flex items-center justify-center shadow-2xl border-0">
            <div className="text-center">
              <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-6 w-32 h-32 flex items-center justify-center shadow-2xl">
                <MapPin className="h-16 w-16 text-white" />
              </div>
              <p className="text-slate-800 text-2xl font-bold mb-3">Google Maps Integration</p>
              <p className="text-slate-600 text-lg">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
