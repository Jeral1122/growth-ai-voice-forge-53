
import React from 'react';
import { Calendar, PhoneCall, Users, TrendingUp } from 'lucide-react';

export const OutboundFeaturesGrid = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Appointment Reminders */}
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gold/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-gold mb-3">Appointment Reminders</h3>
            <p className="text-gray-300 font-open-sans text-sm">Reduce no-shows with timely, friendly reminders</p>
          </div>

          {/* Sales Follow-ups */}
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneCall size={32} className="text-neon-green" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-neon-green mb-3">Sales Follow-ups</h3>
            <p className="text-gray-300 font-open-sans text-sm">Automated follow-up sequences that convert</p>
          </div>

          {/* Customer Surveys */}
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gold/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-gold mb-3">Customer Surveys</h3>
            <p className="text-gray-300 font-open-sans text-sm">Gather feedback and improve satisfaction</p>
          </div>

          {/* Lead Nurturing */}
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-neon-green" />
            </div>
            <h3 className="text-xl font-montserrat font-bold text-neon-green mb-3">Lead Nurturing</h3>
            <p className="text-gray-300 font-open-sans text-sm">Convert prospects with strategic touchpoints</p>
          </div>
        </div>
      </div>
    </section>
  );
};
