"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import MagneticButton from "@/components/MagneticButton";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [draft, setDraft] = useState("");

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = t("contact.required");
    if (!form.phone.trim() || form.phone.trim().length < 7)
      next.phone = t("contact.required");
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = t("contact.error");
    if (!form.subject.trim()) next.subject = t("contact.required");
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = t("contact.required");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    const body = [
      `Inquiry for ${siteConfig.fullName}`,
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Subject: ${form.subject}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    setDraft(body);
    setStatus("success");
    setForm(initial);
  };

  const fieldClass = (hasError?: string) =>
    cn(
      "w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-charcoal transition placeholder:text-charcoal/40 focus:border-royal focus:ring-2 focus:ring-royal/20",
      hasError ? "border-red-400" : "border-navy/10"
    );

  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28">
      <div className="container-premium section-pad">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-4"
          >
            <div className="rounded-3xl border border-navy/8 bg-mist p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-royal uppercase">
                {t("contact.branch")}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-navy">
                {siteConfig.fullName}
              </p>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="flex items-start gap-3 rounded-3xl border border-navy/8 bg-mist p-6 transition hover:border-gold/40 hover:bg-white hover:shadow-premium"
              data-cursor="hover"
            >
              <Phone className="mt-1 h-5 w-5 text-gold" />
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-royal uppercase">
                  {t("contact.phone")}
                </p>
                <p className="mt-2 font-semibold text-navy">{siteConfig.phone}</p>
              </div>
            </a>
            <div className="rounded-3xl border border-navy/8 bg-navy p-6 text-white">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
                    {t("contact.location")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {siteConfig.location.full}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[28px] border border-navy/8 bg-mist/70 p-6 shadow-glass sm:p-8 lg:col-span-8"
          >
            <h3 className="font-display text-2xl font-semibold text-navy">
              {t("contact.formTitle")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
              {t("contact.formNote")}
            </p>

            <form onSubmit={onSubmit} className="mt-7 grid gap-4 sm:grid-cols-2" noValidate>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-xs font-semibold tracking-wide text-navy uppercase">
                  {t("contact.fullName")} *
                </label>
                <input
                  value={form.fullName}
                  onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                  className={fieldClass(errors.fullName)}
                  autoComplete="name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-xs font-semibold tracking-wide text-navy uppercase">
                  {t("contact.phoneField")} *
                </label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={fieldClass(errors.phone)}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-xs font-semibold tracking-wide text-navy uppercase">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={fieldClass(errors.email)}
                  autoComplete="email"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-xs font-semibold tracking-wide text-navy uppercase">
                  {t("contact.subject")} *
                </label>
                <input
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className={fieldClass(errors.subject)}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold tracking-wide text-navy uppercase">
                  {t("contact.message")} *
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={5}
                  className={cn(fieldClass(errors.message), "resize-y")}
                />
              </div>

              <div className="sm:col-span-2">
                <MagneticButton
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-royal sm:w-auto"
                >
                  <Send className="h-4 w-4 text-gold" />
                  {t("contact.submit")}
                </MagneticButton>
              </div>
            </form>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <p>{t("contact.success")}</p>
                      {draft && (
                        <pre className="mt-3 max-h-40 overflow-auto rounded-xl bg-white/80 p-3 text-xs whitespace-pre-wrap text-charcoal/80">
                          {draft}
                        </pre>
                      )}
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-3 inline-flex font-semibold text-navy underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  {t("contact.error")}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
