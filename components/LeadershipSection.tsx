"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LeaderProfile {
  name: string;
  title: string;
  description: string;
  image: string;
}

const leaders: LeaderProfile[] = [
  {
    name: "Andre Justin",
    title: "President, Relaciones Internacionales S.A.",
    description: "Large Network in the European Corporate World",
    image: "/images/Andre Justin.jpg",
  },
  {
    name: "Julian Sandt",
    title: "President, Park Lofts EAS",
    description:
      "350 Studio Apartments sold and under construction. Portfolio in Paraguayan Real Estate and Financial Instruments.",
    image: "/images/Julian Sandt.JPG",
  },
  {
    name: "Sol Sandt",
    title: "CEO, Joy S.A., Industrial Production of Advertising Material",
    description: "Lecturer in Universidad Nacional de Asunción, Industrial Design.",
    image: "/images/Sol Sandt.jpeg",
  },
];

interface LeadershipSectionProps {
  label: string;
  title: string;
}

export default function LeadershipSection({ label, title }: LeadershipSectionProps) {
  return (
    <section className="py-20 md:py-32 border-t border-[#ededed]/5 bg-[#0B0B0C]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a96e]">
            {label}
          </span>
          <div className="w-16 h-px bg-[#c9a96e]/40 mt-4 mx-auto" />
          <h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-serif leading-[1.1] text-[#ededed]">
            {title}
          </h2>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0B0B0C] mb-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-serif text-[#ededed] leading-tight">
                  {leader.name}
                </h3>

                <p className="text-[13px] font-medium tracking-wide text-[#c9a96e] uppercase leading-relaxed">
                  {leader.title}
                </p>

                <p className="text-[15px] text-[#ededed]/70 leading-[1.6] pt-2">
                  {leader.description}
                </p>
              </div>

              {/* Decorative Line */}
              <motion.div
                className="h-px bg-gradient-to-r from-[#c9a96e] to-transparent mt-6 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
