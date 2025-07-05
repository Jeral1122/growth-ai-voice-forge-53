
import React, { useEffect } from 'react';

export const ConnectSection = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Initialize Calendly widget after script loads
    const initializeCalendly = () => {
      if (window.Calendly) {
        const widget = document.querySelector('.calendly-inline-widget');
        if (widget && !widget.querySelector('iframe')) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/muhammadjeralkhan/new-meeting',
            parentElement: widget,
            prefill: {},
            utm: {}
          });
        }
      }
    };

    const timer = setTimeout(initializeCalendly, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="connect" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-open-sans max-w-4xl mx-auto">
            Ready to transform your business with AI voice agents? Schedule a personalized demo and see how GROWTH AI can double your revenue.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/muhammadjeralkhan/new-meeting" 
              style={{ 
                minWidth: '280px',
                width: '100%',
                height: '650px',
                border: 'none',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
