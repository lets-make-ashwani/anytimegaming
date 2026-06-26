"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { Cpu, Gamepad2, Wifi, Wind, Trophy, Flame, Disc, Layers } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Cpu className="text-[#00E5FF]" size={24} />,
      title: "High-End PCs",
      desc: "Top-tier configurations with RTX graphics cards and 240Hz gaming monitors.",
      glow: "secondary" as const,
    },
    {
      icon: <Gamepad2 className="text-[#FF003C]" size={24} />,
      title: "PS5 & PS4 Consoles",
      desc: "Play multiplayer sports, fighting, and co-op adventures on high-refresh displays.",
      glow: "primary" as const,
    },
    {
      icon: <Disc className="text-[#7B61FF]" size={24} />,
      title: "VR Gaming Arena",
      desc: "Immersive VR setups with motion tracking controllers and a wide game library.",
      glow: "accent" as const,
    },
    {
      icon: <Wifi className="text-[#00FF88]" size={24} />,
      title: "High Speed Fiber Net",
      desc: "Dual-broadband backup ensuring zero ping spikes and immediate downloads.",
      glow: "success" as const,
    },
    {
      icon: <Layers className="text-[#7B61FF]" size={24} />,
      title: "Ergonomic Seating",
      desc: "Adjustable premium gaming chairs designed for long, comfortable gaming sessions.",
      glow: "accent" as const,
    },
    {
      icon: <Wind className="text-[#00E5FF]" size={24} />,
      title: "Fully Air Conditioned",
      desc: "Maintained climate controls so your focus stays locked onto the screen.",
      glow: "secondary" as const,
    },
    {
      icon: <Trophy className="text-[#FF003C]" size={24} />,
      title: "Tournament Setup",
      desc: "Dedicated rows ready for multiplayer team training or local LAN events.",
      glow: "primary" as const,
    },
    {
      icon: <Flame className="text-[#00FF88]" size={24} />,
      title: "Latest Catalog",
      desc: "All game licenses pre-loaded and auto-updated. Just log in and play.",
      glow: "success" as const,
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/5 bg-[#080808]">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-[#7B61FF] opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-10 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-[#FF003C] opacity-[0.03] blur-[100px]" />

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
            The Ultimate <span className="text-[#FF003C]">Battle Station</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light"
          >
            Located in the heart of Haldwani, **Anytime Gaming** is a premium gaming lounge designed from the ground up for casual groups, hardcore enthusiasts, and esports competitors alike.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <GlowCard
              key={item.title}
              glowColor={item.glow}
              delay={idx * 0.05}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
