import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceCategory } from "@/lib/data/services";
import { iconMap } from "@/lib/icon-map";
import { Building2 } from "lucide-react";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  const Icon = iconMap[service.icon] ?? Building2;

  return (
    <div
      id={service.slug}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-border transition-shadow hover:shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        <span className="absolute bottom-4 left-5 flex size-12 items-center justify-center rounded-lg bg-gold text-navy">
          <Icon className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-navy">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <ul className="mt-4 flex-1 space-y-2">
          {service.items.slice(0, 5).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className="mt-0.5 size-3.5 shrink-0 text-engineering-blue" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-engineering-blue hover:text-navy"
        >
          Request this service
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
