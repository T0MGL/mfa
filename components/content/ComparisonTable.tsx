"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";

interface ComparisonData {
  country: string;
  value: string;
  highlight?: boolean;
}

interface ComparisonTableProps {
  title: string;
  data: ComparisonData[];
  unit?: string;
}

export function ComparisonTable({ title, data, unit = "" }: ComparisonTableProps) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-center">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <motion.div
            key={item.country}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              variant={item.highlight ? "bordered" : "default"}
              className={`text-center transition-all ${
                item.highlight
                  ? "border-2 border-mercosur-green scale-105"
                  : ""
              }`}
            >
              <div className="mb-2 text-sm font-medium text-text-secondary">
                {item.country}
              </div>
              <div
                className={`text-3xl font-bold ${
                  item.highlight ? "text-mercosur-green" : "text-mercosur-blue"
                }`}
              >
                {item.value}
                {unit && <span className="text-lg">{unit}</span>}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
