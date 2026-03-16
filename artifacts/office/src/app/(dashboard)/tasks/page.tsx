import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { MOCK_TASKS } from "@/lib/mock-data";
import { formatDate, getDaysUntil, cn } from "@/lib/utils";
import type { Status, Priority } from "@/types";
import { Tag } from "lucide-react";

export const metadata: Metadata = { title: "Tasks" };

const groups: { label: string; status: Status[] }[] = [
  { label: "Active", status: ["active"] },
  { label: "Pending", status: ["pending"] },
  { label: "Completed", status: ["completed"] },
];

export default function TasksPage() {
  return (
    <div>
      <PageHeader title="Tasks" description={`${MOCK_TASKS.length} total tasks`} />

      <div className="space-y-8">
        {groups.map(({ label, status }) => {
          const tasks = MOCK_TASKS.filter((t) => status.includes(t.status as Status));
          if (tasks.length === 0) return null;
          return (
            <div key={label}>
              <h2 className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {label} ({tasks.length})
              </h2>
              <div className="space-y-3">
                {tasks.map((task) => {
                  const daysLeft = getDaysUntil(task.dueDate);
                  const isOverdue = daysLeft < 0;
                  return (
                    <Card key={task.id} padding="sm" className="hover:shadow-card-hover transition-shadow">
                      <div className="flex items-start gap-3">
                        <Avatar name={task.assigneeName} size="sm" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {task.title}
                            </p>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <Badge variant={task.priority as Priority}>
                                {task.priority}
                              </Badge>
                              <Badge variant={task.status as Status}>
                                {task.status}
                              </Badge>
                            </div>
                          </div>
                          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            {task.projectName} · {task.assigneeName}
                          </p>
                          <div className="mt-2 flex items-center gap-3 text-xs">
                            <span
                              className={cn(
                                "font-medium",
                                isOverdue
                                  ? "text-red-500"
                                  : daysLeft <= 3
                                  ? "text-orange-500"
                                  : "text-gray-400 dark:text-gray-500"
                              )}
                            >
                              {isOverdue
                                ? `${Math.abs(daysLeft)}d overdue`
                                : `Due ${formatDate(task.dueDate)}`}
                            </span>
                            {task.tags && task.tags.length > 0 && (
                              <span className="flex items-center gap-1 text-gray-400">
                                <Tag className="h-3 w-3" />
                                {task.tags.join(", ")}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
