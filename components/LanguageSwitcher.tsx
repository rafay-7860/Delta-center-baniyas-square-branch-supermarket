"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  compact?: boolean;
};

export default function LanguageSwitcher({ className, compact = false }: Props) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-md",
        className
      )}
      role="group"
      aria-label={t("lang.switch")}
    >
      {!compact && (
        <Languages className="ms-2 h-3.5 w-3.5 text-gold" aria-hidden />
      )}
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "relative rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors",
          locale === "en" ? "text-navy" : "text-white/80 hover:text-white"
        )}
        aria-pressed={locale === "en"}
      >
        {locale === "en" && (
          <motion.span
            layoutId={compact ? "lang-pill-compact" : "lang-pill"}
            className="absolute inset-0 rounded-full bg-gold"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">{t("lang.en")}</span>
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        className={cn(
          "relative rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors",
          locale === "ar" ? "text-navy" : "text-white/80 hover:text-white"
        )}
        aria-pressed={locale === "ar"}
      >
        {locale === "ar" && (
          <motion.span
            layoutId={compact ? "lang-pill-compact" : "lang-pill"}
            className="absolute inset-0 rounded-full bg-gold"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">{t("lang.ar")}</span>
      </button>
    </div>
  );
}
