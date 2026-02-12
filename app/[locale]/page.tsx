"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroSunSlider from "@/components/HeroSunSlider";
import LeadershipSection from "@/components/LeadershipSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProofGallery from "@/components/ProofGallery";

/* ── Animations ───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ══════════════════════════════════════════════════════════════
   HOMEPAGE
   ══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const t = useTranslations("home");
  const params = useParams();
  const locale = params.locale as string;

  // Services data
  const services = [
    {
      title: t("services.matchmaking.title"),
      description: t("services.matchmaking.description"),
      deliverables: t.raw("services.matchmaking.deliverables") || [],
    },
    {
      title: t("services.marketEntry.title"),
      description: t("services.marketEntry.description"),
      deliverables: t.raw("services.marketEntry.deliverables") || [],
    },
    {
      title: t("services.institutional.title"),
      description: t("services.institutional.description"),
      deliverables: t.raw("services.institutional.deliverables") || [],
    },
  ];

  // Proof gallery data with exact filenames
  const proofItems = [
    {
      image: "/images/distrubicion de poblacion.jpg",
      captionEN: "One of the few countries with a still intact demographic structure. The median age is 28, the birth rate positive. More people enter the worker force than retirements, and this for decades. The same is the case for demand for living space.",
      captionES: "Uno de los pocos países con una estructura demográfica aún intacta. La edad mediana es 28, la tasa de natalidad positiva. Más personas ingresan a la fuerza laboral que jubilaciones, y esto durante décadas. Lo mismo ocurre con la demanda de espacio habitacional.",
      alt: "Paraguay population distribution by age",
    },
    {
      image: "/images/el segundo pais mas feliz del mundo.jpg",
      captionEN: "Paraguay, the 2nd happiest country in the world (Source: Gallup).",
      captionES: "Paraguay, el segundo país más feliz del mundo (Fuente: Gallup).",
      alt: "Paraguay happiness index ranking",
    },
    {
      image: "/images/paraguay clima de negocios.jpg",
      captionEN: "Top-ranked business climate in the region (index source shown in graphic).",
      captionES: "Clima de negocios líder en la región (fuente indicada en el gráfico).",
      alt: "Paraguay business climate index",
    },
    {
      image: "/images/paraguay key role.jpg",
      captionEN: "Key regional actor in Mercosur–EU cooperation.",
      captionES: "Actor regional clave en la cooperación Mercosur–UE.",
      alt: "Paraguay's role in Mercosur-EU relations",
    },
    {
      image: "/images/paraguay la economia que mas crecio.jpg",
      captionEN: "The interesting 65-year comparison: Paraguay by far the highest growth in South America. In 1960 it was still a poor agrarian state, today an emerging market with Investment Grade. And yet still so affordable!",
      captionES: "La interesante comparación de 65 años: Paraguay con el crecimiento más alto de Sudamérica, por lejos. En 1960 era todavía un pobre estado agrario, hoy es un mercado emergente con grado de inversión. ¡Y aún así tan económico!",
      alt: "Paraguay economic growth trajectory",
    },
    {
      image: "/images/paraguay-gdp-growth-annual.png",
      captionEN: "Sustained GDP growth with macroeconomic stability (recent years shown).",
      captionES: "Crecimiento del PIB sostenido con estabilidad macroeconómica (años recientes indicados).",
      alt: "Paraguay annual GDP growth",
    },
  ];

  return (
    <main className="bg-[#0B0B0C] text-[#ededed]">
      {/* ══════════════════════════════════════════════════════
          SECTION 1: HERO with Sun Photo Slider
          ══════════════════════════════════════════════════ */}
      <HeroSunSlider
        headline={t("hero.headline")}
        subtitle={t("hero.subtitle")}
        ctaPrimary={t("hero.ctaPrimary")}
        ctaSecondary={t("hero.ctaSecondary")}
        primaryHref={`/${locale}/contact`}
        secondaryHref={`/${locale}/opportunity`}
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 2: LEADERSHIP TEAM
          ══════════════════════════════════════════════════ */}
      <LeadershipSection
        label={t("leadership.label")}
        title={t("leadership.title")}
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 3: WHO WE ARE
          ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-[#ededed]/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]">
              {t("whoWeAre.label")}
            </span>
            <div className="w-16 h-px bg-[#c9a96e]/40 mt-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[clamp(1.35rem,2.5vw,1.8rem)] font-light text-[#ededed]/80 leading-[1.5] max-w-[900px]"
          >
            {t("whoWeAre.text")}
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4: WHAT WE DO (Services)
          ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-[#ededed]/5">
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
                {t("services.label")}
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
              {t("services.title")}
            </motion.h2>
          </div>

          <ServicesGrid services={services} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5: PROOF (Data-Driven Evidence)
          ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#15151a] border-t border-[#ededed]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-center"
            >
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]">
                  {t("proof.label")}
                </span>
                <div className="w-16 h-px bg-[#c9a96e]/40 mt-4 mx-auto" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-[clamp(2rem,4vw,3.25rem)] font-serif leading-[1.1] text-[#ededed]"
            >
              {t("proof.title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 text-[15px] text-[#ededed]/50 max-w-[650px] mx-auto"
            >
              {t("proof.subtitle")}
            </motion.p>
          </div>

          <ProofGallery items={proofItems} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6: INSIGHTS (Third-party Articles)
          ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-t border-[#ededed]/5">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#ededed]/40">
              {t("insights.label")}
            </span>
            <div className="w-12 h-px bg-[#ededed]/10 mt-4 mx-auto" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-[clamp(1.5rem,3vw,2rem)] font-serif leading-[1.15] text-[#ededed]/70 text-center mb-12"
          >
            {t("insights.title")}
          </motion.h2>

          {/* Placeholder for articles - can be populated via CMS or props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="space-y-6"
          >
            <div className="p-6 border border-[#ededed]/5 bg-[#15151a]/30">
              <p className="text-[13px] text-[#ededed]/40 leading-relaxed text-center">
                {t("insights.placeholder")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLOSING CTA
          ══════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-[#15151a] border-t border-[#ededed]/5">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-serif leading-[1.1] text-[#ededed]"
          >
            {t("closing.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-[15px] text-[#ededed]/50 max-w-[600px] mx-auto"
          >
            {t("closing.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10"
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-12 py-4 bg-[#c9a96e] text-[#0B0B0C] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300"
            >
              {t("closing.cta")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
