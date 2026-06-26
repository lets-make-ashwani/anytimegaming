"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop",
      title: "PlayStation 5 Stations",
      tag: "Consoles",
      gridClass: "md:col-span-2 md:row-span-1",
      glow: "border-[#00E5FF]/20 group-hover:border-[#00E5FF]/60",
    },
    {
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      title: "Esports PC Rows",
      tag: "PC Arena",
      gridClass: "md:col-span-1 md:row-span-2",
      glow: "border-[#FF003C]/20 group-hover:border-[#FF003C]/60",
    },
    {
      url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
      title: "VR Interactive Sandbox",
      tag: "Virtual Reality",
      gridClass: "md:col-span-1 md:row-span-1",
      glow: "border-[#7B61FF]/20 group-hover:border-[#7B61FF]/60",
    },
    {
      url: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=800&auto=format&fit=crop",
      title: "Pro Peripherals & Gear",
      tag: "Equipments",
      gridClass: "md:col-span-1 md:row-span-1",
      glow: "border-[#00FF88]/20 group-hover:border-[#00FF88]/60",
    },
    {
      url: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=800&auto=format&fit=crop",
      title: "Cockpit Racing Wheel Setup",
      tag: "Simulators",
      gridClass: "md:col-span-2 md:row-span-1",
      glow: "border-[#FF003C]/20 group-hover:border-[#FF003C]/60",
    },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-[#00E5FF] opacity-[0.02] blur-[110px]" />
      
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
            ARENA <span className="text-[#00E5FF]">GALLERY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light"
          >
            Take a visual tour of Anytime Gaming Haldwani. A premium space styled with customizable RGB ambient grids.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
          {images.map((img, idx) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group border bg-[#111111]/40 ${img.gridClass} ${img.glow} transition-all duration-500`}
            >
              {/* Image element with Next.js optimization */}
              <Image
                src={img.url}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.6] group-hover:brightness-[0.75]"
                loading="lazy"
              />

              {/* Grid content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#00E5FF] mb-1.5">
                  {img.tag}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-white leading-tight">
                  {img.title}
                </h3>
              </div>

              {/* Hover screen tint */}
              <div className="absolute inset-0 bg-[#FF003C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
