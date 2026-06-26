"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Platforms", path: "/platforms" },
    { label: "Pricing", path: "/pricing" },
    { label: "Games", path: "/games" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Branding */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
          <div className="relative w-10 h-10 shrink-0 rounded-full border border-white/10 overflow-hidden bg-[#050505]">
            <Image
              src="/logo1.png"
              alt="Anytime Gaming Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-display font-black text-lg tracking-tight text-white leading-none block">
              ANYTIME GAMING
            </span>
            <span className="text-[8px] tracking-[0.25em] text-secondary uppercase font-extrabold block mt-0.5">
              Haldwani Lounge
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                pathname === link.path
                  ? "text-primary glow-primary"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Booking CTA */}
        <div className="hidden lg:block">
          <Link href="/#booking">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBookClick}
              className="hover:border-primary hover:text-white"
            >
              Book Slot
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-primary transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] z-40 bg-[#050505] border-t border-white/5 p-6 flex flex-col justify-between animate-fade-in">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-left text-sm font-extrabold uppercase tracking-wider border-b border-white/5 pb-2 transition-all cursor-pointer ${
                  pathname === link.path ? "text-primary" : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/#booking" className="w-full">
            <Button
              variant="primary"
              className="w-full mt-8"
              onClick={handleBookClick}
            >
              Book Slot Now
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
