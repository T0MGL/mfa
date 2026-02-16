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
                        className="text-[clamp(2rem,5vw,4.5rem)] font-serif leading-[1.05] max-w-[900px]"
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
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("overview.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(2.25rem,4vw,3.75rem)] font-serif leading-[1.12] text-[#eae7e0]"
                            >
                                {t("overview.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="mt-6 text-[17px] text-white/60 leading-[1.8] max-w-[650px]"
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
                                        <span className="text-[#a68a5c] mt-0.5 shrink-0">—</span>
                                        <span className="text-[16px] text-white/60 leading-relaxed">
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
            <section className="py-24 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("services.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(2.25rem,4vw,3.75rem)] font-serif leading-[1.12] text-[#eae7e0] mb-4"
                            >
                                {t("services.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[17px] text-white/60 leading-[1.8] mb-12 max-w-[700px]"
                            >
                                {t("services.subtitle")}
                            </motion.p>

                            {/* Core Services */}
                            <div className="mb-20">
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e] mb-8 font-semibold"
                                >
                                    {t("services.core.label")}
                                </motion.h3>
                                <div className="grid md:grid-cols-2 gap-px bg-[#ededed]/5">
                                    {(["matchmaking", "marketEntry", "investment", "trade"] as const).map((key, i) => (
                                        <motion.div
                                            key={key}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08, duration: 0.6 }}
                                            className="bg-[#0B0B0C] p-10 md:p-12 group border border-[#ededed]/5 relative overflow-hidden"
                                        >
                                            {/* Title */}
                                            <h4 className="text-[clamp(1.35rem,2.2vw,1.65rem)] font-serif text-[#ededed] leading-tight mb-5">
                                                {t(`services.core.items.${key}.title`)}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-[17px] text-[#ededed]/70 leading-[1.7]">
                                                {t(`services.core.items.${key}.desc`)}
                                            </p>

                                            {/* Subtle hover effect */}
                                            <div className="absolute inset-0 bg-[#c9a96e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Services */}
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]/60 mb-8 font-semibold"
                                >
                                    {t("services.additional.label")}
                                </motion.h3>
                                <div className="grid md:grid-cols-2 gap-px bg-[#ededed]/5">
                                    {(["advisory", "translations", "intelligence", "relocation", "concierge"] as const).map((key, i) => (
                                        <motion.div
                                            key={key}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.06, duration: 0.6 }}
                                            className="bg-[#0B0B0C] p-8 md:p-10 group border border-[#ededed]/5 relative overflow-hidden"
                                        >
                                            {/* Title */}
                                            <h4 className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-serif text-[#ededed] leading-tight mb-4">
                                                {t(`services.additional.items.${key}.title`)}
                                            </h4>

                                            {/* Description */}
                                            <p className="text-[16px] text-[#ededed]/60 leading-[1.7]">
                                                {t(`services.additional.items.${key}.desc`)}
                                            </p>

                                            {/* Subtle hover effect */}
                                            <div className="absolute inset-0 bg-[#c9a96e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        </motion.div>
                                    ))}
                                </div>
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
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("benefits.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-px bg-white/5">
                            {/* EU Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0a0a0a] p-8"
                            >
                                <h3 className="text-[18px] font-serif text-white mb-6">
                                    {t("benefits.eu.title")}
                                </h3>
                                <ul className="space-y-4">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#a68a5c] mt-0.5 shrink-0">—</span>
                                            <span className="text-[16px] text-white/40 leading-[1.6]">
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
                                className="bg-[#0a0a0a] p-8"
                            >
                                <h3 className="text-[18px] font-serif text-white mb-6">
                                    {t("benefits.mercosur.title")}
                                </h3>
                                <ul className="space-y-4">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#a68a5c] mt-0.5 shrink-0">—</span>
                                            <span className="text-[16px] text-white/40 leading-[1.6]">
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
            <section className="py-24 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("timeline.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
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
                                        <span className="text-[12px] tracking-[0.15em] uppercase text-[#c9a96e] font-mono">
                                            {t(`timeline.items.${key}.date`)}
                                        </span>
                                        <p className="mt-2 text-[17px] text-white/60 leading-relaxed">
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
            <section className="py-28 bg-[#0a0a0a] border-t border-white/5">
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
                        className="mt-4 text-[18px] text-white/40 max-w-[500px] mx-auto"
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
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a96e] text-[#0a0a0f] text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b680] transition-colors duration-300 rounded-sm"
                        >
                            {t("cta.button")}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
