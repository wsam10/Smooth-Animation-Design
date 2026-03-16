import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import { formatDate, formatCurrency } from "@/lib/utils";
import type { Status, Priority } from "@/types";
import { Calendar, DollarSign, Users } from "lucide-react";

export const metadata: Metadata = { title: "Projects" };

const statusOrder: Status[] = ["active", "pending", "completed", "on-hold", "cancelled"];

export default function ProjectsPage() {
  const sorted = [...MOCK_PROJECTS].sort(
    (a, b) => statusOrder.indexOf(a.status as Status) - statusOrder.indexOf(b.status as Status)
  );

  return (
    <div>
      <PageHeader
        title="Projects"
        description={`${MOCK_PROJECTS.length} total projects`}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {sorted.map((project) => (
          <Card key={project.id} className="hover:shadow-card-hover transition-shadow">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <Badge variant={project.status as Status}>{project.status}</Badge>
                <Badge variant={project.priority as Priority}>{project.priority}</Badge>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <ProgressBar value={project.progress} />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                <span>{project.clientName}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                <span>{formatDate(project.endDate)}</span>
              </div>
              {project.budget && (
                <div className="flex items-center gap-1.5">
                  <DollarSign className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                  <span>{formatCurrency(project.budget)}</span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
