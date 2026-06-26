import { Header } from "@/components/sections/Header";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ErrorBoundary } from "@/components/error-boundary";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Contact & Directions | Anytime Gaming Haldwani",
  description: "Find Anytime Gaming Haldwani on the map. Get driving directions, contact hotline phone numbers, WhatsApp reservations links, and view operating lobby hours.",
};

export default function ContactPage() {
  return (
    <ErrorBoundary>
      <Header />
      <main className="flex-1 w-full pt-28 bg-[#050505]">
        {/* Page Header */}
        <div className="relative py-12 bg-gradient-to-b from-[#111111]/40 to-transparent border-b border-white/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-[#FF003C]/10 border border-[#FF003C]/20 text-[#FF003C] mb-4">
              <MapPin size={24} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              CONTACT & <span className="text-[#FF003C]">DIRECTIONS</span>
            </h1>
            <p className="mt-3 text-sm text-[#9CA3AF] max-w-md mx-auto font-light">
              Visit Anytime Gaming Haldwani. We are located near Awas Vikas gate, open daily for gaming sessions.
            </p>
          </div>
        </div>

        {/* Contact details and dark-themed interactive map */}
        <Contact />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
