
import React from 'react';
import { Users, Award, TrendingUp, ArrowRight, Calendar, Target, Zap, Instagram } from 'lucide-react';

const About = () => {
  return <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* Left Column - Visual Content */}
          <div className="relative animate-slide-up order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp size={48} className="text-neon-green" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                  AI-Powered Growth
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed">
                  Transform your business with intelligent voice agents that work 24/7 to drive revenue growth.
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-green/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold mb-8">
                <span className="text-white">About </span>
                <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
                  GROWTH AI
                </span>
              </h2>
              <p className="text-lg text-gray-300 font-open-sans leading-relaxed mb-8">
                We revolutionize how businesses handle customer interactions through advanced AI voice technology. 
                Our intelligent agents don't just answer calls—they actively drive revenue growth by qualifying leads, 
                booking appointments, and nurturing prospects with human-like conversations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-700/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-neon-green" />
                </div>
                <div>
                  <h3 className="text-white font-montserrat font-semibold text-base mb-2">
                    50+ Companies
                  </h3>
                  <p className="text-gray-400 font-open-sans text-sm">
                    Trust our AI solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-700/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-montserrat font-semibold text-base mb-2">
                    Industry Leader
                  </h3>
                  <p className="text-gray-400 font-open-sans text-sm">
                    In AI voice technology
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button - Centered with Animation */}
            <div className="pt-6 flex justify-center">
              <button onClick={() => {
              const element = document.querySelector('#connect');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="bg-gradient-to-r from-neon-green to-gold text-charcoal px-8 py-4 rounded-lg font-montserrat font-semibold text-base transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-neon-green/20 flex items-center gap-3 shadow-lg animate-pulse-glow group">
                Get Started Today
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Team Section - Victor Reece Only */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold mb-8">
              <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
                Meet Our Founder
              </span>
            </h2>
          </div>

          {/* Victor Reece */}
          <div>
            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl max-w-sm w-full">
                  <div className="w-full aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden bg-gray-800 border border-gray-600">
                    <img alt="Victor Reece" className="w-full h-full object-cover" src="/lovable-uploads/b181c1d6-d877-4440-9167-9900d61ddc2b.jpg" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
              
              {/* Name and Position */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                  Victor Reece
                </h3>
                <p className="text-lg text-gold font-montserrat font-semibold mb-4">
                  Founder
                </p>
              </div>

              {/* Instagram Icon */}
              <div className="flex justify-center mb-6">
                <a href="https://www.instagram.com/victorreeceg/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center hover:bg-gold/30 transition-colors">
                  <Instagram size={24} className="text-gold" />
                </a>
              </div>

              {/* Context */}
              <div className="space-y-4 text-gray-300 font-open-sans leading-relaxed text-sm px-4">
                <p>
                  We've worked across all industries: Digital Marketing, Real Estate, Property, Construction, Accounting, 
                  Hospitality, Medical, FinTech, Dental.
                </p>
                <p>
                  We partner closely with our clients to understand their workflows and operational goals.
                </p>
                <p>
                  From pilot to production, we deliver scalable Voice AI solutions tailored to their business needs.
                </p>
                <p>
                  Our mission is to solve problems and create real value with the most powerful technology.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Content Column */}
              <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-white mb-2">
                    Victor Reece
                  </h3>
                  <p className="text-lg sm:text-xl text-gold font-montserrat font-semibold mb-4">
                    Founder
                  </p>
                  <div className="flex gap-4 mb-6 justify-center lg:justify-start">
                    <a href="https://www.instagram.com/victorreeceg/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center hover:bg-gold/30 transition-colors">
                      <Instagram size={24} className="text-gold" />
                    </a>
                  </div>
                </div>
                <div className="space-y-4 text-gray-300 font-open-sans leading-relaxed text-sm sm:text-base">
                  <p>
                    We've worked across all industries: Digital Marketing, Real Estate, Property, Construction, Accounting, 
                    Hospitality, Medical, FinTech, Dental.
                  </p>
                  <p>
                    We partner closely with our clients to understand their workflows and operational goals.
                  </p>
                  <p>
                    From pilot to production, we deliver scalable Voice AI solutions tailored to their business needs.
                  </p>
                  <p>
                    Our mission is to solve problems and create real value with the most powerful technology.
                  </p>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative order-1 lg:order-2 flex justify-center">
                <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-2xl max-w-sm w-full">
                  <div className="w-full aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden bg-gray-800 border border-gray-600">
                    <img alt="Victor Reece" className="w-full h-full object-cover" src="/lovable-uploads/b181c1d6-d877-4440-9167-9900d61ddc2b.jpg" />
                  </div>
                  <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default About;
