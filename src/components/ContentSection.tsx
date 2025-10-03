import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { LucideIcon } from "lucide-react";

interface ContentSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  icon: Icon,
  title,
  description,
  items,
}) => {
  const { isAuthenticated } = useAuth();

  return (
    <section
      id={id}
      className={`py-16 ${isAuthenticated ? "bg-gamer-bg" : "bg-background"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Icon
            className={isAuthenticated ? "text-gamer-accent" : "text-primary"}
            size={32}
          />
          <h2
            className={`text-3xl md:text-4xl font-rowdies font-bold ${
              isAuthenticated ? "text-gamer-text" : "text-foreground"
            }`}
          >
            {title}
          </h2>
        </div>

        <p
          className={`text-lg mb-8 ${
            isAuthenticated ? "text-gamer-muted" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-all duration-normal hover:scale-105 ${
                isAuthenticated
                  ? "bg-gamer-card border-gamer-border hover:border-gamer-accent hover:shadow-lg hover:shadow-gamer-accent/10"
                  : "bg-card border-border hover:border-primary hover:shadow-lg"
              }`}
            >
              <p
                className={`font-medium ${
                  isAuthenticated ? "text-gamer-text" : "text-foreground"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
