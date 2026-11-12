"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n";

export default function ServicesPageClient({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  const { t } = useLanguage();
  return (
    <PageHero
      title={t("page.services.hero")}
      lead={t("page.services.lead")}
      image={image}
      imageAlt={imageAlt}
    />
  );
}
