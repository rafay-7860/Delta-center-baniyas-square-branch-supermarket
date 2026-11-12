"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { siteConfig } from "@/lib/config";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const { t, locale } = useLanguage();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const duration = prefersReduced ? 400 : 1600;
    const timer = window.setTimeout(() => setVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
          aria-live="polite"
          aria-busy="true"
        >
          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            <motion.div
              className="absolute -inset-24 rounded-full bg-royal/20 blur-3xl"
              animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold/40 bg-navy-light shadow-gold">
                <span className="font-display text-3xl font-bold tracking-tight text-gold">
                  DC
                </span>
              </div>
              <motion.div
                className="absolute -inset-2 rounded-[1.15rem] border border-gold/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="relative space-y-2"
            >
              <p className="font-display text-2xl font-semibold tracking-wide text-white sm:text-3xl">
                {locale === "ar" ? "دلتا سنتر" : siteConfig.name}
              </p>
              <p className="text-sm font-medium tracking-[0.2em] text-gold uppercase">
                {t("nav.branchLabel")}
              </p>
            </motion.div>

            <div className="relative mt-2 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-royal via-gold to-royal"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              className="text-xs tracking-[0.25em] text-white/55 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {t("loader.loading")}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
