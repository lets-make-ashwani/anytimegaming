import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Anytime Gaming | Premium Esports Lounge & Gaming Cafe in Haldwani",
  description: "Experience the ultimate gaming zone in Haldwani. High-End Gaming PCs (RTX graphics, 240Hz monitors), PlayStation 5, PlayStation 4, Pro Racing Wheels, and immersive VR Gaming. High FPS, low latency, tournament-ready setups with ultra comfortable RGB seating.",
  keywords: [
    "Gaming Cafe Haldwani",
    "Esports Lounge Haldwani",
    "PlayStation 5 Haldwani",
    "PC Gaming Cafe",
    "VR Experience Haldwani",
    "Anytime Gaming Haldwani",
    "PS5 Gaming Zone",
    "Racing Wheel setup Haldwani",
    "Best gaming parlor Haldwani"
  ],
  authors: [{ name: "Anytime Gaming Team" }],
  openGraph: {
    title: "Anytime Gaming | Haldwani's Premier Gaming Lounge",
    description: "Haldwani's ultimate gaming destination. High-end PC rigs, PS5, VR gaming, and racing wheels. High FPS, low ping, premium gaming comfort.",
    type: "website",
    locale: "en_IN",
    url: "https://anytimegaminghaldwani.com", // Placeholder domain or production target
    siteName: "Anytime Gaming",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anytime Gaming | Haldwani's Premier Gaming Lounge",
    description: "Play on PS5, High-End Gaming PCs, VR and Racing rigs with ultra smooth performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white font-sans selection:bg-[#FF003C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
