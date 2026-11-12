import type { Metadata } from "next";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import ServicesPageClient from "@/components/pages/ServicesPageClient";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore financial service categories at Delta Center – Baniyas Square Branch in Deira, Dubai. Contact the branch to confirm current offerings.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageClient
        image={siteConfig.images.services}
        imageAlt="Professional financial services environment"
      />
      <Services />
      <ContactForm />
    </>
  );
}
