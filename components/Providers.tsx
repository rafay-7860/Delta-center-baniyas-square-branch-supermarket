"use client";

import type { ReactNode } from "react";
import CustomCursor from "@/components/CustomCursor";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import { LanguageProvider } from "@/lib/i18n";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
      <FloatingContact />
    </LanguageProvider>
  );
}
