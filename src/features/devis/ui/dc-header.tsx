/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "./content";
import styles from "./devis.module.css";

/** Sticky brand header; gains a shadow once the page is scrolled. */
export function DcHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(styles.header, scrolled && styles.headerScrolled)}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="Progix — Accueil">
          <img className={styles.brandLogo} src="/progix-logo.png" alt="Progix" />
        </Link>
        <nav aria-label="Navigation principale" className={styles.nav}>
          {navLinks.map((lnk) => {
            const active = lnk.key === "devis";
            return (
              <Link
                key={lnk.key}
                href={lnk.href}
                aria-current={active ? "page" : undefined}
                className={cn(styles.navLink, active && styles.navLinkActive)}
              >
                {lnk.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
