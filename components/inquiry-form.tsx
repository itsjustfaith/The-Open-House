"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/content";

export function InquiryForm({ kind }: { kind: "showing" | "owner" }) {
  const { locale } = useLocale();
  const t = copy[locale];
  const [sent, setSent] = useState(false);
  const title = kind === "showing" ? t.showings.formTitle : t.management.formTitle;
  const description = kind === "showing" ? t.showings.formBody : t.management.formBody;

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // This demo deliberately does not transmit or persist form data.
    setSent(true);
  }

  return (
    <section id="request-form" className="inquiry-panel" aria-labelledby="form-title">
      <div className="inquiry-copy"><span className="eyebrow">{locale === "en" ? "A simple first step" : "خطوة أولى سهلة"}</span><h2 id="form-title">{title}</h2><p>{description}</p><p className="demo-note">{t.common.demo}</p></div>
      {sent ? <div className="success-state" role="status"><span className="success-icon"><Check size={20} /></span><h3>{t.common.success}</h3></div> : (
        <form className="inquiry-form" onSubmit={submit}>
          <div className="form-row"><label>{t.common.name}<input name="name" autoComplete="name" required /></label><label>{t.common.email}<input name="email" type="email" autoComplete="email" required /></label></div>
          <label>{t.common.phone}<input name="phone" type="tel" autoComplete="tel" /></label>
          {kind === "showing" && <label>{t.showings.timing}<input name="timing" /></label>}
          <label>{t.common.message}<textarea name="message" rows={3} /></label>
          <Button type="submit" className="form-submit">{t.common.send}<Send size={15} /></Button>
        </form>
      )}
    </section>
  );
}
