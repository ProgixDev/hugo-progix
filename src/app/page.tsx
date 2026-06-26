import { DevisDocument } from "@/features/devis";

/**
 * Home route — the password-gated Progix "Devis contractuel" document. The gate
 * (site-gate feature) wraps the whole app from the root layout; this page is
 * pure composition.
 */
export default function Page() {
  return <DevisDocument />;
}
