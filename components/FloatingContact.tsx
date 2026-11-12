"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export default function FloatingContact() {
  const { t } = useLanguage();

  return (
    <motion.a
      href={siteConfig.phoneHref}
      className="fixed bottom-5 end-5 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-navy shadow-gold animate-pulse-gold sm:bottom-8 sm:end-8"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.45 }}
      aria-label={`${t("floating.call")} ${siteConfig.phone}`}
      data-cursor="hover"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold">
        <Phone className="h-4 w-4" />
      </span>
      <span className="pe-1">{t("floating.call")}</span>
    </motion.a>
  );
}
