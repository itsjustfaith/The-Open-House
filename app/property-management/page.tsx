"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { copy } from "@/lib/content";

export default function ManagementPage() {
  const { locale } = useLocale();
  const t = copy[locale];
  return <main>
    <section className="inner-hero page-gutter management-hero"><div className="inner-hero-copy"><span className="eyebrow"><span className="eyebrow-dot" />{t.management.eyebrow}</span><h1>{t.management.title}</h1><p>{t.management.body}</p><Button asChild><a href="#owner-inquiry">{t.common.ownerCta}<ArrowUpRight size={15} /></a></Button></div><div className="inner-hero-image management-image" role="img" aria-label={locale === "en" ? "Soft light across a thoughtfully cared-for home" : "ضوء ناعم في منزل يلقى عناية"}><span className="image-label">THE OPENHOUSE / 02</span></div></section>
    <section className="management-story page-gutter"><Reveal className="story-image"><span className="sr-only">{locale === "en" ? "An airy contemporary interior" : "مساحة داخلية عصرية مضاءة"}</span></Reveal><Reveal className="story-copy" delay={0.1}><span className="eyebrow">{locale === "en" ? "Our approach" : "نهجنا"}</span><h2>{t.management.approach}</h2><p>{t.management.detail}</p><div className="approach-list">{t.management.steps.map((step, index) => <div key={step}><span className="approach-num">0{index + 1}</span><span>{step}</span><Check size={16} /></div>)}</div></Reveal></section>
    <section className="owner-quote page-gutter"><span className="eyebrow">PROPERTY CARE · KUWAIT</span><p>{locale === "en" ? <>“The little things<br />make a place <em>feel looked after.</em>”</> : <>«التفاصيل الصغيرة تجعل العقار <em>يحظى بالعناية.</em>»</>}</p><span className="owner-note">{locale === "en" ? "A considered approach to property management" : "نهج مدروس لإدارة العقارات"}</span></section>
    <div id="owner-inquiry" className="form-section page-gutter"><InquiryForm kind="owner" /></div>
  </main>;
}
