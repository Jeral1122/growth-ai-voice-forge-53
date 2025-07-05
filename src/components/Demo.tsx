
import React, { useState } from 'react';
import { Play, Volume2, Mic, Phone } from 'lucide-react';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDemoClick = () => {
    setIsPlaying(!isPlaying);
    console.log('Demo interaction triggered');
  };

  const scrollToConnect = () => {
    const element = document.querySelector('#connect');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="demo" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            See <span className="gradient-text">Growth AI</span> in Action
          </h2>
          <p className="text-xl text-gray-400 font-open-sans max-w-2xl mx-auto">
            Automated call simulations in real time. Experience how our AI agents handle real conversations.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="max-w-4xl mx-auto bg-charcoal rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Demo Header */}
          <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 font-open-sans text-sm">Growth AI Voice Agent Demo</span>
              </div>
              <div className="flex items-center gap-2 text-neon-green">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-sm font-open-sans">Live</span>
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Demo Video/Visualization */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-600">
                  {!isPlaying ? (
                    <button
                      onClick={handleDemoClick}
                      className="btn-pill-animated-primary w-20 h-20 !p-0 flex items-center justify-center"
                    >
                      <Play size={32} className="ml-1" />
                    </button>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Volume2 size={24} className="text-charcoal" />
                      </div>
                      <div className="text-white font-open-sans">
                        <p className="mb-2">AI Agent: "Hi! I'm calling from Growth AI..."</p>
                        <div className="flex items-center justify-center gap-2 text-gray-400">
                          <Mic size={16} />
                          <div className="flex gap-1">
                            <div className="w-1 h-4 bg-neon-green animate-pulse"></div>
                            <div className="w-1 h-6 bg-neon-green animate-pulse delay-100"></div>
                            <div className="w-1 h-3 bg-neon-green animate-pulse delay-200"></div>
                            <div className="w-1 h-5 bg-neon-green animate-pulse delay-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Demo Information */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-montserrat font-semibold text-lg mb-2">
                      Real-Time Conversations
                    </h3>
                    <p className="text-gray-400 font-open-sans">
                      Our AI agents handle natural conversations with prospects, adapting to their responses in real-time.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-neon-green font-montserrat font-semibold mb-2">Current Demo Scenario:</h4>
                  <p className="text-gray-300 font-open-sans text-sm">
                    Lead qualification call for a B2B software company. The AI agent is identifying decision makers and booking qualified demo appointments.
                  </p>
                </div>

                <button
                  onClick={handleDemoClick}
                  className="btn-pill-animated-secondary w-full"
                >
                  Try the Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-montserrat font-bold text-gold">85%</div>
            <div className="text-gray-400 font-open-sans text-sm">Connection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-montserrat font-bold text-neon-green">3.2min</div>
            <div className="text-gray-400 font-open-sans text-sm">Avg Call Duration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-montserrat font-bold text-gold">42%</div>
            <div className="text-gray-400 font-open-sans text-sm">Qualification Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-montserrat font-bold text-neon-green">24/7</div>
            <div className="text-gray-400 font-open-sans text-sm">Availability</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-charcoal/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-neon-green/30 max-w-lg mx-auto">
            <p className="text-gray-300 mb-4 font-open-sans">
              Impressed with what you've seen?
            </p>
            <button
              onClick={scrollToConnect}
              className="btn-pill-animated-gradient"
            >
              Schedule Your Personal Demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
