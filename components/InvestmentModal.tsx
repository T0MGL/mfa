"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "./providers/SmoothScrollProvider";

const R2_BASE = "https://pub-70473ebb629c4efb93b99bf2e83117da.r2.dev";

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

export function InvestmentModal() {
  const t = useTranslations("modal");
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const [wasDismissed, setWasDismissed] = useState(false);
  const scrollYRef = useRef(0);

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
      scrollYRef.current = window.scrollY;
      lenis.stop();
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, scrollYRef.current);
      lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.paddingRight = "";
      lenis.start();
    };
  }, [isOpen, lenis]);

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
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 bg-[#c9a96e] text-[#0B0B0C] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 shadow-lg shadow-black/40 rounded-full"
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
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
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
              className="relative z-10 w-full max-w-[520px] max-h-[88vh] overflow-y-auto overscroll-contain bg-[#111012] rounded-[28px] shadow-2xl shadow-black/60"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                aria-label="Close"
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 flex items-center justify-center bg-[#0B0B0C]/60 backdrop-blur-sm text-[#ededed]/60 hover:text-[#ededed] hover:bg-[#0B0B0C]/80 transition-colors duration-300 rounded-full"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </button>

              {/* Hero Image */}
              <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden">
                <Image
                  src={HERO_IMAGE}
                  alt="Park Lofts Tower Lobby"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="520px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111012]" />
                <div className="absolute bottom-5 left-7 md:left-8">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]">
                    {t("label")}
                  </span>
                  <div className="w-10 h-px bg-[#c9a96e]/40 mt-2.5" />
                </div>
              </div>

              {/* Header */}
              <div className="px-7 md:px-8 pt-5 pb-0">
                <h2 className="text-[clamp(1.35rem,2.6vw,1.85rem)] font-serif leading-[1.15] text-[#ededed]">
                  {t("title")}
                </h2>
                <p className="mt-2.5 text-[14px] text-[#ededed]/50 leading-[1.65]">
                  {t("description")}
                </p>
              </div>

              {/* Primary CTA */}
              <div className="px-7 md:px-8 pt-6">
                <Link
                  href={`/${locale}/proyectos`}
                  onClick={handleClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#c9a96e] text-[#0B0B0C] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 rounded-full"
                >
                  {t("viewProjectsCta")}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M2 7h10m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Tertiary: dismiss modal */}
              <div className="px-7 md:px-8 pt-4 pb-7 md:pb-8 text-center">
                <button
                  onClick={handleClose}
                  className="inline-flex items-center justify-center text-[11px] tracking-[0.18em] uppercase text-[#ededed]/40 hover:text-[#ededed]/80 transition-colors duration-300"
                >
                  {t("continueBrowsingCta")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
