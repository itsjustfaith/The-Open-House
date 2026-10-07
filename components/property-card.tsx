"use client";

import { ArrowUpRight, BedDouble, Bath, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { copy, type Listing } from "@/lib/content";

export function PropertyCard({ listing, index = 0, onRequest }: { listing: Listing; index?: number; onRequest?: (id: string) => void }) {
  const { locale } = useLocale();
  const t = copy[locale].common;
  return (
    <Reveal className="property-card" delay={index * 0.08}>
      <div className="property-image" style={{ backgroundImage: `url('${listing.image}')` }} role="img" aria-label={locale === "en" ? `Example property in ${listing.area}` : `عقار تجريبي في ${listing.areaAr}`}>
        <span className="sample-badge">{locale === "ar" ? listing.tagAr : listing.tag}</span>
        <span className="property-index">{listing.id}</span>
      </div>
      <div className="property-details">
        <div className="property-meta"><span>{locale === "ar" ? listing.areaAr : listing.area}</span><span>·</span><span>{locale === "ar" ? "الكويت" : "Kuwait"}</span></div>
        <h3>{locale === "ar" ? listing.titleAr : listing.title}</h3>
        <div className="property-specs"><span><BedDouble size={15} />{listing.beds} {t.bedrooms}</span><span><Bath size={15} />{listing.baths} {t.bathrooms}</span><span><Ruler size={15} />{listing.size} {t.sqm}</span></div>
        {onRequest && <div className="property-bottom"><Button variant="outline" size="sm" onClick={() => onRequest(listing.id)}>{t.request}<ArrowUpRight size={14} /></Button></div>}
      </div>
    </Reveal>
  );
}
