/**
 * A service card: a soft panel holding the service's stills on one device (three mobile stills side by side, or one
 * desktop still across), and under it the logo, the name and "분야 · 화면 N개". The whole card is one link, to the
 * service's screens page. Used by the /screens gallery's grid and by a screens page's "similar services".
 * Styles: brand-a/screens-card.css. No hooks: server and client components both render it.
 */

import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { smallSrc, type ServiceCard } from "@/lib/screens/gallery";
import type { Device } from "@/lib/screens/model";
import "@/components/brand-a/screens-card.css";

/** Each image's box is the viewport it was shot at, so nothing shifts while it loads. */
export const FRAME: Record<Device, { w: number; h: number }> = { mobile: { w: 390, h: 844 }, desktop: { w: 1440, h: 900 } };

export function ServiceCardItem({
  card: { service, picks },
  device,
  href,
  meta,
  eager = false,
}: {
  card: ServiceCard;
  device: Device;
  href: string;
  /** The line at the end of the caption ("분야 · 화면 N개"). */
  meta: string;
  /** In the first viewport: load at once. */
  eager?: boolean;
}) {
  const frame = FRAME[device];
  return (
    <li className="sq-gal-card">
      <Link className="sq-gal-link" href={href} prefetch={false}>
        <span className="sq-gal-shot" data-device={device}>
          {picks.map(({ shot, still }) => (
            // eslint-disable-next-line @next/next/no-img-element -- a still from the image store, through our own path
            <img
              key={shot.key}
              src={smallSrc(still)}
              alt=""
              width={frame.w}
              height={frame.h}
              loading={eager ? "eager" : "lazy"}
              decoding={eager ? undefined : "async"}
            />
          ))}
        </span>
        <span className="sq-gal-cap">
          <BrandLogo logo={service.logo} className="sq-gal-logo" />
          <span className="sq-gal-name">{service.name}</span>
          <span className="sq-gal-meta">{meta}</span>
        </span>
      </Link>
    </li>
  );
}
