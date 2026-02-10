"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

/* ── Animated counter ─────────────────────────────────────── */
function AnimatedValue({ value, duration = 2000 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    // Extract numeric part
    const numeric = value.replace(/[^0-9.]/g, "");
    const target = parseFloat(numeric);
    if (isNaN(target)) { setDisplay(value); return; }

    const prefix = value.match(/^[^0-9]*/)?.[0] || "";
    const suffix = value.match(/[^0-9.]*$/)?.[0] || "";
    const hasDecimal = numeric.includes(".");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(
        prefix +
        (hasDecimal ? current.toFixed(2) : Math.floor(current).toString()) +
        suffix
      );
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ── Animations ───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Country flag colors for comparison bars ─────────────── */
const countryColors: Record<string, string> = {
  py: "#c9a96e",
  ar: "rgba(255,255,255,0.25)",
  br: "rgba(255,255,255,0.20)",
  uy: "rgba(255,255,255,0.15)",
};

/* ── Comparison bar component ────────────────────────────── */
function ComparisonBar({
  country,
  value,
  maxValue,
  color,
  delay,
}: {
  country: string;
  value: string;
  maxValue: number;
  color: string;
  delay: number;
}) {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const width = Math.max((numericValue / maxValue) * 100, 8);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <span className="text-[11px] tracking-[0.15em] uppercase text-white/50 w-20 shrink-0">
        {country}
      </span>
      <div className="flex-1 h-8 relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-sm flex items-center px-3"
          style={{ backgroundColor: color }}
        >
          <span className="text-[13px] font-semibold text-white whitespace-nowrap">
            {value}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   HOMEPAGE
   ══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const t = useTranslations("home");
  const params = useParams();
  const locale = params.locale as string;

  return (
    <main className="bg-[#0a0a0f] text-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Subtle gradient orb */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#c9a96e]/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#c9a96e] border border-[#c9a96e]/30 px-4 py-2 rounded-full">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-serif tracking-[-0.02em] max-w-[900px]"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 text-[clamp(1.1rem,2vw,1.5rem)] text-white/60 font-light max-w-[700px] leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>



          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a96e] text-[#0a0a0f] text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 rounded-sm"
            >
              {t("hero.ctaPrimary")}
            </Link>
            <Link
              href={`/${locale}/opportunity`}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/80 text-[12px] tracking-[0.2em] uppercase font-medium hover:border-white/40 hover:text-white transition-all duration-300 rounded-sm group"
            >
              {t("hero.ctaSecondary")}
              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4"
          >
            {(["exports", "consumers", "tariffs", "tax"] as const).map((key, i) => (
              <motion.div
                key={key}
                variants={fadeUp}
                custom={i}
                className="py-16 md:py-20 px-4 md:px-8 border-r border-white/5 last:border-r-0 text-center md:text-left"
              >
                <div className="text-[clamp(2rem,4vw,3.5rem)] font-serif text-[#c9a96e] leading-none">
                  <AnimatedValue value={t(`stats.items.${key}.value`)} />
                </div>
                <p className="mt-3 text-[11px] tracking-[0.15em] uppercase text-white/40 leading-relaxed">
                  {t(`stats.items.${key}.label`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── THE OPPORTUNITY TEASER ───────────────────────── */}
      <section className="py-28 md:py-36 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                {t("opportunity.label")}
              </span>
              <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
            </motion.div>

            {/* Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-[clamp(1.8rem,4vw,3rem)] font-serif leading-[1.1] max-w-[700px]"
              >
                {t("opportunity.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-6 text-[15px] text-white/50 leading-[1.8] max-w-[650px]"
              >
                {t("opportunity.description")}
              </motion.p>

              {/* Key points */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="mt-10 space-y-4"
              >
                {(["trade", "investment", "access", "timeline"] as const).map((key, i) => (
                  <motion.div
                    key={key}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-start gap-4 py-3 border-b border-white/5"
                  >
                    <span className="text-[#c9a96e] mt-0.5">—</span>
                    <span className="text-[14px] text-white/60 leading-relaxed">
                      {t(`opportunity.points.${key}`)}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-10"
              >
                <Link
                  href={`/${locale}/opportunity`}
                  className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-[#c9a96e] hover:text-[#d4b578] transition-colors duration-300 group"
                >
                  {t("opportunity.cta")}
                  <span className="ml-3 inline-block w-8 h-px bg-[#c9a96e]/40 group-hover:w-12 transition-all duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PARAGUAY — COMPARISON DATA ──────────────── */}
      <section className="py-28 md:py-36 bg-[#0d0d14] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                {t("whyParaguay.label")}
              </span>
              <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
            </motion.div>

            {/* Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-[clamp(1.8rem,4vw,3rem)] font-serif leading-[1.1] max-w-[700px]"
              >
                {t("whyParaguay.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-4 text-[15px] text-white/40 max-w-[600px]"
              >
                {t("whyParaguay.subtitle")}
              </motion.p>

              {/* Comparison tables */}
              <div className="mt-12 space-y-12">
                {/* Tax comparison */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-4"
                  >
                    {t("whyParaguay.comparisons.tax.label")}
                  </motion.h3>
                  <div className="space-y-2">
                    {(["py", "ar", "br", "uy"] as const).map((country, i) => {
                      const labels: Record<string, string> = { py: "Paraguay", ar: "Argentina", br: "Brazil", uy: "Uruguay" };
                      return (
                        <ComparisonBar
                          key={country}
                          country={labels[country]}
                          value={t(`whyParaguay.comparisons.tax.${country}`)}
                          maxValue={35}
                          color={countryColors[country]}
                          delay={i * 0.1}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Energy comparison */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-4"
                  >
                    {t("whyParaguay.comparisons.energy.label")}
                  </motion.h3>
                  <div className="space-y-2">
                    {(["py", "ar", "br", "uy"] as const).map((country, i) => {
                      const labels: Record<string, string> = { py: "Paraguay", ar: "Argentina", br: "Brazil", uy: "Uruguay" };
                      return (
                        <ComparisonBar
                          key={country}
                          country={labels[country]}
                          value={t(`whyParaguay.comparisons.energy.${country}`)}
                          maxValue={0.25}
                          color={countryColors[country]}
                          delay={i * 0.1}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Labor comparison */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-4"
                  >
                    {t("whyParaguay.comparisons.labor.label")}
                  </motion.h3>
                  <div className="space-y-2">
                    {(["py", "ar", "br", "uy"] as const).map((country, i) => {
                      const labels: Record<string, string> = { py: "Paraguay", ar: "Argentina", br: "Brazil", uy: "Uruguay" };
                      return (
                        <ComparisonBar
                          key={country}
                          country={labels[country]}
                          value={t(`whyParaguay.comparisons.labor.${country}`)}
                          maxValue={1200}
                          color={countryColors[country]}
                          delay={i * 0.1}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12"
              >
                <Link
                  href={`/${locale}/why-paraguay`}
                  className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-[#c9a96e] hover:text-[#d4b578] transition-colors duration-300 group"
                >
                  {t("whyParaguay.cta")}
                  <span className="ml-3 inline-block w-8 h-px bg-[#c9a96e]/40 group-hover:w-12 transition-all duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────── */}
      <section className="py-28 md:py-36 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                {t("services.label")}
              </span>
              <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
            </motion.div>

            {/* Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-[clamp(1.8rem,4vw,3rem)] font-serif leading-[1.1]"
              >
                {t("services.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-4 text-[15px] text-white/40 max-w-[600px]"
              >
                {t("services.description")}
              </motion.p>

              {/* Service items */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="mt-12 grid sm:grid-cols-2 gap-px bg-white/5"
              >
                {(["matchmaking", "investment", "market", "trade"] as const).map((key, i) => (
                  <motion.div
                    key={key}
                    variants={fadeUp}
                    custom={i}
                    className="bg-[#0a0a0f] p-8 group hover:bg-[#0d0d14] transition-colors duration-500"
                  >
                    <span className="text-[#c9a96e]/40 text-[12px] tracking-[0.15em] font-mono">
                      {t(`services.items.${key}.number`)}
                    </span>
                    <h3 className="mt-3 text-[18px] font-serif text-white group-hover:text-[#c9a96e] transition-colors duration-300">
                      {t(`services.items.${key}.title`)}
                    </h3>
                    <p className="mt-3 text-[13px] text-white/40 leading-[1.7]">
                      {t(`services.items.${key}.description`)}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-[#0d0d14] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,5vw,4rem)] font-serif leading-[1.05]"
          >
            {t("closing.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-[15px] text-white/40 max-w-[500px] mx-auto"
          >
            {t("closing.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10"
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a96e] text-[#0a0a0f] text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 rounded-sm"
            >
              {t("closing.cta")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
