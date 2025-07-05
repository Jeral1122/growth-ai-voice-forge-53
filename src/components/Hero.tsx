
import React from 'react';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-16 px-4">
      <div className="relative z-10 container mx-auto text-center max-w-7xl">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12 lg:mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-px bg-neon-green w-8 sm:w-12 md:w-16 lg:w-20"></div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-300 tracking-wide uppercase px-1 sm:px-2 whitespace-nowrap">
              Trusted by 50+ companies
            </span>
            <div className="h-px bg-neon-green w-8 sm:w-12 md:w-16 lg:w-20"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-montserrat font-black leading-tight mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4 md:px-0 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="block text-white mb-2 sm:mb-4">
              AI Voice Agents That
            </span>
            <span className="block bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
              Double Your Revenue
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Boost your sales and simplify your workflow by automatically scheduling more qualified appointments directly into your calendar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-20 max-w-lg sm:max-w-none mx-auto px-4 sm:px-0 opacity-0 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <button onClick={() => scrollToSection('#connect')} className="text-charcoal px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto bg-neon-green hover:bg-neon-green/90 button-hover hover-lift transition-all duration-300">
              Book a Call
            </button>
            
            <button onClick={() => navigate('/demo')} className="bg-gray-800/60 hover:bg-gray-700/60 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 backdrop-blur-sm border border-gold/30 w-full sm:w-auto button-hover hover-lift transition-all duration-300">
              <Play size={16} className="sm:hidden" />
              <Play size={20} className="hidden sm:block" />
              <span className="whitespace-nowrap">Try Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
