import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatsCard } from "@/components/shared/StatsCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MOCK_STATS, MOCK_PROJECTS, MOCK_TASKS, MOCK_EMPLOYEES } from "@/lib/mock-data";
import { formatDate, formatCurrency } from "@/lib/utils";
import type { Status, Priority } from "@/types";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  const activeProjects = MOCK_PROJECTS.filter((p) => p.status === "active");
  const upcomingTasks = MOCK_TASKS.filter(
    (t) => t.status === "active" || t.status === "pending"
  ).slice(0, 5);

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back — here's what's happening today."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Employees"
          value={MOCK_STATS.totalEmployees}
          change={8}
          icon="Users"
          color="purple"
        />
        <StatsCard
          title="Active Projects"
          value={MOCK_STATS.activeProjects}
          change={12}
          icon="FolderKanban"
          color="blue"
        />
        <StatsCard
          title="Open Tasks"
          value={MOCK_STATS.pendingTasks}
          change={-5}
          icon="CheckSquare"
          color="orange"
        />
        <StatsCard
          title="Total Clients"
          value={MOCK_STATS.totalClients}
          change={25}
          icon="Building2"
          color="green"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <Badge variant="active">{activeProjects.length} active</Badge>
          </CardHeader>
          <div className="space-y-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                    {project.title}
                  </p>
                  <Badge variant={project.priority as Priority}>
                    {project.priority}
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <ProgressBar value={project.progress} className="flex-1" />
                  <span className="w-10 text-right text-xs text-gray-500 dark:text-gray-400">
                    {project.progress}%
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {project.clientName} · Due {formatDate(project.endDate)}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <Avatar name={task.assigneeName} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                    {task.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {task.assigneeName} · Due {formatDate(task.dueDate)}
                  </p>
                </div>
                <Badge variant={task.priority as Priority}>{task.priority}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Total Revenue", value: formatCurrency(MOCK_STATS.totalRevenue) },
              { label: "This Month", value: formatCurrency(MOCK_STATS.monthlyRevenue) },
              { label: "Active Projects Value", value: formatCurrency(12700000) },
              { label: "Pending Contracts", value: formatCurrency(9800000) },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
