import { Header } from "@/components/sections/Header";
import { PopularGames } from "@/components/sections/PopularGames";
import { Footer } from "@/components/sections/Footer";
import { ErrorBoundary } from "@/components/error-boundary";
import { Trophy } from "lucide-react";

export const metadata = {
  title: "Games Catalog | Anytime Gaming Haldwani",
  description: "Check the game list preloaded at Anytime Gaming Haldwani. Play GTA VI, EA FC 26, Tekken 8, Forza Horizon, Valorant, CS2, Minecraft, and BGMI.",
};

export default function GamesPage() {
  return (
    <ErrorBoundary>
      <Header />
      <main className="flex-1 w-full pt-28 bg-[#050505]">
        {/* Page Header */}
        <div className="relative py-12 bg-gradient-to-b from-[#111111]/40 to-transparent border-b border-white/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-secondary/10 border border-secondary/20 text-[#00E5FF] mb-4">
              <Trophy size={24} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              GAMES <span className="text-[#00E5FF]">CATALOG</span>
            </h1>
            <p className="mt-3 text-sm text-[#9CA3AF] max-w-md mx-auto font-light">
              Explore our fully pre-loaded titles. Ready for immediate action on consoles or PC rigs.
            </p>
          </div>
        </div>

        {/* Popular Games Section */}
        <PopularGames />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
