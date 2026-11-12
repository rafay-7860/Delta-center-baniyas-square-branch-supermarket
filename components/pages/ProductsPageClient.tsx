"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/lib/i18n";

export default function ProductsPageClient({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  const { t } = useLanguage();
  return (
    <PageHero
      title={t("page.products.hero")}
      lead={t("page.products.lead")}
      image={image}
      imageAlt={imageAlt}
    />
  );
}
