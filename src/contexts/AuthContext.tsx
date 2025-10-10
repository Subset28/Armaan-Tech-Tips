import React, { createContext, useContext, useState, useEffect } from "react";
import { v, ss, cs, rs } from "@/utils/auth-check";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => ss());

  useEffect(() => {
    const checkSession = () => {
      if (ss()) {
        setIsAuthenticated(true);
      }
    };
    checkSession();
  }, []);

  const login = (username: string, password: string): boolean => {
    if (v(username, password)) {
      setIsAuthenticated(true);
      cs();
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    rs();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
