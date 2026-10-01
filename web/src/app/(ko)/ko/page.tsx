import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "oh-my-design — AI 코딩 에이전트를 위한 DESIGN.md";
const DESCRIPTION = `기업 ${REFERENCE_COUNT}곳의 실제 디자인 시스템을 코딩 에이전트가 따르는 DESIGN.md로 정리했습니다. 브랜드를 고르고 빌더에서 다듬어 내려받으세요. 무료 오픈소스입니다.`;

/**
 * Korean landing. Same page as /, Korean copy, rendered under the (ko) root
 * layout so the document says <html lang="ko">.
 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ko",
    languages: { en: "/", ko: "/ko", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: TITLE,
    description: DESCRIPTION,
    url: "/ko",
    siteName: "oh-my-design",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export const revalidate = 3600;

export default function KoreanHomePage() {
  return <LandingPage locale="ko" />;
}
