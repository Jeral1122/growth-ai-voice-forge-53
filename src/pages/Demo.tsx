
import React from 'react';
import { Phone } from 'lucide-react';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { NavBarDemo } from '../components/ui/navbar-demo';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/ui/faq-section';
import Footer from '../components/Footer';
import VapiWidget from '../components/VapiWidget';
import { ConnectSection } from '../components/sections/ConnectSection';

const Demo = () => {
  const faqs = [{
    question: "What can GROWTH AI do for my business?",
    answer: "GROWTH AI can handle inbound calls, qualify leads, book appointments, conduct outbound sales calls, follow up with prospects, and integrate with your existing CRM systems. Our AI agents work 24/7 with perfect memory and consistent performance."
  }, {
    question: "How is GROWTH AI different from other chatbots?",
    answer: "Unlike generic chatbots, GROWTH AI is specifically trained for voice conversations and sales processes. We provide custom conversation flows, seamless CRM integration, and human-like voice quality that your customers won't distinguish from real agents."
  }, {
    question: "Is my data secure with GROWTH AI?",
    answer: "Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and secure data handling practices. Your customer data and business information are protected with the highest security standards."
  }, {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 technical support, dedicated account management for Enterprise clients, comprehensive onboarding, and ongoing optimization of your AI agents based on performance data."
  }, {
    question: "How quickly can I get started?",
    answer: "Most clients are up and running within 24-48 hours. We handle the technical setup, train the AI on your specific business needs, and provide testing before going live."
  }];

  return (
    <BackgroundLayout>
      <NavBarDemo />

      {/* Main content with top padding to account for navbar */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 sm:pt-20">
        {/* Phone Icon */}
        <div className="mb-6 sm:mb-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          <Phone size={48} className="text-neon-green sm:hidden" />
          <Phone size={64} className="text-neon-green hidden sm:block" />
        </div>

        {/* Demo Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 text-center font-montserrat px-2 animate-slide-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
          <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
            Demo
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-2xl mb-12 text-base sm:text-lg md:text-xl leading-relaxed font-open-sans px-4 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
          Never lose revenue from missed calls again. Try our AI voice assistant below.
        </p>

        {/* VAPI Widget - Centered in main section */}
        <div className="flex justify-center items-center mb-16 animate-slide-up opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
          <VapiWidget apiKey="61e6d51e-4990-4f1a-81c5-322ee3d44293" assistantId="284ece91-16b0-4645-b1cc-b2ef648da3f1" />
        </div>
      </div>

      <ConnectSection />
      <TestimonialsSection />
      <FAQSection title="Common Questions" description="Everything you need to know about GROWTH AI" faqs={faqs} />
      <Footer />
    </BackgroundLayout>
  );
};

export default Demo;
