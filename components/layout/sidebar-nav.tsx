"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import { navItems } from "./nav-items";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 px-3">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-gradient-to-r from-[var(--accent-glow-1)]/20 to-transparent text-sidebar-foreground ring-1 ring-inset ring-[var(--accent-glow-1)]/30"
                : "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            )}
          >
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute -left-2 top-1/2 h-4.5 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-[var(--accent-glow-1)] to-[var(--accent-glow-2)] shadow-[0_0_10px_var(--accent-glow-1)]"
              />
            )}
            <Icon className="size-4" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}