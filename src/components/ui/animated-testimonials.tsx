
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("max-w-sm md:max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-12", className)}>
      <div className="relative bg-gradient-to-br from-gray-800/20 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent rounded-2xl"></div>
        
        <div className="relative z-10">
          <motion.div
            key={active}
            initial={{
              y: 30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.1,
            }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="text-neon-green text-6xl font-serif leading-none mb-4">"</div>
              <motion.p 
                className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
              >
                {testimonials[active].quote}
              </motion.p>
            </div>
            
            <div className="border-t border-gray-700/50 pt-6">
              <h4 className="text-xl font-semibold text-white mb-1">
                {testimonials[active].name}
              </h4>
            </div>
          </motion.div>
          
          <div className="flex gap-3 pt-8 justify-center">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-700/40 to-gray-800/60 border border-gray-600/40 flex items-center justify-center group/button hover:from-neon-green/20 hover:to-neon-green/10 hover:border-neon-green/40 transition-all duration-300 backdrop-blur-sm"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-300 group-hover/button:text-neon-green transition-colors duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-700/40 to-gray-800/60 border border-gray-600/40 flex items-center justify-center group/button hover:from-neon-green/20 hover:to-neon-green/10 hover:border-neon-green/40 transition-all duration-300 backdrop-blur-sm"
            >
              <IconArrowRight className="h-5 w-5 text-gray-300 group-hover/button:text-neon-green transition-colors duration-300" />
            </button>
          </div>
        </div>
        
        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                isActive(index) 
                  ? "bg-neon-green w-8" 
                  : "bg-gray-600 hover:bg-gray-500"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
