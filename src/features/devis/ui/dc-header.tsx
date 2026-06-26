/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "./content";
import styles from "./devis.module.css";

/**
 * Sticky brand header; gains a shadow once the page is scrolled. `active` is the
 * navLinks key of the current document so its nav item is highlighted.
 */
export function DcHeader({ active = "devis" }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On narrow screens the nav scrolls horizontally — center the current page so
  // the active item is never hidden off the right edge.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || nav.scrollWidth <= nav.clientWidth) return;
    nav.querySelector<HTMLElement>('[aria-current="page"]')?.scrollIntoView({
      inline: "center",
      block: "nearest",
    });
  }, []);

  return (
    <header className={cn(styles.header, scrolled && styles.headerScrolled)}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="Progix — Accueil">
          <img className={styles.brandLogo} src="/progix-logo.png" alt="Progix" />
        </Link>
        <nav ref={navRef} aria-label="Navigation principale" className={styles.nav}>
          {navLinks.map((lnk) => {
            const isActive = lnk.key === active;
            return (
              <Link
                key={lnk.key}
                href={lnk.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(styles.navLink, isActive && styles.navLinkActive)}
              >
                <span className={styles.navFull}>{lnk.label}</span>
                <span className={styles.navShort}>{lnk.short}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
