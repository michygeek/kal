import {
  Heart,
  Lightbulb,
  Users,
  HandHeart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const valueIcons: Record<string, LucideIcon> = {
  "Customer First": Heart,
  Innovation: Lightbulb,
  Teamwork: Users,
  Respect: HandHeart,
  Accountability: ShieldCheck,
};

export function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const Icon = valueIcons[title] ?? ShieldCheck;
  return (
    <div className="group rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
      <span className="flex size-12 items-center justify-center rounded-lg bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-4 font-heading text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
