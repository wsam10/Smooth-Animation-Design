"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <PageHeader title="Settings" description="Manage your account and preferences" />

      <div className="max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <div className="flex items-center gap-4 mb-6">
            {user && <Avatar name={user.name} src={user.avatar} size="xl" />}
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{user?.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {user?.role} · {user?.department}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input label="Full Name" defaultValue={user?.name} />
            <Input label="Email" type="email" defaultValue={user?.email} />
            <Input label="Department" defaultValue={user?.department} />
            <Input label="Phone" type="tel" defaultValue={user?.phone ?? ""} />
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <div className="flex gap-3">
            {(["light", "dark"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={cn(
                  "flex flex-1 flex-col items-center gap-2 rounded-xl border-2 p-4 transition-colors",
                  theme === t
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30"
                    : "border-gray-200 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20"
                )}
              >
                {t === "light" ? (
                  <Sun className="h-6 w-6 text-orange-400" />
                ) : (
                  <Moon className="h-6 w-6 text-primary-400" />
                )}
                <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">
                  {t} Mode
                </span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <div className="space-y-4">
            <Input label="Current Password" type="password" placeholder="••••••••" />
            <Input label="New Password" type="password" placeholder="••••••••" />
            <Input label="Confirm Password" type="password" placeholder="••••••••" />
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Update Password</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
