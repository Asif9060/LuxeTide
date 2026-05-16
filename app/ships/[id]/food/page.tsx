import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getShipDetails, getShipSlugs } from "@/src/ship-details";

export function generateStaticParams() {
  return getShipSlugs().map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const details = getShipDetails(id);
  if (!details) {
    return { title: "Food Not Found" };
  }

  return {
    title: `${details.meta.name} Food & Dining | LuxeTide`,
    description: `${details.meta.description} Food menus, policies, and booking details.`
  };
}

export default async function ShipFoodPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const details = getShipDetails(id);
  if (!details) {
    notFound();
  }

  redirect(`/ships/${id}`);
}