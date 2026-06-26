"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Users, Disc } from "lucide-react";

export function PopularGames() {
  const [filter, setFilter] = useState<"all" | "pc" | "console">("all");

  const games = [
    {
      title: "GTA VI",
      genre: "Action-Adventure",
      platform: ["console"],
      mode: "Single Player / Online",
      url: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#FF003C]/20 group-hover:border-[#FF003C]/60",
    },
    {
      title: "EA FC 26",
      genre: "Sports / Football",
      platform: ["console"],
      mode: "1-4 Players Local Co-op",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#00E5FF]/20 group-hover:border-[#00E5FF]/60",
    },
    {
      title: "Tekken 8",
      genre: "Fighting Arena",
      platform: ["console", "pc"],
      mode: "1v1 Local & Online Versus",
      url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#7B61FF]/20 group-hover:border-[#7B61FF]/60",
    },
    {
      title: "Forza Horizon",
      genre: "Racing / Open World",
      platform: ["console", "pc"],
      mode: "Racing Simulator Rig Ready",
      url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#00FF88]/20 group-hover:border-[#00FF88]/60",
    },
    {
      title: "Call of Duty",
      genre: "Tactical FPS / Warzone",
      platform: ["pc", "console"],
      mode: "Online Co-op & Squads",
      url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#FF003C]/20 group-hover:border-[#FF003C]/60",
    },
    {
      title: "Valorant",
      genre: "Tactical Hero Shooter",
      platform: ["pc"],
      mode: "5v5 High-Hz Competitive",
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#00E5FF]/20 group-hover:border-[#00E5FF]/60",
    },
    {
      title: "Minecraft",
      genre: "Sandbox / Survival",
      platform: ["pc", "console"],
      mode: "Co-op Worlds & Creative",
      url: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#00FF88]/20 group-hover:border-[#00FF88]/60",
    },
    {
      title: "BGMI",
      genre: "Mobile Battle Royale",
      platform: ["pc"], // E.g. Emulator rows
      mode: "Squad Survival",
      url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#7B61FF]/20 group-hover:border-[#7B61FF]/60",
    },
    {
      title: "CS2",
      genre: "Tactical Shooter",
      platform: ["pc"],
      mode: "5v5 Competitive Esports",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop",
      glow: "border-[#FF003C]/20 group-hover:border-[#FF003C]/60",
    },
  ];

  const filteredGames = games.filter(
    (game) => filter === "all" || game.platform.includes(filter)
  );

  return (
    <section id="games" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-[#7B61FF] opacity-[0.02] blur-[110px]" />
      
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
          >
            POPULAR <span className="text-[#00E5FF]">TITLES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light"
          >
            Jump directly into the action. We have the most popular multiplayer, racing, and competitive games preloaded.
          </motion.p>
        </div>

        {/* Filters Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Catalog" },
            { id: "pc", label: "PC Arena" },
            { id: "console", label: "Consoles" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === tab.id
                  ? "bg-secondary text-[#050505] shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                  : "bg-white/5 border border-white/5 text-[#9CA3AF] hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Games Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={game.title}
                className={`relative overflow-hidden rounded-2xl group border bg-[#111111]/70 flex flex-col h-[280px] ${game.glow} transition-all duration-500`}
              >
                {/* Background Artwork */}
                <Image
                  src={game.url}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.5] group-hover:brightness-[0.7]"
                  loading="lazy"
                />

                {/* Glass Card content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent p-6 flex flex-col justify-end z-10">
                  <div className="flex gap-1.5 mb-2">
                    {game.platform.map((plat) => (
                      <span
                        key={plat}
                        className="inline-flex items-center gap-1 rounded bg-white/5 px-2 py-0.5 text-[9px] font-bold text-white border border-white/10 uppercase"
                      >
                        <Disc size={8} />
                        {plat}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-1">
                    {game.title}
                  </h3>
                  
                  <p className="text-xs text-[#9CA3AF] mb-3 font-medium">
                    {game.genre}
                  </p>

                  <div className="flex items-center gap-2 border-t border-white/5 pt-3 text-[10px] text-[#9CA3AF]">
                    <Users size={12} className="text-[#00E5FF]" />
                    <span>{game.mode}</span>
                  </div>
                </div>

                {/* Hover overlay red line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#FF003C] to-[#7B61FF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
