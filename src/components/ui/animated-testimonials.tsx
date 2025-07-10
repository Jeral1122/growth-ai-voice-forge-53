
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
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative">
        <div className="flex justify-center flex-col py-4">
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
            <h3 className="text-2xl font-bold text-white mb-2">
              {testimonials[active].name}
            </h3>
            <motion.p 
              className="text-lg text-gray-300 mt-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            >
              "{testimonials[active].quote}"
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 justify-center">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 border border-neon-green/30 flex items-center justify-center group/button hover:from-neon-green/30 hover:to-neon-green/20 transition-all duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-neon-green transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 border border-neon-green/30 flex items-center justify-center group/button hover:from-neon-green/30 hover:to-neon-green/20 transition-all duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-neon-green transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
