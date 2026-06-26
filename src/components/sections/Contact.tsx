"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

export function Contact() {
  const contactDetails = [
    {
      icon: <MapPin className="text-[#00E5FF]" size={20} />,
      title: "Address Location",
      value: "Anytime Gaming, Pilikothi Road, near Awas Vikas, Haldwani, Uttarakhand 263139",
      link: "https://maps.app.goo.gl/zGVRmhkWZwaUSEA49?g_st=ic",
    },
    {
      icon: <Phone className="text-[#FF003C]" size={20} />,
      title: "Hotline Support",
      value: "+91 96674 65459",
      link: "tel:+919667465459",
    },
    {
      icon: <Mail className="text-[#7B61FF]" size={20} />,
      title: "Email Support",
      value: "contact@anytimegaming.in",
      link: "mailto:contact@anytimegaming.in",
    },
    {
      icon: <Clock className="text-[#00FF88]" size={20} />,
      title: "Lounge Hours",
      value: "10:00 AM - 10:00 PM (Everyday)",
      link: null,
    },
  ];

  const socials = [
    { name: "Instagram", icon: <Instagram size={22} />, url: "https://instagram.com" },
    { name: "Facebook", icon: <Facebook size={22} />, url: "https://facebook.com" },
    { name: "YouTube", icon: <Youtube size={22} />, url: "https://youtube.com" },
  ];

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-[#00E5FF] opacity-[0.02] blur-[110px]" />

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
            LOCATE THE <span className="text-[#00E5FF]">ARENA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light"
          >
            Need assistance or ready to drop in? Locate us on the grid or reach out to our lobby desk directly.
          </motion.p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details list */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 gap-6">
              {contactDetails.map((detail, idx) => (
                <GlowCard
                  key={detail.title}
                  glowColor={idx === 0 ? "secondary" : idx === 1 ? "primary" : idx === 2 ? "accent" : "success"}
                  delay={idx * 0.05}
                  className="flex gap-4 p-5 items-start h-full border border-white/5"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-1 uppercase tracking-wider">
                      {detail.title}
                    </h3>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#9CA3AF] hover:text-white transition-colors break-words font-light"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-sm text-[#9CA3AF] font-light">{detail.value}</span>
                    )}
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Social handles */}
            <div className="rounded-2xl border border-white/5 bg-[#111111]/40 p-6 backdrop-blur-md">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Follow The Grid
              </h4>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#9CA3AF] hover:text-white hover:border-[#FF003C] hover:shadow-[0_0_10px_rgba(255,0,60,0.2)] transition-all duration-300 active:scale-95"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map display */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Embedded dark mode map filter */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.821369796791!2d79.52125137536968!3d29.22156897537367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bee43a85493%3A0xe5a3637cb33709b6!2sAnytime%20Gaming!5e0!3m2!1sen!2sin!4v1719398867493!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
