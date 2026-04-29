"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const R2_BASE = "https://pub-70473ebb629c4efb93b99bf2e83117da.r2.dev/MFA";

const PDF_LINKS = {
  strategic: `${R2_BASE}/3%20Projekte%20fu%CC%88r%20strategische%20Partner%20und%20Co-Developer.pdf`,
  portfolio: `${R2_BASE}/Park%20Lofts%20x%20Palmanova%20x%20Molas%20Design.pdf`,
} as const;

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const PROJECT_KEYS = ["palmanovaLasMercedes", "palmanovaVillaMorra", "molasDesign"] as const;

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <path d="M8 1v10m0 0l3-3m-3 3L5 8M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ActivePortfolio() {
  const t = useTranslations("home.portfolio");

  return (
    <section id="active-portfolio" className="py-20 md:py-28 border-t border-[#ededed]/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]">
              {t("label")}
            </span>
            <div className="w-16 h-px bg-[#c9a96e]/40 mt-4" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-[clamp(2rem,4vw,3.25rem)] font-serif leading-[1.1] text-[#ededed]"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-4 text-[17px] text-[#ededed]/50 max-w-[650px]"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-px bg-[#ededed]/5"
        >
          {PROJECT_KEYS.map((key) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="bg-[#0B0B0C] p-8 md:p-10 flex flex-col group border border-[#ededed]/5 relative overflow-hidden"
            >
              <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-serif text-[#ededed] leading-tight mb-4">
                {t(`projects.${key}.title`)}
              </h3>

              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-3">
                  <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                  <span className="text-[15px] text-[#ededed]/50 leading-relaxed">
                    {t(`projects.${key}.size`)}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                  <span className="text-[15px] text-[#ededed]/50 leading-relaxed">
                    {t(`projects.${key}.units`)}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c9a96e]/40 mt-0.5 shrink-0 text-[14px]">—</span>
                  <span className="text-[15px] text-[#ededed]/50 leading-relaxed">
                    {t(`projects.${key}.price`)}
                  </span>
                </div>
              </div>

              <div className="w-12 h-px bg-[#c9a96e]/30 mb-4" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#c9a96e]/70 font-medium">
                  {t(`projects.${key}.status`)}
                </span>
                <a
                  href={PDF_LINKS.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#ededed]/10 text-[#ededed]/50 text-[10px] tracking-[0.15em] uppercase font-medium hover:border-[#c9a96e]/50 hover:text-[#c9a96e] transition-colors duration-300 shrink-0"
                >
                  <DownloadIcon />
                  PDF
                </a>
              </div>

              <div className="absolute inset-0 bg-[#c9a96e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
