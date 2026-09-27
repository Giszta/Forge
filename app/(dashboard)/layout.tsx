import type { ReactNode } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { auth } from "@/lib/auth/config";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main id="main-content" tabIndex={-1} className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}