"use client";

import Link from "next/link";
import { ArrowUpRight, KeyRound, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { copy } from "@/lib/content";

export default function ContactPage() {
  const { locale } = useLocale();
  const t = copy[locale];
  return <main className="contact-page">
    <section className="contact-hero page-gutter"><div><span className="eyebrow"><span className="eyebrow-dot" />{t.contact.eyebrow}</span><h1>{t.contact.title}</h1><p>{t.contact.body}</p></div><span className="contact-mark">OH<span>·</span></span></section>
    <section className="contact-options page-gutter">
      <Reveal><Card className="contact-card"><CardContent><span className="contact-card-icon"><Home size={20} /></span><span className="eyebrow">01 / SHOWINGS</span><h2>{t.contact.showTitle}</h2><p>{t.contact.showBody}</p><Link href="/showings" className="text-link">{t.common.meet}<ArrowUpRight size={15} /></Link></CardContent></Card></Reveal>
      <Reveal delay={0.1}><Card className="contact-card"><CardContent><span className="contact-card-icon"><KeyRound size={20} /></span><span className="eyebrow">02 / PROPERTY CARE</span><h2>{t.contact.ownerTitle}</h2><p>{t.contact.ownerBody}</p><Link href="/property-management" className="text-link">{t.common.learn}<ArrowUpRight size={15} /></Link></CardContent></Card></Reveal>
    </section>
    <section className="contact-note page-gutter"><span className="eyebrow">THE OPENHOUSE · KUWAIT</span><p>{locale === "en" ? "A good conversation starts with a simple hello." : "كل حوار جميل يبدأ بتحية بسيطة."}</p><span>{locale === "en" ? "Use one of the paths above to get started." : "اختر إحدى الخطوتين أعلاه للبدء."}</span></section>
  </main>;
}
