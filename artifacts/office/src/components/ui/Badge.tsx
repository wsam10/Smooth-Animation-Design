import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "active"
  | "inactive"
  | "pending"
  | "completed"
  | "on-hold"
  | "cancelled"
  | "low"
  | "medium"
  | "high"
  | "urgent";

const variantClasses: Record<Variant, string> = {
  default: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
  active: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  inactive: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
  pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  completed: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
  "on-hold": "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  cancelled: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  low: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  high: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  urgent: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
