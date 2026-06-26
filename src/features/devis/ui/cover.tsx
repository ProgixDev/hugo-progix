/* eslint-disable @next/next/no-img-element */
import { cover } from "./content";
import styles from "./devis.module.css";

/** Hero cover: brand gradient, headline, key figures, project metadata. */
export function Cover() {
  return (
    <section className={styles.cover}>
      <div className={styles.coverDots} aria-hidden="true" />
      <img className={styles.coverWatermark} src="/progix-logo.png" alt="" aria-hidden="true" />
      <div className={styles.coverInner}>
        <span className={styles.coverChip}>
          <img src="/progix-logo.png" alt="Progix" />
        </span>
        <div className={styles.coverEyebrow}>
          <span className={styles.coverEyebrowBar} aria-hidden="true" />
          {cover.tag}
        </div>
        <h1 className={styles.coverTitle}>
          {cover.title} <span className={styles.coverTitleAccent}>{cover.titleLight}</span>
        </h1>
        <p className={styles.coverSubtitle}>{cover.subtitle}</p>
        <div className={styles.coverBadges}>
          {cover.badges.map((b) => (
            <div key={b.l} className={styles.coverBadge}>
              <span className={styles.coverBadgeBar} aria-hidden="true" />
              <div className={styles.coverBadgeLabel}>{b.l}</div>
              <div className={styles.coverBadgeValue}>
                {b.v}
                <small>{b.u}</small>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.coverDivider} aria-hidden="true" />
        <div className={styles.coverMeta}>
          {cover.meta.map((m) => (
            <div key={m.l}>
              <div className={styles.coverMetaLabel}>{m.l}</div>
              <div className={styles.coverMetaValue}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.coverFootbar}>
        <div className={styles.coverFootbarInner}>
          <span>
            Une firme de développement logiciel{" "}
            <span className={styles.coverFootAccent}>fièrement montréalaise</span>
          </span>
          <span>contact@progix.pro · progix.pro</span>
        </div>
      </div>
    </section>
  );
}
