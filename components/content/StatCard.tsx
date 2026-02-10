"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";

interface StatCardProps {
  value: string;
  label: string;
  highlight?: boolean;
  index?: number;
}

export function StatCard({ value, label, highlight = false, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card
        variant="elevated"
        className={`text-center transition-all hover:scale-105 ${
          highlight ? "border-2 border-mercosur-green" : ""
        }`}
      >
        <div className="mb-2 text-4xl font-bold text-mercosur-blue md:text-5xl">
          {value}
        </div>
        <div className="text-sm text-text-secondary md:text-base">{label}</div>
      </Card>
    </motion.div>
  );
}
