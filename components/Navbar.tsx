"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MagneticButton from "@/components/MagneticButton";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-navy/10 bg-navy/95 shadow-premium backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-premium section-pad">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-navy-light shadow-gold transition group-hover:scale-105">
              <span className="font-display text-lg font-bold text-gold">DC</span>
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
                {siteConfig.name}
              </p>
              <p className="truncate text-[11px] font-medium tracking-[0.14em] text-gold uppercase">
                {t("nav.branchLabel")}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-3 py-2 text-sm font-medium transition-colors",
                    active ? "text-gold" : "text-white/80 hover:text-white"
                  )}
                >
                  {t(item.labelKey)}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <MagneticButton
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4 text-gold" />
              {t("nav.callNow")}
            </MagneticButton>
            <MagneticButton
              href="/contact"
              className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition hover:bg-gold-light"
            >
              {t("nav.contactUs")}
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher compact />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-navy lg:hidden"
          >
            <div className="container-premium section-pad space-y-2 py-5">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/5 hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                </motion.div>
              ))}
              <div className="grid gap-3 pt-3">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {t("nav.callNow")}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
                  onClick={() => setOpen(false)}
                >
                  {t("nav.contactUs")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
