"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

interface ServicesGridProps {
  services: Service[];
}

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

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      className="grid md:grid-cols-2 gap-px bg-[#ededed]/5"
    >
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="bg-[#0B0B0C] p-10 md:p-12 group transition-all duration-500 border border-[#ededed]/5 hover:border-[#c9a96e]/20 relative overflow-hidden"
        >
          {/* Number indicator */}
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]/50 font-mono">
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <h3 className="mt-5 text-[clamp(1.35rem,2.2vw,1.65rem)] font-serif text-[#ededed] leading-tight group-hover:text-[#c9a96e] transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-5 text-[14px] text-[#ededed]/60 leading-[1.75]">
            {service.description}
          </p>

          {/* Deliverables */}
          {service.deliverables.length > 0 && (
            <div className="mt-8">
              <div className="w-12 h-px bg-[#c9a96e]/30 mb-5" />
              <ul className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[13px] text-[#ededed]/50 leading-relaxed group-hover:text-[#ededed]/60 transition-colors duration-300"
                  >
                    <span className="text-[#c9a96e]/40 mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hover gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/0 via-[#c9a96e]/0 to-[#c9a96e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  );
}
