"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { Cpu, Wifi, Sparkles, Tag, Gamepad, Smile, Users, ShieldAlert } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Cpu className="text-[#FF003C]" size={26} />,
      title: "Premium Hardware",
      desc: "Experience ultra-high graphics and zero screen tearing with RTX graphics and 240Hz monitors.",
      glow: "primary" as const,
    },
    {
      icon: <ShieldAlert className="text-[#00E5FF]" size={26} />,
      title: "Comfortable Seating",
      desc: "Support your back during long gaming campaigns with high-comfort racing-grade ergonomic chairs.",
      glow: "secondary" as const,
    },
    {
      icon: <Wifi className="text-[#7B61FF]" size={26} />,
      title: "Ultra-Fast Internet",
      desc: "Say goodbye to high ping. Our dual-line enterprise fiber guarantees steady single-digit ping.",
      glow: "accent" as const,
    },
    {
      icon: <Sparkles className="text-[#00FF88]" size={26} />,
      title: "Clean Environment",
      desc: "A fully air-conditioned, regularly sanitized, dust-free arena with comfortable lighting levels.",
      glow: "success" as const,
    },
    {
      icon: <Tag className="text-[#00E5FF]" size={26} />,
      title: "Affordable Pricing",
      desc: "Enjoy top-tier gaming systems at rates starting at just ₹70. Multiplayer packages save more.",
      glow: "secondary" as const,
    },
    {
      icon: <Gamepad className="text-[#FF003C]" size={26} />,
      title: "Latest Games",
      desc: "All major AAA and multiplayer titles pre-installed and auto-patched (FC 26, Tekken 8, GTA).",
      glow: "primary" as const,
    },
    {
      icon: <Smile className="text-[#00FF88]" size={26} />,
      title: "Friendly Staff",
      desc: "Our supportive in-house gaming crew is always ready to load games or set up controllers.",
      glow: "success" as const,
    },
    {
      icon: <Users className="text-[#7B61FF]" size={26} />,
      title: "Perfect for Friends",
      desc: "Adjacent station layouts make it easy to host local LAN match-ups or split-screen co-op fun.",
      glow: "accent" as const,
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 border-t border-white/5 bg-[#080808]">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-[#FF003C] opacity-[0.02] blur-[110px]" />
      
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            WHY PLAY <span className="text-[#FF003C]">WITH US?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light"
          >
            We don&apos;t just rent PCs and consoles. We host the ultimate competitive gaming atmosphere in Haldwani.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <GlowCard
              key={reason.title}
              glowColor={reason.glow}
              delay={idx * 0.05}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10">
                  {reason.icon}
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
