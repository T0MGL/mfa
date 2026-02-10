import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "elevated" | "bordered";
}

export function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const variants = {
    default: "bg-bg-elevated",
    elevated: "bg-bg-elevated shadow-lg",
    bordered: "bg-bg-elevated border border-mercosur-blue/20",
  };

  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
