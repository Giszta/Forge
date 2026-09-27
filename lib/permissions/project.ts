import type { Role } from "@/lib/generated/prisma/client";

const ROLES_ALLOWED_TO_CREATE_PROJECT: ReadonlySet<Role> = new Set(["ADMIN", "ENGINEER"]);

export function canCreateProject(role: Role): boolean {
  return ROLES_ALLOWED_TO_CREATE_PROJECT.has(role);
}