
import React from 'react';
import { MessageSquare, Mic, Brain, Shield } from 'lucide-react';

export const TechnologySection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              The Technology Behind Our AI Voices
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-open-sans max-w-5xl mx-auto px-4">
            Our AI Assistant uses the most advanced speech technologies to enable hyper-realistic conversations 
            that are indistinguishable from the real thing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Neural Text-to-Speech Card */}
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-neon-green/50 transition-colors duration-200">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neon-green/20 to-neon-green/10 rounded-full flex items-center justify-center">
                  <MessageSquare size={32} className="sm:hidden text-neon-green" />
                  <MessageSquare size={40} className="hidden sm:block text-neon-green" />
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
                    Neural Text-to-Speech
                  </span>
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                  Advanced neural networks generate human-sounding voices with natural intonation and emotion.
                </p>
              </div>
            </div>
          </div>

          {/* Automatic Speech Recognition Card */}
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-gold/50 transition-colors duration-200">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center">
                  <Mic size={32} className="sm:hidden text-gold" />
                  <Mic size={40} className="hidden sm:block text-gold" />
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-gold to-neon-green bg-clip-text text-transparent">
                    Automatic Speech Recognition
                  </span>
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                  Accurate speech recognition that performs excellently even in noisy environments.
                </p>
              </div>
            </div>
          </div>

          {/* Natural Language Understanding Card */}
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-neon-green/50 transition-colors duration-200">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neon-green/20 to-gold/20 rounded-full flex items-center justify-center">
                  <Brain size={32} className="sm:hidden text-neon-green" />
                  <Brain size={40} className="hidden sm:block text-neon-green" />
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
                    Natural Language Understanding
                  </span>
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                  Understands the context and intent of conversations, including nuances and implied meanings.
                </p>
              </div>
            </div>
          </div>

          {/* Conversational AI Card */}
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 hover:border-gold/50 transition-colors duration-200">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold/20 to-neon-green/20 rounded-full flex items-center justify-center">
                  <Shield size={32} className="sm:hidden text-gold" />
                  <Shield size={40} className="hidden sm:block text-gold" />
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-gold via-neon-green to-gold bg-clip-text text-transparent">
                    Conversational AI
                  </span>
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base md:text-lg">
                  Engage in natural conversations with dynamic responses and context awareness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
