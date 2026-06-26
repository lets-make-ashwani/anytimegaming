"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Gamepad2, Headphones, Keyboard, Mouse, Glasses, Play, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { scrollY } = useScroll();
  const rotationAngle = useTransform(scrollY, [0, 800], [0, 360]);
  const counterRotation = useTransform(scrollY, [0, 800], [0, -360]);

  const floatingDevices = [
    { icon: <Gamepad2 size={28} />, name: "PS5 DualSense", color: "text-[#00E5FF] border-[#00E5FF]/30", animation: "animate-float" },
    { icon: <Headphones size={28} />, name: "Pro Headset", color: "text-[#FF003C] border-[#FF003C]/30", animation: "animate-float-delayed" },
    { icon: <Glasses size={28} />, name: "VR Goggles", color: "text-[#7B61FF] border-[#7B61FF]/30", animation: "animate-float" },
    { icon: <Keyboard size={28} />, name: "RGB Keyboard", color: "text-[#00FF88] border-[#00FF88]/30", animation: "animate-float-delayed" },
    { icon: <Mouse size={28} />, name: "Gaming Mouse", color: "text-[#FF003C] border-[#FF003C]/30", animation: "animate-float" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Animated Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-25 animate-grid-move" />
        
        {/* Radial glow spots */}
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#FF003C] opacity-[0.08] blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-[#00E5FF] opacity-[0.08] blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B61FF] opacity-[0.06] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase mb-6 shadow-[0_0_15px_rgba(255,0,60,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Haldwani&apos;s Premier Gaming Venue
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            EXPERIENCE GAMING <br />
            <span className="text-gradient-red-cyan">LIKE NEVER BEFORE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Play on PlayStation 5, High-End Gaming PCs, Pro VR rigs, and Racing Cockpits with ultra-smooth performance. Built for competitive players.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScroll("booking")}
              className="w-full sm:w-auto"
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScroll("pricing")}
              className="w-full sm:w-auto"
            >
              View Pricing
            </Button>
          </motion.div>

          {/* Core statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 border-t border-white/5 pt-8 max-w-lg mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center text-[#FF003C] mb-1">
                <Zap size={18} className="mr-1 shadow-sm" />
                <span className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white">5000+</span>
              </div>
              <p className="text-xs text-[#9CA3AF]">Happy Gamers</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center text-[#00E5FF] mb-1">
                <Play size={18} className="mr-1" />
                <span className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white">240Hz+</span>
              </div>
              <p className="text-xs text-[#9CA3AF]">High FPS Gaming</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center text-[#7B61FF] mb-1">
                <Shield size={18} className="mr-1" />
                <span className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white">Premium</span>
              </div>
              <p className="text-xs text-[#9CA3AF]">Equipment</p>
            </div>
          </motion.div>
        </div>

        {/* Right floating cards column */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[380px] md:min-h-[450px]">
          {/* Main Visual Center: Glowing Console Crest */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center glow-box-primary bg-radial-[circle_at_center,_var(--color-primary)_0%,_transparent_100%] before:content-[''] before:absolute before:-inset-2 before:rounded-full before:border-2 before:border-dashed before:border-white/10 before:animate-spin-slow"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5 bg-[#050505]">
              <Image
                src="/logo1.png"
                alt="Anytime Gaming Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Floating Hardware components container that rotates on scroll */}
          <motion.div
            style={{ rotate: rotationAngle }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          >
            {floatingDevices.map((dev, idx) => {
              // Distribute items in a circle around the center
              const angles = [0, 72, 144, 216, 288];
              const radius = 175; // px radial offset from the logo edge
              const angleRad = (angles[idx] * Math.PI) / 180;
              const x = Math.round(Math.cos(angleRad) * radius);
              const y = Math.round(Math.sin(angleRad) * radius);

              return (
                <motion.div
                  key={dev.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="absolute pointer-events-none"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Outer counter-rotator ensures text and icons stay upright as the ring rotates */}
                  <motion.div
                    style={{ rotate: counterRotation }}
                    className="pointer-events-auto"
                  >
                    {/* Inner child handles the floating loop */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, idx % 2 === 0 ? 2 : -2, 0],
                      }}
                      transition={{
                        duration: idx % 2 === 0 ? 5 : 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`p-4 rounded-2xl bg-[#111111]/90 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${dev.color}`}
                      style={{
                        width: "76px",
                        height: "76px",
                      }}
                    >
                      {dev.icon}
                      <span className="text-[9px] font-bold text-white mt-1.5 whitespace-nowrap">
                        {dev.name.split(" ")[1] || dev.name}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
