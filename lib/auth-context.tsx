"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  accessToken: string | null;
  authToken: string | null;
  isLoggedIn: boolean;
  setSession: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const isLoggedIn = !!accessToken;

  const setSession = (accessToken: string, authToken: string) => {
    setAccessToken(accessToken);
    setAuthToken(authToken);
  };

  const logout = () => {
    setAccessToken(null);
    setAuthToken(null);
  };
  return (
    <AuthContext.Provider value={{ accessToken, authToken, isLoggedIn, setSession, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
} 