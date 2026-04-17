import type { Metadata } from "next";
import { DESIGN_TYPES, type TypeCode } from "@/lib/survey/types";

const siteUrl = "https://oh-my-design.kr";

type Params = Promise<{ typeCode: string }>;

export async function generateStaticParams() {
  return Object.keys(DESIGN_TYPES).map((code) => ({ typeCode: code }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { typeCode } = await params;
  const code = typeCode.toUpperCase() as TypeCode;
  const type = DESIGN_TYPES[code];

  if (!type) {
    return {
      title: "Design Type — oh-my-design",
      description: "Find your design type at oh-my-design.kr",
    };
  }

  const title = `My design type: ${type.name} (${code}) — oh-my-design`;
  const description = `"${type.tagline}" — ${type.description} Take the 60-second design personality quiz at oh-my-design.kr`;
  const canonicalUrl = `${siteUrl}/result/${code}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: "oh-my-design",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `oh-my-design — ${type.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default function ResultLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ typeCode: string }>;
}) {
  return children;
}
