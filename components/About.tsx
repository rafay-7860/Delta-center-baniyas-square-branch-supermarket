"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";
import { siteConfig } from "@/lib/config";
import { useLanguage, type TranslationKey } from "@/lib/i18n";

const points: TranslationKey[] = [
  "about.point1",
  "about.point2",
  "about.point3",
  "about.point4",
  "about.point5",
];

export default function About() {
  const { t } = useLanguage();
  const imageWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !imageWrap.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrap.current,
        { clipPath: "inset(12% 12% 12% 12% round 28px)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0% round 28px)",
          scale: 1,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: imageWrap.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-premium section-pad grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div ref={imageWrap} className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={siteConfig.images.about}
            alt="Modern financial district architecture reflecting Delta Center professional environment"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          <div className="absolute bottom-5 start-5 end-5 rounded-2xl glass-light p-4 shadow-premium">
            <p className="text-xs font-semibold tracking-[0.16em] text-royal uppercase">
              {siteConfig.branch}
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-navy">
              {siteConfig.location.short}
            </p>
          </div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-semibold tracking-[0.22em] text-royal uppercase"
          >
            {t("about.subtitle")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl"
          >
            {t("about.title")}
          </motion.h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/75">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t("about.p1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {t("about.p2")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t("about.p3")}
            </motion.p>
          </div>

          <ul className="mt-8 space-y-3">
            {points.map((key, i) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="flex items-start gap-3 text-sm font-medium text-navy"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{t(key)}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-9">
            <MagneticButton
              href="/contact"
              className="inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-royal"
            >
              {t("about.cta")}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
