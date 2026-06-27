import type { CSSProperties, ReactNode } from "react";
import { Cover } from "./cover";
import { DcHeader } from "./dc-header";
import { DownloadFab } from "./download-fab";
import { Footer } from "./footer";
import { ScrollReveal } from "./scroll-reveal";
import { SectionHeader } from "./primitives";
import { ChapterBand } from "./chapter-band";
import styles from "./devis.module.css";

/* ------------------------------------------------------------------ */
/* Shared inline-style fragments (lifted verbatim from the source).   */
/* ------------------------------------------------------------------ */

const SECTION_DOTS: CSSProperties = {
  width: "100%",
};

const CONTAINER: CSSProperties = {
  maxWidth: "1040px",
  margin: "0 auto",
  padding: "clamp(56px,7vw,94px) clamp(24px,5vw,48px)",
};

const CARD: CSSProperties = {
  background: "linear-gradient(180deg,#fff,#EDF4FF)",
  border: "1px solid #D6E3F1",
  borderRadius: "14px",
  padding: "22px 24px",
  boxShadow: "var(--shadow)",
};

const CARD_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "15px",
  color: "var(--navy)",
  fontWeight: 600,
  margin: "0 0 7px",
  display: "flex",
  alignItems: "center",
  gap: "9px",
};

const CARD_TEXT: CSSProperties = {
  fontSize: "14px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.6,
};

const ROUND_BADGE: CSSProperties = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: "#fff",
  fontSize: "13px",
  fontWeight: 700,
  fontFamily: "var(--font-disp)",
};

const GRID_AUTO: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
  gap: "16px",
};

const H3_DIAMOND: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "19px",
  color: "var(--navy)",
  fontWeight: 600,
  margin: "34px 0 12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const INFOBOX: CSSProperties = {
  background: "var(--tint-2)",
  border: "1px solid #D5EAFB",
  borderRadius: "14px",
  padding: "18px 22px",
  margin: "16px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

const INFOBOX_ICON: CSSProperties = {
  flexShrink: 0,
  width: "30px",
  height: "30px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
  fontSize: "14px",
  fontFamily: "var(--font-disp)",
  background: "var(--cyan)",
};

const INFOBOX_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontSize: "14px",
  margin: "0 0 4px",
  color: "var(--navy)",
  fontWeight: 600,
};

const INFOBOX_TEXT: CSSProperties = {
  fontSize: "13.6px",
  margin: 0,
  color: "var(--slate)",
  lineHeight: 1.55,
};

const STRONG_INK: CSSProperties = { color: "var(--ink)", fontWeight: 600 };

const TH: CSSProperties = {
  background: "var(--navy)",
  color: "#fff",
  textAlign: "left",
  padding: "11px 15px",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
};

const TAG_BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "10.5px",
  letterSpacing: ".6px",
  textTransform: "uppercase",
  padding: "4px 11px",
  borderRadius: "999px",
  whiteSpace: "nowrap",
};

const STEP_CARD: CSSProperties = {
  flex: "1 1 180px",
  background: "linear-gradient(180deg,#fff,#EDF4FF)",
  border: "1px solid #D6E3F1",
  borderRadius: "14px",
  padding: "16px 14px",
  boxShadow: "var(--shadow)",
};

const STEP_EYEBROW: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 700,
  fontSize: "11px",
  color: "var(--cyan-ink)",
  letterSpacing: ".5px",
};

const STEP_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "14px",
  color: "var(--navy)",
  margin: "6px 0 4px",
};

const STEP_DESC: CSSProperties = {
  fontSize: "12.5px",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const STEP_RULE: CSSProperties = {
  height: "6px",
  borderRadius: "6px",
  background: "linear-gradient(90deg,var(--cyan),var(--navy))",
  margin: "14px 0 0",
};

const ARCH_NODE: CSSProperties = {
  background: "#fff",
  border: "1.5px solid var(--line)",
  borderRadius: "11px",
  padding: "12px 14px",
  minWidth: "130px",
  textAlign: "center",
  boxShadow: "var(--shadow)",
};

const ARCH_NODE_TITLE: CSSProperties = {
  fontFamily: "var(--font-disp)",
  fontWeight: 600,
  fontSize: "12.5px",
  color: "var(--navy)",
};

const ARCH_NODE_SUB: CSSProperties = {
  fontSize: "11px",
  color: "var(--muted)",
  marginTop: "2px",
};

const ARCH_COL_LABEL: CSSProperties = {
  textAlign: "center",
  fontFamily: "var(--font-disp)",
  fontSize: "10px",
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "4px",
};

const ARCH_ARROW: CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "var(--cyan)",
  fontSize: "18px",
  fontWeight: 700,
};

const A_GRAD = "linear-gradient(150deg,var(--cyan-deep),var(--cyan))";
const N_GRAD = "linear-gradient(150deg,var(--navy),var(--navy-700))";

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

function Strong({ children }: { children: ReactNode }) {
  return <strong style={STRONG_INK}>{children}</strong>;
}

/** Subsection heading with the cyan diamond marker, with custom top margin. */
function DiamondHeading({
  children,
  marginTop = "34px",
}: {
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3 style={{ ...H3_DIAMOND, margin: `${marginTop} 0 12px` }}>
      <span style={{ color: "var(--cyan)", fontSize: "13px" }} aria-hidden="true">
        ◆
      </span>
      {children}
    </h3>
  );
}

function FeatureCard({
  icon,
  iconBg,
  title,
  children,
}: {
  icon: ReactNode;
  iconBg: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={CARD}>
      <h4 style={CARD_TITLE}>
        <span style={{ ...ROUND_BADGE, background: iconBg }} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h4>
      <p style={CARD_TEXT}>{children}</p>
    </div>
  );
}

function InfoCallout({
  iconBg = "var(--cyan)",
  icon = "i",
  title,
  titleColor = "var(--navy)",
  borderColor = "#D5EAFB",
  background = "var(--tint-2)",
  children,
}: {
  iconBg?: string;
  icon?: ReactNode;
  title: string;
  titleColor?: string;
  borderColor?: string;
  background?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ ...INFOBOX, background, border: `1px solid ${borderColor}` }}>
      <div style={{ ...INFOBOX_ICON, background: iconBg }} aria-hidden="true">
        {icon}
      </div>
      <div>
        <h4 style={{ ...INFOBOX_TITLE, color: titleColor }}>{title}</h4>
        <p style={INFOBOX_TEXT}>{children}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data lifted from the renderVals() island.                           */
/* ------------------------------------------------------------------ */

const meta = [
  { l: "Projet (nom de travail)", v: "« Brigade » — à valider" },
  { l: "Périmètre · Marché", v: "Hôtellerie · Région de Marseille" },
  { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
  { l: "Référence · Version", v: "CDC-PROGIX-2026-001 · v1.0" },
] as const;

const toc = [
  { n: "01", t: "Contexte & vision du projet" },
  { n: "02", t: "Objectifs du projet" },
  { n: "03", t: "Utilisateurs cibles" },
  { n: "04", t: "Modèle économique" },
  { n: "05", t: "Périmètre fonctionnel détaillé" },
  { n: "06", t: "Parcours utilisateurs clés" },
  { n: "07", t: "Architecture & choix technologiques" },
  { n: "08", t: "Sécurité, RGPD & exigences non-fonctionnelles" },
  { n: "09", t: "Livrables & publication" },
  { n: "10", t: "Hors périmètre & évolutions (Phase 2)" },
  { n: "11", t: "Accompagnement marketing (90 jours)" },
  { n: "12", t: "Démarche, planning & validation" },
  { n: "13", t: "Prérequis & engagements du client" },
] as const;

type Tag = { label: string; bg: string; fg: string; bd: string };
type Feat = { b: string; t: string };
type Module = {
  n: string;
  iconBg: string;
  title: string;
  hasBadge: boolean;
  badge: string;
  desc: string;
  feats: Feat[];
  tags: Tag[];
};

const ok: Tag = { label: "Inclus V1", bg: "var(--ok-bg)", fg: "var(--ok)", bd: "none" };
const cy = (label: string): Tag => ({
  label,
  bg: "var(--tint)",
  fg: "var(--cyan-ink)",
  bd: "none",
});
const nv = (label: string): Tag => ({ label, bg: "#E9EEF6", fg: "var(--navy)", bd: "none" });
const gh = (label: string): Tag => ({
  label,
  bg: "#fff",
  fg: "var(--muted)",
  bd: "1px solid var(--line)",
});
const F = (b: string, t: string): Feat => ({ b, t });

const modules: Module[] = [
  {
    n: "01",
    iconBg: A_GRAD,
    title: "Comptes & profils",
    hasBadge: false,
    badge: "",
    desc: "Inscription, connexion et gestion de profil pour les deux types d’utilisateurs.",
    feats: [
      F(
        "",
        "Inscription par e-mail / téléphone, connexion sécurisée, récupération de mot de passe.",
      ),
      F(
        "Profil candidat :",
        " expériences, postes recherchés, compétences, disponibilités, zone géographique, photo.",
      ),
      F("Profil établissement :", " nom, type, adresse, présentation, logo/photos."),
      F("", "Onboarding guidé différencié selon le type de compte."),
    ],
    tags: [ok],
  },
  {
    n: "02",
    iconBg: A_GRAD,
    title: "Vérification & confiance",
    hasBadge: false,
    badge: "",
    desc: "Contrôle léger d’identité pour fiabiliser les profils et rassurer les établissements.",
    feats: [
      F(
        "",
        "Vérification d’identité allégée (pièce d’identité + autorisation de travail) avec badge « Profil vérifié ».",
      ),
      F("", "Vérification de l’e-mail et du numéro de téléphone."),
      F("", "Signalement & modération des contenus et comportements abusifs."),
    ],
    tags: [ok],
  },
  {
    n: "03",
    iconBg: N_GRAD,
    title: "Certification métier",
    hasBadge: true,
    badge: "Cœur de la plateforme",
    desc: "Moteur de tests intégré qui certifie les compétences des candidats par poste hôtelier.",
    feats: [
      F("Tests in-app", " : QCM et mises en situation, corrigés automatiquement."),
      F(
        "3 niveaux de certification",
        " par seuils de score (ex. Bronze / Argent / Or), affichés sur le profil.",
      ),
      F(
        "",
        "Certifications par poste : réception, service en salle, cuisine, étages — extensibles via le back-office.",
      ),
      F(
        "",
        "Banque de questions initiale fournie par Progix (postes hôteliers de base), enrichissable par l’administrateur.",
      ),
    ],
    tags: [ok, nv("Géré au back-office")],
  },
  {
    n: "04",
    iconBg: N_GRAD,
    title: "Réputation & gamification",
    hasBadge: false,
    badge: "",
    desc: "Score de fiabilité, badges et progression pour valoriser le sérieux des candidats.",
    feats: [
      F(
        "Score de fiabilité & de présence",
        " (anti no-show), calculé sur les missions confirmées et les avis.",
      ),
      F("Badges", " : profil vérifié, certifié, ponctuel, expérimenté…"),
      F(
        "",
        "Progression visible (niveaux) incitant le candidat à compléter son profil et à honorer ses missions.",
      ),
    ],
    tags: [ok],
  },
  {
    n: "05",
    iconBg: A_GRAD,
    title: "Publication d’offres (établissement)",
    hasBadge: false,
    badge: "",
    desc: "Création et diffusion d’annonces depuis le mobile ou le web.",
    feats: [
      F(
        "",
        "Création d’offre : poste, type de contrat/mission, dates & horaires, lieu, exigences (certification, niveau).",
      ),
      F("", "Diffusion 30 jours ; 1ʳᵉ publication offerte, suivantes à 3,99 €."),
      F("", "Publication depuis l’app mobile (achat intégré) ou l’interface web (Stripe)."),
      F("", "Gestion des offres : statut, candidatures reçues, clôture."),
    ],
    tags: [ok, cy("Mobile + Web")],
  },
  {
    n: "06",
    iconBg: N_GRAD,
    title: "Recherche, matching & filtres",
    hasBadge: false,
    badge: "",
    desc: "Mise en correspondance pertinente entre besoins et profils.",
    feats: [
      F(
        "",
        "Côté candidat : fil d’offres filtré par poste, localisation, dates, certification requise.",
      ),
      F(
        "",
        "Côté établissement : recherche dans le vivier de candidats certifiés (poste, niveau, disponibilité, distance).",
      ),
      F(
        "Score de compatibilité",
        " offre ↔ candidat (compétences, certification, proximité, fiabilité).",
      ),
      F("", "Filtrage géographique par zone (Marseille au lancement)."),
    ],
    tags: [ok],
  },
  {
    n: "07",
    iconBg: A_GRAD,
    title: "Candidature & mise en relation",
    hasBadge: false,
    badge: "",
    desc: "Du clic « postuler » à la prise de contact, dans l’app.",
    feats: [
      F(
        "",
        "Candidature en un geste ; l’établissement peut aussi contacter directement un candidat certifié.",
      ),
      F("Messagerie de mise en relation", " (échange 1-à-1 candidat ↔ établissement) intégrée."),
      F("", "Suivi des candidatures (en cours, acceptée, refusée)."),
    ],
    tags: [ok],
  },
  {
    n: "08",
    iconBg: N_GRAD,
    title: "Mode « Dispo maintenant » & extras",
    hasBadge: false,
    badge: "",
    desc: "Réponse au besoin de renforts de dernière minute, propre à l’hôtellerie.",
    feats: [
      F(
        "",
        "Bascule « Disponible maintenant » en un geste : le candidat remonte dans les résultats.",
      ),
      F("", "Offres d’extras ponctuels (date & heure précises) pour les besoins urgents."),
      F("", "Notifications ciblées aux candidats disponibles à proximité."),
    ],
    tags: [ok, cy("Différenciateur hôtellerie")],
  },
  {
    n: "09",
    iconBg: N_GRAD,
    title: "Missions & historique",
    hasBadge: false,
    badge: "",
    desc: "Confirmation des missions dans l’app pour alimenter la réputation.",
    feats: [
      F(
        "Confirmation de mission in-app",
        " par les deux parties → débloque la notation & l’historique.",
      ),
      F("", "Historique des missions réalisées sur le profil (preuve d’expérience)."),
      F("", "Alimente automatiquement le score de fiabilité."),
    ],
    tags: [ok],
  },
  {
    n: "10",
    iconBg: A_GRAD,
    title: "Notation double sens",
    hasBadge: false,
    badge: "",
    desc: "Évaluation mutuelle structurée après chaque mission.",
    feats: [
      F("", "Le candidat note l’établissement, l’établissement note le candidat."),
      F("", "Critères structurés (ponctualité, savoir-être, compétence) + commentaire."),
      F("", "Note moyenne affichée sur les profils ; modération possible au back-office."),
    ],
    tags: [ok],
  },
  {
    n: "11",
    iconBg: N_GRAD,
    title: "Vivier & favoris (établissement)",
    hasBadge: false,
    badge: "",
    desc: "Re-mobiliser facilement les bons profils.",
    feats: [
      F(
        "",
        "Mise en favori des candidats appréciés ; constitution d’un vivier propre à l’établissement.",
      ),
      F("", "Re-contact direct des profils enregistrés (favorise le renouvellement)."),
    ],
    tags: [ok],
  },
  {
    n: "12",
    iconBg: A_GRAD,
    title: "Abonnements & paiements",
    hasBadge: false,
    badge: "",
    desc: "Encaissement multi-canal et gestion des abonnements.",
    feats: [
      F(
        "Mobile :",
        " RevenueCat + StoreKit (iOS/Android) — abonnement candidat, achat de publication, essai gratuit.",
      ),
      F("Web :", " Stripe — publication employeur sans commission de store."),
      F("", "Gestion de l’état d’abonnement, des accès et des reçus."),
    ],
    tags: [ok, cy("RevenueCat + Stripe")],
  },
  {
    n: "13",
    iconBg: N_GRAD,
    title: "Notifications",
    hasBadge: false,
    badge: "",
    desc: "Engagement et réactivité.",
    feats: [
      F(
        "",
        "Notifications push : nouvelle offre pertinente, candidature reçue, message, mission confirmée, demande d’avis.",
      ),
      F("", "Préférences de notification par l’utilisateur."),
    ],
    tags: [ok],
  },
  {
    n: "14",
    iconBg: N_GRAD,
    title: "Back-office d’administration",
    hasBadge: false,
    badge: "",
    desc: "Pilotage autonome de la plateforme par le porteur.",
    feats: [
      F("Tests & certifications :", " création/édition de questions et seuils de niveaux."),
      F(
        "Utilisateurs & modération :",
        " gestion des utilisateurs, des offres, de la modération et des signalements.",
      ),
      F(
        "Édition de contenu « j’écris, ça se met en forme »",
        " : le contenu saisi s’affiche proprement dans l’app, sans intervention technique.",
      ),
      F("", "Tableau de bord : indicateurs clés (inscriptions, abonnés, offres, missions)."),
    ],
    tags: [ok, gh("Web sécurisé")],
  },
  {
    n: "15",
    iconBg: A_GRAD,
    title: "Landing page",
    hasBadge: false,
    badge: "",
    desc: "Vitrine de présentation et porte d’entrée des téléchargements.",
    feats: [
      F(
        "",
        "Page de présentation responsive : proposition de valeur, fonctionnalités, liens stores.",
      ),
      F("", "Optimisée pour les campagnes d’acquisition (Meta Ads / Apple Search Ads)."),
    ],
    tags: [ok],
  },
];

/* ------------------------------------------------------------------ */
/* The page                                                            */
/* ------------------------------------------------------------------ */

/**
 * Full "Cahier des charges" document — header, hero cover, the table of
 * contents, the thirteen content sections, and the footer. A Server Component
 * composing the shared client leaves (header, FAB, scroll-reveal) at the edges.
 */
export function CahierDocument() {
  return (
    <div className={styles.root} data-devis-root>
      <DcHeader active="cahier" />
      <main className={styles.main}>
        <DownloadFab />
        <Cover
          tag="Cahier des charges · Document de cadrage"
          title="Plateforme de mise en relation"
          titleLight="pour l’hôtellerie"
          subtitle="Application mobile & web mettant en relation établissements hôteliers et professionnels certifiés, autour d’un modèle de certification métier, de réputation vérifiée et d’abonnement. Lancement ciblé sur la région de Marseille."
          badges={[]}
          meta={meta}
        />

        {/* SOMMAIRE */}
        <section data-dc-section style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}>
          <div style={CONTAINER}>
            <span
              style={{
                fontFamily: "var(--font-disp)",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--cyan-ink)",
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "2px",
                  background: "var(--cyan)",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
                aria-hidden="true"
              />
              Sommaire
            </span>
            <h2
              style={{
                fontFamily: "var(--font-disp)",
                fontSize: "clamp(23px,3vw,28px)",
                color: "var(--navy)",
                fontWeight: 600,
                letterSpacing: "-.01em",
                margin: "12px 0 0",
              }}
            >
              Ce que couvre ce document
            </h2>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "15.5px",
                color: "var(--slate)",
                maxWidth: "66ch",
                lineHeight: 1.62,
              }}
            >
              Ce cahier des charges définit le périmètre fonctionnel et technique de l’Application,
              les livrables attendus et la démarche de réalisation. Il sert de base contractuelle au
              devis associé.
            </p>
            <div style={{ marginTop: "24px", borderTop: "1px solid var(--line)" }}>
              {toc.map((row) => (
                <div
                  key={row.n}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    padding: "13px 2px",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 600,
                      color: "var(--cyan-ink)",
                      fontSize: "13px",
                      width: "30px",
                      flexShrink: 0,
                    }}
                  >
                    {row.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 500,
                      color: "var(--navy)",
                      fontSize: "15px",
                    }}
                  >
                    {row.t}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      borderBottom: "1px dotted var(--line)",
                      transform: "translateY(-4px)",
                      minWidth: "20px",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-disp)",
                      color: "var(--muted)",
                      fontSize: "13px",
                    }}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 — CONTEXTE */}
        <section
          id="s1"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="01 — CONTEXTE"
              title="Contexte & vision du projet"
              lead="Le secteur de l’hôtellerie-restauration fait face à une tension de recrutement structurelle : difficulté à trouver du personnel qualifié et fiable, fort taux d’absentéisme (« no-show »), et besoin récurrent de renforts ponctuels (extras). Les solutions actuelles restent généralistes et peu adaptées aux réalités du terrain."
            />
            <p
              style={{
                fontSize: "15.5px",
                color: "var(--ink)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              L’Application répond à ce besoin par une plateforme{" "}
              <Strong>spécialisée hôtellerie</Strong> qui met en relation, d’un côté, les{" "}
              <Strong>établissements</Strong> (hôtels, restaurants, brasseries) en recherche de
              personnel, et de l’autre, des <Strong>professionnels certifiés</Strong> dont les
              compétences et la fiabilité ont été vérifiées au sein même de la plateforme.
            </p>
            <DiamondHeading>Le différenciateur : la confiance vérifiée</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              La valeur de la plateforme ne repose pas sur un simple annuaire d’annonces, mais sur
              un <Strong>capital de confiance</Strong> qui ne vit qu’à l’intérieur de l’Application
              : certification métier, score de fiabilité, historique des missions et notation
              mutuelle. C’est ce capital qui donne à chaque partie un intérêt concret à rester sur
              la plateforme plutôt qu’à contourner le système.
            </p>
            <div
              style={{
                background:
                  "linear-gradient(155deg,var(--navy-900),var(--navy) 60%,var(--navy-800))",
                color: "#DDE8F4",
                borderRadius: "22px",
                padding: "30px clamp(24px,4vw,34px)",
                margin: "22px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "18px",
                  bottom: "-22px",
                  fontSize: "120px",
                  color: "rgba(56,182,255,.10)",
                  fontFamily: "var(--font-disp)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ↗
              </span>
              <span
                style={{
                  fontFamily: "var(--font-disp)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "var(--cyan)",
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Pourquoi les utilisateurs restent
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-disp)",
                  color: "#fff",
                  fontSize: "19px",
                  fontWeight: 600,
                  margin: "12px 0 6px",
                  position: "relative",
                  lineHeight: 1.3,
                }}
              >
                La réputation se construit dans l’app — et n’est pas transférable ailleurs
              </h3>
              <p
                style={{
                  color: "#B9CCE2",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Plutôt que de tenter (vainement) de verrouiller la mise en relation, la plateforme
                rend la fidélité naturelle : un candidat perd sa certification, ses avis et son
                badge de fiabilité s’il sort du circuit ; un employeur perd l’accès à un vivier
                qualifié et à des garanties de sérieux.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
                  gap: "22px",
                  marginTop: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    3
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      niveaux
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    de certification métier, propres à chaque poste hôtelier
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    1
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      score
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    de fiabilité & de présence, anti no-show
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    2
                    <small style={{ color: "var(--cyan)", fontSize: "15px", fontWeight: 600 }}>
                      {" "}
                      sens
                    </small>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    de notation, candidat ↔ établissement, après chaque mission
                  </div>
                </div>
              </div>
            </div>
            <DiamondHeading>Stratégie de lancement</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              Le lancement se concentre volontairement sur{" "}
              <Strong>une région (Marseille) et un secteur (hôtellerie)</Strong> afin de créer une
              densité d’offre et de demande suffisante pour que chaque partie trouve immédiatement
              de la valeur. Cette approche par marché de niche maximise la pertinence, la conversion
              et le bouche-à-oreille, avant tout élargissement géographique ou sectoriel ultérieur.
            </p>
          </div>
        </section>

        {/* 02 — OBJECTIFS */}
        <section
          id="s2"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="02 — OBJECTIFS" title="Objectifs du projet" />
            <div style={GRID_AUTO}>
              <FeatureCard icon="1" iconBg="var(--cyan)" title="Mettre en relation efficacement">
                Permettre à un établissement de publier un besoin et de trouver, en quelques
                minutes, des candidats certifiés et disponibles dans sa zone.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="Garantir la qualité & la fiabilité">
                S’assurer, via la certification et le score de fiabilité, que les profils proposés
                correspondent réellement aux exigences du métier.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="Fidéliser les deux parties">
                Faire de la réputation vérifiée et de l’historique des missions un actif qui incite
                naturellement à rester sur la plateforme.
              </FeatureCard>
              <FeatureCard icon="4" iconBg="var(--navy)" title="Générer des revenus récurrents">
                Asseoir un modèle d’abonnement clair et prévisible (côté candidat) et de publication
                (côté établissement), sans commission.
              </FeatureCard>
            </div>
            <InfoCallout title="Objectif business du porteur">
              Construire une plateforme à la traction démontrable, valorisable à moyen terme en vue
              d’une reprise ou d’une levée. Chaque choix de produit vise donc la{" "}
              <Strong>métrique d’usage</Strong> (rétention, missions réalisées, profils certifiés
              actifs) autant que le chiffre d’affaires.
            </InfoCallout>
          </div>
        </section>

        {/* 03 — UTILISATEURS */}
        <section
          id="s3"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="03 — UTILISATEURS"
              title="Utilisateurs cibles"
              lead="Trois profils d’utilisateurs, deux interfaces côté public (mobile & web) et une interface d’administration."
            />
            <UserCard
              letter="A"
              letterBg="linear-gradient(150deg,var(--cyan-deep),var(--cyan))"
              title="Le professionnel hôtelier (chercheur d’emploi)"
              desc="Serveur, réceptionniste, commis de cuisine, valet/femme de chambre… cherche missions ponctuelles ou postes, en local."
              rows={[
                {
                  b: "Attentes :",
                  t: " trouver vite des opportunités sérieuses près de chez lui, valoriser ses compétences et sa fiabilité, être contacté par de bons établissements.",
                },
                { b: "Support :", t: " application mobile (iOS + Android)." },
              ]}
              tags={[cy("Abonnement 6,99 €/mois"), gh("Essai 3 jours")]}
            />
            <UserCard
              letter="B"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="L’établissement (employeur)"
              desc="Hôtel, restaurant, brasserie. Publie des besoins, consulte le vivier de certifiés, contacte et engage."
              rows={[
                {
                  b: "Attentes :",
                  t: " du personnel qualifié, fiable et disponible rapidement ; réduire les no-show ; gérer le recrutement depuis le bureau comme depuis le terrain.",
                },
                {
                  b: "Support :",
                  node: (
                    <>
                      <Strong>Support :</Strong> application mobile <Strong>et</Strong> interface
                      web (publication depuis l’ordinateur).
                    </>
                  ),
                },
              ]}
              tags={[nv("1ʳᵉ publication offerte"), cy("Puis 3,99 € / publication (1 mois)")]}
            />
            <UserCard
              letter="C"
              letterBg="linear-gradient(150deg,var(--navy),var(--navy-700))"
              title="L’administrateur (le porteur du projet)"
              desc="Gère le contenu, les certifications, les utilisateurs et la modération depuis un back-office web."
              rows={[
                {
                  b: "Attentes :",
                  t: " piloter la plateforme en autonomie, ajouter du contenu sans intervention technique (« j’écris, ça se met en forme tout seul dans l’app »).",
                },
                { b: "Support :", t: " back-office d’administration web." },
              ]}
              tags={[gh("Accès web sécurisé")]}
            />
          </div>
        </section>

        {/* 04 — MODÈLE ÉCONOMIQUE */}
        <section
          id="s4"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="04 — MODÈLE ÉCONOMIQUE"
              title="Modèle économique"
              lead="Un modèle 100 % abonnement / publication, sans aucune commission sur les missions. Plus simple, plus lisible, et aligné avec une stratégie de fidélisation par la valeur plutôt que par le verrouillage."
            />
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "13.6px",
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  minWidth: "560px",
                }}
              >
                <thead>
                  <tr>
                    <th style={TH}>Côté</th>
                    <th style={TH}>Formule</th>
                    <th style={TH}>Tarif</th>
                    <th style={TH}>Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={TD}>
                      <Strong>Professionnel</Strong>
                      <br />
                      (chercheur d’emploi)
                    </td>
                    <td style={TD}>Abonnement mensuel</td>
                    <td style={TD}>
                      <Strong>6,99 € / mois</Strong>
                      <br />
                      <span style={{ color: "var(--muted)" }}>essai gratuit 3 jours</span>
                    </td>
                    <td style={TD}>
                      Profil visible, candidatures illimitées, accès aux offres, mode « dispo
                      maintenant », certification, messagerie.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_ALT}>
                      <Strong>Établissement</Strong>
                      <br />
                      (employeur)
                    </td>
                    <td style={TD_ALT}>Paiement à la publication</td>
                    <td style={TD_ALT}>
                      <Strong>1ʳᵉ offerte</Strong>, puis <Strong>3,99 €</Strong> / publication
                      <br />
                      <span style={{ color: "var(--muted)" }}>visible 1 mois</span>
                    </td>
                    <td style={TD_ALT}>
                      Diffusion de l’offre 30 jours, réception des candidatures, accès au vivier
                      certifié, contact direct.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <DiamondHeading marginTop="30px">Encaissement : mobile & web</DiamondHeading>
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--slate)",
                margin: "0 0 13px",
                lineHeight: 1.62,
              }}
            >
              Le paiement s’adapte au canal utilisé, ce qui permet d’optimiser les frais selon le
              contexte d’usage :
            </p>
            <div style={GRID_AUTO}>
              <FeatureCard icon="↗" iconBg="var(--cyan)" title="Sur l’application mobile">
                Achats intégrés via <Strong>RevenueCat + StoreKit</Strong> (norme imposée par Apple
                & Google). Commission plateforme à <Strong>15 % la première année</Strong>{" "}
                (programme petites entreprises), au lieu de 30 %.
              </FeatureCard>
              <FeatureCard icon="↗" iconBg="var(--navy)" title="Depuis l’interface web (employeur)">
                Paiement par <Strong>Stripe</Strong> pour les publications réalisées depuis
                l’ordinateur — sans commission de store. L’employeur choisit librement son canal.
              </FeatureCard>
            </div>
            <InfoCallout title="Pas de commission sur les missions">
              La plateforme ne prélève rien sur la relation de travail. Le revenu provient
              exclusivement des abonnements (candidats) et des publications (établissements). Ce
              choix renforce la confiance et lève tout intérêt à contourner le système.
            </InfoCallout>
          </div>
        </section>

        {/* 05 — PÉRIMÈTRE FONCTIONNEL */}
        <section
          id="s5"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="05 — PÉRIMÈTRE FONCTIONNEL"
              title="Périmètre fonctionnel détaillé"
              lead="Ensemble des modules inclus dans la version 1 (livraison initiale). Chaque module ci-dessous fait partie de la prestation. Les évolutions ultérieures sont décrites en section 10."
            />
            {modules.map((m) => (
              <div
                key={m.n}
                style={{
                  background: "linear-gradient(180deg,#fff,#EDF4FF)",
                  border: "1px solid #D6E3F1",
                  borderRadius: "14px",
                  margin: "16px 0",
                  boxShadow: "var(--shadow)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "20px 22px 14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "11px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 600,
                      fontFamily: "var(--font-disp)",
                      fontSize: "15px",
                      boxShadow: "0 6px 14px rgba(12,35,64,.22)",
                      background: m.iconBg,
                    }}
                    aria-hidden="true"
                  >
                    {m.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontSize: "16px",
                        color: "var(--navy)",
                        fontWeight: 600,
                        margin: "2px 0 3px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      {m.title}
                      {m.hasBadge ? (
                        <span
                          style={{
                            ...TAG_BASE,
                            background: "var(--tint)",
                            color: "var(--cyan-ink)",
                          }}
                        >
                          {m.badge}
                        </span>
                      ) : null}
                    </h4>
                    <div
                      style={{
                        fontSize: "13.5px",
                        color: "var(--slate)",
                        lineHeight: 1.55,
                      }}
                    >
                      {m.desc}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
                  {m.feats.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
                        padding: "6px 0",
                        fontSize: "13.6px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "var(--cyan-ink)",
                          flexShrink: 0,
                          fontWeight: 700,
                          fontSize: "12px",
                          marginTop: "3px",
                        }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>
                        {f.b ? <Strong>{f.b}</Strong> : null}
                        {f.t}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "0 22px 18px clamp(22px,4vw,76px)",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {m.tags.map((t) => (
                    <span
                      key={t.label}
                      style={{
                        ...TAG_BASE,
                        background: t.bg,
                        color: t.fg,
                        border: t.bd,
                      }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ChapterBand
          eyebrow="Le différenciateur"
          title="La confiance se construit"
          titleAccent="dans l’application."
          sub="Certification métier, score de fiabilité et notation à double sens : un capital qui n’existe qu’à l’intérieur de la plateforme — et qui fidélise naturellement les deux parties."
        />

        {/* 06 — PARCOURS */}
        <section
          id="s6"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="06 — PARCOURS" title="Parcours utilisateurs clés" />
            <JourneyHeading letter="A">Le professionnel (candidat)</JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "S’inscrire",
                  d: "Crée son profil, vérifie son identité, démarre l’essai gratuit (3 j).",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Se certifier",
                  d: "Passe les tests de son poste, obtient son niveau et ses badges.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Postuler / être trouvé",
                  d: "Répond aux offres, active « dispo maintenant », est contacté.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Réaliser & être noté",
                  d: "Confirme la mission, reçoit un avis, fait grimper son score.",
                },
              ]}
            />
            <JourneyHeading letter="B" marginTop="30px">
              L’établissement (employeur)
            </JourneyHeading>
            <JourneyRow
              steps={[
                {
                  n: "ÉTAPE 1",
                  t: "Publier un besoin",
                  d: "Crée une offre (mobile ou web) — 1ʳᵉ offerte, puis 3,99 €.",
                },
                {
                  n: "ÉTAPE 2",
                  t: "Recevoir & chercher",
                  d: "Reçoit les candidatures, explore le vivier de certifiés à proximité.",
                },
                {
                  n: "ÉTAPE 3",
                  t: "Contacter",
                  d: "Échange via la messagerie, sélectionne le bon profil.",
                },
                {
                  n: "ÉTAPE 4",
                  t: "Confirmer & noter",
                  d: "Valide la mission, note le candidat, l’ajoute au vivier.",
                },
              ]}
            />
          </div>
        </section>

        {/* 07 — TECHNIQUE */}
        <section
          id="s7"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="07 — TECHNIQUE"
              title="Architecture & choix technologiques"
              lead="Une stack moderne, performante et éprouvée, choisie pour la rapidité de développement, la scalabilité et la conformité européenne."
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="↗" iconBg="var(--cyan)" title="Flutter — application mobile">
                Une seule base de code pour <Strong>iOS et Android</Strong>. Performances natives,
                animations fluides et interface haut de gamme — idéal pour une app grand public
                riche en interactions. Réduit coûts et délais sans compromis sur la qualité.
              </FeatureCard>
              <FeatureCard icon="↗" iconBg="var(--navy)" title="NestJS (Node.js) — backend / API">
                Framework structuré et scalable pour une API claire et maintenable. Écosystème
                mature, montée en charge aisée, parfait pour gérer comptes, offres, matching,
                paiements et notifications.
              </FeatureCard>
              <FeatureCard icon="↗" iconBg="var(--cyan)" title="PostgreSQL — base de données">
                Base relationnelle robuste et fiable, taillée pour des données structurées et des
                requêtes complexes (recherche, filtres géo, scoring). Référence du secteur pour la
                solidité et l’intégrité des données.
              </FeatureCard>
              <FeatureCard icon="↗" iconBg="var(--navy)" title="OVHcloud — hébergement (France)">
                Serveurs <Strong>en France</Strong>, hébergeur européen souverain et conforme RGPD.
                Données hébergées dans l’UE — un atout de confiance pour un service destiné à des
                utilisateurs français, dès le lancement marseillais.
              </FeatureCard>
            </div>
            <DiamondHeading marginTop="30px">Services & intégrations</DiamondHeading>
            <div style={{ overflowX: "auto", margin: "16px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "13.6px",
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  minWidth: "520px",
                }}
              >
                <thead>
                  <tr>
                    <th style={TH}>Brique</th>
                    <th style={TH}>Solution</th>
                    <th style={TH}>Rôle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Abonnements mobiles</Strong>
                    </td>
                    <td style={TD_NB}>RevenueCat + StoreKit</td>
                    <td style={TD_NB}>
                      Abonnements & achats intégrés iOS/Android, essais, reçus (15 % la 1ʳᵉ année).
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Paiement web</Strong>
                    </td>
                    <td style={TD_NB_ALT}>Stripe</td>
                    <td style={TD_NB_ALT}>
                      Publications employeur depuis le web, sans commission de store.
                    </td>
                  </tr>
                  <tr>
                    <td style={TD_NB}>
                      <Strong>Notifications push</Strong>
                    </td>
                    <td style={TD_NB}>Firebase Cloud Messaging</td>
                    <td style={TD_NB}>Alertes offres, messages, missions.</td>
                  </tr>
                  <tr>
                    <td style={TD_NB_ALT}>
                      <Strong>Stockage média</Strong>
                    </td>
                    <td style={TD_NB_ALT}>Object Storage (OVHcloud)</td>
                    <td style={TD_NB_ALT}>Photos de profil, logos, pièces — hébergées en UE.</td>
                  </tr>
                  <tr>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      <Strong>Cartographie</Strong>
                    </td>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>Service de géolocalisation</td>
                    <td style={{ ...TD_NB, borderBottom: "none" }}>
                      Filtrage par zone & distance.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <DiamondHeading marginTop="30px">Vue d’architecture</DiamondHeading>
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                padding: "26px 22px",
                margin: "16px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={ARCH_COL_LABEL}>Clients</div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>App mobile</div>
                    <div style={ARCH_NODE_SUB}>Flutter · iOS + Android</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Interface web</div>
                    <div style={ARCH_NODE_SUB}>Employeur</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Back-office</div>
                    <div style={ARCH_NODE_SUB}>Administration</div>
                  </div>
                </div>
                <div style={ARCH_ARROW} aria-hidden="true">
                  →
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div style={ARCH_COL_LABEL}>Cœur applicatif</div>
                  <div
                    style={{
                      ...ARCH_NODE,
                      border: "1.5px solid var(--cyan)",
                      background: "linear-gradient(180deg,#fff,var(--tint-2))",
                    }}
                  >
                    <div style={ARCH_NODE_TITLE}>API NestJS</div>
                    <div style={ARCH_NODE_SUB}>Logique métier & sécurité</div>
                  </div>
                  <div
                    style={{
                      ...ARCH_NODE,
                      border: "1.5px solid var(--navy)",
                      background: "linear-gradient(180deg,#fff,#EEF2F8)",
                    }}
                  >
                    <div style={ARCH_NODE_TITLE}>PostgreSQL</div>
                    <div style={ARCH_NODE_SUB}>Données · OVHcloud (FR)</div>
                  </div>
                </div>
                <div style={ARCH_ARROW} aria-hidden="true">
                  →
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <div style={ARCH_COL_LABEL}>Services externes</div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>RevenueCat</div>
                    <div style={ARCH_NODE_SUB}>Abonnements mobiles</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>Stripe</div>
                    <div style={ARCH_NODE_SUB}>Paiement web</div>
                  </div>
                  <div style={ARCH_NODE}>
                    <div style={ARCH_NODE_TITLE}>FCM</div>
                    <div style={ARCH_NODE_SUB}>Notifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — SÉCURITÉ & CONFORMITÉ */}
        <section
          id="s8"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="08 — SÉCURITÉ & CONFORMITÉ"
              title="Sécurité, RGPD & exigences non-fonctionnelles"
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="⛩" iconBg="var(--navy)" title="Sécurité">
                Authentification par jeton (JWT), mots de passe chiffrés, communications en HTTPS,
                contrôle des accès par rôle, bonnes pratiques contre les vulnérabilités courantes.
              </FeatureCard>
              <FeatureCard icon="§" iconBg="var(--cyan)" title="RGPD & données">
                Hébergement en France (UE), consentement explicite, droit d’accès et d’effacement,
                minimisation des données, politique de confidentialité. Données personnelles
                traitées conformément au RGPD.
              </FeatureCard>
              <FeatureCard icon="⚡" iconBg="var(--navy)" title="Performance">
                Temps de réponse fluides, écrans qui se chargent rapidement, recherche et filtres
                réactifs même avec un volume croissant de profils et d’offres.
              </FeatureCard>
              <FeatureCard icon="↗" iconBg="var(--cyan)" title="Scalabilité">
                Architecture prête à absorber la croissance (montée du nombre d’utilisateurs,
                extension à d’autres villes) sans refonte structurelle.
              </FeatureCard>
              <FeatureCard icon="♺" iconBg="var(--navy)" title="Disponibilité">
                Service stable, sauvegardes régulières de la base de données, supervision de base de
                la production.
              </FeatureCard>
              <FeatureCard icon="⚐" iconBg="var(--cyan)" title="Évolutivité & langues">
                Code structuré et documenté pour faciliter la reprise et les évolutions.
                Architecture prête au multilingue ; <Strong>français</Strong> au lancement.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* 09 — LIVRABLES */}
        <section
          id="s9"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader num="09 — LIVRABLES" title="Livrables & publication" />
            <div
              style={{
                background: "linear-gradient(180deg,#fff,#EDF4FF)",
                border: "1px solid #D6E3F1",
                borderRadius: "14px",
                padding: "8px 24px",
                boxShadow: "var(--shadow)",
                margin: "14px 0",
              }}
            >
              {[
                {
                  n: "1",
                  t: "Application mobile iOS & Android",
                  d: "Développée en Flutter, publiée sur l’App Store et le Google Play Store.",
                },
                {
                  n: "2",
                  t: "Interface web employeur",
                  d: "Espace responsive de publication et de gestion des offres depuis l’ordinateur (paiement Stripe).",
                },
                {
                  n: "3",
                  t: "Landing page",
                  d: "Page de présentation responsive, optimisée pour l’acquisition.",
                },
                {
                  n: "4",
                  t: "Back-office d’administration",
                  d: "Interface web de pilotage : contenu, certifications, utilisateurs, modération, tableau de bord.",
                },
                {
                  n: "5",
                  t: "Code source & documentation technique",
                  d: "Transfert de propriété progressif au fil des paiements ; documentation permettant la reprise par tout développeur.",
                },
                {
                  n: "6",
                  t: "Accompagnement marketing — 90 jours",
                  d: "Formation complète + suivi hebdomadaire + acteur UGC fourni (voir section 11).",
                },
              ].map((d, i, arr) => (
                <div
                  key={d.n}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "var(--tint)",
                      color: "var(--cyan-ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {d.n}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-disp)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "var(--navy)",
                        marginBottom: "3px",
                      }}
                    >
                      {d.t}
                    </div>
                    <div
                      style={{
                        fontSize: "13.4px",
                        color: "var(--slate)",
                        lineHeight: 1.5,
                      }}
                    >
                      {d.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <InfoCallout title="Propriété intellectuelle">
              Le client est propriétaire à <Strong>100 %</Strong> de l’Application livrée. La
              propriété est transférée progressivement à mesure des paiements ; une documentation
              complète est remise à la livraison finale.
            </InfoCallout>
          </div>
        </section>

        {/* 10 — ÉVOLUTIONS */}
        <section
          id="s10"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="10 — ÉVOLUTIONS"
              title="Hors périmètre & évolutions (Phase 2)"
              lead="Pour garantir un lancement rapide et maîtrisé, les éléments suivants ne font pas partie de la version 1. Ils pourront être développés en évolutions, selon les priorités issues des premiers mois d’exploitation."
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Messagerie enrichie">
                Pièces jointes, partage de planning, modèles de messages, notifications avancées.
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Planning & agenda">
                Gestion des créneaux, calendrier des missions, rappels automatiques.
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Multi-villes & multi-secteurs">
                Extension au-delà de Marseille et au-delà de l’hôtellerie.
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Contractualisation de mission">
                Signature électronique, documents de mission, facturation côté établissement.
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Espace web candidat">
                Version web complète pour les professionnels (au-delà du mobile).
              </FeatureCard>
              <FeatureCard icon="+" iconBg="var(--navy)" title="Analytics avancés">
                Tableaux de bord poussés, exports, segmentation fine des utilisateurs.
              </FeatureCard>
            </div>
            <InfoCallout
              icon="!"
              iconBg="var(--amber)"
              title="Après les 90 jours"
              titleColor="#8A5A12"
              borderColor="#F3DFBC"
              background="var(--amber-bg)"
            >
              Maintenance mensuelle en option (support continu). Les nouvelles fonctionnalités
              post-livraison sont développées au tarif horaire convenu. Détails chiffrés dans le
              devis.
            </InfoCallout>
          </div>
        </section>

        {/* 11 — ACCOMPAGNEMENT */}
        <section
          id="s11"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="11 — ACCOMPAGNEMENT"
              title="Accompagnement marketing (90 jours)"
              lead="Progix ne livre pas qu’une application : un accompagnement de 90 jours est inclus pour assurer le lancement commercial et l’acquisition des premiers utilisateurs."
            />
            <div style={GRID_AUTO}>
              <FeatureCard icon="1" iconBg="var(--cyan)" title="Formation complète (3 h)">
                Méthode pour créer des vidéos publicitaires (UGC) qui convertissent, lancer et
                optimiser des campagnes <Strong>Meta Ads</Strong> et{" "}
                <Strong>Apple Search Ads</Strong>.
              </FeatureCard>
              <FeatureCard icon="2" iconBg="var(--navy)" title="Acteur UGC fourni">
                Progix fournit l’acteur pour les vidéos publicitaires et les scripts associés, basés
                sur son playbook interne.
              </FeatureCard>
              <FeatureCard icon="3" iconBg="var(--cyan)" title="Suivi hebdomadaire">
                Un point par semaine : revue des KPIs, validation des actions réalisées, consignes
                concrètes pour la semaine suivante.
              </FeatureCard>
              <FeatureCard icon="4" iconBg="var(--navy)" title="Objectifs de croissance">
                Définition des cibles d’acquisition et des leviers, ajustés chaque semaine selon les
                résultats.
              </FeatureCard>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(155deg,var(--navy-900),var(--navy) 60%,var(--navy-800))",
                color: "#DDE8F4",
                borderRadius: "22px",
                padding: "30px clamp(24px,4vw,34px)",
                margin: "22px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "18px",
                  bottom: "-22px",
                  fontSize: "120px",
                  color: "rgba(56,182,255,.10)",
                  fontFamily: "var(--font-disp)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ↗
              </span>
              <span
                style={{
                  fontFamily: "var(--font-disp)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "2px",
                    background: "var(--cyan)",
                    borderRadius: "2px",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                Objectifs de performance visés
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-disp)",
                  color: "#fff",
                  fontSize: "19px",
                  fontWeight: 600,
                  margin: "12px 0 4px",
                  position: "relative",
                  lineHeight: 1.3,
                }}
              >
                Un coût d’acquisition par client <em>payant</em>
              </h3>
              <p
                style={{
                  color: "#B9CCE2",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Engagement de moyens sur le coût d’acquisition, sous réserve que le client applique
                les recommandations, investisse le budget publicitaire convenu et participe aux
                points hebdomadaires.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,160px),1fr))",
                  gap: "22px",
                  marginTop: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    &lt; 0,35 €
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    par professionnel <b style={{ color: "#CFE0F0" }}>abonné payant</b>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    ≈ 10 €
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    par établissement réalisant une{" "}
                    <b style={{ color: "#CFE0F0" }}>publication payante</b>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-disp)",
                      fontWeight: 700,
                      fontSize: "26px",
                      color: "#fff",
                      letterSpacing: "-.02em",
                    }}
                  >
                    Hebdo
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9FB6CE",
                      marginTop: "3px",
                      lineHeight: 1.4,
                    }}
                  >
                    point de suivi & ajustement sur 90 jours
                  </div>
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "var(--muted)",
                fontStyle: "italic",
                margin: "8px 0 0",
                lineHeight: 1.5,
              }}
            >
              Le coût d’acquisition par client payant intègre déjà la conversion. Ces objectifs sont
              conditionnés à la pleine collaboration du client ; à défaut, l’engagement ne
              s’applique pas.
            </p>
          </div>
        </section>

        {/* 12 — DÉMARCHE */}
        <section
          id="s12"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-a)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="12 — DÉMARCHE"
              title="Démarche, planning & validation"
              lead="Réalisation itérative sur un délai de 50 jours à compter du démarrage (réception de l’acompte + réunion de cadrage), avec validation du client à chaque étape clé."
            />
            <div style={{ margin: "8px 0 0" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  {
                    n: "PHASE 1",
                    t: "Cadrage",
                    range: "≈ J1 – J5",
                    d: "Réunion de lancement, spécifications fines, validation du périmètre.",
                  },
                  {
                    n: "PHASE 2",
                    t: "Design UI/UX",
                    range: "≈ J5 – J15",
                    d: "Maquettes des écrans (jusqu’à 3 révisions incluses), validation visuelle.",
                  },
                  {
                    n: "PHASE 3",
                    t: "Développement",
                    range: "≈ J15 – J42",
                    d: "App, web, back-office, paiements, matching, certification — par incréments.",
                  },
                  {
                    n: "PHASE 4",
                    t: "Recette & publication",
                    range: "≈ J42 – J50",
                    d: "Tests qualité, corrections, mise en ligne et publication sur les stores.",
                  },
                ].map((p) => (
                  <div key={p.n} style={STEP_CARD}>
                    <div style={STEP_EYEBROW}>{p.n}</div>
                    <div style={{ ...STEP_TITLE, margin: "6px 0 2px" }}>{p.t}</div>
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>{p.range}</div>
                    <div style={{ ...STEP_DESC, marginTop: "8px" }}>{p.d}</div>
                  </div>
                ))}
              </div>
              <div style={STEP_RULE} aria-hidden="true" />
            </div>
            <div style={INFOBOX}>
              <div style={INFOBOX_ICON} aria-hidden="true">
                i
              </div>
              <div>
                <h4 style={INFOBOX_TITLE}>Calendrier détaillé des sprints</h4>
                <p style={INFOBOX_TEXT}>
                  Le découpage précis en sprints, jalons et livrables intermédiaires fait l’objet
                  d’un document dédié (
                  <span style={{ color: "var(--cyan-ink)", fontWeight: 600 }}>
                    « Calendrier des sprints »
                  </span>
                  ), aligné sur ce planning et sur l’échéancier de paiement du devis.
                </p>
              </div>
            </div>
            <DiamondHeading marginTop="30px">Validation</DiamondHeading>
            <ul style={{ listStyle: "none", margin: "10px 0", padding: 0 }}>
              {[
                <>
                  Chaque phase clé (<b style={STRONG_INK}>design, fonctionnalités, publication</b>)
                  est validée par le client avant de passer à la suivante.
                </>,
                <>
                  Les retards imputables au client (absence de validation, de contenu ou d’accès) ne
                  sont pas comptés dans le délai.
                </>,
                <>Un point d’avancement régulier assure la transparence tout au long du projet.</>,
              ].map((node, i) => (
                <li
                  key={i}
                  style={{
                    position: "relative",
                    padding: "5px 0 5px 22px",
                    fontSize: "14px",
                    color: "var(--slate)",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "5px",
                      color: "var(--cyan)",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                  {node}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13 — PRÉREQUIS */}
        <section
          id="s13"
          data-dc-section
          style={{ ...SECTION_DOTS, backgroundColor: "var(--band-b)" }}
        >
          <div style={CONTAINER}>
            <SectionHeader
              num="13 — PRÉREQUIS"
              title="Prérequis & engagements du client"
              lead="Pour tenir le délai et la qualité, certains éléments relèvent du client."
            />
            <InfoCallout
              icon="▸"
              iconBg="var(--amber)"
              title="Comptes & accès à fournir"
              titleColor="#8A5A12"
              borderColor="#F3DFBC"
              background="var(--amber-bg)"
            >
              Compte <Strong>Apple Developer</Strong> (99 $/an) et{" "}
              <Strong>Google Play Console</Strong> (25 $ une fois), compte <Strong>Stripe</Strong>{" "}
              (pour le web) — Progix accompagne la création et publie ensuite pour le client.
            </InfoCallout>
            <div style={GRID_AUTO}>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Contenus & informations">
                Fournir en temps utile les textes, visuels et compléments de banque de questions
                souhaités, ainsi que les validations à chaque étape.
              </FeatureCard>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Budget publicitaire">
                Prévoir le budget d’acquisition recommandé pour le lancement (réparti entre Meta
                Ads, Apple Search Ads et production UGC).
              </FeatureCard>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Participation">
                Participer aux points hebdomadaires et appliquer les recommandations marketing pour
                activer l’engagement de performance.
              </FeatureCard>
              <FeatureCard icon="▸" iconBg="var(--navy)" title="Réactivité">
                Répondre et valider dans des délais raisonnables pour ne pas décaler le planning.
              </FeatureCard>
            </div>
          </div>
        </section>

        <Footer
          heading="Prêts à construire votre plateforme"
          text="Ce cahier des charges fixe le périmètre de la version 1 et sert de base au devis contractuel associé. Toute évolution du périmètre fera l’objet d’un accord écrit entre les parties."
        />
      </main>
      <ScrollReveal />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section-03 user cards & Section-06 journey rows (local helpers).    */
/* ------------------------------------------------------------------ */

const TD: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  verticalAlign: "top",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_ALT: CSSProperties = { ...TD, background: "var(--paper)" };

const TD_NB: CSSProperties = {
  padding: "11px 15px",
  borderBottom: "1px solid var(--line)",
  color: "var(--slate)",
  lineHeight: 1.5,
};

const TD_NB_ALT: CSSProperties = { ...TD_NB, background: "var(--paper)" };

type UserRow = { b: string; t?: string; node?: ReactNode };

function UserCard({
  letter,
  letterBg,
  title,
  desc,
  rows,
  tags,
}: {
  letter: string;
  letterBg: string;
  title: string;
  desc: string;
  rows: UserRow[];
  tags: Tag[];
}) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg,#fff,#EDF4FF)",
        border: "1px solid #D6E3F1",
        borderRadius: "14px",
        margin: "16px 0",
        boxShadow: "var(--shadow)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
          padding: "20px 22px 14px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "11px",
            background: letterBg,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontWeight: 600,
            fontFamily: "var(--font-disp)",
            fontSize: "15px",
            boxShadow: "0 6px 14px rgba(12,35,64,.22)",
          }}
          aria-hidden="true"
        >
          {letter}
        </div>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontFamily: "var(--font-disp)",
              fontSize: "16px",
              color: "var(--navy)",
              fontWeight: 600,
              margin: "2px 0 3px",
            }}
          >
            {title}
          </h4>
          <div style={{ fontSize: "13.5px", color: "var(--slate)", lineHeight: 1.55 }}>{desc}</div>
        </div>
      </div>
      <div style={{ padding: "4px 22px 14px clamp(22px,4vw,76px)" }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              padding: "6px 0",
              fontSize: "13.6px",
              color: "var(--slate)",
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: "var(--cyan-ink)",
                flexShrink: 0,
                fontWeight: 700,
                fontSize: "12px",
                marginTop: "3px",
              }}
              aria-hidden="true"
            >
              ▸
            </span>
            <span>
              {r.node ? (
                r.node
              ) : (
                <>
                  <Strong>{r.b}</Strong>
                  {r.t}
                </>
              )}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "0 22px 18px clamp(22px,4vw,76px)",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {tags.map((t) => (
          <span key={t.label} style={{ ...TAG_BASE, background: t.bg, color: t.fg, border: t.bd }}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function JourneyHeading({
  letter,
  children,
  marginTop = "14px",
}: {
  letter: string;
  children: ReactNode;
  marginTop?: string;
}) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-disp)",
        fontSize: "18px",
        color: "var(--navy)",
        fontWeight: 600,
        margin: `${marginTop} 0 12px`,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ color: "var(--cyan)", fontSize: "13px", fontWeight: 700 }} aria-hidden="true">
        {letter}
      </span>
      {children}
    </h3>
  );
}

function JourneyRow({ steps }: { steps: ReadonlyArray<{ n: string; t: string; d: string }> }) {
  return (
    <div style={{ margin: "0 0 8px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {steps.map((s) => (
          <div key={s.n} style={STEP_CARD}>
            <div style={STEP_EYEBROW}>{s.n}</div>
            <div style={STEP_TITLE}>{s.t}</div>
            <div style={STEP_DESC}>{s.d}</div>
          </div>
        ))}
      </div>
      <div style={STEP_RULE} aria-hidden="true" />
    </div>
  );
}
