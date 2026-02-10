"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  index?: number;
}

export function ServiceCard({ title, description, icon, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card variant="bordered" className="h-full transition-all hover:border-mercosur-blue hover:shadow-lg">
        {icon && <div className="mb-4 text-4xl text-mercosur-blue">{icon}</div>}
        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </Card>
    </motion.div>
  );
}
