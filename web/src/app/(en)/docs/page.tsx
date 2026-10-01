import { permanentRedirect } from "next/navigation";

export default function DocsIndexPage() {
  permanentRedirect("/docs/en");
}
