/**
 * Central site config — the single source for metadata, robots, sitemap, and
 * manifest. Replace name/description and set NEXT_PUBLIC_SITE_URL per app (it
 * drives canonical + Open Graph URLs).
 */
export const site = {
  name: "Progix — Devis contractuel",
  shortName: "Progix",
  description:
    "Devis contractuel Progix : développement de votre plateforme hôtellerie — application mobile & web, back-office, landing page et accompagnement marketing jusqu’à la mise en marché.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
} as const;
