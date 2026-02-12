"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function OpportunityPage() {
    const t = useTranslations("opportunity");
    const params = useParams();
    const locale = params.locale as string;

    const timelineKeys = ["signed", "ratification", "interim", "full"] as const;

    return (
        <main className="bg-background text-heading">
            {/* ── HERO ──────────────────────────────────────── */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-label text-gold-accent"
                    >
                        {t("hero.tagline")}
                    </motion.span>
                    <div className="gold-line mt-4 mb-8" />
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-hero font-serif max-w-[900px]"
                    >
                        {t("hero.title")}
                    </motion.h1>
                </div>
            </section>

            {/* ── OVERVIEW ──────────────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-label text-gold-accent">
                                {t("overview.label")}
                            </span>
                            <div className="gold-line mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-heading font-serif"
                            >
                                {t("overview.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="mt-6 text-body max-w-[650px]"
                            >
                                {t("overview.description")}
                            </motion.p>

                            {/* Key points */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={stagger}
                                className="mt-10 space-y-4"
                            >
                                {(["size", "tariffs", "timeline", "scope"] as const).map((key, i) => (
                                    <motion.div
                                        key={key}
                                        variants={fadeUp}
                                        custom={i}
                                        className="flex items-start gap-4 py-3 border-b border-white/5"
                                    >
                                        <span className="text-gold-line mt-0.5 shrink-0">—</span>
                                        <span className="text-list leading-relaxed">
                                            {t(`overview.points.${key}`)}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES ──────────────────────────────────── */}
            <section className="py-24 border-t border-white/5 bg-[#0d0d14]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-label text-gold-accent">
                                {t("services.label")}
                            </span>
                            <div className="gold-line mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-heading font-serif mb-12"
                            >
                                {t("services.title")}
                            </motion.h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {(["matchmaking", "entry", "invest", "trade", "advisory", "price", "translation", "models", "invest_consult", "driver", "insider"] as const).map((key, i) => (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/5 p-8 border border-white/5 hover:border-gold-accent/30 transition-colors duration-300 group"
                                    >
                                        <h3 className="text-[16px] font-serif text-gold-accent mb-3 group-hover:text-heading transition-colors duration-300">
                                            {t(`services.items.${key}.title`)}
                                        </h3>
                                        <p className="text-list leading-relaxed">
                                            {t(`services.items.${key}.desc`)}
                                        </p>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-gold-line/10 p-8 border border-gold-line/20 md:col-span-2 w-full"
                                >
                                    <h3 className="text-[16px] font-serif text-heading mb-3">
                                        {t("services.visit.title")}
                                    </h3>
                                    <p className="text-list italic leading-relaxed">
                                        "{t("services.visit.desc")}"
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BENEFITS ──────────────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-label text-gold-accent">
                                {t("benefits.label")}
                            </span>
                            <div className="gold-line mt-4" />
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-px bg-white/5">
                            {/* EU Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0d0d14] p-8"
                            >
                                <h3 className="text-[18px] font-serif text-heading mb-6">
                                    {t("benefits.eu.title")}
                                </h3>
                                <ul className="space-y-4">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-gold-line mt-0.5 shrink-0">—</span>
                                            <span className="text-[13px] text-secondary leading-[1.6]">
                                                {t(`benefits.eu.items.${i}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Mercosur Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="bg-[#0d0d14] p-8"
                            >
                                <h3 className="text-[18px] font-serif text-heading mb-6">
                                    {t("benefits.mercosur.title")}
                                </h3>
                                <ul className="space-y-4">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-gold-line mt-0.5 shrink-0">—</span>
                                            <span className="text-[13px] text-secondary leading-[1.6]">
                                                {t(`benefits.mercosur.items.${i}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ──────────────────────────────────── */}
            <section className="py-24 border-t border-white/5 bg-[#0d0d14]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-label text-gold-accent">
                                {t("timeline.label")}
                            </span>
                            <div className="gold-line mt-4" />
                        </motion.div>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={stagger}
                                className="space-y-0"
                            >
                                {timelineKeys.map((key, i) => (
                                    <motion.div
                                        key={key}
                                        variants={fadeUp}
                                        custom={i}
                                        className="relative pl-8 py-8 border-b border-white/5 last:border-b-0"
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-0 top-10 w-2 h-2 -translate-x-[3.5px] rounded-full bg-gold-accent" />
                                        <span className="text-[12px] tracking-[0.15em] uppercase text-gold-accent font-mono">
                                            {t(`timeline.items.${key}.date`)}
                                        </span>
                                        <p className="mt-2 text-body leading-relaxed">
                                            {t(`timeline.items.${key}.event`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="py-28 bg-[#0d0d14] border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[clamp(2rem,4vw,3.5rem)] font-serif leading-[1.05]"
                    >
                        {t("cta.title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="mt-4 text-[15px] text-white/40 max-w-[500px] mx-auto"
                    >
                        {t("cta.description")}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-10"
                    >
                        <Link
                            href={`/${locale}/contact`}
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a96e] text-[#0a0a0f] text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 rounded-sm"
                        >
                            {t("cta.button")}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
