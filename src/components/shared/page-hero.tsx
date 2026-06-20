import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";

type PageHeroProps = {
  title: string;
  description?: string;
  image: string;
  breadcrumb: string;
};

export function PageHero({ title, description, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden bg-navy">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
      <div className="container-custom relative py-14">
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-white/60">
          <Link href="/" className="flex items-center gap-1 hover:text-gold">
            <Home className="size-3" />
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-gold">{breadcrumb}</span>
        </nav>
        <h1 className="max-w-2xl font-heading text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}
