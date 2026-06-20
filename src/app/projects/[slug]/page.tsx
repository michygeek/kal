import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, CalendarDays, Layers } from "lucide-react";

import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/shared/project-card";
import { CtaSection } from "@/components/shared/cta-section";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-navy">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" />
        <div className="container-custom relative py-14">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-gold"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
          <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
            {project.category}
          </span>
          <h1 className="mt-4 max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">
              Project Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              {project.description}
            </p>
            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-navy">
                Project Details
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Layers className="mt-0.5 size-4 text-engineering-blue" />
                  <span>
                    <span className="block text-xs text-muted-foreground">Scope</span>
                    {project.scope}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-engineering-blue" />
                  <span>
                    <span className="block text-xs text-muted-foreground">Location</span>
                    {project.location}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-4 text-engineering-blue" />
                  <span>
                    <span className="block text-xs text-muted-foreground">Completion</span>
                    {project.completionDate}
                  </span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="block rounded-xl bg-navy p-6 text-center font-heading text-sm font-semibold text-gold hover:bg-navy-light"
            >
              Discuss a Similar Project
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/40 py-16 sm:py-24">
          <div className="container-custom">
            <h2 className="font-heading text-2xl font-bold text-navy">
              Related Projects
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
