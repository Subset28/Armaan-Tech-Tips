import React from "react";
import { Navbar } from "@/components/Navbar";
import { ShareBanner } from "@/components/ShareBanner";
import { GamesHub } from "@/components/GamesHub";
import { HeroBanner } from "@/components/HeroBanner";
import { GamerHome } from "@/components/GamerHome";
import { VisitorCounter } from "@/components/VisitorCounter";

const GamesPage = () => {
  return (
    <div className="min-h-screen bg-gamer-bg">
      <ShareBanner />
      <Navbar />

      <HeroBanner />

      <GamerHome />

      <GamesHub />

      <VisitorCounter variant="floating" />
    </div>
  );
};

export default GamesPage;
