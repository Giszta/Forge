"use client";
import { useActionState, useState } from "react";
import { Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createProjectAction, type CreateProjectState } from "@/app/(dashboard)/projects/actions";

const initialState: CreateProjectState = {};

export function CreateProjectDialog() {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(createProjectAction, initialState);
    const [prevState, setPrevState] = useState(state);
  if (state !== prevState) {
    setPrevState(state);
    if (state.success) {
      setOpen(false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
  render={
    <Button>
      <Plus className="size-4" />
      Nowy projekt
    </Button>
  }
/>
      <DialogContent>
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Nowy projekt</DialogTitle>
            <DialogDescription>
              Projekt to kontener na dokumentację techniczną — rysunki, specyfikacje, analizy AI.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nazwa</Label>
              <Input
                id="name"
                name="name"
                required
                aria-invalid={!!state.fieldErrors?.["name"]}
                aria-describedby={state.fieldErrors?.["name"] ? "name-error" : undefined}
              />
              {state.fieldErrors?.["name"] && (
                <p id="name-error" role="alert" className="text-sm text-destructive">
                  {state.fieldErrors["name"][0]}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Opis (opcjonalnie)</Label>
              <Textarea
                id="description"
                name="description"
                rows={3}
                aria-invalid={!!state.fieldErrors?.["description"]}
                aria-describedby={state.fieldErrors?.["description"] ? "description-error" : undefined}
              />
              {state.fieldErrors?.["description"] && (
                <p id="description-error" role="alert" className="text-sm text-destructive">
                  {state.fieldErrors["description"][0]}
                </p>
              )}
            </div>
          </div>

          {state.error && (
            <p role="alert" className="mb-4 text-sm text-destructive">
              {state.error}
            </p>
          )}

          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Utwórz projekt
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}