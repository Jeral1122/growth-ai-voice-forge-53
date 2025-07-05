
import React from 'react';

export const HowOutboundWorksSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              How Outbound Works
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-gold rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-montserrat font-bold text-xl">
              1
            </div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white mb-4">Setup Campaign</h3>
            <p className="text-gray-300 font-open-sans">Define your target list and message</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-neon-green rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-montserrat font-bold text-xl">
              2
            </div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white mb-4">Schedule Calls</h3>
            <p className="text-gray-300 font-open-sans">AI calls at optimal times</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-gold rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-montserrat font-bold text-xl">
              3
            </div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white mb-4">Natural Conversation</h3>
            <p className="text-gray-300 font-open-sans">Personalized, context-aware dialogue</p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gold to-neon-green rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal font-montserrat font-bold text-xl">
              4
            </div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white mb-4">Track Results</h3>
            <p className="text-gray-300 font-open-sans">Monitor performance and optimize</p>
          </div>
        </div>
      </div>
    </section>
  );
};
