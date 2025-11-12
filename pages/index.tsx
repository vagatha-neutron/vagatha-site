import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

import { Geist, Geist_Mono } from "next/font/google";
import About from "@/components/about";
import Isla from "@/components/isla";
import Carrusel from "@/components/carousel";
import CtaFinal from "@/components/cta_final";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-beige">
        <Navbar />
        <Hero />
        <About />
        <Isla/>
        <Carrusel/>
        <CtaFinal />
      </div>
    </>
  );
}

