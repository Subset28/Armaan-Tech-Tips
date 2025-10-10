import React from "react";
import { GraduationCap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ShareBanner } from "@/components/ShareBanner";
import { ContentSection } from "@/components/ContentSection";
import { VisitorCounter } from "@/components/VisitorCounter";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gamer-bg">
      <ShareBanner />
      <Navbar />

      <ContentSection
        id="education"
        icon={GraduationCap}
        title="Education"
        description="Learning resources and educational content"
        items={[
          { text: "🧮 Course Grade Calculator", url: "https://www.desmos.com/calculator/wrmalnmnpj" },
          { text: "📺 Subject Review Channels", guide: "review-channels" },
          { text: "💻 Programming Fundamentals", guide: "programming-basics" },
          { text: "🧮 Math Resources", guide: "math-resources" },
          { text: "📚 Study Techniques", guide: "study-methods" },
          { text: "🔬 Science Experiments", guide: "science-experiments" },
          { text: "🌍 Language Learning", guide: "language-learning" },
          { text: "🖥️ Tech Concepts Explained", guide: "tech-concepts" },
        ]}
      />

      <VisitorCounter variant="floating" />
    </div>
  );
};

export default EducationPage;
