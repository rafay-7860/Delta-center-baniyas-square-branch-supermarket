"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Store } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

const cards = [
  {
    icon: Building2,
    titleKey: "branch.name" as const,
    value: siteConfig.name,
  },
  {
    icon: Store,
    titleKey: "branch.branch" as const,
    valueKey: "branch.branch" as const,
  },
  {
    icon: MapPin,
    titleKey: "branch.area" as const,
    value: siteConfig.location.area,
  },
  {
    icon: Phone,
    titleKey: "branch.phone" as const,
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
];

export default function BranchInfo() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-20 lg:py-28" id="branch-info">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow={siteConfig.branch}
          title={t("branch.title")}
          subtitle={t("branch.subtitle")}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const value =
              "valueKey" in card && card.valueKey
                ? t(card.valueKey)
                : card.value;
            const content = (
              <>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-royal transition group-hover:bg-navy group-hover:text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-royal uppercase">
                  {t(card.titleKey)}
                </p>
                <p className="font-display text-lg font-semibold text-navy">
                  {value}
                </p>
              </>
            );

            return (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                {"href" in card && card.href ? (
                  <a
                    href={card.href}
                    className="group block h-full rounded-3xl border border-navy/8 bg-mist/60 p-6 shadow-glass transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-premium"
                    data-cursor="hover"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="group h-full rounded-3xl border border-navy/8 bg-mist/60 p-6 shadow-glass transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-premium">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-6 rounded-3xl border border-gold/25 bg-gradient-to-r from-navy to-royal p-6 text-white sm:p-8"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            {t("branch.location")}
          </p>
          <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">
            {t("branch.locationValue")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
