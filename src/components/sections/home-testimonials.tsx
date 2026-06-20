import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard, testimonials } from "@/components/shared/testimonial-card";
import { ClientLogos } from "@/components/shared/client-logos";

export function HomeTestimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What our clients say"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <ClientLogos />
      </div>
    </section>
  );
}
