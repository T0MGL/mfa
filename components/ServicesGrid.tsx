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
  visible: { transition: { staggerChildren: 0.15 } },
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
      className="grid md:grid-cols-3 gap-px bg-[#ededed]/5"
    >
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="bg-[#0B0B0C] p-8 md:p-10 group hover:bg-[#15151a] transition-colors duration-500 border border-[#ededed]/5"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e]/50 font-mono">
            {String(i + 1).padStart(2, "0")}
          </span>

          <h3 className="mt-4 text-[clamp(1.25rem,2vw,1.5rem)] font-serif text-[#ededed] leading-tight group-hover:text-[#c9a96e] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="mt-4 text-[14px] text-[#ededed]/60 leading-[1.7]">
            {service.description}
          </p>

          {service.deliverables.length > 0 && (
            <ul className="mt-6 space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[12px] text-[#ededed]/45 leading-relaxed">
                  <span className="text-[#c9a96e]/40 mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
