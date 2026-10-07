"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { copy } from "@/lib/content";

const routes = [
  { key: "home", href: "/" },
  { key: "showings", href: "/showings" },
  { key: "management", href: "/property-management" },
  { key: "contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const { locale, toggle } = useLocale();
  const t = copy[locale].nav;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="wordmark" aria-label="The OpenHouse home" onClick={() => setOpen(false)}>
          <span className="wordmark-icon"><span /></span>
          <span>The Open<span className="wordmark-light">House</span><small>KUWAIT · REAL ESTATE</small></span>
        </Link>
        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`} aria-label="Main navigation">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} aria-current={pathname === route.href ? "page" : undefined} onClick={() => setOpen(false)}>
              {t[route.key]}
            </Link>
          ))}
          <Button variant="ghost" size="sm" onClick={toggle} aria-label={locale === "en" ? "Switch language to Arabic" : "Switch language to English"} className="language-button">{t.language}</Button>
          <Button asChild size="sm" className="nav-cta"><Link href="/showings">{locale === "en" ? "Find a home" : "ابحث عن منزل"}<ArrowUpRight size={15} /></Link></Button>
        </nav>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? t.close : t.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
    </header>
  );
}
