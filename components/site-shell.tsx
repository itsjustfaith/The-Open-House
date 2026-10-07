import { LocaleProvider } from "@/components/locale-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <LocaleProvider><SiteHeader />{children}<SiteFooter /></LocaleProvider>;
}
