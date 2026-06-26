/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "./content";
import styles from "./devis.module.css";

/**
 * Sticky brand header; gains a shadow once the page is scrolled. `active` is the
 * navLinks key of the current document so its nav item is highlighted.
 */
export function DcHeader({ active = "devis" }: { active?: string }) {
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
            const isActive = lnk.key === active;
            return (
              <Link
                key={lnk.key}
                href={lnk.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(styles.navLink, isActive && styles.navLinkActive)}
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
