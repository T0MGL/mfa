import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
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
      "group relative overflow-hidden bg-lime-500 text-black hover:scale-105",
    secondary:
      "border-2 border-lime-500/50 text-lime-400 hover:border-lime-500 hover:bg-lime-500/10",
    ghost: "text-lime-400 hover:bg-lime-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
  };

  return (
    <motion.button
      whileHover={{ scale: variant === "primary" ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
