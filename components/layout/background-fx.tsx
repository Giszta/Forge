export function BackgroundFx() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute -left-20 -top-40 h-[480px] w-[480px] animate-[drift_22s_ease-in-out_infinite_alternate] rounded-full opacity-35 blur-[90px] motion-reduce:animate-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow-1), transparent 70%)" }}
      />
      <div
        className="absolute -right-32 top-32 h-[420px] w-[420px] animate-[drift_22s_ease-in-out_infinite_alternate] rounded-full opacity-35 blur-[90px] [animation-delay:-8s] motion-reduce:animate-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow-2), transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-160px] left-[30%] h-[380px] w-[380px] animate-[drift_22s_ease-in-out_infinite_alternate] rounded-full opacity-35 blur-[90px] [animation-delay:-14s] motion-reduce:animate-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow-3), transparent 70%)" }}
      />
    </div>
  );
}