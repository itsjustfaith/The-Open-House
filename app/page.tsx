"use client";

import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { copy, listings } from "@/lib/content";

export default function HomePage() {
  const { locale } = useLocale();
  const t = copy[locale];
  return <main>
    <section className="home-hero page-gutter">
      <div className="hero-content">
        <h1>{t.home.title}</h1>
        <p className="hero-description">{t.home.body}</p>
        <div className="hero-actions"><Button asChild><Link href="/showings">{t.home.renter}<MoveUpRight size={16} /></Link></Button><Button variant="outline" asChild><Link href="/property-management">{t.home.owner}</Link></Button></div>
        <div className="hero-note"><span className="note-rule" />{t.home.note}</div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo" role="img" aria-label={locale === "en" ? "Sunlit modern home with a garden view" : "منزل عصري مضاء بالشمس وإطلالة على الحديقة"} />
        <div className="hero-photo-caption"><span>29° 20&#39; N · 48° 00&#39; E</span><span>{locale === "en" ? "Kuwait, a place to call home" : "الكويت، مكان تنتمي إليه"}</span></div>
      </div>
      <div className="hero-scroll"><span>01 / 02</span><span className="scroll-line" /><span>{locale === "en" ? "A little more at home" : "أقرب إلى منزلك"}</span></div>
    </section>

    <section className="intro-band page-gutter">
      <Reveal><span className="eyebrow">THE OPENHOUSE · KUWAIT</span><p>{locale === "en" ? <>Home is more than an address.<br /><em>It’s where life starts to feel like yours.</em></> : <>المنزل أكثر من مجرد عنوان.<br /><em>إنه المكان الذي تبدأ فيه الحياة لتشبهك.</em></>}</p></Reveal>
      <div className="intro-side"><span className="intro-number">01—02</span><p>{locale === "en" ? "A thoughtful experience, whether you’re finding a place or caring for one." : "تجربة مدروسة، سواء كنت تبحث عن مكان أو تعتني بعقار."}</p></div>
    </section>

    <section className="services-section page-gutter">
      <div className="section-heading"><div><span className="eyebrow">{locale === "en" ? "A good place to begin" : "بداية موفقة"}</span><h2>{locale === "en" ? <>A little help finding<br />your <em>place.</em></> : <>مساعدة بسيطة لتجد<br /><em>مكانك.</em></>}</h2></div><p>{locale === "en" ? "Two thoughtful ways we can help make home feel closer." : "طريقتان مدروستان لمساعدتك على الاقتراب من منزلك."}</p></div>
      <div className="service-grid">
        <Reveal className="service-card service-showings"><div className="service-photo service-photo-one" role="img" aria-label={locale === "en" ? "Welcoming contemporary living room" : "غرفة معيشة عصرية مريحة"} /><div className="service-card-content"><span className="service-index">01 / SHOWINGS</span><h3>{t.home.showTitle}</h3><p>{t.home.showBody}</p><Link className="text-link" href="/showings">{t.common.meet}<ArrowUpRight size={15} /></Link></div></Reveal>
        <Reveal className="service-card service-management" delay={0.1}><div className="service-card-content"><span className="service-index">02 / PROPERTY CARE</span><h3>{t.home.manageTitle}</h3><p>{t.home.manageBody}</p><Link className="text-link" href="/property-management">{t.common.learn}<ArrowUpRight size={15} /></Link></div><div className="service-photo service-photo-two" role="img" aria-label={locale === "en" ? "Warm architectural detail at home" : "تفاصيل معمارية دافئة في المنزل"} /></Reveal>
      </div>
    </section>

    <section className="featured-section page-gutter">
      <div className="section-heading featured-heading"><div><span className="eyebrow">{locale === "en" ? "A first look" : "نظرة أولى"}</span><h2>{locale === "en" ? <>Places to <em>picture</em> yourself.</> : <>أماكن يمكنك أن <em>تتخيلها.</em></>}</h2></div><Button variant="outline" asChild><Link href="/showings">{locale === "en" ? "Explore showings" : "استكشف المعاينات"}<ArrowUpRight size={15} /></Link></Button></div>
      <p className="listing-disclaimer">{t.showings.disclaimer}</p>
      <div className="property-grid">{listings.slice(0, 2).map((listing, index) => <PropertyCard key={listing.id} listing={listing} index={index} />)}</div>
    </section>

    <section className="closing-cta page-gutter"><Reveal className="closing-cta-inner"><div><span className="eyebrow">{locale === "en" ? "A good first step" : "خطوة أولى موفقة"}</span><h2>{t.home.cta}</h2><p>{t.home.ctaBody}</p></div><Button asChild variant="light"><Link href="/contact">{t.nav.contact}<ArrowUpRight size={15} /></Link></Button><span className="cta-orbit cta-orbit-one" /><span className="cta-orbit cta-orbit-two" /></Reveal></section>
  </main>;
}
