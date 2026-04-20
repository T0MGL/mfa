"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const R2_BASE = "https://pub-70473ebb629c4efb93b99bf2e83117da.r2.dev";
const MFA_BASE = `${R2_BASE}/MFA`;

type ProjectKey = "portfolio" | "strategic" | "parkLoftsLosArboles";

type Project = {
  key: ProjectKey;
  pdf: string;
  hero: string;
  heroAlt: string;
  badge?: string;
};

const PROJECTS: Project[] = [
  {
    key: "portfolio",
    pdf: `${MFA_BASE}/Park%20Lofts%20x%20Palmanova%20x%20Molas%20Design.pdf`,
    hero: `${R2_BASE}/projects/tower/parkloftstowerlobby.jpeg`,
    heroAlt: "Park Lofts x Palmanova x Molas Design",
  },
  {
    key: "strategic",
    pdf: `${MFA_BASE}/3%20Projekte%20fu%CC%88r%20strategische%20Partner%20und%20Co-Developer.pdf`,
    hero: `${R2_BASE}/projects/tower/parkloftstowerlobby.jpeg`,
    heroAlt: "Strategic Projects for Partners and Co-Developers",
  },
  {
    key: "parkLoftsLosArboles",
    pdf: `${MFA_BASE}/Broschu%CC%88re%20Park%20Lofts%20Los%20Arboles%20(DE)-comp.pdf`,
    hero: `${R2_BASE}/projects/tower/parkloftstowerlobby.jpeg`,
    heroAlt: "Park Lofts Los Arboles",
    badge: "DE",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function ProyectosPage() {
  const t = useTranslations("projects");
  const params = useParams();
  const locale = params.locale as string;

  return (
    <main className="bg-[#0a0a0f] text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
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
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-[clamp(2rem,5vw,4.25rem)] font-serif leading-[1.05] max-w-[900px]"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-[17px] md:text-[18px] text-white/60 leading-[1.7] max-w-[680px]"
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 md:pb-32 border-t border-white/5 pt-16 md:pt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {PROJECTS.map((project, i) => (
              <motion.article
                key={project.key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={i}
                className="group flex flex-col bg-[#0B0B0C] border border-white/5 rounded-[28px] overflow-hidden"
              >
                {/* Hero */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.hero}
                    alt={project.heroAlt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    quality={85}
                    sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B0C]/90" />
                  {project.badge && (
                    <span className="absolute top-4 right-4 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 bg-[#0B0B0C]/70 backdrop-blur-sm text-[#c9a96e] rounded-full">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-7 md:p-8">
                  <h2 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-serif leading-[1.2] text-[#ededed]">
                    {t(`items.${project.key}.title`)}
                  </h2>
                  <p className="mt-3 text-[14.5px] text-[#ededed]/55 leading-[1.7] flex-1">
                    {t(`items.${project.key}.description`)}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#c9a96e] text-[#0B0B0C] text-[10.5px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b578] transition-colors duration-300 rounded-full"
                    >
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <path d="M8 1v10m0 0l3-3m-3 3L5 8M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {t("downloadCta")}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.85rem,3.5vw,3rem)] font-serif leading-[1.1]"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-[17px] text-white/45 max-w-[560px] mx-auto leading-[1.65]"
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
              className="inline-flex items-center justify-center px-10 py-4 bg-[#c9a96e] text-[#0a0a0f] text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-[#d4b680] transition-colors duration-300 rounded-full"
            >
              {t("cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
