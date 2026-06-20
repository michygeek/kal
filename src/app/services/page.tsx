import type { Metadata } from "next";
import { ClipboardList, Truck, HardHat, CheckCircle } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaSection } from "@/components/shared/cta-section";
import { serviceCategories } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Civil construction, electrical engineering, water engineering, hydropower, environmental services, procurement and project management across Nigeria.",
};

const process = [
  {
    icon: ClipboardList,
    title: "Design & Planning",
    description:
      "Outline design, feasibility studies and planning applications tailored to your project requirements.",
  },
  {
    icon: Truck,
    title: "Procurement",
    description:
      "Local and foreign sourcing of engineering materials, equipment and supplies at the right cost.",
  },
  {
    icon: HardHat,
    title: "Construction & Installation",
    description:
      "Disciplined site execution backed by modern equipment and an experienced technical workforce.",
  },
  {
    icon: CheckCircle,
    title: "Commissioning & Handover",
    description:
      "Testing, training and a turnkey handover — your single point of accountability throughout.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive engineering, construction, and infrastructure solutions delivered as a single point of accountability."
        image="/images/stock/blueprint-drafting.jpg"
        breadcrumb="Services"
      />

      <section className="py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Offer"
            title="Seven core service divisions"
            description="From civil construction to project management, our services span the full lifecycle of infrastructure delivery."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How We Work"
            title="A disciplined, turnkey delivery process"
            light
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="absolute -top-3 -left-1 font-heading text-5xl font-bold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex size-12 items-center justify-center rounded-lg bg-gold text-navy">
                  <step.icon className="size-6" />
                </span>
                <h3 className="relative mt-5 font-heading text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
