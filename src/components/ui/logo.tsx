
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Logo = ({ className = '', size = 'md', onClick }: LogoProps) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navigate = useNavigate();

  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-20 w-20', 
    lg: 'h-24 w-24'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };

  return (
    <button 
      onClick={handleClick}
      className={`hover:scale-105 transition-all duration-300 ${className}`}
      aria-label="Go to homepage"
    >
      <img 
        src="/lovable-uploads/6665fb26-de5b-467c-b8cb-4d13aa47ba13.png" 
        alt="GrowthAI Logo" 
        className={`${sizeClasses[size]} w-auto transition-all duration-500 ease-out ${
          logoLoaded ? 'opacity-100 animate-logo-fade-up' : 'opacity-0'
        }`}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onLoad={handleLogoLoad}
      />
    </button>
  );
};
