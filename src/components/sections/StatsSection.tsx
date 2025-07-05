
import React from 'react';
import { Phone, TrendingUp, Users } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    {
      icon: Phone,
      value: '~95%',
      label: 'of calls automated',
      color: 'neon-green'
    },
    {
      icon: TrendingUp,
      value: '~300%',
      label: 'boost in appointments',
      color: 'gold'
    },
    {
      icon: Users,
      value: '+45%',
      label: 'in lead conversion rates',
      color: 'neon-green'
    }
  ];

  return (
    <section className="py-4 sm:py-6 px-4 sm:px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className={`text-center mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm text-gray-400 font-open-sans italic">
            you can expect
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const isGold = stat.color === 'gold';
            
            return (
              <div 
                key={index}
                className={`group relative transition-all duration-700 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`relative bg-gradient-to-br from-gray-900/50 to-charcoal/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border transition-all duration-300 ${
                  isGold 
                    ? 'border-gray-700/30 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(210,174,55,0.3)]' 
                    : 'border-gray-700/30 hover:border-neon-green/50 hover:shadow-[0_0_20px_rgba(164,255,0,0.3)]'
                }`}>
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isGold
                        ? 'bg-gradient-to-br from-gold/15 to-gold/8 group-hover:from-gold/25 group-hover:to-gold/15'
                        : 'bg-gradient-to-br from-neon-green/15 to-neon-green/8 group-hover:from-neon-green/25 group-hover:to-neon-green/15'
                    }`}>
                      <IconComponent 
                        size={16} 
                        className={`sm:w-5 sm:h-5 transition-all duration-300 ${
                          isGold ? 'text-gold group-hover:scale-110' : 'text-neon-green group-hover:scale-110'
                        }`}
                      />
                    </div>

                    {/* Value */}
                    <div className={`text-xl sm:text-2xl md:text-3xl font-montserrat font-black mb-1 sm:mb-2 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                      isGold 
                        ? 'from-gold via-gold to-neon-green' 
                        : 'from-neon-green via-neon-green to-gold'
                    }`}>
                      {stat.value}
                    </div>

                    {/* Label */}
                    <p className="text-gray-300 font-open-sans text-xs leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom separator */}
        <div className={`mt-6 sm:mt-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
