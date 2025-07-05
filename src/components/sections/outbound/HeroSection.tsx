
import React from 'react';

export const OutboundHeroSection = () => {
  return (
    <section className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-gold via-neon-green to-gold bg-clip-text text-transparent">
              Outbound Calls
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-open-sans max-w-5xl mx-auto">
            Fully automate reminders, follow-ups, and proactive customer engagement campaigns with intelligent AI calling.
          </p>
        </div>
      </div>
    </section>
  );
};
