"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
            light ? "text-gold" : "text-royal"
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/75" : "text-charcoal/70"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
