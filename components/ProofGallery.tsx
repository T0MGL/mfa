"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProofItem {
  image: string;
  captionEN: string;
  captionES: string;
  alt: string;
}

interface ProofGalleryProps {
  items: ProofItem[];
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ProofGallery({ items }: ProofGalleryProps) {
  const [language, setLanguage] = useState<"en" | "es">("en");

  return (
    <div>
      {/* Language toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex items-center gap-1 p-1 bg-[#15151a] border border-[#ededed]/10 rounded-sm">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
              language === "en"
                ? "bg-[#c9a96e] text-[#0B0B0C]"
                : "text-[#ededed]/50 hover:text-[#ededed]/80"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("es")}
            className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
              language === "es"
                ? "bg-[#c9a96e] text-[#0B0B0C]"
                : "text-[#ededed]/50 hover:text-[#ededed]/80"
            }`}
          >
            ES
          </button>
        </div>
      </motion.div>

      {/* Gallery grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group relative bg-[#15151a] border border-[#ededed]/5 overflow-hidden hover:border-[#c9a96e]/20 transition-colors duration-500"
          >
            {/* Image */}
            <div className="relative w-full min-h-[280px] overflow-hidden bg-[#0B0B0C]">
              <Image
                src={item.image}
                alt={item.alt}
                width={800}
                height={600}
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Caption */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={language}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[13px] text-[#ededed]/60 leading-[1.6]"
                >
                  {language === "en" ? item.captionEN : item.captionES}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
