

import React from 'react';
import { Clock, UserCheck, Calendar, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Your AI agents never sleep, ensuring no opportunity is missed regardless of time zones or business hours.'
    },
    {
      icon: UserCheck,
      title: 'Lead Qualification',
      description: 'Intelligent conversation flows that identify high-value prospects and gather crucial qualifying information.'
    },
    {
      icon: Calendar,
      title: 'Meeting Scheduler',
      description: 'Seamlessly book appointments directly into your calendar system with real-time availability checking.'
    },
    {
      icon: Zap,
      title: 'Custom Integrations',
      description: 'Connect with your existing CRM, marketing tools, and business systems for seamless workflow automation.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              Powerful Features for Modern
            </span>
            <span className="bg-gradient-to-r from-gold to-neon-green bg-clip-text text-transparent"> Business</span>
          </h2>
          <p className="text-xl text-gray-400 font-open-sans max-w-2xl mx-auto">
            Everything you need to automate your outbound calling and scale your sales operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-neon-green/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-green/30 transition-colors duration-300">
                <feature.icon size={32} className="text-neon-green" />
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl mb-4">
                <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
                  {feature.title}
                </span>
              </h3>
              
              <p className="text-gray-400 font-open-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-neon-green/10 to-gold/10 rounded-2xl p-8 border border-neon-green/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-montserrat font-bold mb-4">
                <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
                  Advanced AI Technology
                </span>
              </h3>
              <p className="text-gray-300 font-open-sans mb-6">
                Built on cutting-edge natural language processing and machine learning models, 
                our AI agents understand context, handle objections, and adapt their approach 
                based on real-time conversation flow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span className="font-open-sans">Natural conversation flow</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-open-sans">Sentiment analysis and adaptation</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span className="font-open-sans">Multi-language support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="font-open-sans">Continuous learning and improvement</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-gray-400 font-open-sans text-sm">AI Processing</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-700 rounded px-3 py-2">
                    <span className="text-neon-green text-sm font-open-sans">Intent Recognition: 98.7%</span>
                  </div>
                  <div className="bg-gray-700 rounded px-3 py-2">
                    <span className="text-gold text-sm font-open-sans">Response Time: 0.3s</span>
                  </div>
                  <div className="bg-gray-700 rounded px-3 py-2">
                    <span className="text-neon-green text-sm font-open-sans">Success Rate: 94.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

