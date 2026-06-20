type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border sm:block" />
      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.year} className="relative flex gap-6">
            <div className="relative hidden shrink-0 sm:block">
              <div className="flex size-16 items-center justify-center rounded-full bg-navy font-heading text-[11px] font-bold text-gold ring-4 ring-white">
                {item.year}
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-border bg-white p-6">
              <span className="font-heading text-sm font-bold text-engineering-blue sm:hidden">
                {item.year}
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
