import React from "react";
import { Wrench, Cpu, GraduationCap, MoreHorizontal } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { ShareBanner } from "@/components/ShareBanner";
import { HeroBanner } from "@/components/HeroBanner";
import { GamesHub } from "@/components/GamesHub";
import { ContentSection } from "@/components/ContentSection";

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isAuthenticated ? "bg-gamer-bg" : "bg-background"
    }`}>
      <ShareBanner />
      <Navbar />
      
      {isAuthenticated && <HeroBanner />}
      
      {isAuthenticated && <GamesHub />}

      <ContentSection
        id="utilities"
        icon={Wrench}
        title="Utilities"
        description="Essential tools and utilities to enhance your experience"
        items={[
          "File Converter",
          "Password Generator",
          "QR Code Creator",
          "Color Picker",
          "Text Editor",
          "Image Compressor",
        ]}
      />

      <ContentSection
        id="pc-optimizations"
        icon={Cpu}
        title="PC Optimizations"
        description="Tips and tricks to keep your PC running smoothly"
        items={[
          "Startup Manager Guide",
          "Disk Cleanup Tips",
          "Registry Optimization",
          "Driver Updates",
          "Cooling Solutions",
          "Performance Tweaks",
        ]}
      />

      <ContentSection
        id="education"
        icon={GraduationCap}
        title="Education"
        description="Learning resources and educational content"
        items={[
          "Programming Tutorials",
          "Math Resources",
          "Study Techniques",
          "Science Experiments",
          "Language Learning",
          "Tech Concepts",
        ]}
      />

      <ContentSection
        id="other"
        icon={MoreHorizontal}
        title="Other"
        description="Additional resources and interesting finds"
        items={[
          "Cool Websites",
          "Tech News",
          "Community Projects",
          "Helpful Links",
          "Software Recommendations",
          "Tips & Tricks",
        ]}
      />

      <footer className={`py-8 text-center border-t ${
        isAuthenticated 
          ? "bg-gamer-card border-gamer-border text-gamer-muted" 
          : "bg-card border-border text-muted-foreground"
      }`}>
        <p className="text-sm">© 2025 Armaan's Tech Tips. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
