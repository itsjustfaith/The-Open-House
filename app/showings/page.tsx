"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PropertyCard } from "@/components/property-card";
import { InquiryForm } from "@/components/inquiry-form";
import { useLocale } from "@/components/locale-provider";
import { copy, listings } from "@/lib/content";

export default function ShowingsPage() {
  const { locale } = useLocale();
  const t = copy[locale];
  function request() {
    document.getElementById("request-form")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }
  return <main>
    <section className="inner-hero page-gutter showings-hero"><div className="inner-hero-copy"><span className="eyebrow"><span className="eyebrow-dot" />{t.showings.eyebrow}</span><h1>{t.showings.title}</h1><p>{t.showings.body}</p><a href="#homes" className="scroll-cue">{locale === "en" ? "Explore the homes" : "استكشف العقارات"}<ArrowDown size={15} /></a></div><div className="inner-hero-image showings-image" role="img" aria-label={locale === "en" ? "Contemporary Kuwaiti residence" : "منزل كويتي معاصر"}><span className="image-label">THE OPENHOUSE / 01</span></div></section>
    <section id="homes" className="showings-list page-gutter"><div className="listings-heading"><div><span className="eyebrow">{t.showings.badge}</span><h2>{locale === "en" ? "A few places to begin." : "أماكن لتبدأ منها."}</h2></div><p>{t.showings.disclaimer}</p></div><div className="property-grid property-grid-three">{listings.map((listing, index) => <PropertyCard key={listing.id} listing={listing} index={index} onRequest={() => request()} />)}</div></section>
    <div className="form-section page-gutter"><InquiryForm kind="showing" /></div>
    <section className="afterword page-gutter"><span>OPENHOUSE / SHOWINGS</span><p>{locale === "en" ? "Take your time. Find the one that feels like home." : "خذ وقتك. اعثر على المكان الذي يشبه المنزل."}</p><ArrowUpRight size={20} /></section>
  </main>;
}
