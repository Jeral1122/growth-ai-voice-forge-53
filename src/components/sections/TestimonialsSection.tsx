
import React from 'react';
import { AnimatedTestimonials } from '../ui/animated-testimonials';

const testimonials = [{
  quote: "GROWTH AI transformed our customer service completely. Our AI agents handle 95% of calls perfectly, and our customers love the instant, human-like responses. It's like having a 24/7 sales team that never sleeps.",
  name: "Sarah Martinez",
  designation: "",
  src: ""
}, {
  quote: "We've tripled our lead conversion rate since implementing GROWTH AI. The appointment booking feature alone saved us 30+ hours per week. The ROI has been phenomenal - paid for itself in the first month.",
  name: "Marcus Rodriguez",
  designation: "",
  src: ""
}, {
  quote: "The natural conversation flow is absolutely incredible. Our clients genuinely can't tell they're talking to an AI agent. The voice quality and emotional intelligence are beyond anything we've seen before.",
  name: "Emily Watson",
  designation: "",
  src: ""
}, {
  quote: "Integration was seamless - within 24 hours our CRM was connected and our AI agents were making calls. The neural text-to-speech sounds completely human with perfect emotional nuance. Outstanding support team too.",
  name: "David Park",
  designation: "",
  src: ""
}, {
  quote: "GROWTH AI handles complex sales conversations better than most human agents. The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
  name: "Lisa Thompson",
  designation: "",
  src: ""
}];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-open-sans max-w-5xl mx-auto px-4">
            Real feedback from businesses who have transformed their customer experience with GROWTH AI's 
            advanced voice agents and are seeing incredible results.
          </p>
        </div>
        
        <div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} className="max-w-6xl" />
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
