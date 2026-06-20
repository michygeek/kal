import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, CalendarDays } from "lucide-react";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-border transition-shadow hover:shadow-xl"
    >
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-semibold text-gold">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white text-navy opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-semibold text-navy line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.scope}
        </p>
        <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-engineering-blue" />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5 text-engineering-blue" />
            {project.completionDate}
          </span>
        </div>
      </div>
    </Link>
  );
}
