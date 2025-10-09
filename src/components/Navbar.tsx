import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "./LoginModal";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    ...(isAuthenticated
      ? [
          { label: "Games", href: "#games", requiresAuth: true },
          { label: "Utilities", href: "#utilities", requiresAuth: true },
          { label: "PC Optimizations", href: "#pc-optimizations", requiresAuth: true },
          { label: "Education", href: "#education", requiresAuth: true }
        ]
      : [
          { label: "Utilities", href: "#utilities" },
          { label: "PC Optimizations", href: "#pc-optimizations" },
          { label: "Education", href: "#education" },
        ]
    ),
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-colors duration-normal ${
        isAuthenticated 
          ? "bg-gamer-card/95 backdrop-blur-sm border-b border-gamer-border" 
          : "bg-card/95 backdrop-blur-sm border-b border-border"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className={`text-xl font-rowdies font-bold ${
                isAuthenticated ? "text-gamer-text" : "text-foreground"
              }`}>
                Armaan's Tech Tips
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.requiresAuth && !isAuthenticated) return null;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-fast ${
                      isAuthenticated
                        ? "text-gamer-muted hover:text-gamer-text hover:bg-gamer-border/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Auth Button */}
            <div className="hidden md:block">
              {isAuthenticated ? (
                <Button
                  onClick={logout}
                  size="sm"
                  variant="ghost"
                  className="rounded-full px-4 py-1 
                             bg-transparent border border-gamer-border 
                             text-gamer-text 
                             hover:bg-gamer-border/30 hover:text-gamer-accent
                             transition-colors"
                >
                  Logout
                </Button>
              ) : (
                <Button 
                  onClick={() => setIsLoginOpen(true)} 
                  size="sm"
                  className={isAuthenticated ? "bg-gamer-accent hover:bg-gamer-accent/90 text-gamer-card" : ""}
                >
                  Login
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-md ${
                isAuthenticated ? "text-gamer-text" : "text-foreground"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => {
                if (link.requiresAuth && !isAuthenticated) return null;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-fast ${
                      isAuthenticated
                        ? "text-gamer-muted hover:text-gamer-text hover:bg-gamer-border/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2">
                {isAuthenticated ? (
                  <Button
                    onClick={logout}
                    size="sm"
                    variant="ghost"
                    className="w-full rounded-full px-4 py-1 
                               bg-transparent border border-gamer-border 
                               text-gamer-text 
                               hover:bg-gamer-border/30 hover:text-gamer-accent
                               transition-colors"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button 
                    onClick={() => setIsLoginOpen(true)} 
                    size="sm" 
                    className={`w-full ${isAuthenticated ? "bg-gamer-accent hover:bg-gamer-accent/90 text-gamer-card" : ""}`}
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};
