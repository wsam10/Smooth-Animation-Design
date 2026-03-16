"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@/types";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const MOCK_USER: User = {
  id: "e5",
  name: "Khalid Al-Dosari",
  email: "khalid@nabel.sa",
  role: "admin",
  department: "Management",
  status: "active",
  joinedAt: "2020-01-01",
  avatar:
    "https://ui-avatars.com/api/?name=Khalid+Al-Dosari&background=5B3B8A&color=fff",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(MOCK_USER);

  const login = async (email: string, _password: string): Promise<boolean> => {
    if (email.endsWith("@nabel.sa")) {
      setUser({ ...MOCK_USER, email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
