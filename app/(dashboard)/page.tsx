import { LayoutDashboard } from "lucide-react";
import { EmptyState } from "@/components/empty-state";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Przegląd Twoich projektów, dokumentów i aktywności AI.
        </p>
      </div>
      <EmptyState
        icon={LayoutDashboard}
        title="Brak danych do wyświetlenia"
        description="Dashboard zacznie pokazywać realne dane po wdrożeniu uwierzytelniania i zarządzania projektami."
      />
    </div>
  );
}