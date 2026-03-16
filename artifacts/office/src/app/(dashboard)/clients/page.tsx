import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MOCK_CLIENTS } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { Status } from "@/types";
import { Building2, Mail, Phone, FolderKanban } from "lucide-react";

export const metadata: Metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <div>
      <PageHeader
        title="Clients"
        description={`${MOCK_CLIENTS.length} clients`}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {MOCK_CLIENTS.map((client) => (
          <Card key={client.id} className="hover:shadow-card-hover transition-shadow">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40">
                  <Building2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {client.company}
                  </p>
                </div>
              </div>
              <Badge variant={client.status as Status}>{client.status}</Badge>
            </div>

            <div className="mt-4 space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-primary-500" />
                <span>{client.email}</span>
              </div>
              {client.phone && (
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Phone className="h-4 w-4 shrink-0 text-primary-500" />
                  <span>{client.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FolderKanban className="h-4 w-4 shrink-0 text-primary-500" />
                <span>{client.projectCount} project{client.projectCount !== 1 ? "s" : ""}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/10 text-xs text-gray-400">
              Client since {formatDate(client.createdAt)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
