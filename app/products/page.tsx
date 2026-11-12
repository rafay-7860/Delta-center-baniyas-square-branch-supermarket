import type { Metadata } from "next";
import Categories from "@/components/Categories";
import ContactForm from "@/components/ContactForm";
import Products from "@/components/Products";
import ProductsPageClient from "@/components/pages/ProductsPageClient";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse grocery, electronics, crockery, household essentials and more at Delta Center – Baniyas Square Branch supermarket in Deira, Dubai.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsPageClient
        image={siteConfig.images.products}
        imageAlt="Fresh grocery products and supermarket shelves"
      />
      <Categories />
      <Products />
      <ContactForm />
    </>
  );
}
