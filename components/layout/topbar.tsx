import { Menu, User } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SidebarNav } from "./sidebar-nav";

export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between gap-3 border-b border-border/60 bg-background/45 px-4 backdrop-blur-xl backdrop-saturate-150 md:px-6">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Otwórz menu nawigacyjne"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-60 border-sidebar-border bg-sidebar/95 p-0 backdrop-blur-xl">
            <SheetTitle className="sr-only">Nawigacja</SheetTitle>
            <div className="flex h-14 items-center border-b border-sidebar-border px-4">
              <Link href="/" className="text-sm font-semibold tracking-tight">
                FORGE
              </Link>
            </div>
            <div className="py-4">
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>
        <p className="text-sm font-medium text-muted-foreground md:hidden">FORGE</p>
      </div>

      <div className="flex size-8 items-center justify-center rounded-full bg-sidebar-accent text-sidebar-accent-foreground">
        <User className="size-4" />
      </div>
    </header>
  );
}