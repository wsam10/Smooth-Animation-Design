export type Role = "admin" | "manager" | "employee" | "client";

export type Status =
  | "active"
  | "inactive"
  | "pending"
  | "completed"
  | "on-hold"
  | "cancelled";

export type Priority = "low" | "medium" | "high" | "urgent";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  department?: string;
  phone?: string;
  joinedAt: string;
  status: "active" | "inactive";
}

export interface Employee extends User {
  position: string;
  department: string;
  salary?: number;
  managerId?: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  address?: string;
  status: Status;
  createdAt: string;
  projectCount: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  clientName: string;
  managerId: string;
  managerName: string;
  status: Status;
  priority: Priority;
  startDate: string;
  endDate: string;
  budget?: number;
  progress: number;
  teamIds: string[];
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  projectId: string;
  projectName: string;
  assigneeId: string;
  assigneeName: string;
  status: Status;
  priority: Priority;
  dueDate: string;
  createdAt: string;
  tags?: string[];
}

export interface Report {
  id: string;
  title: string;
  type: "financial" | "project" | "employee" | "client";
  period: string;
  generatedAt: string;
  generatedBy: string;
  data: Record<string, unknown>;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: number;
  children?: NavItem[];
}

export interface StatsCard {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: string;
  color: "purple" | "blue" | "green" | "orange" | "red";
}

export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: unknown, row: T) => React.ReactNode;
}

export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  meta?: PaginationMeta;
  message?: string;
}
