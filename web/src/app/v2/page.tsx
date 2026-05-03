import { redirect } from "next/navigation";

/**
 * /v2 was the staging route for the new landing during the preview phase.
 * v2 is now the canonical landing at /. This stub keeps any old links
 * working with a server-side redirect.
 */
export default function V2Redirect() {
  redirect("/");
}
