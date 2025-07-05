
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface DesktopNavbarProps {
  items: NavItem[];
  activeTab: string;
  onItemClick: (itemName: string, url: string) => void;
  className?: string;
}

export const DesktopNavbar = ({ items, activeTab, onItemClick, className }: DesktopNavbarProps) => {
  return (
    <>
      {/* High priority preload for desktop logo */}
      <link rel="preload" as="image" href="/lovable-uploads/6665fb26-de5b-467c-b8cb-4d13aa47ba13.png" fetchPriority="high" />
      <link rel="dns-prefetch" href="//lovable-uploads" />
      
      {/* Logo - Desktop only - Fixed at top */}
      <div className="fixed top-1 left-4 z-50 hidden md:block">
        <Logo size="lg" />
      </div>

      {/* Navigation */}
      <div className={cn("fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[calc(100vw-2rem)] px-2 sm:px-0", className)}>
        <div className="flex items-center gap-1 sm:gap-2 bg-charcoal/90 border border-neon-green/20 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg overflow-hidden">
          {items.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => onItemClick(item.name, item.url)}
                className={cn(
                  "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors duration-200",
                  "text-white/80 hover:text-neon-green",
                  isActive && "bg-neon-green/10 text-neon-green"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-neon-green/5 rounded-full -z-10 border border-neon-green/30"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      duration: 0.2
                    }}
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-neon-green/60 rounded-t-full"></div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
