"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-fade text-white">
      <div className="pointer-events-none absolute -top-24 end-0 h-64 w-64 rounded-full bg-royal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 start-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-premium section-pad relative grid gap-12 py-16 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-5 lg:col-span-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-navy-light">
              <span className="font-display text-xl font-bold text-gold">DC</span>
            </div>
            <div>
              <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
              <p className="text-xs tracking-[0.16em] text-gold uppercase">
                {t("footer.branch")}
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            {t("footer.tagline")}
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-light"
          >
            {t("nav.contactUs")}
          </Link>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-gold"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 lg:col-span-4">
          <h3 className="mb-4 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            {t("footer.contact")}
          </h3>
          <a
            href={siteConfig.phoneHref}
            className="flex items-start gap-3 text-sm text-white/80 transition hover:text-gold"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{siteConfig.phone}</span>
          </a>
          <p className="flex items-start gap-3 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{siteConfig.location.full}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-premium section-pad flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.fullName}. {t("footer.rights")}
          </p>
          <p>{siteConfig.location.area}</p>
        </div>
      </div>
    </footer>
  );
}
