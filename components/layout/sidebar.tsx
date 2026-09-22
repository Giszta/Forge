import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar/55 backdrop-blur-xl backdrop-saturate-150 md:flex">
      <div className="flex h-14 items-center gap-2.5 border-b border-sidebar-border px-4">
        <div className="flex size-6 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent-glow-1)] to-[var(--accent-glow-2)] shadow-[0_0_2px_var(--accent-glow-1)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
          </svg>
        </div>
        <span className="text-sm font-bold tracking-tight text-sidebar-foreground">FORGE</span>
      </div>
      <ScrollArea className="flex-1">
        <div className="py-4">
          <SidebarNav />
        </div>
      </ScrollArea>
    </aside>
  );
}