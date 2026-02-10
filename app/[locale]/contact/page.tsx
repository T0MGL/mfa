"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  return (
    <main className="bg-[#0a0a0f] text-white">
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]"
          >
            {t("hero.tagline")}
          </motion.span>
          <div className="w-12 h-px bg-[#c9a96e]/40 mt-4 mb-8" />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[clamp(2rem,5vw,4rem)] font-serif leading-[1.05] max-w-[700px]"
          >
            {t("hero.title")}
          </motion.h1>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ────────────────────────────── */}
      <section className="pb-28 border-t border-white/5 pt-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[1fr_320px] gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {submitted ? (
                <div className="py-16">
                  <p className="text-[18px] font-serif text-[#c9a96e]">
                    {t("form.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                        {t("form.name")}
                      </label>
                      <input
                        {...register("name")}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-[15px] text-white placeholder-white/20 focus:border-[#c9a96e]/50 focus:outline-none transition-colors duration-300"
                      />
                      {errors.name && (
                        <p className="mt-2 text-[11px] text-red-400/70">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                        {t("form.email")}
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-[15px] text-white placeholder-white/20 focus:border-[#c9a96e]/50 focus:outline-none transition-colors duration-300"
                      />
                      {errors.email && (
                        <p className="mt-2 text-[11px] text-red-400/70">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Company + Country row */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                        {t("form.company")}
                      </label>
                      <input
                        {...register("company")}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-[15px] text-white placeholder-white/20 focus:border-[#c9a96e]/50 focus:outline-none transition-colors duration-300"
                      />
                      {errors.company && (
                        <p className="mt-2 text-[11px] text-red-400/70">{errors.company.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                        {t("form.country")}
                      </label>
                      <input
                        {...register("country")}
                        className="w-full bg-transparent border-b border-white/10 pb-3 text-[15px] text-white placeholder-white/20 focus:border-[#c9a96e]/50 focus:outline-none transition-colors duration-300"
                      />
                      {errors.country && (
                        <p className="mt-2 text-[11px] text-red-400/70">{errors.country.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                      {t("form.message")}
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-[15px] text-white placeholder-white/20 focus:border-[#c9a96e]/50 focus:outline-none transition-colors duration-300 resize-none"
                    />
                    {errors.message && (
                      <p className="mt-2 text-[11px] text-red-400/70">{errors.message.message}</p>
                    )}
                  </div>

                  {error && (
                    <p className="text-[13px] text-red-400/70">{t("form.error")}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a96e] text-[#0a0a0f] text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 rounded-sm disabled:opacity-50"
                  >
                    {isSubmitting ? "..." : t("form.submit")}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="border-l border-white/5 pl-8 hidden md:block"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]">
                {t("direct.label")}
              </span>
              <div className="w-8 h-px bg-[#c9a96e]/40 mt-3 mb-8" />



              {/* Asunción */}
              <div className="mb-10">
                <h3 className="text-[15px] font-serif text-white">
                  {t("direct.asuncion.title")}
                </h3>
                <p className="mt-1 text-[11px] text-white/30">
                  {t("direct.asuncion.role")}
                </p>
                <a
                  href={`mailto:${t("direct.asuncion.email")}`}
                  className="mt-2 block text-[13px] text-white/50 hover:text-[#c9a96e] transition-colors duration-300"
                >
                  {t("direct.asuncion.email")}
                </a>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-[11px] text-white/25 leading-relaxed">
                  {t("note")}
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}
