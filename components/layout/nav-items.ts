import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, FolderKanban } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Projekty", href: "/projects", icon: FolderKanban },
];