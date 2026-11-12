"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Banknote,
  CircleHelp,
  CreditCard,
  Globe2,
  Headphones,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage, type TranslationKey } from "@/lib/i18n";

const services: {
  icon: typeof Banknote;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  {
    icon: Banknote,
    titleKey: "services.moneyExchange.title",
    descKey: "services.moneyExchange.desc",
  },
  {
    icon: Globe2,
    titleKey: "services.transfers.title",
    descKey: "services.transfers.desc",
  },
  {
    icon: Wallet,
    titleKey: "services.currency.title",
    descKey: "services.currency.desc",
  },
  {
    icon: CircleHelp,
    titleKey: "services.assistance.title",
    descKey: "services.assistance.desc",
  },
  {
    icon: CreditCard,
    titleKey: "services.payment.title",
    descKey: "services.payment.desc",
  },
  {
    icon: Headphones,
    titleKey: "services.support.title",
    descKey: "services.support.desc",
  },
];

type Props = {
  compact?: boolean;
};

export default function Services({ compact = false }: Props) {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className={`relative overflow-hidden bg-mist ${compact ? "py-16" : "py-20 lg:py-28"}`}
    >
      <div className="pointer-events-none absolute -top-20 end-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="container-premium section-pad relative">
        <SectionHeading
          eyebrow={t("nav.services")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-3xl border border-navy/8 bg-white p-7 shadow-glass transition hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-premium"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-royal to-gold transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold transition group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {t(service.descKey)}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal transition group-hover:text-navy"
                  data-cursor="hover"
                >
                  {t("services.learnMore")}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-charcoal/60"
        >
          {t("services.disclaimer")}
        </motion.p>
      </div>
    </section>
  );
}
