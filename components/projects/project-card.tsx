import { FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { getProjectsForOrganization } from "@/data/projects";

type Project = Awaited<ReturnType<typeof getProjectsForOrganization>>[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="size-4 text-muted-foreground" aria-hidden="true" />
          {project.name}
        </CardTitle>
        {project.description && <CardDescription>{project.description}</CardDescription>}
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Utworzył {project.createdBy?.name ?? "—"} ·{" "}
        {new Intl.DateTimeFormat("pl-PL", { dateStyle: "medium" }).format(project.createdAt)}
      </CardContent>
    </Card>
  );
}