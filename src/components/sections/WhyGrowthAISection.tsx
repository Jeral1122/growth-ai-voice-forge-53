
import React from 'react';
import { Clock, DollarSign, Users, Zap } from 'lucide-react';

export const WhyGrowthAISection = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI agents never sleep, never take breaks, and handle calls around the clock with consistent quality.",
      color: "neon-green"
    },
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Replace expensive call centers with AI agents that cost a fraction while delivering superior results.",
      color: "gold"
    },
    {
      icon: Users,
      title: "Perfect Memory",
      description: "Every conversation is remembered perfectly. No more lost context or forgotten customer details.",
      color: "neon-green"
    },
    {
      icon: Zap,
      title: "Instant Scalability",
      description: "Handle 1 call or 10,000 calls simultaneously. Scale up or down instantly based on demand.",
      color: "gold"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              Why Choose GROWTH AI?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-open-sans max-w-5xl mx-auto px-4">
            Our AI voice agents deliver results that traditional call centers simply can't match. 
            Here's why businesses choose us for their customer communications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isGold = feature.color === 'gold';
            
            return (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border transition-colors duration-200 ${
                  isGold 
                    ? 'border-gray-700/50 hover:border-gold/50' 
                    : 'border-gray-700/50 hover:border-neon-green/50'
                }`}>
                  <div className="relative mb-6 sm:mb-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center ${
                      isGold
                        ? 'bg-gradient-to-br from-gold/20 to-gold/10'
                        : 'bg-gradient-to-br from-neon-green/20 to-neon-green/10'
                    }`}>
                      <IconComponent size={32} className="sm:hidden text-neon-green" />
                      <IconComponent size={40} className="hidden sm:block text-neon-green" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                      <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                        isGold 
                          ? 'from-gold to-neon-green' 
                          : 'from-neon-green to-gold'
                      }`}>
                        {feature.title}
                      </span>
                    </h3>
                    <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
