"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n";

export default function AboutPageClient({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  const { t } = useLanguage();
  return (
    <PageHero
      title={t("page.about.hero")}
      lead={t("page.about.lead")}
      image={image}
      imageAlt={imageAlt}
    />
  );
}
