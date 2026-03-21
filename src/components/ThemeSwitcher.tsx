"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"mono" | "accent">("accent");

  useEffect(() => {
    const saved = localStorage.getItem("ds-theme") as "mono" | "accent" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "accent");
    }
  }, []);

  const toggle = () => {
    const next = theme === "mono" ? "accent" : "mono";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ds-theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-5 rounded-full border transition-all duration-300 flex items-center"
      style={{
        borderColor: "var(--color-ds-cta-border)",
        backgroundColor: theme === "accent" ? "rgba(124, 58, 237, 0.15)" : "transparent",
      }}
      aria-label={`Switch to ${theme === "mono" ? "accent" : "mono"} theme`}
      title={theme === "mono" ? "Switch to Violet/Indigo/Gold" : "Switch to Monochrome"}
    >
      <span
        className="block w-3 h-3 rounded-full transition-all duration-300"
        style={{
          backgroundColor: theme === "accent" ? "#8b5cf6" : "rgba(255,255,255,0.8)",
          transform: theme === "accent" ? "translateX(22px)" : "translateX(4px)",
        }}
      />
    </button>
  );
}
