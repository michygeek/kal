import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { serviceCategories } from "@/lib/data/services";
import { iconMap } from "@/lib/icon-map";

export function HomeServices() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="container-custom">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive engineering & infrastructure services"
          description="From civil construction to water resources and project management, we deliver turnkey solutions across every phase of your project."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((service) => {
            const Icon = iconMap[service.icon] ?? Building2;
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-1.5 hover:border-gold hover:shadow-xl"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-engineering-blue">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
