import { FolderKanban } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { CreateProjectDialog } from "@/components/projects/create-project-dialog";
import { ProjectCard } from "@/components/projects/project-card";
import { getCurrentUser } from "@/lib/auth/session";
import { getProjectsForOrganization } from "@/data/projects";

export default async function ProjectsPage() {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }

  const projects = await getProjectsForOrganization(user.organizationId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Projekty</h1>
          <p className="text-sm text-muted-foreground">
            Zarządzaj projektami technicznymi i ich dokumentacją.
          </p>
        </div>
        <CreateProjectDialog />
      </div>

      {projects.length === 0 ? (
        <EmptyState
          icon={FolderKanban}
          title="Brak projektów"
          description="Utwórz pierwszy projekt, aby zacząć dodawać dokumentację."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}