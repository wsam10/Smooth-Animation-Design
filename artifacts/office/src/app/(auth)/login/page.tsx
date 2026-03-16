"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { APP_NAME } from "@/lib/constants";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("khalid@nabel.sa");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const ok = await login(email, password);
    if (ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Use an @nabel.sa email address.");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-900 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">{APP_NAME}</h1>
          <p className="mt-2 text-primary-300">Sign in to your account</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-primary-800 bg-primary-950/60 p-8 backdrop-blur-sm"
        >
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@nabel.sa"
              icon={<Mail className="h-4 w-4" />}
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              icon={<Lock className="h-4 w-4" />}
              required
            />
          </div>

          {error && (
            <p className="mt-3 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="mt-6 w-full"
            size="lg"
            loading={loading}
          >
            Sign In
          </Button>

          <p className="mt-4 text-center text-xs text-primary-400">
            Demo: use any @nabel.sa email
          </p>
        </form>
      </div>
    </div>
  );
}
