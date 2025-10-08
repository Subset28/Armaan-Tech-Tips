import React from "react";
import { Wrench, Cpu, GraduationCap, MoreHorizontal } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { ShareBanner } from "@/components/ShareBanner";
import { GamesHub } from "@/components/GamesHub";
import { ContentSection } from "@/components/ContentSection";
import { HeroBanner } from "@/components/HeroBanner";
import { GamerHome } from "@/components/GamerHome";

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isAuthenticated ? "bg-gamer-bg" : "bg-background"
    }`}>
      <ShareBanner />
      <Navbar />
      
      {isAuthenticated && (
        <>
          {/* 1) Naruto GIF + Title */}
          <HeroBanner />
          
          {/* 2) Homepage text with buttons and counter */}
          <GamerHome />
          
          {/* 3) Optional: Friends gallery (commented out by default) */}
          {/* <FriendsGallery /> */}
          
          {/* 4) Games grid */}
          <GamesHub />
        </>
      )}

      {!isAuthenticated && (
        <>
          <ContentSection
            id="utilities"
            icon={Wrench}
            title="Utilities"
        description="Essential tools and utilities to enhance your experience"
        items={[
          { text: "🔐 Password Generator", utility: "password" },
          { text: "🎨 Color Picker", utility: "color" },
          { text: "📝 Text Converter", utility: "text" },
          { text: "📱 QR Code Generator", utility: "qr" },
          { text: "❄️ Snow Day Predictor", url: "https://docs.google.com/spreadsheets/d/1dInwA7F-w0TB4Qy-D_463frdBPr9c21LPI4kdhktsO4/edit?gid=0#gid=0" },
          { text: "🛡️ The Best Adblocker", url: "https://ublockorigin.com/" },
          { text: "📅 LCPS Calendars", url: "https://www.lcps.org/documents/discover-lcps/about-loudoun/calendars---loudoun-county-public-schools/629038" },
        ]}
      />

      <ContentSection
        id="pc-optimizations"
        icon={Cpu}
        title="PC Optimizations"
        description="Tips and tricks to keep your PC running smoothly"
        items={[
          { text: "📋 Complete Optimization Guide", guide: "complete-guide" },
          { text: "🛠️ Chris Titus Tech's WinUtil", guide: "winutil-guide" },
          { text: "💾 System Restore Point Setup", guide: "restore-point" },
          { text: "⚡ Power Plan Optimization", guide: "power-plan" },
          { text: "🔥 CPU Core Unparking", guide: "unpark-cpu" },
          { text: "🔧 Services Optimization", guide: "services-optimization" },
          { text: "⚙️ Windows Settings", guide: "windows-settings" },
          { text: "🎮 GPU Driver Optimization", guide: "gpu-optimization" },
          { text: "📊 MSI Afterburner Setup", guide: "msi-afterburner" },
          { text: "🌐 Network Optimization", guide: "network-optimization" },
          { text: "📡 TCP Optimizer Setup", guide: "tcp-optimization" },
          { text: "🧹 System Cleanup Tools", guide: "system-cleanup" },
        ]}
      />

      <ContentSection
        id="education"
        icon={GraduationCap}
        title="Education"
        description="Learning resources and educational content"
        items={[
          { text: "💻 Programming Fundamentals", guide: "programming-basics" },
          { text: "🧮 Math Resources", guide: "math-resources" },
          { text: "📚 Study Techniques", guide: "study-methods" },
          { text: "🔬 Science Experiments", guide: "science-experiments" },
          { text: "🌍 Language Learning", guide: "language-learning" },
          { text: "🖥️ Tech Concepts Explained", guide: "tech-concepts" },
        ]}
      />

      <ContentSection
        id="other"
        icon={MoreHorizontal}
        title="Other"
        description="Additional resources and interesting finds"
        items={[
          { text: "🔗 Cool Websites Collection", guide: "cool-websites" },
          { text: "📰 Tech News & Updates", guide: "tech-news" },
          { text: "👥 Community Projects", guide: "community-projects" },
          { text: "📋 Helpful Links Directory", guide: "helpful-links" },
          { text: "💿 Software Recommendations", guide: "software-recommendations" },
          { text: "💡 Tips & Tricks Compilation", guide: "tips-tricks" },
        ]}
      />

        </>
      )}

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
