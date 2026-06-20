const clientTypes = [
  "Federal Government Agencies",
  "State Ministries of Works",
  "Private Estate Developers",
  "Educational Institutions",
  "Corporate Bodies",
  "Oil & Gas Operators",
];

export function ClientLogos() {
  return (
    <div className="overflow-hidden border-y border-border bg-muted/40 py-8">
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
        {clientTypes.map((client) => (
          <span
            key={client}
            className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/40"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}
