import { HeroSection } from "@/components/sections/hero-section";
import { HomeAboutPreview } from "@/components/sections/home-about-preview";
import { HomeServices } from "@/components/sections/home-services";
import { HomeWhyUs } from "@/components/sections/home-why-us";
import { HomeProjects } from "@/components/sections/home-projects";
import { HomeTestimonials } from "@/components/sections/home-testimonials";
import { CtaSection } from "@/components/shared/cta-section";
import { CertificationsStrip } from "@/components/shared/certifications-strip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutPreview />
      <HomeServices />
      <HomeWhyUs />
      <HomeProjects />
      <section className="py-16">
        <div className="container-custom">
          <CertificationsStrip />
        </div>
      </section>
      <HomeTestimonials />
      <CtaSection />
    </>
  );
}
