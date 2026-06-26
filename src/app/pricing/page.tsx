import { Header } from "@/components/sections/Header";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { ErrorBoundary } from "@/components/error-boundary";
import { Tag } from "lucide-react";

export const metadata = {
  title: "Gaming Rates & Pricing | Anytime Gaming Haldwani",
  description: "View competitive rates at Anytime Gaming Haldwani. Prices for PS5, PS4, custom gaming PCs, racing wheels, and VR gaming sessions. Interactive price calculator included.",
};

export default function PricingPage() {
  return (
    <ErrorBoundary>
      <Header />
      <main className="flex-1 w-full pt-28 bg-[#050505]">
        {/* Page Header */}
        <div className="relative py-12 bg-gradient-to-b from-[#111111]/40 to-transparent border-b border-white/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-primary/10 border border-primary/20 text-[#FF003C] mb-4">
              <Tag size={24} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              SESSION <span className="text-[#FF003C]">PRICING</span>
            </h1>
            <p className="mt-3 text-sm text-[#9CA3AF] max-w-md mx-auto font-light">
              Clear, upfront pricing with hourly rates, multiplayer discounts, and custom packages.
            </p>
          </div>
        </div>

        {/* Pricing & Calculator Section */}
        <Pricing />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
