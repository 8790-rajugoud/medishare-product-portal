
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Enhanced Header */}
      <section className="pharma-gradient-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="particles-advanced">
            {[...Array(12)].map((_, i) => (
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
            <h1 className="heading-primary text-white mb-8">Contact Us</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-white/90 mb-6 font-light leading-relaxed">
                Get in touch with our team for inquiries, partnerships, or support.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                We're here to help you with all your pharmaceutical distribution needs 
                and provide professional healthcare solutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 fade-in-advanced">
              <div>
                <h2 className="heading-secondary">Get in Touch</h2>
                <p className="text-advanced mb-8">
                  Ready to partner with us? Have questions about our products? 
                  Our dedicated team is here to provide you with the information and support you need.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="advanced-card card-advanced-hover glow-blue">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 pharma-gradient-secondary rounded-xl mr-4 glow-blue">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-800">Email</h3>
                        <p className="text-slate-600">info@medpharma.com</p>
                        <p className="text-slate-600">sales@medpharma.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="advanced-card card-advanced-hover glow-blue">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 pharma-gradient-accent rounded-xl mr-4 glow-purple">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-800">Phone</h3>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                        <p className="text-slate-600">+1 (555) 765-4321</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="advanced-card card-advanced-hover glow-blue">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 pharma-gradient-success rounded-xl mr-4">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-800">Address</h3>
                        <p className="text-slate-600">123 Medical Center Drive</p>
                        <p className="text-slate-600">Healthcare City, HC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="advanced-card card-advanced-hover glow-blue">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 pharma-gradient-primary rounded-xl mr-4 glow-blue-intense">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-slate-800">Business Hours</h3>
                        <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-slate-600">Saturday: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="advanced-card card-advanced-hover glow-blue-intense slide-in-advanced">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl">
                <CardTitle className="text-2xl text-gradient-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
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
                      className="border-2 border-slate-200 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
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
                      className="border-2 border-slate-200 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Hospital, Pharmacy, Clinic, etc."
                      className="border-2 border-slate-200 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
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
                      className="border-2 border-slate-200 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-pharma-primary text-lg py-4">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-16 pharma-gradient-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 fade-in-advanced">
            <h2 className="heading-secondary">Visit Our Headquarters</h2>
            <p className="text-advanced">
              Located in the heart of the medical district for easy access by healthcare professionals
            </p>
          </div>
          
          <div className="advanced-card h-96 rounded-2xl flex items-center justify-center glow-blue">
            <div className="text-center">
              <div className="p-6 pharma-gradient-primary rounded-full mx-auto mb-4 w-24 h-24 flex items-center justify-center glow-blue-intense">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <p className="text-slate-700 text-lg font-semibold mb-2">Google Maps Integration</p>
              <p className="text-slate-500">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
