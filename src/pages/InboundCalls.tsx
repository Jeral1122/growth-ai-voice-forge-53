
import React from 'react';
import { NavBarDemo } from '../components/ui/navbar-demo';
import Footer from '../components/Footer';
import { FAQSection } from '../components/ui/faq-section';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ConnectSection } from '../components/sections/ConnectSection';
import { Phone, Clock, Users, Calendar, PhoneCall, Check } from 'lucide-react';

const InboundCalls = () => {
  const faqs = [
    {
      question: "What can GROWTH AI do for my business?",
      answer: "GROWTH AI can handle inbound calls, qualify leads, book appointments, conduct outbound sales calls, follow up with prospects, and integrate with your existing CRM systems. Our AI agents work 24/7 with perfect memory and consistent performance."
    },
    {
      question: "How is GROWTH AI different from other chatbots?",
      answer: "Unlike generic chatbots, GROWTH AI is specifically trained for voice conversations and sales processes. We provide custom conversation flows, seamless CRM integration, and human-like voice quality that your customers won't distinguish from real agents."
    },
    {
      question: "Is my data secure with GROWTH AI?",
      answer: "Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and secure data handling practices. Your customer data and business information are protected with the highest security standards."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support, dedicated account management for Enterprise clients, comprehensive onboarding, and ongoing optimization of your AI agents based on performance data."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most clients are up and running within 24-48 hours. We handle the technical setup, train the AI on your specific business needs, and provide testing before going live."
    }
  ];

  return (
    <BackgroundLayout>
      <NavBarDemo />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
                Inbound Calls
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-open-sans max-w-4xl mx-auto px-4">
              Human-like virtual receptionist to handle your incoming calls with perfect professionalism and efficiency.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-white">
                Never Miss Another Lead
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-open-sans leading-relaxed">
                Our AI-powered inbound call system ensures every customer interaction is handled professionally, 24/7. From lead qualification to appointment scheduling, we've got you covered.
              </p>

              {/* Feature List */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-neon-green flex-shrink-0 sm:hidden" />
                  <Check size={20} className="text-neon-green flex-shrink-0 hidden sm:block" />
                  <span className="text-sm sm:text-base text-gray-300 font-open-sans">Instant call answering - no wait times</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-neon-green flex-shrink-0 sm:hidden" />
                  <Check size={20} className="text-neon-green flex-shrink-0 hidden sm:block" />
                  <span className="text-sm sm:text-base text-gray-300 font-open-sans">Professional greeting and company branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-neon-green flex-shrink-0 sm:hidden" />
                  <Check size={20} className="text-neon-green flex-shrink-0 hidden sm:block" />
                  <span className="text-sm sm:text-base text-gray-300 font-open-sans">Lead qualification and scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-neon-green flex-shrink-0 sm:hidden" />
                  <Check size={20} className="text-neon-green flex-shrink-0 hidden sm:block" />
                  <span className="text-sm sm:text-base text-gray-300 font-open-sans">Seamless appointment booking</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-neon-green to-gold text-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-full font-montserrat font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20 w-full sm:w-auto">
                Get Started
              </button>
            </div>

            {/* Right Content - AI Receptionist Visual */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-neon-green/20 to-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-neon-green/30">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-neon-green/10 rounded-full flex items-center justify-center">
                    <Phone size={48} className="text-neon-green sm:hidden" />
                    <Phone size={64} className="text-neon-green hidden sm:block" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900/90 to-charcoal/90 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-2 sm:py-3 border border-neon-green/30">
                  <h3 className="text-base sm:text-lg font-montserrat font-bold text-neon-green mb-1">AI Receptionist</h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-open-sans">Always professional, never takes a break</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* 24/7 Availability */}
            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock size={24} className="text-neon-green sm:hidden" />
                <Clock size={32} className="text-neon-green hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-bold text-neon-green mb-2 sm:mb-3">24/7 Availability</h3>
              <p className="text-gray-300 font-open-sans text-xs sm:text-sm">Round-the-clock call handling, even during holidays</p>
            </div>

            {/* Lead Qualification */}
            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-gold/30 transition-all duration-300 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users size={24} className="text-gold sm:hidden" />
                <Users size={32} className="text-gold hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-bold text-gold mb-2 sm:mb-3">Lead Qualification</h3>
              <p className="text-gray-300 font-open-sans text-xs sm:text-sm">Intelligent screening and scoring of prospects</p>
            </div>

            {/* Appointment Booking */}
            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar size={24} className="text-neon-green sm:hidden" />
                <Calendar size={32} className="text-neon-green hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-bold text-neon-green mb-2 sm:mb-3">Appointment Booking</h3>
              <p className="text-gray-300 font-open-sans text-xs sm:text-sm">Seamless calendar integration and scheduling</p>
            </div>

            {/* Call Transfer */}
            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-gold/30 transition-all duration-300 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <PhoneCall size={24} className="text-gold sm:hidden" />
                <PhoneCall size={32} className="text-gold hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-montserrat font-bold text-gold mb-2 sm:mb-3">Call Transfer</h3>
              <p className="text-gray-300 font-open-sans text-xs sm:text-sm">Smart routing to the right team member</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-neon-green to-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-charcoal font-montserrat font-bold text-lg sm:text-xl">
                1
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-bold text-white mb-3 sm:mb-4">Call Received</h3>
              <p className="text-sm sm:text-base text-gray-300 font-open-sans">AI instantly answers with your custom greeting</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gold to-neon-green rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-charcoal font-montserrat font-bold text-lg sm:text-xl">
                2
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-bold text-white mb-3 sm:mb-4">Qualify & Engage</h3>
              <p className="text-sm sm:text-base text-gray-300 font-open-sans">Natural conversation to understand caller needs</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-neon-green to-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-charcoal font-montserrat font-bold text-lg sm:text-xl">
                3
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-bold text-white mb-3 sm:mb-4">Take Action</h3>
              <p className="text-sm sm:text-base text-gray-300 font-open-sans">Book appointments, transfer calls, or capture leads</p>
            </div>
          </div>
        </div>
      </section>

      <ConnectSection />
      <TestimonialsSection />
      <FAQSection
        title="Common Questions"
        description="Everything you need to know about GROWTH AI"
        faqs={faqs}
      />
      <Footer />
    </BackgroundLayout>
  );
};

export default InboundCalls;
