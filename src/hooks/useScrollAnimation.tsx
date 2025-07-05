
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.15, rootMargin = '0px 0px -80px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Keep observing to allow re-triggering if needed
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
};
