
import React from 'react';
import { BarChart3, Database, Rocket } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const GrowthProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToConnect = () => {
    const element = document.querySelector('#connect');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              GROWTH AI: Your Secret Weapon for Business Growth
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-open-sans max-w-4xl mx-auto px-4">
            Effortless Integration. Seamless Deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Strategy Card */}
          <div className={`group relative transition-all duration-700 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-neon-green/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(164,255,0,0.3)]">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-neon-green/20 to-neon-green/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-neon-green/30 group-hover:to-neon-green/20">
                  <BarChart3 size={32} className="sm:hidden text-neon-green transition-transform duration-300 group-hover:scale-110" />
                  <BarChart3 size={40} className="hidden sm:block text-neon-green transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
                    Strategy
                  </span>
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                  We map out perfect conversation flows to match your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Data Integration Card */}
          <div className={`group relative transition-all duration-700 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(210,174,55,0.3)]">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-gold/30 group-hover:to-gold/20">
                  <Database size={32} className="sm:hidden text-gold transition-transform duration-300 group-hover:scale-110" />
                  <Database size={40} className="hidden sm:block text-gold transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-gold to-neon-green bg-clip-text text-transparent">
                    Data Integration
                  </span>
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                  Plug in your CRM, calendars, and customer info—no dev work needed.
                </p>
              </div>
            </div>
          </div>

          {/* Deployment Card */}
          <div className={`group relative md:col-span-2 lg:col-span-1 transition-all duration-700 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-neon-green/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(164,255,0,0.3)]">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-neon-green/20 to-gold/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-neon-green/30 group-hover:to-gold/30">
                  <Rocket size={32} className="sm:hidden text-neon-green transition-transform duration-300 group-hover:scale-110" />
                  <Rocket size={40} className="hidden sm:block text-neon-green transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
                    Deployment
                  </span>
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                  Launch your AI agent across calls, SMS, and meetings in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 md:mt-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
          <button
            onClick={scrollToConnect}
            className="bg-gradient-to-r from-neon-green to-gold text-charcoal px-8 py-4 rounded-full font-montserrat font-semibold text-lg button-hover hover-lift transition-all duration-300"
          >
            Get Started Today →
          </button>
        </div>

        <div className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1s' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
