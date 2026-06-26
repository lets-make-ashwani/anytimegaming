import { Header } from "@/components/sections/Header";
import { Platforms } from "@/components/sections/Platforms";
import { Footer } from "@/components/sections/Footer";
import { ErrorBoundary } from "@/components/error-boundary";
import { Cpu } from "lucide-react";

export const metadata = {
  title: "Gaming Platforms | Anytime Gaming Haldwani",
  description: "Check out our premium gaming hardware in Haldwani. Play on PlayStation 5, high-spec custom PCs, virtual reality headsets, and simulator racing wheels.",
};

export default function PlatformsPage() {
  return (
    <ErrorBoundary>
      <Header />
      <main className="flex-1 w-full pt-28 bg-[#050505]">
        {/* Page Header */}
        <div className="relative py-12 bg-gradient-to-b from-[#111111]/40 to-transparent border-b border-white/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-secondary/10 border border-secondary/20 text-[#00E5FF] mb-4">
              <Cpu size={24} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              GAMING <span className="text-[#00E5FF]">HARDWARE</span>
            </h1>
            <p className="mt-3 text-sm text-[#9CA3AF] max-w-md mx-auto font-light">
              Explore our custom liquid-cooled PC configurations, next-generation consoles, and VR grids.
            </p>
          </div>
        </div>

        {/* Platforms Showcase Section */}
        <Platforms />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
