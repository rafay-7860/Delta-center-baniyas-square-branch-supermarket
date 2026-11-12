"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n";

export default function ContactPageClient({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  const { t } = useLanguage();
  return (
    <PageHero
      title={t("page.contact.hero")}
      lead={t("page.contact.lead")}
      image={image}
      imageAlt={imageAlt}
    />
  );
}
