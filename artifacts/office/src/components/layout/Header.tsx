"use client";

import { Menu, Bell, Sun, Moon, Search } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { Avatar } from "@/components/ui/Avatar";

interface HeaderProps {
  onMenuClick: () => void;
  title: string;
}

export function Header({ onMenuClick, title }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 dark:border-white/10 dark:bg-dark-card lg:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <h2 className="text-lg font-semibold text-gray-800 dark:text-white hidden sm:block">
        {title}
      </h2>

      <div className="ml-auto flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search…"
            className="w-40 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none dark:text-gray-300"
          />
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {user && (
          <div className="flex items-center gap-2 pl-2">
            <Avatar name={user.name} src={user.avatar} size="sm" />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800 dark:text-white leading-none">
                {user.name.split(" ")[0]}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize mt-0.5">
                {user.role}
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
