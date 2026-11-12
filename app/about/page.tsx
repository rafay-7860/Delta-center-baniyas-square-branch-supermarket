import type { Metadata } from "next";
import About from "@/components/About";
import BranchInfo from "@/components/BranchInfo";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutPageClient from "@/components/pages/AboutPageClient";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Delta Center – Baniyas Square Branch supermarket in Deira, Dubai — conveniently located opposite Baniyas Metro Station at Exit 2.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutPageClient
        image={siteConfig.images.about}
        imageAlt="Supermarket interior with product aisles"
      />
      <About />
      <BranchInfo />
      <WhyChooseUs />
    </>
  );
}
