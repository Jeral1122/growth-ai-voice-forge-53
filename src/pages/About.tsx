
import React from 'react';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { NavBarDemo } from '../components/ui/navbar-demo';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/ui/faq-section';
import Footer from '../components/Footer';
import AboutComponent from '../components/About';
import { ConnectSection } from '../components/sections/ConnectSection';

const About = () => {
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
      <AboutComponent />
      <ConnectSection />
      <TestimonialsSection />
      <FAQSection title="Common Questions" description="Everything you need to know about GROWTH AI" faqs={faqs} />
      <Footer />
    </BackgroundLayout>
  );
};

export default About;
