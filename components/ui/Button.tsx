import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "cta";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-all";

  const variants = {
    primary:
      "group relative overflow-hidden bg-mercosur-blue text-white hover:scale-105",
    secondary:
      "border-2 border-mercosur-blue/50 text-mercosur-blue hover:border-mercosur-blue hover:bg-mercosur-blue/10",
    ghost: "text-mercosur-green hover:bg-mercosur-green/10",
    cta: "group relative overflow-hidden bg-paraguay-red text-white hover:scale-105",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
  };

  return (
    <motion.button
      whileHover={{ scale: variant === "primary" || variant === "cta" ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      {(variant === "primary" || variant === "cta") && (
        <div className="absolute inset-0 bg-gradient-to-r from-eu-blue to-mercosur-green opacity-0 transition-opacity group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
