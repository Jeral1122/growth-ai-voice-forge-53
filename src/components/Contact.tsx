
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    requestDemo: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-montserrat font-bold text-white mb-4 sm:mb-6">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-open-sans max-w-2xl mx-auto">
            Let's discuss how Growth AI can transform your outbound calling strategy. 
            Reach out today for a personalized consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-400 font-open-sans mb-8">
                We're here to help you succeed. Whether you have questions about our platform, 
                need technical support, or want to explore partnership opportunities, 
                our team is ready to assist.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-neon-green" />
                </div>
                <div>
                  <h4 className="text-white font-montserrat font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400 font-open-sans">hello@growthai.com</p>
                  <p className="text-gray-500 font-open-sans text-sm">We typically respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-montserrat font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-400 font-open-sans">+1 (555) 123-4567</p>
                  <p className="text-gray-500 font-open-sans text-sm">Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-neon-green" />
                </div>
                <div>
                  <h4 className="text-white font-montserrat font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-400 font-open-sans">123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-montserrat font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center button-hover transition-colors duration-300"
                >
                  <Twitter size={20} className="text-gray-400 hover:text-neon-green" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center button-hover transition-colors duration-300"
                >
                  <Linkedin size={20} className="text-gray-400 hover:text-neon-green" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center button-hover transition-colors duration-300"
                >
                  <Github size={20} className="text-gray-400 hover:text-neon-green" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal rounded-2xl p-4 sm:p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-open-sans font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-open-sans focus:border-neon-green focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white font-open-sans font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-open-sans focus:border-neon-green focus:outline-none transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-white font-open-sans font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-open-sans focus:border-neon-green focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-open-sans font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-open-sans focus:border-neon-green focus:outline-none transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-open-sans font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-open-sans focus:border-neon-green focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="requestDemo"
                  name="requestDemo"
                  checked={formData.requestDemo}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-neon-green bg-gray-800 border-gray-600 rounded focus:ring-neon-green focus:ring-2"
                />
                <label htmlFor="requestDemo" className="text-gray-300 font-open-sans">
                  I'd like to request a personalized demo
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-neon-green hover:bg-neon-green/90 text-charcoal px-8 py-4 rounded-lg font-montserrat font-bold uppercase text-lg btn-primary-animated flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <Send size={20} className="relative z-10" />
                <span className="relative z-10">Send Message</span>
              </button>

              <p className="text-gray-500 font-open-sans text-sm text-center">
                We never share your info with third parties. Your privacy is our priority.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
