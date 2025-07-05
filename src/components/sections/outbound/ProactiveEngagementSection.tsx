
import React from 'react';
import { Check, Target } from 'lucide-react';

export const ProactiveEngagementSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-white">
              Proactive Customer Engagement
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-open-sans leading-relaxed">
              Transform your customer outreach with AI-powered calling that feels natural and personal. From appointment reminders to sales follow-ups, reach every customer at the right time.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-neon-green flex-shrink-0" />
                <span className="text-gray-300 font-open-sans">Automated appointment reminders</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-neon-green flex-shrink-0" />
                <span className="text-gray-300 font-open-sans">Personalized follow-up campaigns</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-neon-green flex-shrink-0" />
                <span className="text-gray-300 font-open-sans">Lead nurturing sequences</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-neon-green flex-shrink-0" />
                <span className="text-gray-300 font-open-sans">Customer satisfaction surveys</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-gold to-neon-green text-charcoal px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
              Get Started
            </button>
          </div>

          {/* Right Content - Smart Outreach Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-gold/20 to-neon-green/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold/30">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gold/10 rounded-full flex items-center justify-center">
                  <Target size={64} className="text-gold" />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900/90 to-charcoal/90 backdrop-blur-sm rounded-xl px-6 py-3 border border-gold/30">
                <h3 className="text-lg font-montserrat font-bold text-gold mb-1">Smart Outreach</h3>
                <p className="text-sm text-gray-300 font-open-sans">Targeted, timely, and totally automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
