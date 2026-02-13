"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

export default function AboutPage() {
    const t = useTranslations("about");

    return (
        <main className="bg-[#0a0a0f] text-white">
            {/* ── HERO ──────────────────────────────────────── */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-[11px] tracking-[0.25em] uppercase text-[#84cc16]"
                    >
                        {t("hero.tagline")}
                    </motion.span>
                    <div className="w-12 h-px bg-[#84cc16]/40 mt-4 mb-8" />
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

            {/* ── MISSION ───────────────────────────────────── */}
            <section className="py-20 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#84cc16]">
                                {t("mission.label")}
                            </span>
                            <div className="w-12 h-px bg-[#84cc16]/40 mt-4" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="text-[17px] text-white/60 leading-[1.8] max-w-[650px]"
                        >
                            {t("mission.text")}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ── VISION ────────────────────────────────────── */}
            <section className="py-20 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#84cc16]">
                                {t("vision.label")}
                            </span>
                            <div className="w-12 h-px bg-[#84cc16]/40 mt-4" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="text-[17px] text-white/60 leading-[1.8] max-w-[650px]"
                        >
                            {t("vision.text")}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ── VALUES ────────────────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#84cc16]">
                                {t("values.label")}
                            </span>
                            <div className="w-12 h-px bg-[#84cc16]/40 mt-4" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid sm:grid-cols-2 gap-px bg-white/5"
                        >
                            {(["expertise", "trust", "efficiency", "local"] as const).map((key, i) => (
                                <motion.div
                                    key={key}
                                    variants={fadeUp}
                                    custom={i}
                                    className="bg-[#0a0a0f] p-8"
                                >
                                    <h3 className="text-[16px] font-serif text-white">
                                        {t(`values.items.${key}.title`)}
                                    </h3>
                                    <p className="mt-3 text-[13px] text-white/40 leading-[1.7]">
                                        {t(`values.items.${key}.description`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── HISTORY ───────────────────────────────────── */}
            <section className="py-20 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#84cc16]">
                                {t("history.label")}
                            </span>
                            <div className="w-12 h-px bg-[#84cc16]/40 mt-4" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="text-[17px] text-white/60 leading-[1.8] max-w-[650px]"
                        >
                            {t("history.text")}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ── TEAM ──────────────────────────────────────── */}
            <section className="py-24 border-t border-white/5 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#84cc16]">
                                {t("team.label")}
                            </span>
                            <div className="w-12 h-px bg-[#84cc16]/40 mt-4" />
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                            {/* Sol Sandt */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0, duration: 0.7 }}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6">
                                    <Image
                                        src="/images/Sol Sandt.jpeg"
                                        alt="Sol Sandt"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <h3 className="text-[24px] font-serif text-white">{t("team.members.sol.name")}</h3>
                                <p className="mt-2 text-[11px] tracking-[0.15em] uppercase text-[#84cc16]/70 leading-relaxed">
                                    {t("team.members.sol.role")}
                                </p>
                                <p className="mt-4 text-[14px] text-white/40 leading-[1.7]">
                                    {t("team.members.sol.bio")}
                                </p>
                            </motion.div>

                            {/* Andre Justin */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15, duration: 0.7 }}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6">
                                    <Image
                                        src="/images/Andre Justin.jpg"
                                        alt="Andre Justin"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <h3 className="text-[24px] font-serif text-white">{t("team.members.andre.name")}</h3>
                                <p className="mt-2 text-[11px] tracking-[0.15em] uppercase text-[#84cc16]/70 leading-relaxed">
                                    {t("team.members.andre.role")}
                                </p>
                                <p className="mt-4 text-[14px] text-white/40 leading-[1.7]">
                                    {t("team.members.andre.bio")}
                                </p>
                            </motion.div>

                            {/* Julian Sandt */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6">
                                    <Image
                                        src="/images/Julian Sandt.JPG"
                                        alt="Julian Sandt"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <h3 className="text-[24px] font-serif text-white">{t("team.members.julian.name")}</h3>
                                <p className="mt-2 text-[11px] tracking-[0.15em] uppercase text-[#84cc16]/70 leading-relaxed">
                                    {t("team.members.julian.role")}
                                </p>
                                <p className="mt-4 text-[14px] text-white/40 leading-[1.7]">
                                    {t("team.members.julian.bio")}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DUAL PRESENCE ─────────────────────────────── */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] tracking-[0.25em] uppercase text-[#84cc16]">
                                {t("presence.label")}
                            </span>
                            <div className="w-12 h-px bg-[#84cc16]/40 mt-4" />
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-px bg-white/5">
                            {(["vienna", "asuncion"] as const).map((office, i) => (
                                <motion.div
                                    key={office}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.7 }}
                                    className="bg-[#0a0a0f] p-8"
                                >
                                    <h3 className="text-[20px] font-serif text-white">
                                        {t(`presence.${office}.title`)}
                                    </h3>
                                    <p className="mt-2 text-[12px] tracking-[0.15em] uppercase text-[#84cc16]/70">
                                        {t(`presence.${office}.role`)}
                                    </p>
                                    <p className="mt-4 text-[14px] text-white/40 leading-[1.7]">
                                        {t(`presence.${office}.description`)}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
