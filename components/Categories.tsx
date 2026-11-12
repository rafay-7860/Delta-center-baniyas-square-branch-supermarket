"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section id="categories" className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-20 end-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="container-premium section-pad relative">
        <SectionHeading
          eyebrow={t("nav.products")}
          title={t("categories.title")}
          subtitle={t("categories.subtitle")}
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {siteConfig.categories.map((category, i) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-glass transition hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-premium"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {t(category.titleKey)}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-charcoal/70">
                  {t(category.descKey)}
                </p>
                <Link
                  href="/products"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal transition group-hover:text-navy"
                  data-cursor="hover"
                >
                  {t("categories.cta")}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
