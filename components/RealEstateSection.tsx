"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const R2_BASE = "https://pub-70473ebb629c4efb93b99bf2e83117da.r2.dev/MFA";

const PDF_LINKS = {
  strategic: `${R2_BASE}/3%20Projekte%20fu%CC%88r%20strategische%20Partner%20und%20Co-Developer.pdf`,
  portfolio: `${R2_BASE}/Park%20Lofts%20x%20Palmanova%20x%20Molas%20Design.pdf`,
} as const;

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

const STRATEGIC_PROJECTS = ["aregua", "encarnacion", "nuevaAsuncion"] as const;

const AVAILABLE_UNITS = ["palmanovaLasMercedes", "palmanovaVillaMorra", "molasDesign"] as const;

export function RealEstateSection() {
  const t = useTranslations("opportunity.realEstate");

  return (
    <section id="real-estate" className="py-24 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]">
              {t("label")}
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
              {t("title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[17px] text-white/60 leading-[1.8] mb-12 max-w-[700px]"
            >
              {t("subtitle")}
            </motion.p>

            {/* Strategic Development Projects ($1M+ investors) */}
            <div className="mb-16">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e] mb-8 font-semibold"
              >
                {t("strategic.label")}
              </motion.h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid md:grid-cols-3 gap-px bg-[#ededed]/5"
              >
                {STRATEGIC_PROJECTS.map((key, i) => (
                  <motion.div
                    key={key}
                    variants={fadeUp}
                    custom={i}
                    className="bg-[#0B0B0C] p-8 md:p-10 group border border-[#ededed]/5 relative overflow-hidden"
                  >
                    <h4 className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-serif text-[#ededed] leading-tight mb-4">
                      {t(`strategic.projects.${key}.title`)}
                    </h4>

                    <p className="text-[15px] text-[#ededed]/50 leading-[1.7] mb-5">
                      {t(`strategic.projects.${key}.description`)}
                    </p>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-start gap-3">
                        <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                        <span className="text-[14px] text-[#ededed]/40 leading-relaxed">
                          {t(`strategic.projects.${key}.land`)}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                        <span className="text-[14px] text-[#ededed]/40 leading-relaxed">
                          {t(`strategic.projects.${key}.investment`)}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                        <span className="text-[14px] text-[#ededed]/40 leading-relaxed">
                          {t(`strategic.projects.${key}.projection`)}
                        </span>
                      </div>
                    </div>

                    <div className="w-10 h-px bg-[#c9a96e]/20" />

                    <div className="absolute inset-0 bg-[#c9a96e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6"
              >
                <a
                  href={PDF_LINKS.strategic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#ededed]/20 text-[#ededed]/80 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#c9a96e]/60 hover:text-[#ededed] transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path d="M8 1v10m0 0l3-3m-3 3L5 8M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                  {t("strategic.downloadCta")}
                </a>
              </motion.div>
            </div>

            {/* Available Units */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]/60 mb-8 font-semibold"
              >
                {t("available.label")}
              </motion.h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid md:grid-cols-3 gap-px bg-[#ededed]/5"
              >
                {AVAILABLE_UNITS.map((key, i) => (
                  <motion.div
                    key={key}
                    variants={fadeUp}
                    custom={i}
                    className="bg-[#0B0B0C] p-8 md:p-10 group border border-[#ededed]/5 relative overflow-hidden"
                  >
                    <h4 className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-serif text-[#ededed] leading-tight mb-4">
                      {t(`available.units.${key}.title`)}
                    </h4>

                    <div className="space-y-2 mb-5">
                      <div className="flex items-start gap-3">
                        <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                        <span className="text-[14px] text-[#ededed]/50 leading-relaxed">
                          {t(`available.units.${key}.size`)}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                        <span className="text-[14px] text-[#ededed]/50 leading-relaxed">
                          {t(`available.units.${key}.units`)}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                        <span className="text-[14px] text-[#ededed]/50 leading-relaxed">
                          {t(`available.units.${key}.price`)}
                        </span>
                      </div>
                    </div>

                    <div className="w-10 h-px bg-[#c9a96e]/20 mb-4" />

                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#c9a96e]/60 font-medium">
                      {t(`available.units.${key}.status`)}
                    </span>

                    <div className="absolute inset-0 bg-[#c9a96e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6"
              >
                <a
                  href={PDF_LINKS.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#0B0B0C] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path d="M8 1v10m0 0l3-3m-3 3L5 8M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                  {t("available.downloadCta")}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
