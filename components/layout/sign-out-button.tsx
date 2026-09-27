import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/lib/auth/actions";

export function SignOutButton() {
  return (
    <form action={logoutAction}>
      <Button type="submit" variant="ghost" size="icon" aria-label="Wyloguj się">
        <LogOut className="size-4" />
      </Button>
    </form>
  );
}