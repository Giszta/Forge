"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db/client";
import { getCurrentUser } from "@/lib/auth/session";
import { canCreateProject } from "@/lib/permissions/project";
import { createProjectSchema } from "@/lib/validation/project";

export type CreateProjectState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function createProjectAction(
  _prevState: CreateProjectState,
  formData: FormData,
): Promise<CreateProjectState> {
  const user = await getCurrentUser();

  if (!user) {
    return { error: "Musisz być zalogowany." };
  }

  if (!canCreateProject(user.role)) {
    return { error: "Nie masz uprawnień do tworzenia projektów." };
  }

  const parsed = createProjectSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  await prisma.project.create({
    data: {
      name: parsed.data.name,
      description: parsed.data.description ? parsed.data.description : null,
      organizationId: user.organizationId,
      createdById: user.id,
    },
  });

  revalidatePath("/projects");

  return { success: true };
}