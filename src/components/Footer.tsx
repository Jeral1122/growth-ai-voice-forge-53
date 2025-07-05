
import React from 'react';
import { Facebook, Instagram, Github, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleServiceNavigation = (route: string) => {
    navigate(route);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-charcoal border-t border-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <p className="text-gray-400 font-open-sans mb-6">
              Transforming business communications with intelligent AI voice agents that work 24/7.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/growthaipro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} className="text-gray-400 hover:text-neon-green" />
              </a>
              <a href="https://www.facebook.com/people/Growth-AI/61575534516251/?_rdr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} className="text-gray-400 hover:text-neon-green" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            <h4 className="text-white font-montserrat font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('#hero')} className="block text-gray-400 hover:text-neon-green font-open-sans transition-colors duration-300">
                Home
              </button>
              <button onClick={() => navigate('/demo')} className="block text-gray-400 hover:text-neon-green font-open-sans transition-colors duration-300">
                Demo
              </button>
              <button onClick={() => navigate('/about')} className="block text-gray-400 hover:text-neon-green font-open-sans transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('#connect')} className="block text-gray-400 hover:text-neon-green font-open-sans transition-colors duration-300">
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <h4 className="text-white font-montserrat font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              <button onClick={() => handleServiceNavigation('/inbound-calls')} className="block text-gray-400 hover:text-neon-green font-open-sans transition-colors duration-300">
                Inbound Calls
              </button>
              <button onClick={() => handleServiceNavigation('/outbound-calls')} className="block text-gray-400 hover:text-neon-green font-open-sans transition-colors duration-300">
                Outbound Calls
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
            <h4 className="text-white font-montserrat font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neon-green" />
                <span className="text-gray-400 font-open-sans">hello@growthai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-open-sans"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in opacity-0 [animation-delay:1.0s] [animation-fill-mode:forwards]">
          <p className="text-gray-500 font-open-sans text-sm mb-4 md:mb-0">© 2025 Growth AI. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="text-gray-500 hover:text-neon-green font-open-sans text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-neon-green font-open-sans text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-neon-green font-open-sans text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
