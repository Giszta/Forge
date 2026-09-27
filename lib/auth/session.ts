import { cache } from "react";
import { headers } from "next/headers";
import type { Role } from "@/lib/generated/prisma/client";
import { auth } from "@/lib/auth/config";
import { isValidRole } from "@/lib/permissions/roles";

export type AuthenticatedUser = {
  id: string;
  role: Role;
  organizationId: string;
};

type RawSessionUser = {
  id: string;
  role?: string | null;
  organizationId?: string | null;
};

function parseAuthenticatedUser(user: RawSessionUser): AuthenticatedUser | null {
  if (!user.role || !isValidRole(user.role)) {
    return null;
  }
  if (!user.organizationId) {
    return null;
  }
  return {
    id: user.id,
    role: user.role,
    organizationId: user.organizationId,
  };
}

export const getCurrentUser = cache(async (): Promise<AuthenticatedUser | null> => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return null;
  }
  return parseAuthenticatedUser(session.user);
});