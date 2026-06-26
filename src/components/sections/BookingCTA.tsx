"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BookingCTA() {
  const whatsappNumber = "919667465459"; // From poster details
  const phoneNumber = "+919667465459";
  const mapsLink = "https://maps.app.goo.gl/zGVRmhkWZwaUSEA49?g_st=ic"; // Exact link provided by user
  
  const encodedMessage = encodeURIComponent("Hi Anytime Gaming Haldwani! I would like to book a gaming session. Please check slot availability.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <section id="booking" className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      {/* Background neon visual indicators */}
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_center,_var(--color-primary)_0%,_transparent_100%] opacity-[0.03] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF] opacity-[0.02] blur-[120px]" />

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-[#111111]/90 to-[#181113]/90 p-8 md:p-12 text-center overflow-hidden shadow-2xl"
        >
          {/* Animated glow borders */}
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-secondary animate-pulse" />
          
          <div className="relative z-10">
            <div className="mb-6 inline-flex p-4 rounded-full bg-[#FF003C]/10 text-primary animate-bounce">
              <Calendar size={32} />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white mb-4">
              READY TO <span className="text-gradient-red-cyan">PLAY?</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl mx-auto mb-8 font-light leading-relaxed">
              Grab your slot today! Tap below to secure your console, high-end PC rig, or immersive VR sandbox via WhatsApp or phone.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  Book on WhatsApp
                </Button>
              </a>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full text-black flex items-center justify-center gap-2"
                >
                  <MapPin size={18} />
                  Get Directions
                </Button>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
