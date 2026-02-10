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
        transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Comparison Chart Component ──────────────────────────── */
function ComparisonChart({
    country,
    value,
    note,
    numericValue,
    maxValue,
    isHighlight,
    delay,
    prefix = "",
    suffix = "",
}: {
    country: string;
    value: string;
    note: string;
    numericValue: number;
    maxValue: number;
    isHighlight: boolean;
    delay: number;
    prefix?: string;
    suffix?: string;
}) {
    const widthPercentage = Math.min((numericValue / maxValue) * 100, 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="mb-6 last:mb-0"
        >
            <div className="flex justify-between items-end mb-2">
                <span className={`text-[13px] tracking-[0.1em] uppercase ${isHighlight ? "text-[#c9a96e] font-semibold" : "text-white/60"}`}>
                    {country}
                </span>
                <span className={`text-[14px] ${isHighlight ? "text-[#c9a96e]" : "text-white/40"}`}>
                    {value}
                </span>
            </div>

            <div className="h-10 bg-white/5 relative flex items-center overflow-hidden rounded-sm">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
                    className={`h-full absolute left-0 top-0 ${isHighlight ? "bg-[#c9a96e]" : "bg-white/20"}`}
                />
                <span className={`relative z-10 pl-3 text-[11px] ${isHighlight ? "text-[#0a0a0f] font-semibold" : "text-white/50"}`}>
                    {note}
                </span>
            </div>
        </motion.div>
    );
}

export default function WhyParaguayPage() {
    const t = useTranslations("whyParaguay");
    const params = useParams();
    const locale = params.locale as string;

    const countries = ["py", "ar", "br", "uy"] as const;

    // Helper to get numeric values for charts (approximated for visualization)
    const getNumericValue = (type: 'tax' | 'labor' | 'energy' | 'climate', country: string) => {
        switch (type) {
            case 'tax':
                if (country === 'py') return 10;
                if (country === 'ar') return 30; // Avg of 25-35
                if (country === 'br') return 28; // Avg of 22-34
                if (country === 'uy') return 25;
                return 0;
            case 'labor':
                if (country === 'py') return 550;
                if (country === 'ar') return 800;
                if (country === 'br') return 900;
                if (country === 'uy') return 1200;
                return 0;
            case 'energy':
                if (country === 'py') return 0.05;
                if (country === 'ar') return 0.08;
                if (country === 'br') return 0.16;
                if (country === 'uy') return 0.25;
                return 0;
            case 'climate':
                if (country === 'py') return 160; // FGV Index
                if (country === 'ec') return 129;
                if (country === 'pe') return 122;
                if (country === 'uy') return 112;
                if (country === 'br') return 66; // Brazil is low on this list
                return 0;
            default: return 0;
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
                        className="text-[clamp(2rem,5vw,4.5rem)] font-serif leading-[1.05] max-w-[800px]"
                    >
                        {t("hero.title")}
                    </motion.h1>
                </div>
            </section>

            {/* ── OVERVIEW ──────────────────────────────────── */}
            <section className="py-20 border-t border-white/5">
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
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[17px] text-white/60 leading-[1.8] max-w-[650px]"
                        >
                            {t("overview.description")}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ── MACRO FUNDAMENTALS ────────────────────────── */}
            <section className="py-24 border-t border-white/5 bg-[#0d0d14]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("macro.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif leading-[1.1] mb-6"
                            >
                                {t("macro.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[16px] text-white/60 leading-[1.8] max-w-[700px] mb-16"
                            >
                                {t("macro.subtitle")}
                            </motion.p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
                                {(["gdp", "grade", "age", "happy", "debt"] as const).map((stat, i) => (
                                    <motion.div
                                        key={stat}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group"
                                    >
                                        <div className="text-[32px] md:text-[40px] font-serif text-[#c9a96e] mb-1">
                                            {t(`macro.stats.${stat}.value`)}
                                        </div>
                                        <div className="text-[11px] tracking-[0.1em] uppercase text-white/70 font-semibold mb-2">
                                            {t(`macro.stats.${stat}.label`)}
                                        </div>
                                        <div className="text-[12px] text-white/30 leading-snug">
                                            {t(`macro.stats.${stat}.desc`)}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Business Climate Chart */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 p-8 md:p-10 rounded-sm border border-white/5"
                            >
                                <div className="mb-10">
                                    <h3 className="text-[18px] font-serif text-white mb-2">{t("macro.climate.title")}</h3>
                                    <p className="text-[12px] uppercase tracking-[0.1em] text-white/40">{t("macro.climate.label")}</p>
                                </div>

                                <div className="max-w-[800px]">
                                    {(["py", "ec", "pe", "uy", "br"] as const).map((c, i) => (
                                        <ComparisonChart
                                            key={c}
                                            country={t(`macro.climate.items.${c}.country`)}
                                            value={getNumericValue('climate', c).toString()}
                                            note={t(`macro.climate.items.${c}.note`)}
                                            numericValue={getNumericValue('climate', c)}
                                            maxValue={180}
                                            isHighlight={c === "py"}
                                            delay={i * 0.1}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TAX COMPARISON ────────────────────────────── */}
            <section className="py-24 border-t border-white/5 bg-[#0d0d14]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("tax.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif leading-[1.1] mb-4"
                            >
                                {t("tax.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[14px] text-white/40 leading-[1.8] max-w-[600px] mb-12"
                            >
                                {t("tax.detail")}
                            </motion.p>

                            {/* Tax Chart */}
                            <div className="max-w-[800px]">
                                {countries.map((c, i) => (
                                    <ComparisonChart
                                        key={c}
                                        country={t(`tax.comparison.${c}.country`)}
                                        value={t(`tax.comparison.${c}.rate`)}
                                        note={t(`tax.comparison.${c}.note`)}
                                        numericValue={getNumericValue('tax', c)}
                                        maxValue={35}
                                        isHighlight={c === "py"}
                                        delay={i * 0.1}
                                        suffix="%"
                                    />
                                ))}
                            </div>

                            {/* Maquila highlight */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 p-8 border border-[#c9a96e]/20 bg-[#c9a96e]/5 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <span className="text-[100px] font-serif text-[#c9a96e] leading-none">1%</span>
                                </div>
                                <h3 className="text-[18px] font-serif text-[#c9a96e] relative z-10">
                                    {t("tax.maquila.title")}
                                </h3>
                                <p className="mt-4 text-[14px] text-white/60 leading-[1.7] max-w-[500px] relative z-10">
                                    {t("tax.maquila.description")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LABOR COSTS ───────────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("labor.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif leading-[1.1] mb-4"
                            >
                                {t("labor.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[14px] text-white/40 leading-[1.8] max-w-[600px] mb-12"
                            >
                                {t("labor.detail")}
                            </motion.p>

                            {/* Labor Chart */}
                            <div className="max-w-[800px]">
                                {countries.map((c, i) => (
                                    <ComparisonChart
                                        key={c}
                                        country={t(`labor.comparison.${c}.country`)}
                                        value={t(`labor.comparison.${c}.cost`)}
                                        note={t(`labor.comparison.${c}.note`)}
                                        numericValue={getNumericValue('labor', c)}
                                        maxValue={1300}
                                        isHighlight={c === "py"}
                                        delay={i * 0.1}
                                        prefix="$"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENERGY ────────────────────────────────────── */}
            <section className="py-24 border-t border-white/5 bg-[#0d0d14]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("energy.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif leading-[1.1] mb-4"
                            >
                                {t("energy.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[14px] text-white/40 leading-[1.8] max-w-[600px] mb-12"
                            >
                                {t("energy.detail")}
                            </motion.p>

                            {/* Energy Chart */}
                            <div className="max-w-[800px]">
                                {countries.map((c, i) => (
                                    <ComparisonChart
                                        key={c}
                                        country={t(`energy.comparison.${c}.country`)}
                                        value={t(`energy.comparison.${c}.cost`)}
                                        note={t(`energy.comparison.${c}.note`)}
                                        numericValue={getNumericValue('energy', c)}
                                        maxValue={0.30}
                                        isHighlight={c === "py"}
                                        delay={i * 0.1}
                                        prefix="$"
                                        suffix="/kWh"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OPERATIONAL COSTS ─────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("operational.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif leading-[1.1] mb-8"
                            >
                                {t("operational.title")}
                            </motion.h2>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={stagger}
                                className="space-y-4"
                            >
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        custom={i}
                                        className="flex items-start gap-4 py-3 border-b border-white/5"
                                    >
                                        <span className="text-[#c9a96e] mt-0.5 shrink-0">—</span>
                                        <span className="text-[14px] text-white/60 leading-relaxed">
                                            {t(`operational.items.${i}`)}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ADDITIONAL ADVANTAGES ─────────────────────── */}
            <section className="py-24 border-t border-white/5 bg-[#0d0d14]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("advantages.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="space-y-4"
                        >
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    custom={i}
                                    className="flex items-start gap-4 py-3 border-b border-white/5"
                                >
                                    <span className="text-[#c9a96e] mt-0.5 shrink-0">—</span>
                                    <span className="text-[14px] text-white/60 leading-relaxed">
                                        {t(`advantages.items.${i}`)}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── LIFESTYLE ─────────────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
                                {t("lifestyle.label")}
                            </span>
                            <div className="w-12 h-px bg-[#c9a96e]/40 mt-4" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif leading-[1.1] mb-6">
                                {t("lifestyle.title")}
                            </h2>
                            <p className="text-[16px] text-white/60 leading-[1.8] max-w-[700px]">
                                {t("lifestyle.description")}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="py-28 border-t border-white/5">
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
