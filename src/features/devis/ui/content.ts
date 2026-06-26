/**
 * Faithful content for the Progix "Devis contractuel", lifted from the Claude
 * Design source (the `renderVals()` data island + section markup). List-shaped
 * data lives here; prose with inline emphasis is authored in the section JSX.
 *
 * All copy uses French typography (’ « » … —) — keep it that way.
 */

export const cover = {
  tag: "Devis contractuel · Bon de commande",
  title: "Développement de votre plateforme",
  titleLight: "hôtellerie",
  subtitle:
    "Application mobile & web, back-office, landing page et accompagnement marketing — tout inclus jusqu’à la mise en marché. Un prix fixe, une équipe senior, votre propriété à 100 %.",
  badges: [
    { l: "Montant total", v: "4 950 €", u: "" },
    { l: "Délai de livraison", v: "50", u: " jours" },
    { l: "Accompagnement", v: "90", u: " jours" },
  ],
  meta: [
    { l: "Projet (nom de travail)", v: "« Brigade » — à valider" },
    { l: "Périmètre · Marché", v: "Hôtellerie · Région de Marseille" },
    { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
    { l: "Référence · Date", v: "DEVIS-PROGIX-2026-001 · ____________" },
  ],
} as const;

export const trust = [
  { n: "12", l: "ingénieurs dédiés" },
  { n: "100+", l: "projets livrés" },
  { n: "100 %", l: "propriété au Client" },
  { n: "CA · FR", l: "équipe Canada & France" },
] as const;

/** Section 02 — prestations included, grouped. `b` is emphasized, `t` follows. */
export const incl1 = [
  { b: "Application mobile iOS & Android", t: " (Flutter), design sur mesure inclus" },
  { b: "Interface web employeur", t: " pour publier depuis l’ordinateur" },
  { b: "Back-office d’administration", t: " (contenu, certifications, utilisateurs)" },
  { b: "Landing page", t: " de présentation, optimisée acquisition" },
  { b: "Moteur de certification", t: " métier + banque de questions initiale" },
  { b: "Système de réputation", t: " : score de fiabilité, badges, notation 2 sens" },
  { b: "Matching & recherche", t: " géolocalisés, mode « dispo maintenant »" },
  { b: "3 révisions de maquettes", t: " incluses dans le forfait" },
] as const;

export const incl2 = [
  { b: "Paiements mobiles", t: " RevenueCat + StoreKit (15 % la 1ʳᵉ année)" },
  { b: "Paiement web", t: " Stripe, sans commission de store" },
  { b: "Hébergement OVHcloud", t: " — serveurs en France, conforme RGPD" },
  { b: "Publication", t: " sur l’App Store & le Google Play Store" },
] as const;

export const incl3 = [
  { b: "Formation marketing complète (3 h)", t: " : UGC, Meta Ads, Apple Search Ads" },
  { b: "Acteur UGC fourni", t: " par Progix + scripts publicitaires" },
  { b: "Suivi hebdomadaire", t: " des KPIs pendant 90 jours" },
  { b: "Support technique 90 jours", t: " + documentation technique complète" },
] as const;

/** Section 03 — investment table. `alt` rows get the tinted background. */
export const investment = [
  {
    strong: "Application mobile iOS + Android",
    text: " (Flutter, design sur mesure)",
    amount: "1 900 €",
    alt: false,
  },
  { text: "Interface web employeur", amount: "600 €", alt: true },
  { text: "Back-office d’administration", amount: "650 €", alt: false },
  { text: "Landing page", amount: "250 €", alt: true },
  {
    text: "Moteur de certification + banque de questions initiale",
    amount: "500 €",
    alt: false,
  },
  { text: "Intégration des paiements (RevenueCat + Stripe)", amount: "350 €", alt: true },
  { text: "Publication App Store + Play Store", amount: "150 €", alt: false },
  {
    text: "Accompagnement marketing 90 j (formation, acteur UGC, scripts, suivi)",
    amount: "550 €",
    alt: true,
  },
  {
    text: "Hébergement OVHcloud (mise en place) & support 90 jours",
    amount: "Inclus",
    included: true,
    alt: false,
  },
] as const;

export const payments = [
  {
    pct: "30 % · ACOMPTE",
    when: "Au démarrage",
    desc: "À la signature et à la réunion de cadrage",
    amount: "1 485 €",
  },
  {
    pct: "50 % · LIVRAISON",
    when: "À la livraison",
    desc: "Application livrée et publiée sur les stores",
    amount: "2 475 €",
  },
  {
    pct: "20 % · LANCEMENT",
    when: "Après accompagnement",
    desc: "À l’issue de la formation marketing",
    amount: "990 €",
  },
] as const;

/** Section 06 — delivery phases. */
export const phases = [
  {
    tag: "PHASE 1",
    title: "Cadrage",
    desc: "≈ J1 – J5 · spécifications & validation du périmètre",
  },
  {
    tag: "PHASE 2",
    title: "Design UI/UX",
    desc: "≈ J5 – J15 · maquettes (3 révisions incluses)",
  },
  {
    tag: "PHASE 3",
    title: "Développement",
    desc: "≈ J15 – J42 · app, web, back-office, paiements",
  },
] as const;

/** Header / footer navigation. Only the Devis page is implemented in this
 * frontend-only build; the others point back home until they ship. */
export const navLinks = [
  { key: "accueil", label: "Accueil", href: "/" },
  { key: "cahier", label: "Cahier des charges", href: "/" },
  { key: "calendrier", label: "Calendrier", href: "/" },
  { key: "devis", label: "Devis contractuel", href: "/" },
] as const;
