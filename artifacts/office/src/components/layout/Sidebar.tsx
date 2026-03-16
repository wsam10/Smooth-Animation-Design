"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  Building2,
  BarChart3,
  Settings,
  X,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";

const icons = {
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  Building2,
  BarChart3,
  Settings,
};

const NAV = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Employees", href: "/employees", icon: "Users" },
  { label: "Projects", href: "/projects", icon: "FolderKanban" },
  { label: "Tasks", href: "/tasks", icon: "CheckSquare" },
  { label: "Clients", href: "/clients", icon: "Building2" },
  { label: "Reports", href: "/reports", icon: "BarChart3" },
] as const;

const BOTTOM_NAV = [
  { label: "Settings", href: "/settings", icon: "Settings" },
] as const;

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex w-64 flex-col",
          "bg-primary-900 dark:bg-dark-bg",
          "border-r border-primary-800 dark:border-white/10",
          "transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:static lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center justify-between px-5 border-b border-primary-800 dark:border-white/10">
          <span className="text-lg font-bold text-white">{APP_NAME}</span>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-primary-300 hover:bg-primary-800 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV.map(({ label, href, icon }) => {
            const Icon = icons[icon];
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary-500 text-white"
                    : "text-primary-200 hover:bg-primary-800 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {label}
                {active && (
                  <ChevronRight className="ml-auto h-4 w-4 opacity-60" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-primary-800 dark:border-white/10 px-3 py-3 space-y-0.5">
          {BOTTOM_NAV.map(({ label, href, icon }) => {
            const Icon = icons[icon];
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary-500 text-white"
                    : "text-primary-200 hover:bg-primary-800 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {label}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
