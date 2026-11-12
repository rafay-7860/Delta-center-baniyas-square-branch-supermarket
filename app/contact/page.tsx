import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Location from "@/components/Location";
import ContactPageClient from "@/components/pages/ContactPageClient";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Delta Center – Baniyas Square Branch supermarket. Call +971 4 323 9926. Located Exit 2, opposite Baniyas Metro Station, Deira, Dubai.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageClient
        image={siteConfig.images.contact}
        imageAlt="Friendly supermarket customer service counter"
      />
      <ContactForm />
      <Location />
    </>
  );
}
