"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";
import { getDirectionsUrl } from "@/lib/utils";

export default function Location() {
  const { t } = useLanguage();
  const directionsUrl = getDirectionsUrl(
    `${siteConfig.name} ${siteConfig.branch} Baniyas Metro Exit 2 Deira Dubai`
  );

  return (
    <section id="location" className="relative bg-mist py-20 lg:py-28">
      <div className="container-premium section-pad">
        <SectionHeading
          eyebrow={t("location.subtitle")}
          title={t("location.title")}
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[320px] overflow-hidden rounded-[28px] lg:min-h-full"
          >
            <Image
              src={siteConfig.images.location}
              alt="Dubai Deira urban area near Baniyas Square"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-gold">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[28px] border border-navy/8 bg-white p-8 shadow-premium sm:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-royal uppercase">
              {siteConfig.name}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
              {t("location.branch")}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/75">
              {t("location.landmark")}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 rounded-2xl bg-mist px-4 py-3 transition hover:bg-navy hover:text-white"
                data-cursor="hover"
              >
                <Phone className="h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs font-semibold tracking-wide uppercase opacity-70">
                    {t("location.phone")}
                  </p>
                  <p className="font-semibold">{siteConfig.phone}</p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl bg-mist px-4 py-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-charcoal/80">
                  {siteConfig.location.full}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-royal"
              >
                <Navigation className="h-4 w-4 text-gold" />
                {t("location.directions")}
              </MagneticButton>
              <MagneticButton
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-gold hover:bg-mist"
              >
                <Phone className="h-4 w-4 text-royal" />
                {t("location.call")}
              </MagneticButton>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-charcoal/55">
              {t("location.note")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
