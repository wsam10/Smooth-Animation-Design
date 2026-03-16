import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  action,
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-gray-300 dark:text-gray-600">{icon}</div>
      )}
      <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      {description && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          {description}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
