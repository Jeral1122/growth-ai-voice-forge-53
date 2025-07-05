
import React from 'react';

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export const BackgroundLayout = ({ children }: BackgroundLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Luxury gradient background with brand colors */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-charcoal to-black">
        {/* Primary brand color overlays */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(164,255,0,0.2)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(210,174,55,0.15)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,_rgba(164,255,0,0.1)_0%,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,_rgba(210,174,55,0.1)_0%,_transparent_60%)]"></div>
        </div>
        
        {/* Luxury mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-neon-green/5"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/3 to-transparent"></div>
        </div>
        
        {/* Sophisticated geometric patterns */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(164,255,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(164,255,0,0.08)_1px,transparent_1px)] bg-[size:80px_80px] md:bg-[size:120px_120px]"></div>
        </div>

        {/* Luxury accent lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-neon-green/50 to-transparent"></div>
        </div>

        {/* Static luxury elements (removed animations) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-green/5 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gold/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-neon-green/3 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Content with proper z-index and responsive padding */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};
