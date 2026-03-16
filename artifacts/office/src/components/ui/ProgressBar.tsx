import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md";
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  size = "md",
  showLabel = false,
  className,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const color =
    pct >= 80 ? "bg-green-500" : pct >= 50 ? "bg-primary-500" : "bg-yellow-500";

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/10",
          size === "sm" ? "h-1.5" : "h-2.5"
        )}
      >
        <div
          className={cn("h-full rounded-full transition-all", color)}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="mt-1 block text-right text-xs text-gray-500 dark:text-gray-400">
          {pct}%
        </span>
      )}
    </div>
  );
}
