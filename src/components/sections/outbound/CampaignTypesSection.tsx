
import React from 'react';

export const CampaignTypesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-gold via-neon-green to-gold bg-clip-text text-transparent">
              Campaign Types
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Reminder Campaigns */}
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gold/30 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-gold mb-6">Reminder Campaigns</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Appointment confirmations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Payment due dates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Renewal notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Event reminders</span>
              </div>
            </div>
          </div>

          {/* Sales Campaigns */}
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-neon-green mb-6">Sales Campaigns</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Lead qualification calls</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Follow-up sequences</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Upselling opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-gray-300 font-open-sans">Win-back campaigns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
