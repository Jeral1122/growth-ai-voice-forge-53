
"use client";

import React, { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileNavbar } from "./mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  // Handle active tab based on current route and hash
  useEffect(() => {
    const currentPath = location.pathname;
    const currentHash = location.hash;

    // If there's a hash, check if any nav item matches it
    if (currentHash) {
      const hashMatch = items.find(item => item.url === currentHash);
      if (hashMatch) {
        setActiveTab(hashMatch.name);
        return;
      }
    }

    // Check for route matches
    const exactMatch = items.find(item => item.url === currentPath);
    if (exactMatch) {
      setActiveTab(exactMatch.name);
      return;
    }

    // For root path, only match exactly
    if (currentPath === '/') {
      const homeItem = items.find(item => item.url === '/');
      setActiveTab(homeItem ? homeItem.name : items[0].name);
      return;
    }

    // For other paths, find the best match
    const pathMatch = items.find(item => {
      if (item.url === '/') return false;
      return currentPath.startsWith(item.url);
    });
    setActiveTab(pathMatch ? pathMatch.name : items[0].name);
  }, [location.pathname, location.hash, items]);

  const handleItemClick = (itemName: string, url: string) => {
    // Set active tab immediately for better UX
    setActiveTab(itemName);

    // Handle navigation for hash links vs routes
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(url);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  if (isMobile) {
    return (
      <MobileNavbar
        items={items}
        activeTab={activeTab}
        onItemClick={handleItemClick}
        className={className}
      />
    );
  }

  return (
    <DesktopNavbar
      items={items}
      activeTab={activeTab}
      onItemClick={handleItemClick}
      className={className}
    />
  );
}
