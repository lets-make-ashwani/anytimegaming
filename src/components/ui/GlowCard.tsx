"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent" | "success";
  delay?: number;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "primary",
  delay = 0,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const glowColors = {
    primary: "rgba(255, 0, 60, 0.25)",
    secondary: "rgba(0, 229, 255, 0.25)",
    accent: "rgba(123, 97, 255, 0.25)",
    success: "rgba(0, 255, 136, 0.25)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-[#111111]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/10 hover:-translate-y-1.5 shadow-2xl ${className}`}
    >
      {/* Interactive mouse tracking glow effect */}
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColors[glowColor]} 0%, transparent 80%)`,
          }}
        />
      )}

      {/* Decorative border highlight */}
      <div
        className={`pointer-events-none absolute top-0 left-0 h-1 w-full opacity-60 bg-gradient-to-r ${
          glowColor === "primary"
            ? "from-primary to-transparent"
            : glowColor === "secondary"
            ? "from-secondary to-transparent"
            : glowColor === "success"
            ? "from-success to-transparent"
            : "from-accent to-transparent"
        }`}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
