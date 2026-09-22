import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function StyleGuidePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-12 p-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">FORGE — Style Guide</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Wizualna weryfikacja design systemu: typografia, kolory, komponenty bazowe.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Typografia</h2>
        <div className="space-y-2">
          <p className="text-3xl font-semibold tracking-tight">Nagłówek H1 — text-3xl font-semibold</p>
          <p className="text-2xl font-semibold tracking-tight">Nagłówek H2 — text-2xl font-semibold</p>
          <p className="text-xl font-semibold">Nagłówek H3 — text-xl font-semibold</p>
          <p className="text-base">Tekst podstawowy — text-base</p>
          <p className="text-sm text-muted-foreground">Tekst pomocniczy — text-sm text-muted-foreground</p>
          <p className="font-mono text-sm">Kod / dane techniczne — font-mono text-sm</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Kolory</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { name: "background", className: "bg-background border" },
            { name: "foreground", className: "bg-foreground" },
            { name: "primary", className: "bg-primary" },
            { name: "secondary", className: "bg-secondary" },
            { name: "muted", className: "bg-muted" },
            { name: "accent", className: "bg-accent" },
            { name: "destructive", className: "bg-destructive" },
            { name: "border", className: "bg-border" },
          ].map((color) => (
            <div key={color.name} className="space-y-1.5">
              <div className={`h-16 rounded-lg ${color.className}`} />
              <p className="text-xs text-muted-foreground">{color.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttony</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Formularz</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Przykładowy formularz</CardTitle>
            <CardDescription>Input + Label wewnątrz Card</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="example-email">Email</Label>
              <Input id="example-email" type="email" placeholder="ty@example.com" />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}