import Link from "next/link";
import type { LandingCopy } from "./copy";
import { Wordmark } from "./wordmark";

const GH = "https://github.com/kwakseongjae/oh-my-design";

export function SiteFooter({ copy }: { copy: LandingCopy }) {
  const l = copy.footer.links;
  const product: [string, string][] = [
    [l.catalog, "/design-systems"],
    [l.builder, "/builder"],
    [l.docs, copy.docsHref],
    [l.what, "/what-is-design-md"],
    [l.faq, "/faq"],
    [l.changelog, "/changelog"],
    [l.alternatives, "/alternatives"],
  ];
  const project: [string, string][] = [
    ["GitHub", GH],
    ["npm", "https://www.npmjs.com/package/oh-my-design-cli"],
    [l.issues, `${GH}/issues`],
    [l.license, `${GH}/blob/main/LICENSE`],
    [l.privacy, copy.privacyHref],
    [l.terms, copy.termsHref],
  ];
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div className="max-w-sm">
          <Wordmark className="text-ink" />
          <p className="mt-4 text-sm leading-relaxed text-ink-2">{copy.footer.tagline}</p>
          <p className="mt-3 font-mono text-xs text-ink-2">{copy.footer.provisional}</p>
        </div>
        <FooterColumn title={copy.footer.product} links={product} />
        <FooterColumn title={copy.footer.project} links={project} />
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-wide text-ink-2">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            {href.startsWith("http") ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
                {label}
              </a>
            ) : (
              <Link href={href} prefetch={false} className="text-ink underline-offset-4 hover:underline">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
