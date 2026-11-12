"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  MapPinned,
  Navigation,
  ShoppingBasket,
  Store,
  TrainFront,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage, type TranslationKey } from "@/lib/i18n";

const features: {
  icon: typeof TrainFront;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  {
    icon: TrainFront,
    titleKey: "why.metro.title",
    descKey: "why.metro.desc",
  },
  {
    icon: Navigation,
    titleKey: "why.access.title",
    descKey: "why.access.desc",
  },
  {
    icon: Headphones,
    titleKey: "why.customer.title",
    descKey: "why.customer.desc",
  },
  {
    icon: Store,
    titleKey: "why.environment.title",
    descKey: "why.environment.desc",
  },
  {
    icon: MapPinned,
    titleKey: "why.deira.title",
    descKey: "why.deira.desc",
  },
  {
    icon: ShoppingBasket,
    titleKey: "why.contact.title",
    descKey: "why.contact.desc",
  },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-navy py-20 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,173,96,0.14),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(23,105,170,0.25),transparent_40%)]" />
      <div className="container-premium section-pad relative">
        <SectionHeading
          light
          title={t("why.title")}
          subtitle={t("why.subtitle")}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.titleKey}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-navy-light text-gold transition group-hover:scale-110 group-hover:shadow-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {t(feature.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {t(feature.descKey)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
