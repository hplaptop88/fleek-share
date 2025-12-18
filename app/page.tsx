"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainCard from "@/components/MainCard";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MainCard onSuccess={() => {
          // Success callback handled in MainCard component
        }} />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
