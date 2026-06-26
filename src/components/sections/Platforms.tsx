"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Gamepad2, Layers, ShieldCheck, Zap } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";

export function Platforms() {
  const platforms = [
    {
      title: "PlayStation 5",
      icon: <Gamepad2 className="text-[#00E5FF]" size={32} />,
      desc: "Experience high-fidelity next-gen console gaming. Features lightning-fast SSD load speeds and immersive haptic controller feedback.",
      performance: "4K Resolution @ 120 FPS",
      features: ["HDR Tech & Ray Tracing", "DualSense Haptics", "Multiplayer Co-op (Up to 4 Players)"],
      glow: "secondary" as const,
    },
    {
      title: "Gaming PC Rigs",
      icon: <Cpu className="text-[#FF003C]" size={32} />,
      desc: "Crush the leaderboards on competitive custom rigs. Engineered with RTX series graphic chips, mechanical peripherals, and high-hz screens.",
      performance: "240Hz+ High-FPS Settings",
      features: ["RTX Ray Tracing & DLSS 3", "Esports Mechanical Gear", "Low Ping fiber network backup"],
      glow: "primary" as const,
    },
    {
      title: "Virtual Reality",
      icon: <Layers className="text-[#7B61FF]" size={32} />,
      desc: "Step completely inside the virtual sandbox. 360-degree environmental spatial tracking and twin motion-sensitive handheld controllers.",
      performance: "90Hz Low-Latency 3D",
      features: ["360° Positional Sound", "Immersive Motion Controls", "Large catalog of VR titles"],
      glow: "accent" as const,
    },
    {
      title: "PlayStation 4",
      icon: <Gamepad2 className="text-[#00FF88]" size={32} />,
      desc: "Perfect for classic sports standoffs, fighting tournaments, and classic campaign completions with friends at highly budget-friendly rates.",
      performance: "1080p Smooth Output",
      features: ["Huge local library of titles", "Budget multiplayer rates", "Co-op & Versus local split-screen"],
      glow: "success" as const,
    },
  ];

  const handleBookRedirect = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="platforms" className="relative py-24 bg-black">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#00E5FF] opacity-[0.02] blur-[120px]" />
      
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            SELECT YOUR <span className="text-[#00E5FF]">HARDWARE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light"
          >
            We supply the ultimate specs so that your gameplay is flawless. Choose from our line of custom PCs, consoles, or interactive setups.
          </motion.p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform, idx) => (
            <GlowCard
              key={platform.title}
              glowColor={platform.glow}
              delay={idx * 0.1}
              className="flex flex-col justify-between h-full border border-white/5 bg-[#111111]/40"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      {platform.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                      {platform.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-[#00E5FF] border border-[#00E5FF]/20">
                    <Zap size={12} className="animate-pulse" />
                    {platform.performance}
                  </span>
                </div>

                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                  {platform.desc}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-3 mb-8">
                  {platform.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-white/90">
                      <ShieldCheck size={16} className="text-[#00FF88] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Button
                  variant={platform.glow === "primary" ? "primary" : platform.glow === "secondary" ? "secondary" : "accent"}
                  onClick={handleBookRedirect}
                  className="w-full"
                >
                  Book Session
                </Button>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
