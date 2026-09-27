import type { Role } from "@/lib/generated/prisma/client";

const VALID_ROLES: readonly Role[] = ["ADMIN", "ENGINEER", "REVIEWER", "VIEWER"];

export function isValidRole(value: string): value is Role {
  return (VALID_ROLES as readonly string[]).includes(value);
}