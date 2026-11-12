"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPinned } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";
import { getDirectionsUrl } from "@/lib/utils";

export default function Hero() {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  const directionsUrl = getDirectionsUrl(
    `${siteConfig.name} ${siteConfig.branch} Baniyas Metro Station Deira Dubai`
  );

  const words = t("hero.headline").split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-navy"
      aria-label="Hero"
    >
      <motion.div className="absolute inset-0" style={{ y, scale, opacity }}>
        <Image
          src={siteConfig.images.hero}
          alt="Dubai city skyline representing Delta Center Baniyas Square Branch location"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(214,173,96,0.18),transparent_45%)]" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute start-[8%] top-[28%] h-24 w-24 rounded-3xl border border-gold/30 bg-white/5 backdrop-blur-sm"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute end-[12%] top-[38%] h-16 w-16 rounded-full border border-white/20"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[22%] start-[18%] h-3 w-3 rounded-full bg-gold/70"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
        transition={{ duration: 3.2, repeat: Infinity }}
      />

      <div className="container-premium section-pad relative flex min-h-[100svh] items-center pb-24 pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase backdrop-blur-md"
          >
            <MapPinned className="h-3.5 w-3.5" />
            {t("hero.badge")}
          </motion.div>

          <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="me-2 inline-block sm:me-3"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.22 + i * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {t("hero.subtext")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition hover:bg-gold-light"
            >
              {t("hero.ctaContact")}
              <ArrowRight
                className={`h-4 w-4 transition group-hover:translate-x-1 ${locale === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`}
              />
            </MagneticButton>
            <MagneticButton
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              {t("hero.ctaDirections")}
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
