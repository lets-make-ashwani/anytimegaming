import { Header } from "@/components/sections/Header";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { ErrorBoundary } from "@/components/error-boundary";
import { Gamepad2 } from "lucide-react";

export const metadata = {
  title: "About Us | Anytime Gaming Haldwani",
  description: "Learn more about Anytime Gaming Haldwani. We offer high-end PC gaming rigs, PS5 and PS4 console zones, and immersive VR setups in a fully air-conditioned environment.",
};

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <Header />
      <main className="flex-1 w-full pt-28 bg-[#050505]">
        {/* Page Subtitle Header */}
        <div className="relative py-12 bg-gradient-to-b from-[#111111]/40 to-transparent border-b border-white/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-4">
              <Gamepad2 size={24} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              ABOUT THE <span className="text-[#FF003C]">LOBBY</span>
            </h1>
            <p className="mt-3 text-sm text-[#9CA3AF] max-w-md mx-auto font-light">
              Explore our mission, lounge setups, and core standards designed for competitive gamers.
            </p>
          </div>
        </div>

        {/* Core About Content Section */}
        <About />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
