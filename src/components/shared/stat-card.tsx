type StatCardProps = {
  stat: string;
  label: string;
  description?: string;
  light?: boolean;
};

export function StatCard({ stat, label, description, light = true }: StatCardProps) {
  return (
    <div
      className={
        light
          ? "rounded-xl border border-white/10 bg-white/5 p-6"
          : "rounded-xl border border-border bg-white p-6 shadow-sm"
      }
    >
      <p className={`font-heading text-4xl font-bold ${light ? "text-gold" : "text-engineering-blue"}`}>
        {stat}
      </p>
      <p className={`mt-2 text-sm font-semibold ${light ? "text-white" : "text-navy"}`}>
        {label}
      </p>
      {description && (
        <p className={`mt-1.5 text-xs leading-relaxed ${light ? "text-white/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
