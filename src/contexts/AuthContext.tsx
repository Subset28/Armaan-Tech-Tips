import React, { createContext, useContext, useState, useEffect } from "react";
import { validateSystemAccount } from "@/lib/config";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEY = '_app_session';

const checkStoredSession = (): boolean => {
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    if (!stored) return false;
    const data = JSON.parse(atob(stored));
    return data.exp > Date.now();
  } catch {
    return false;
  }
};

const createSession = () => {
  try {
    const data = { exp: Date.now() + 86400000 };
    localStorage.setItem(SESSION_KEY, btoa(JSON.stringify(data)));
  } catch { }
};

const clearSession = () => {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch { }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => checkStoredSession());

  useEffect(() => {
    if (checkStoredSession()) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    if (validateSystemAccount(username, password)) {
      setIsAuthenticated(true);
      createSession();
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    clearSession();
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
