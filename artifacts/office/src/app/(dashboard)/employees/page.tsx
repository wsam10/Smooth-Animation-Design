import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { MOCK_EMPLOYEES } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { Status } from "@/types";
import { Mail, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = { title: "Employees" };

export default function EmployeesPage() {
  return (
    <div>
      <PageHeader
        title="Employees"
        description={`${MOCK_EMPLOYEES.length} team members`}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {MOCK_EMPLOYEES.map((emp) => (
          <Card key={emp.id} className="hover:shadow-card-hover transition-shadow">
            <div className="flex items-start gap-4">
              <Avatar name={emp.name} src={emp.avatar} size="lg" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                    {emp.name}
                  </h3>
                  <Badge variant={emp.status as Status}>{emp.status}</Badge>
                </div>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {emp.position}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {emp.department}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{emp.email}</span>
              </div>
              {emp.phone && (
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  <span>{emp.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                <span>Joined {formatDate(emp.joinedAt)}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/10">
              <Badge variant="default" className="capitalize">
                {emp.role}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
