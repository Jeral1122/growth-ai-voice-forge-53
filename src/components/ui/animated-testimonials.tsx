
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
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={testimonials[active].src}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="absolute inset-0"
              >
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
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
          >
            <h3 className="text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-neon-green">
              {testimonials[active].designation}
            </p>
            <motion.p 
              className="text-lg text-gray-300 mt-8"
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
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
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
