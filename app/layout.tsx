import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: { default: "The OpenHouse | Kuwait Real Estate", template: "%s | The OpenHouse" },
  description: "Thoughtful showings and considered property management in Kuwait.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><SiteShell>{children}</SiteShell></body></html>;
}
