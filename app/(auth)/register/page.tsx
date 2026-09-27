"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerAction, type RegisterState } from "./actions";

const initialState: RegisterState = {};

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(
    registerAction,
    initialState,
  );

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Utwórz konto</CardTitle>
          <CardDescription>
            Zacznij pracę z FORGE w mniej niż minutę.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4" noValidate>
            <div className="space-y-2">
              <Label htmlFor="name">Imię i nazwisko</Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={!!state.fieldErrors?.name}
                aria-describedby={
                  state.fieldErrors?.name ? "name-error" : undefined
                }
              />
              {state.fieldErrors?.name && (
                <p id="name-error" className="text-sm text-destructive">
                  {state.fieldErrors.name[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={!!state.fieldErrors?.email}
                aria-describedby={
                  state.fieldErrors?.email ? "email-error" : undefined
                }
              />
              {state.fieldErrors?.email && (
                <p id="email-error" className="text-sm text-destructive">
                  {state.fieldErrors.email[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Hasło</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                aria-invalid={!!state.fieldErrors?.password}
                aria-describedby={
                  state.fieldErrors?.password ? "password-error" : undefined
                }
              />
              {state.fieldErrors?.password && (
                <p id="password-error" className="text-sm text-destructive">
                  {state.fieldErrors.password[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Powtórz hasło</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                aria-invalid={!!state.fieldErrors?.confirmPassword}
                aria-describedby={
                  state.fieldErrors?.confirmPassword
                    ? "confirmPassword-error"
                    : undefined
                }
              />
              {state.fieldErrors?.confirmPassword && (
                <p
                  id="confirmPassword-error"
                  className="text-sm text-destructive"
                >
                  {state.fieldErrors.confirmPassword[0]}
                </p>
              )}
            </div>

            {state.error && (
              <p role="alert" className="text-sm text-destructive">
                {state.error}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Tworzenie konta..." : "Zarejestruj się"}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Masz już konto?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Zaloguj się
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}