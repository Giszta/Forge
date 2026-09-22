import { FolderKanban } from "lucide-react";
import { EmptyState } from "@/components/empty-state";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projekty</h1>
        <p className="text-sm text-muted-foreground">
          Zarządzaj projektami technicznymi i ich dokumentacją.
        </p>
      </div>
      <EmptyState
        icon={FolderKanban}
        title="Brak projektów"
        description="Tworzenie projektów pojawi się w branchu feat/project-management."
      />
    </div>
  );
}