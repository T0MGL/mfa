"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const R2_BASE = "https://pub-70473ebb629c4efb93b99bf2e83117da.r2.dev";
const MFA_BASE = `${R2_BASE}/MFA`;

const PDF_LINKS = {
  strategic: `${MFA_BASE}/3%20Projekte%20fu%CC%88r%20strategische%20Partner%20und%20Co-Developer.pdf`,
  portfolio: `${MFA_BASE}/Park%20Lofts%20x%20Palmanova%20x%20Molas%20Design.pdf`,
} as const;

const HERO_IMAGE = `${R2_BASE}/projects/tower/parkloftstowerlobby.jpeg`;

/**
 * Toggle this flag to enable/disable the floating button and modal.
 * Julian can set this to false to hide the feature entirely.
 */
const MODAL_ENABLED = true;

const SESSION_KEY = "mfa-modal-dismissed";
const AUTO_OPEN_DELAY_MS = 2500;

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.25 },
  },
};

const HIGHLIGHTS = ["highlight1", "highlight2", "highlight3"] as const;

export function InvestmentModal() {
  const t = useTranslations("modal");
  const [isOpen, setIsOpen] = useState(false);
  const [wasDismissed, setWasDismissed] = useState(false);

  // Auto-open on page load (once per session)
  useEffect(() => {
    if (!MODAL_ENABLED) return;
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (dismissed) {
      setWasDismissed(true);
      return;
    }
    const timer = setTimeout(() => setIsOpen(true), AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setWasDismissed(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (!MODAL_ENABLED) return null;

  return (
    <>
      {/* Floating trigger button (visible after dismissed, so users can re-open) */}
      <AnimatePresence>
        {wasDismissed && !isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(true)}
            aria-label={t("triggerLabel")}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 bg-[#c9a96e] text-[#0B0B0C] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 shadow-lg shadow-black/40"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <rect x="1" y="2" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M1 6h14" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {t("triggerText")}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#0B0B0C]/80 backdrop-blur-md"
            />

            {/* Panel */}
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label={t("dialogLabel")}
              className="relative z-10 w-full max-w-[720px] max-h-[90vh] overflow-y-auto bg-[#111012] border border-[#ededed]/8"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-[#0B0B0C]/60 backdrop-blur-sm text-[#ededed]/60 hover:text-[#ededed] transition-colors duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </button>

              {/* Hero Image */}
              <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden">
                <Image
                  src={HERO_IMAGE}
                  alt="Park Lofts Tower Lobby"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="720px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111012]" />
                <div className="absolute bottom-6 left-8 md:left-10">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]">
                    {t("label")}
                  </span>
                  <div className="w-12 h-px bg-[#c9a96e]/40 mt-3" />
                </div>
              </div>

              {/* Header */}
              <div className="px-8 md:px-10 pt-4 pb-0">
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-serif leading-[1.15] text-[#ededed]">
                  {t("title")}
                </h2>
                <p className="mt-3 text-[16px] text-[#ededed]/50 leading-[1.7] max-w-[560px]">
                  {t("description")}
                </p>
              </div>

              {/* Project Highlights */}
              <div className="px-8 md:px-10 pt-8">
                <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]/60 font-semibold mb-5">
                  {t("highlightsLabel")}
                </h3>
                <div className="space-y-4">
                  {HIGHLIGHTS.map((key) => (
                    <div key={key} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-b-0">
                      <span className="text-[#a68a5c] mt-0.5 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M7 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-[#ededed]/60 leading-relaxed">
                        {t(`highlights.${key}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Downloads */}
              <div className="p-8 md:p-10 space-y-4">
                <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]/60 font-semibold mb-5">
                  {t("documentsLabel")}
                </h3>

                {/* Portfolio PDF */}
                <a
                  href={PDF_LINKS.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 border border-[#ededed]/8 hover:border-[#c9a96e]/30 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#c9a96e]/30 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#0B0B0C] transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v10m0 0l3-3m-3 3L5 8M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[15px] text-[#ededed]/80 font-medium leading-tight">
                      {t("portfolioPdf.title")}
                    </p>
                    <p className="mt-1.5 text-[13px] text-[#ededed]/40 leading-relaxed">
                      {t("portfolioPdf.description")}
                    </p>
                  </div>
                </a>

                {/* Strategic PDF */}
                <a
                  href={PDF_LINKS.strategic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 border border-[#ededed]/8 hover:border-[#c9a96e]/30 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#c9a96e]/30 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#0B0B0C] transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v10m0 0l3-3m-3 3L5 8M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[15px] text-[#ededed]/80 font-medium leading-tight">
                      {t("strategicPdf.title")}
                    </p>
                    <p className="mt-1.5 text-[13px] text-[#ededed]/40 leading-relaxed">
                      {t("strategicPdf.description")}
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
