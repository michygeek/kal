import { FileCheck2, ShieldCheck, HardHat, BadgeCheck } from "lucide-react";
import { company } from "@/lib/data/company";

const items = [
  {
    icon: FileCheck2,
    title: `CAC Registered`,
    detail: company.rcNumber,
  },
  {
    icon: ShieldCheck,
    title: "Quality-Assured Delivery",
    detail: "Independent QA/QC on every project",
  },
  {
    icon: HardHat,
    title: "Safety-Compliant Operations",
    detail: "Site safety standards on all works",
  },
  {
    icon: BadgeCheck,
    title: "Indigenous Contractor",
    detail: "100% Nigerian owned & managed",
  },
];

export function CertificationsStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-2 bg-white p-6">
          <item.icon className="size-6 text-engineering-blue" />
          <p className="font-heading text-sm font-bold text-navy">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
