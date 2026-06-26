"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
          {/* Brand identifier */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 shrink-0 rounded-full border border-white/10 overflow-hidden bg-[#050505]">
              <Image
                src="/logo1.png"
                alt="Anytime Gaming Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-white block">
                ANYTIME GAMING
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#00E5FF] uppercase font-bold">
                Haldwani Lounge
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center font-display font-black text-sm tracking-[0.3em] uppercase text-white/40">
            COME. <span className="text-primary">PLAY.</span> WIN. <span className="text-secondary">REPEAT.</span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollTop}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#9CA3AF] hover:text-white hover:border-primary hover:shadow-[0_0_10px_rgba(255,0,60,0.2)] transition-all duration-300 active:scale-95 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9CA3AF]">
          <div>
            &copy; {currentYear} Anytime Gaming Haldwani. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Booking Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
