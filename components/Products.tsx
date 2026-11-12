"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

type Props = {
  limit?: number;
};

export default function Products({ limit }: Props) {
  const { t } = useLanguage();
  const items = limit ? siteConfig.products.slice(0, limit) : siteConfig.products;

  return (
    <section id="products" className="relative bg-white py-20 lg:py-28">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow={t("products.askStore")}
          title={t("products.title")}
          subtitle={t("products.subtitle")}
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-navy/8 bg-mist/50 shadow-glass transition hover:-translate-y-1.5 hover:border-gold/35 hover:bg-white hover:shadow-premium"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute start-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold backdrop-blur-sm">
                  {t(product.categoryKey)}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-navy">
                  {t(product.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {t(product.descKey)}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-wide text-royal uppercase">
                    {t("products.askStore")}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-2 text-xs font-semibold text-white transition hover:bg-royal"
                    data-cursor="hover"
                  >
                    <ShoppingBag className="h-3.5 w-3.5 text-gold" />
                    {t("products.cta")}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-charcoal/60"
        >
          {t("products.disclaimer")}
        </motion.p>
      </div>
    </section>
  );
}
