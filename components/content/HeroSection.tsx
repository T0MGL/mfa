"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Button } from "../ui/Button";
import { PageContainer } from "../layout/PageContainer";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  backgroundVariant?: "gradient" | "image";
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundVariant = "gradient",
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      {backgroundVariant === "gradient" ? (
        <div className="absolute inset-0 bg-gradient-to-br from-eu-blue via-bg-dark to-mercosur-green opacity-20" />
      ) : backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : null}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,153,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <PageContainer className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 text-xl text-text-secondary md:text-2xl"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {ctaPrimary && (
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => (window.location.href = ctaPrimary.href)}
                >
                  {ctaPrimary.text}
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = ctaSecondary.href)}
                >
                  {ctaSecondary.text}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </PageContainer>
    </section>
  );
}
