import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/lib/data/projects";

export function HomeProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured projects across Nigeria"
            description="A selection of construction, water resources and infrastructure projects delivered for government and private clients."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy hover:text-engineering-blue"
          >
            View All Projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
