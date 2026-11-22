import type { Metadata } from "next";
import { ServiceScreensPage, serviceScreensParams } from "@/components/screens/service-page";
import { serviceScreensMetadata } from "@/components/screens/metadata";

/**
 * /screens/<id> — one service's screens, by device and by type, with downloads (components/screens/service-screens.tsx).
 * Prerendered for every service with screens (generateStaticParams); any other id is a 404 (dynamicParams = false),
 * and with nothing published and no local folder there are no params at all. Twin: /ko/screens/<id>.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceScreensParams();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return serviceScreensMetadata("en", id);
}

export default async function ServiceScreensRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ServiceScreensPage locale="en" id={id} />;
}
