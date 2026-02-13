"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const SUN_IMAGES = [
  "/images/Sol Sandt.jpeg",
  // Add more sun images here if available
];

interface HeroSunSliderProps {
  headline: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  primaryHref: string;
  secondaryHref: string;
}

export default function HeroSunSlider({
  headline,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  primaryHref,
  secondaryHref,
}: HeroSunSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const params = useParams();
  const locale = params.locale as string;

  const nextSlide = useCallback(() => {
    if (isTransitioning || SUN_IMAGES.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % SUN_IMAGES.length);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || SUN_IMAGES.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + SUN_IMAGES.length) % SUN_IMAGES.length);
  }, [isTransitioning]);

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (SUN_IMAGES.length <= 1) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          onAnimationComplete={() => setIsTransitioning(false)}
          className="absolute inset-0 z-0"
        >
          <Image
            src={SUN_IMAGES[currentIndex]}
            alt="Mercosur First Agency"
            fill
            priority={currentIndex === 0}
            className="object-cover"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/85 via-[#0B0B0C]/75 to-[#0B0B0C]/90 z-10" />

      {/* Navigation arrows (only show if multiple images) */}
      {SUN_IMAGES.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-[#c9a96e]/60 hover:bg-[#c9a96e]/10 transition-all duration-300 backdrop-blur-sm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/70">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-[#c9a96e]/60 hover:bg-[#c9a96e]/10 transition-all duration-300 backdrop-blur-sm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/70">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 py-32 text-center">
        {/* MFA Logo placeholder - replace with actual logo when available */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-serif tracking-wide text-[#c9a96e]">
            MERCOSUR FIRST AGENCY
          </h2>
          <div className="w-24 h-px bg-[#c9a96e]/40 mx-auto mt-4" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-serif tracking-[-0.02em] text-[#ededed] max-w-[1000px] mx-auto"
        >
          {headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-[clamp(1.1rem,1.8vw,1.35rem)] text-[#ededed]/75 font-light max-w-[800px] mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a96e] text-[#0B0B0C] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300"
          >
            {ctaPrimary}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center px-10 py-4 border border-[#ededed]/30 text-[#ededed]/90 text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#c9a96e]/60 hover:text-[#ededed] transition-all duration-300 group backdrop-blur-sm"
          >
            {ctaSecondary}
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Slide indicators */}
        {SUN_IMAGES.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex gap-2 justify-center"
          >
            {SUN_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isTransitioning || idx === currentIndex) return;
                  setIsTransitioning(true);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-[#c9a96e] w-8" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
