"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useRef, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes = [
    { id: "dark" as const, label: "dark" },
    { id: "light" as const, label: "light" },
  ];

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  // Wait for mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="theme-dropdown" ref={dropdownRef}>
      <button 
        className="theme-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="theme-prefix">theme:</span>
        <span className="theme-value">{mounted ? currentTheme.label : "\u00A0\u00A0\u00A0\u00A0"}</span>
        <span className="theme-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      
      {isOpen && (
        <div className="theme-dropdown-menu" role="listbox">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`theme-dropdown-item ${theme === t.id ? "active" : ""}`}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={theme === t.id}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
