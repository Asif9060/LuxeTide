import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShipSuiteGrid from "@/src/components/ShipSuiteGrid";
import { getShipDetails, getShipSlugs } from "@/src/ship-details";

export function generateStaticParams() {
  return getShipSlugs().map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const details = getShipDetails(id);
  if (!details) {
    return { title: "Suites Not Found" };
  }

  return {
    title: `${details.meta.name} Suites | LuxeTide`,
    description: `${details.meta.description} Browse the suite collection and open a suite detail page.`
  };
}

export default async function ShipSuitesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const details = getShipDetails(id);
  if (!details) {
    notFound();
  }

  return (
    <div className="bg-slate-950 text-slate-200">
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-black" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/40 to-slate-950" />

        <div className="relative z-10 luxury-container pb-20 pt-32">
          <div className="max-w-4xl space-y-6">
            <span className="editorial-label text-gold">Suite Index</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading text-white leading-tight">
              {details.meta.name} Suites
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Open any suite to see only its own images, highlights, and booking details.
            </p>
            <Link href={`/ships/${id}`} className="outline-button inline-flex items-center justify-center h-12 px-8">
              Back to Ship
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight border-t border-white/5">
        <div className="luxury-container space-y-12">
          <ShipSuiteGrid shipSlug={details.meta.slug} suites={details.suites} />
        </div>
      </section>
    </div>
  );
}