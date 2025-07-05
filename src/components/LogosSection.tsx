

import React from 'react';
import { motion } from 'framer-motion';

const LogosSection = () => {
  const logos = [{
    name: 'ittracts',
    logo: 'ittracts'
  }, {
    name: 'elio',
    logo: 'elio'
  }, {
    name: 'relax',
    logo: 'relax.'
  }, {
    name: 'olab',
    logo: 'olab'
  }, {
    name: 'verse',
    logo: 'verse'
  }];

  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of companies that trust our AI platform
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <div className="text-xl md:text-2xl font-semibold">
                {company.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;

