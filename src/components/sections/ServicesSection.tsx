import React from 'react';
import { Phone, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
export const ServicesSection = () => {
  const navigate = useNavigate();
  const {
    ref,
    isVisible
  } = useScrollReveal();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleInboundCallsClick = () => {
    navigate('/inbound-calls');
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };
  const handleOutboundCallsClick = () => {
    navigate('/outbound-calls');
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };
  return <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat mb-4 sm:mb-6 font-bold">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              Tailored For Your Business
            </span>
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-gold via-neon-green to-gold bg-clip-text text-transparent">
              Our Services
            </span>
          </h3>
          <div className="inline-block">
            <span className="bg-gradient-to-r from-neon-green to-gold px-4 py-2 rounded-full text-charcoal font-montserrat font-semibold text-sm">
              2 services
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Inbound Calls Card */}
          <div className={`group relative transition-all duration-700 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.2s'
        }}>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-neon-green/50 hover:shadow-[0_0_25px_rgba(164,255,0,0.3)]">
              {/* Image section with responsive styling */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-2xl">
                <div className="image-container max-w-full text-center p-4 sm:p-6">
                  <img alt="Young man using voice assistant on smartphone outdoors" className="responsive-image w-full h-auto max-w-full rounded-xl shadow-lg border border-neon-green/20 transition-transform duration-300 group-hover:scale-105" src="/lovable-uploads/c684015e-43ab-490d-97c9-9debfa128307.jpg" />
                </div>
                {/* Small accent icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-neon-green/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-neon-green/30 group-hover:scale-110">
                    <Phone size={16} className="text-neon-green" />
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="relative p-6 sm:p-8">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-neon-green mb-4">
                  Inbound Calls
                </h4>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base mb-6">
                  Human like virtual receptionist to handle your incoming calls.
                </p>
                <button onClick={handleInboundCallsClick} className="bg-gradient-to-r from-neon-green to-gold text-charcoal px-6 py-3 rounded-full font-montserrat font-semibold text-sm button-hover hover-lift transition-all duration-300">
                  Get Started →
                </button>
              </div>
            </div>
          </div>

          {/* Outbound Calls Card */}
          <div className={`group relative transition-all duration-700 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.4s'
        }}>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_25px_rgba(210,174,55,0.3)]">
              {/* Image section */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-2xl">
                <div className="image-container max-w-full text-center p-4 sm:p-6">
                  <img alt="Man making outbound call on smartphone" className="responsive-image w-full h-auto max-w-full rounded-xl shadow-lg border border-gold/20 transition-transform duration-300 group-hover:scale-105" src="/lovable-uploads/7b591fcf-7fbb-4006-9ec0-a421b18a9090.jpg" />
                </div>
                {/* Small accent icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gold/30 group-hover:scale-110">
                    <PhoneCall size={16} className="text-gold" />
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="relative p-6 sm:p-8">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-gold mb-4">
                  Outbound Calls
                </h4>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base mb-6">Fully automate outbound calls, lead qualification, booking appointments, reminders, follow ups &amp; more</p>
                <button onClick={handleOutboundCallsClick} className="bg-gradient-to-r from-gold to-neon-green text-charcoal px-6 py-3 rounded-full font-montserrat font-semibold text-sm button-hover hover-lift transition-all duration-300">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom separator */}
        <div className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
        transitionDelay: '0.6s'
      }}>
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </div>
      </div>
    </section>;
};