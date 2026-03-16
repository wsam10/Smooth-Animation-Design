import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { MOCK_PROJECTS, MOCK_EMPLOYEES, MOCK_STATS } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { BarChart3, TrendingUp, Users, FolderKanban } from "lucide-react";

export const metadata: Metadata = { title: "Reports" };

const MONTHLY = [
  { month: "Oct", revenue: 1200000 },
  { month: "Nov", revenue: 1450000 },
  { month: "Dec", revenue: 1100000 },
  { month: "Jan", revenue: 1700000 },
  { month: "Feb", revenue: 1550000 },
  { month: "Mar", revenue: 1800000 },
];
const maxRevenue = Math.max(...MONTHLY.map((m) => m.revenue));

export default function ReportsPage() {
  const completedProjects = MOCK_PROJECTS.filter((p) => p.status === "completed");
  const byDept = MOCK_EMPLOYEES.reduce<Record<string, number>>((acc, e) => {
    acc[e.department] = (acc[e.department] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <PageHeader title="Reports" description="Analytics and performance overview" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
        {[
          {
            label: "Total Revenue",
            value: formatCurrency(MOCK_STATS.totalRevenue),
            icon: TrendingUp,
            color: "text-green-500",
          },
          {
            label: "Active Projects",
            value: MOCK_STATS.activeProjects,
            icon: FolderKanban,
            color: "text-primary-500",
          },
          {
            label: "Team Members",
            value: MOCK_STATS.totalEmployees,
            icon: Users,
            color: "text-blue-500",
          },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label}>
            <div className="flex items-center gap-3">
              <Icon className={`h-8 w-8 ${color}`} />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <div className="flex items-end gap-2 h-40">
            {MONTHLY.map(({ month, revenue }) => {
              const heightPct = (revenue / maxRevenue) * 100;
              return (
                <div key={month} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {(revenue / 1000000).toFixed(1)}M
                  </span>
                  <div
                    className="w-full rounded-t-md bg-primary-500 dark:bg-primary-600 transition-all"
                    style={{ height: `${heightPct}%` }}
                  />
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {month}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Employees by Department</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {Object.entries(byDept).map(([dept, count]) => (
              <div key={dept} className="flex items-center gap-3">
                <span className="w-24 text-sm text-gray-600 dark:text-gray-400 shrink-0">
                  {dept}
                </span>
                <div className="flex-1 h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary-500"
                    style={{ width: `${(count / MOCK_EMPLOYEES.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Project Status Summary</CardTitle>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/10">
                  {["Project", "Client", "Status", "Progress", "Budget"].map((h) => (
                    <th
                      key={h}
                      className="pb-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/10">
                {MOCK_PROJECTS.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                    <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white">
                      {p.title}
                    </td>
                    <td className="py-3 pr-4 text-gray-500 dark:text-gray-400">
                      {p.clientName}
                    </td>
                    <td className="py-3 pr-4 capitalize text-gray-600 dark:text-gray-300">
                      {p.status}
                    </td>
                    <td className="py-3 pr-4 text-gray-600 dark:text-gray-300">
                      {p.progress}%
                    </td>
                    <td className="py-3 text-gray-600 dark:text-gray-300">
                      {p.budget ? formatCurrency(p.budget) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
