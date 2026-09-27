import { prisma } from "@/lib/db/client";

export async function getProjectsForOrganization(organizationId: string) {
  return prisma.project.findMany({
    where: {
      organizationId,
      archivedAt: null,
    },
    orderBy: { createdAt: "desc" },
    include: {
      createdBy: {
        select: { name: true },
      },
    },
  });
}