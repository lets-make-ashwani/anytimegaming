"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyle =
    "relative inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white border border-primary/40 hover:bg-[#ff1448] shadow-[0_0_15px_rgba(255,0,60,0.35)] hover:shadow-[0_0_25px_rgba(255,0,60,0.6)]",
    secondary:
      "bg-secondary text-[#050505] border border-secondary/40 hover:bg-[#00f0ff] shadow-[0_0_15px_rgba(0,229,255,0.35)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]",
    accent:
      "bg-accent text-white border border-accent/40 hover:bg-[#8d77ff] shadow-[0_0_15px_rgba(123,97,255,0.35)] hover:shadow-[0_0_25px_rgba(123,97,255,0.6)]",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(255,0,60,0.2)]",
    ghost:
      "bg-transparent text-[#9CA3AF] hover:text-white hover:bg-white/5",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
