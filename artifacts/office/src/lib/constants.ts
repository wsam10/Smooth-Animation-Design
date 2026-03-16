import type { NavItem } from "@/types";

export const APP_NAME = "NABEL Office";
export const APP_DESCRIPTION = "Internal office management system";

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Employees", href: "/employees", icon: "Users" },
  { label: "Projects", href: "/projects", icon: "FolderKanban" },
  { label: "Tasks", href: "/tasks", icon: "CheckSquare" },
  { label: "Clients", href: "/clients", icon: "Building2" },
  { label: "Reports", href: "/reports", icon: "BarChart3" },
  { label: "Settings", href: "/settings", icon: "Settings" },
];

export const DEPARTMENTS = [
  "Engineering",
  "Sales",
  "Marketing",
  "Operations",
  "Finance",
  "HR",
  "Management",
];

export const ROLES = ["admin", "manager", "employee", "client"] as const;

export const STATUS_OPTIONS = [
  "active",
  "inactive",
  "pending",
  "completed",
  "on-hold",
  "cancelled",
] as const;

export const PRIORITY_OPTIONS = ["low", "medium", "high", "urgent"] as const;

export const ITEMS_PER_PAGE = 10;

export const DATE_FORMAT = "MMM dd, yyyy";
export const DATETIME_FORMAT = "MMM dd, yyyy HH:mm";
