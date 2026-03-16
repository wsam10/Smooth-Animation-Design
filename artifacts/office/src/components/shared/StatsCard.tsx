import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import {
  Users,
  FolderKanban,
  CheckSquare,
  Building2,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const icons = { Users, FolderKanban, CheckSquare, Building2, TrendingUp };

const colorClasses = {
  purple: "bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400",
  blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  green: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400",
  orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
  red: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400",
};

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: keyof typeof icons;
  color: keyof typeof colorClasses;
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon,
  color,
}: StatsCardProps) {
  const Icon = icons[icon];
  const isPositive = (change ?? 0) >= 0;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
          {change !== undefined && (
            <p
              className={cn(
                "mt-1 flex items-center gap-1 text-xs font-medium",
                isPositive ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {Math.abs(change)}% {changeLabel ?? "vs last month"}
            </p>
          )}
        </div>
        <div className={cn("rounded-xl p-3", colorClasses[color])}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
}
