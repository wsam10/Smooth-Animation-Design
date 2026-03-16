"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

function getPageTitle(pathname: string): string {
  const match = NAV_ITEMS.find((n) => pathname.startsWith(n.href));
  return match?.label ?? "Office";
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-dark-bg">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          title={getPageTitle(pathname)}
        />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
