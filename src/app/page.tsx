import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Platforms } from "@/components/sections/Platforms";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PopularGames } from "@/components/sections/PopularGames";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ErrorBoundary } from "@/components/error-boundary";

export default function Home() {
  return (
    <ErrorBoundary>
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* Full-screen Hero Banner */}
        <Hero />

        {/* Lounge Overview & Amenities */}
        <About />

        {/* Gaming platforms comparison */}
        <Platforms />

        {/* Detailed price plans & Session cost calculator */}
        <Pricing />

        {/* Visual tour masonry */}
        <Gallery />

        {/* Gaming values breakdown */}
        <WhyChooseUs />

        {/* Pre-installed Game list */}
        <PopularGames />

        {/* Direct WhatsApp booking reservation panel */}
        <BookingCTA />

        {/* Map, Opening times & Direct hotline */}
        <Contact />
      </main>

      {/* Footer Branding & Legal pages */}
      <Footer />
    </ErrorBoundary>
  );
}
