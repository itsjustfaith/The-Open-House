"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { copy } from "@/lib/content";

export function SiteFooter() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="wordmark footer-wordmark"><span className="wordmark-icon"><span /></span><span>The Open<span className="wordmark-light">House</span><small>KUWAIT · REAL ESTATE</small></span></Link>
          <p>{t.footer.line}</p>
        </div>
        <div className="footer-links">
          <Link href="/showings">{t.nav.showings}<ArrowUpRight size={14} /></Link>
          <Link href="/property-management">{t.nav.management}<ArrowUpRight size={14} /></Link>
          <Link href="/contact">{t.nav.contact}<ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} The OpenHouse. {t.footer.rights}</span><span>{t.footer.location}</span></div>
    </footer>
  );
}
