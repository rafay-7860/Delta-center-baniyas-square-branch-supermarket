"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({ title, lead, image, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      <div className="container-premium section-pad relative max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {lead}
        </motion.p>
      </div>
    </section>
  );
}
