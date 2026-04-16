import type { Metadata } from "next";
import { DESIGN_TYPES, type TypeCode } from "@/lib/survey/types";

type Params = Promise<{ typeCode: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { typeCode } = await params;
  const code = typeCode.toUpperCase() as TypeCode;
  const type = DESIGN_TYPES[code];

  if (!type) {
    return {
      title: "Design Type — oh-my-design",
      description: "Find your design type at oh-my-design.kr",
    };
  }

  // Title format: "My design type: The Engineer (CDFS) · oh-my-design"
  const title = `My design type: ${type.name} (${code})`;
  const description = `"${type.tagline}" — What's your design type? Take the 60-second quiz at oh-my-design.kr`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "oh-my-design",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "oh-my-design",
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

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
