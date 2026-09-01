import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type PageHeroProps = {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({
  label,
  title,
  subtitle,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-phoenix/5 blur-[100px]" />

      <Container className="relative z-10">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {label && (
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-phoenix">
            {label}
          </span>
        )}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
