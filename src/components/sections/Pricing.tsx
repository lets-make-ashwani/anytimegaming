"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Calculator, Users, Clock, Flame, Info } from "lucide-react";

export function Pricing() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("ps5");
  const [selectedPlayers, setSelectedPlayers] = useState<number>(1);
  const [selectedDuration, setSelectedDuration] = useState<"30m" | "1h">("1h");

  // Price schema from the flyers
  const pricingDatabase = {
    ps5: {
      name: "PlayStation 5",
      isMultiplayer: true,
      maxPlayers: 4,
      rates: {
        1: { "30m": 70, "1h": 100 },
        2: { "30m": 120, "1h": 180 },
        3: { "30m": 170, "1h": 260 },
        4: { "30m": 200, "1h": 300 },
      },
    },
    ps4: {
      name: "PlayStation 4",
      isMultiplayer: true,
      maxPlayers: 4,
      rates: {
        1: { "30m": 50, "1h": 80 },
        2: { "30m": 100, "1h": 150 },
        3: { "30m": 150, "1h": 220 },
        4: { "30m": 200, "1h": 250 },
      },
    },
    pc: {
      name: "Gaming PC Rigs",
      isMultiplayer: false,
      maxPlayers: 1,
      rates: {
        1: { "30m": 70, "1h": 100 },
      },
    },
    vr: {
      name: "VR Experience",
      isMultiplayer: false,
      maxPlayers: 1,
      rates: {
        1: { "30m": 150, "1h": 250 },
      },
    },
    vr_wheel: {
      name: "VR + Racing Wheel",
      isMultiplayer: false,
      maxPlayers: 1,
      rates: {
        1: { "30m": 250, "1h": 400 },
      },
    },
    racing: {
      name: "Pro Racing Wheel",
      isMultiplayer: false,
      maxPlayers: 1,
      rates: {
        1: { "30m": 150, "1h": 250 },
      },
    },
  };

  const getCalculatedCost = () => {
    const platform = pricingDatabase[selectedPlatform as keyof typeof pricingDatabase];
    if (!platform) return 0;
    
    const playerKey = platform.isMultiplayer ? selectedPlayers : 1;
    // Fallback if index gets out of bounds
    const rateList = platform.rates[playerKey as keyof typeof platform.rates] || platform.rates[1];
    return rateList[selectedDuration];
  };

  const handleBookNow = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative py-24 bg-[#080808]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#FF003C] opacity-[0.03] blur-[130px]" />
      
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
            TRANSPARENT <span className="text-[#FF003C]">PRICING</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light"
          >
            Choose your weapon and duration. No hidden fees. Pay exactly for the gaming time you spend.
          </motion.p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Traditional Pricing Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* PS5 pricing summary card */}
            <GlowCard glowColor="primary" className="flex flex-col justify-between border-primary/20 bg-gradient-to-b from-[#181113] to-[#111111]/90">
              <div className="absolute -top-3 -right-3 rounded-tr-2xl rounded-bl-2xl bg-primary text-white text-[10px] font-bold tracking-wider px-3 py-1.5 uppercase shadow-[0_0_10px_rgba(255,0,60,0.4)]">
                Most Popular
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">PlayStation 5</h3>
                <p className="text-xs text-[#9CA3AF] mb-4">Ultimate console co-op with friends</p>
                <div className="flex items-baseline gap-1 text-white border-t border-white/5 pt-4 mt-2">
                  <span className="text-sm font-semibold">from</span>
                  <span className="text-3xl font-extrabold text-primary">₹70</span>
                  <span className="text-xs text-[#9CA3AF]">/ 30 mins</span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-[#9CA3AF]">
                  <p className="flex justify-between"><span>1 Player (1 Hour)</span><span className="text-white font-bold">₹100</span></p>
                  <p className="flex justify-between"><span>2 Players (1 Hour)</span><span className="text-white font-bold">₹180</span></p>
                  <p className="flex justify-between"><span>4 Players (1 Hour)</span><span className="text-white font-bold">₹300</span></p>
                </div>
              </div>
              <Button onClick={handleBookNow} variant="primary" className="mt-6 w-full">
                Book PS5 Setup
              </Button>
            </GlowCard>

            {/* PC Gaming Rig Card */}
            <GlowCard glowColor="secondary" className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">PC Gaming Rigs</h3>
                <p className="text-xs text-[#9CA3AF] mb-4">Liquid cooled custom PCs, 240Hz screens</p>
                <div className="flex items-baseline gap-1 text-white border-t border-white/5 pt-4 mt-2">
                  <span className="text-sm font-semibold">from</span>
                  <span className="text-3xl font-extrabold text-secondary">₹70</span>
                  <span className="text-xs text-[#9CA3AF]">/ 30 mins</span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-[#9CA3AF]">
                  <p className="flex justify-between"><span>30 Minutes Session</span><span className="text-white font-bold">₹70</span></p>
                  <p className="flex justify-between"><span>60 Minutes Session</span><span className="text-white font-bold">₹100</span></p>
                  <p className="flex justify-between"><span>Peripherals Included</span><span className="text-[#00FF88] font-semibold">Free</span></p>
                </div>
              </div>
              <Button onClick={handleBookNow} variant="secondary" className="mt-6 w-full text-black">
                Book PC Rig
              </Button>
            </GlowCard>

            {/* VR Experience Card */}
            <GlowCard glowColor="accent" className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">VR Setup</h3>
                <p className="text-xs text-[#9CA3AF] mb-4">Complete 3D space tracking arena</p>
                <div className="flex items-baseline gap-1 text-white border-t border-white/5 pt-4 mt-2">
                  <span className="text-sm font-semibold">from</span>
                  <span className="text-3xl font-extrabold text-accent">₹150</span>
                  <span className="text-xs text-[#9CA3AF]">/ 30 mins</span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-[#9CA3AF]">
                  <p className="flex justify-between"><span>30 Minutes VR</span><span className="text-white font-bold">₹150</span></p>
                  <p className="flex justify-between"><span>60 Minutes VR</span><span className="text-white font-bold">₹250</span></p>
                  <p className="flex justify-between"><span>VR + Racing Wheel (1 hr)</span><span className="text-[#00E5FF] font-bold">₹400</span></p>
                </div>
              </div>
              <Button onClick={handleBookNow} variant="accent" className="mt-6 w-full">
                Book VR Arena
              </Button>
            </GlowCard>

            {/* Other Rigs */}
            <GlowCard glowColor="success" className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Racing & PS4</h3>
                <p className="text-xs text-[#9CA3AF] mb-4">Pro racing wheel setups & classic PS4 console</p>
                <div className="flex items-baseline gap-1 text-white border-t border-white/5 pt-4 mt-2">
                  <span className="text-sm font-semibold">from</span>
                  <span className="text-3xl font-extrabold text-success">₹50</span>
                  <span className="text-xs text-[#9CA3AF]">/ 30 mins</span>
                </div>
                <div className="mt-4 space-y-2 text-xs text-[#9CA3AF]">
                  <p className="flex justify-between"><span>PS4 1 Player (1 Hour)</span><span className="text-white font-bold">₹80</span></p>
                  <p className="flex justify-between"><span>PS4 4 Players (1 Hour)</span><span className="text-white font-bold">₹250</span></p>
                  <p className="flex justify-between"><span>Racing Wheel Only (1 hr)</span><span className="text-white font-bold">₹250</span></p>
                </div>
              </div>
              <Button onClick={handleBookNow} variant="outline" className="mt-6 w-full hover:border-[#00FF88] hover:text-[#00FF88]">
                Book Rigs
              </Button>
            </GlowCard>
          </div>

          {/* Right Side: Interactive Session Calculator */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-primary/10 to-transparent blur-xl" />
              
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <Calculator className="text-[#FF003C]" size={20} />
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                  Session Fee Estimator
                </h3>
              </div>

              {/* Step 1: Select Platform */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">
                  1. Choose Console/Setup
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(pricingDatabase).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedPlatform(key);
                        // Reset player count to 1 if platform is single-player
                        if (!value.isMultiplayer) setSelectedPlayers(1);
                      }}
                      className={`text-left p-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all ${
                        selectedPlatform === key
                          ? "bg-primary/10 border-primary text-white shadow-[0_0_10px_rgba(255,0,60,0.15)]"
                          : "bg-white/5 border-white/5 text-[#9CA3AF] hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {value.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Players (Conditionally rendered) */}
              {pricingDatabase[selectedPlatform as keyof typeof pricingDatabase]?.isMultiplayer && (
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">
                    2. Players Count
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedPlayers(num)}
                        className={`flex-1 py-3.5 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                          selectedPlayers === num
                            ? "bg-primary/10 border-primary text-white"
                            : "bg-white/5 border-white/5 text-[#9CA3AF] hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <Users size={14} />
                        {num} {num === 1 ? "Player" : "Players"}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Duration */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">
                  {pricingDatabase[selectedPlatform as keyof typeof pricingDatabase]?.isMultiplayer ? "3." : "2."} Duration
                </label>
                <div className="flex gap-2">
                  {[
                    { label: "30 Minutes", val: "30m" as const },
                    { label: "60 Minutes", val: "1h" as const },
                  ].map((dur) => {
                    // Check if VR+Wheel has 30m / 1h (Yes, VR+wheel has 30m: 250, 1h: 400)
                    return (
                      <button
                        key={dur.val}
                        onClick={() => setSelectedDuration(dur.val)}
                        className={`flex-1 py-3.5 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                          selectedDuration === dur.val
                            ? "bg-primary/10 border-primary text-white"
                            : "bg-white/5 border-white/5 text-[#9CA3AF] hover:bg-white/10"
                        }`}
                      >
                        <Clock size={14} />
                        {dur.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimate Calculation Summary */}
              <div className="mt-8 rounded-2xl bg-[#050505] p-5 border border-white/5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#9CA3AF] tracking-wider block">
                      Estimated Cost
                    </span>
                    <span className="font-display text-3xl font-extrabold text-[#00FF88] glow-secondary">
                      ₹{getCalculatedCost()}
                    </span>
                  </div>
                  <Button onClick={handleBookNow} variant="primary" className="shadow-none">
                    Book Rig
                  </Button>
                </div>
                <div className="mt-4 flex items-start gap-2 border-t border-white/5 pt-3 text-[10px] text-[#9CA3AF]">
                  <Info size={12} className="text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>
                    Rates shown are estimates for Anytime Gaming Haldwani. Prices are subject to availability.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
