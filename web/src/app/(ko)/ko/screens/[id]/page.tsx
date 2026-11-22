import type { Metadata } from "next";
import { ServiceScreensPage, serviceScreensParams } from "@/components/screens/service-page";
import { serviceScreensMetadata } from "@/components/screens/metadata";

/**
 * /ko/screens/<id> — 한 서비스의 화면 페이지. Under the (ko) root layout, so the document is <html lang="ko">. The same
 * ids as /screens/<id>: every service with screens, whether or not it has a Korean item page. Twin: /screens/<id>.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceScreensParams();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return serviceScreensMetadata("ko", id);
}

export default async function KoreanServiceScreensRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ServiceScreensPage locale="ko" id={id} />;
}
